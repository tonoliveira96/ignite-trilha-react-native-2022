import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Singnup } from './src/screens/Signup';
import { THEME } from './src/theme';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Singnup/> : <Loading />}
    </NativeBaseProvider>
  );
}
