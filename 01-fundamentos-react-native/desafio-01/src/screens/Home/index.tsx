import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import { NoTasks } from '../../components/NoTasks';
import { Task } from '../../components/Task';
import Icon from "@expo/vector-icons/Feather";
import { styles } from './styles';

interface TaskProps {
  name: string,
  status: boolean,
}

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleDelete(id: number) {

  }

  function handleCreate() {
    setTasks((prevState) => [...prevState, { status: false, name: newTask }]);
  }

  function hanldeToDo(id: number) {

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder='Descrição da tarefa'
          placeholderTextColor='#808080'
          onChangeText={(e) => { setNewTask(e); }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleCreate}
        >
          <Icon name='plus-circle' color="#fff" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerList}>
        <Text style={{ color: '#4EA8DE', ...styles.headerListTitle }}>
          Criadas
        </Text>
        <Text style={{ color: '#8284FA', ...styles.headerListTitle }}>
          Concluidas
        </Text>
      </View>

      <FlatList
        style={styles.conatinerList}
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <Task
            key={index.toString()}
            name={item.name}
            onRemove={() => handleDelete(index)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoTasks />}
      />
    </View>
  );
}
