import { Center, Heading, Image, Text, VStack } from 'native-base';
import React from 'react';
import backgroundImg from "../assets/background.png";
import LogoSvg from '../assets/logo.svg';

export function Singnin() {
  return (
    <VStack flex={1} bg="gray.700" >
      <Image
        source={backgroundImg}
        alt="Pessoas treinando"
        resizeMode='contain'
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm" >Treine sua mente e seu corpo</Text>
      </Center>
      <Center my={24}>
        <Heading color="gray.100" fontSize="xl" fontFamily="heading">
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  );
}