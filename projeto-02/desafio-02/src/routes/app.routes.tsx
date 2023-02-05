import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Create } from '@screens/Create';
import { Details } from '@screens/Details';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='create' component={Create} />
      <Screen name='details' component={Details} />
      <Screen name='statistic' component={Statistic} />
      <Screen name='feedback' component={Feedback} />
    </Navigator>
  );
}
