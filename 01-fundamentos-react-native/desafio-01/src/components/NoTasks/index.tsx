import { View, Text } from 'react-native';
import { styles } from './styles';
import Icon from "@expo/vector-icons/Feather";

export function NoTasks() {
  return (
    <View style={styles.conatiner}>
      <Icon name='clipboard' color="#808080" size={56} />
      <Text style={styles.mainText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtext}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}