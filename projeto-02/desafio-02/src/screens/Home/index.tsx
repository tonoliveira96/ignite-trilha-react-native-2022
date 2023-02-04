import logo from '@assets/Logo.png';
import { ButtonDefault } from '@components/ButtonDefault';
import { EmptyList } from '@components/EmptyList';
import { SubtitleDietCard, TitleDietCard } from '@components/Header/styles';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals } from '@storage/getAllMeals';
import { Plus } from 'phosphor-react-native';
import { useCallback, useState } from 'react';
import { Image, SectionList } from 'react-native';
import {
  Container,
  DietCard,
  DietStatus,
  HeaderHome,
  ImageProfile,
  Openicon,
  SectioHeader,
  SectionItem,
  SectionMealItemDivisor,
  SectionMealTime,
  SectionMealTitle
} from './styles';

export interface MealsListProps {
  date: string;
  data: Array<{
    id: string,
    time: string;
    inDiet: boolean;
    name: string;
    description: string;
  }>;
}

interface DietSummaryProps{
  percentage: number,
  inDietTotal: number;
  outDietTotal: number;
  mealsTotal: number;
}

export function Home() {
  const [meals, setMeals] = useState<MealsListProps[]>([]);
  const [inDietMeals, setInDietMeals] = useState(0);
  const [dietSummary, setDietSummary] = useState<DietSummaryProps>({
    inDietTotal: 0,
    mealsTotal: 0,
    outDietTotal: 0,
    percentage: 0
  })

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate('create');
  }

  function handleDetails(id: string) {
    navigation.navigate('details', { id });
  }

  function handleDStatistic() {
    navigation.navigate('statistic');
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals();
      const inDiestAmount = data.filter((item: any) => item.inDiet === true).length;
      const total = data.length;
      const mappeddata: MealsListProps[] = data.map((item: any, index, array) => {
        const arrayMeal = array.filter((date: any) => date.date === item.date).map((filtred: any) => ({
          id: filtred.id,
          time: filtred.time,
          name: filtred.name,
          description: filtred.description,
          inDiet: filtred.inDiet,
        }
        ));
        return (
          {
            date: item.date,
            data: arrayMeal
          }
        );
      });
      setMeals(mappeddata);
      
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <Container>
      <HeaderHome>
        <Image source={logo} />
        <ImageProfile
          source={{ uri: 'https://github.com/tonoliveira96.png' }}
        />
      </HeaderHome>
      <DietCard onPress={handleDStatistic} inDiet={dietSummary.percentage >= 50}>
        <Openicon />
        <TitleDietCard>{dietSummary.percentage.toFixed(2)}%</TitleDietCard>
        <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
      </DietCard>
      <SectionMealTitle>Refeições</SectionMealTitle>
      <ButtonDefault
        title='Nova refeição'
        variant='primary'
        icon={<Plus size={18} color='#FFF' />}
        onPress={handleNewMeal}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => (
          <SectionItem onPress={() => handleDetails(item.id)}>
            <SectionMealTime>{item.time}</SectionMealTime>
            <SectionMealItemDivisor>|</SectionMealItemDivisor>
            <SectionMealTitle numberOfLines={1}>{item.name}</SectionMealTitle>
            <DietStatus inDiet={item.inDiet} />
          </SectionItem>
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectioHeader>{date}</SectioHeader>
        )}
        ListEmptyComponent={<EmptyList />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
