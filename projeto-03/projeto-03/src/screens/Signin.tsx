import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import backgroundImg from "../assets/background.png";
import LogoSvg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { AuthNavigatorRoutesProps } from '../routes/auth.routes';

export function Singnin() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate('signUp');
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="Pessoas treinando"
          resizeMode='contain'
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm" >Treine sua mente e seu corpo</Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Input
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Senha'
            secureTextEntry
          />
          <Button title='Acessar' />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button
            variant="outline"
            title='Criar conta'
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}