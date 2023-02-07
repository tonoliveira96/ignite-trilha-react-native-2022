import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Singnin } from '../screens/Signin';
import { Singnup } from '../screens/Signup';

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='signIn'
        component={Singnin}
      />
      <Screen
        name='signUp'
        component={Singnup}
      />
    </Navigator>
  );
}