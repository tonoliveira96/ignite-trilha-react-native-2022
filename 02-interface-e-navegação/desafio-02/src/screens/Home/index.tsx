import { FlatList, Image, SectionList, Text } from 'react-native';
import {
  Container,
  DietCard,
  DietStatus,
  HeaderHome,
  ImageProfile,
  Openicon,
  SectioHeader,
  SectionItem,
  SectionMealTime,
  SectionMealTitle,
  SubtitleDietCard,
  TitleDietCard,
} from './styles';
import { Plus } from 'phosphor-react-native';
import logo from '@assets/Logo.png';
import { ButtonDefault } from '@components/ButtonDefault';
import { useState } from 'react';
import { EmptyList } from '@components/EmptyList';

interface MealsProps {
  date: string;
  data: Array<{
    time: string;
    inDiet: boolean;
    name: string;
    description: string;
  }>;
}

export function Home() {
  const [meals, setMeals] = useState<MealsProps[]>([
    {
      date: '2023-01-19',
      data: [
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: true,
        },
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: false,
        },
      ],
    },
    {
      date: '2023-01-20',
      data: [
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: true,
        },
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: false,
        },
      ],
    },
    {
      date: '2023-01-21',
      data: [
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: true,
        },
        {
          time: '14:00',
          name: 'Gelatina',
          description: 'feita em casa',
          inDiet: true,
        },
      ],
    },
  ]);

  return (
    <Container>
      <HeaderHome>
        <Image source={logo} />
        <ImageProfile
          source={{ uri: 'https://github.com/tonoliveira96.png' }}
        />
      </HeaderHome>
      <DietCard>
        <Openicon />
        <TitleDietCard>90,89%</TitleDietCard>
        <SubtitleDietCard>das refeições dentro da dieta</SubtitleDietCard>
      </DietCard>
      <ButtonDefault
        title='Nova refeição'
        icon={<Plus size={18} color='#FFF' />}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item.description + index}
        renderItem={({ item }) => (
          <SectionItem>
            <SectionMealTime>{item.time}</SectionMealTime>
            <Text>|</Text>
            <SectionMealTitle>{item.name}</SectionMealTitle>
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
