import { Button, Text, TouchableOpacity, View, } from 'react-native';
import { styles } from './styles';
import Icon from "@expo/vector-icons/Feather";

type TaskProps = {
  name: string;
  status: boolean;
  onRemove: () => void;
  onCheck: () => void;
};

export function Task({ name, status, onRemove, onCheck }: TaskProps) {
  const buttonCheckedClass = status ? styles.checkedButton : styles.notCheckedButton;
  const textCheckedClass = status ? styles.taskNameChecked : styles.taskName;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonCheckedClass} onPress={onCheck} />
      <Text style={textCheckedClass}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Icon name='trash' color="#808080" size={16} />
      </TouchableOpacity>
    </View>
  );
}