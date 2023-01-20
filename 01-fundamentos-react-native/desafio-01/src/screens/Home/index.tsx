import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { useState } from 'react';
import { NoTasks } from '../../components/NoTasks';
import { Task } from '../../components/Task';
import Icon from "@expo/vector-icons/Feather";
import { styles } from './styles';
const logo = require('../../images/logo.png');

interface TaskProps {
  name: string,
  status: boolean,
}

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleDelete(id: number) {
    Alert.alert('Remover', 'Remover tarefa?', [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleCreate() {
    if (newTask.length < 3) {
      return Alert.alert("Atenção", "Descrição da terafa deve ter no mínino 3 caracteres.");
    }
    setTasks((prevState) => [...prevState, { status: false, name: newTask }]);
    setNewTask('');
  }

  function hanldeToDo(id: number) {

  }

  return (
    <View style={styles.container}>
      <View style={styles.logo} >
        <Image source={logo} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder='Descrição da tarefa'
            placeholderTextColor='#808080'
            value={newTask}
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
          style={styles.flatList}
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <Task
              key={index.toString()}
              name={item.name}
              status={item.status}
              onRemove={() => handleDelete(index)}
              onCheck={() => hanldeToDo(index)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <NoTasks />}
        />
      </View>
    </View>
  );
}
