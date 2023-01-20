import { Text, View } from 'react-native';
import { styles } from './styles';

type CounterTypes = {
  value: number;
};
export function Counter({ value }: CounterTypes) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}
