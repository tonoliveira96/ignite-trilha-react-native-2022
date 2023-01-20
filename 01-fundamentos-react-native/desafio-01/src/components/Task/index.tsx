import { Text, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Icon from "@expo/vector-icons/Feather";

type TaskProps = {
  name: string;
  onRemove: () => void;
};

export function Task({ name }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{name}</Text>
      <TouchableOpacity>
        <Icon name='trash' color="#808080" size={16} />
      </TouchableOpacity>
    </View>
  );
}