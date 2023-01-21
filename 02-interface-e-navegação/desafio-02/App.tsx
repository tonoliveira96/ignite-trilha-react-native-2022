
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { Home } from '@screens/Home';
import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans";

import theme from "@themes/index";
import { Loading } from '@components/Loading';
import { Create } from '@screens/Create';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Create /> : <Loading />}
    </ThemeProvider>
  );
}

