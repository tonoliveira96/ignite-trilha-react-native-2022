import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { useMemo, useState } from 'react';
import { NoTasks } from '../../components/NoTasks';
import { Task } from '../../components/Task';
import Icon from "@expo/vector-icons/Feather";
import { styles } from './styles';
import { Counter } from '../../components/Counter';
const logo = require('../../images/logo.png');

interface TaskProps {
  id: string,
  name: string,
  status: boolean,
}

export function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleDelete(id: string) {

    Alert.alert('Remover', 'Remover tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter((task) => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleCreate() {
    if (taskName.length < 3) {
      return Alert.alert("Atenção", "Descrição da terafa deve ter no mínino 3 caracteres.");
    }
    setTasks((prevState) => [...prevState, {
      id: new Date().getMilliseconds().toString(),
      status: false,
      name: taskName
    }]);
    setTaskName('');
  }

  function hanldeToDo(item: TaskProps) {
    const filterArray = tasks.filter((task) => task.id !== item.id);
    setTasks([...filterArray, { ...item, status: !item.status }]);
  }

  const createdTasks = useMemo(() => (tasks.length ?? 0), [tasks]);
  const fineshedTasks = useMemo(() => {
    const finished = tasks.filter(item => item.status === true);
    return finished.length;
  }, [tasks]);

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
            value={taskName}
            onChangeText={(e) => { setTaskName(e); }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleCreate}
          >
            <Icon name='plus-circle' color="#fff" size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerList}>
          <View style={styles.containerheaderListTitle}>
            <Text style={{ color: '#4EA8DE', ...styles.headerListTitle }}>
              Criadas
            </Text>
            <Counter value={createdTasks} />
          </View>
          <View style={styles.containerheaderListTitle}>
            <Text style={{ color: '#8284FA', ...styles.headerListTitle }}>
              Concluidas
            </Text>
            <Counter value={fineshedTasks} />
          </View>
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
              onRemove={() => handleDelete(item.id)}
              onCheck={() => hanldeToDo(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <NoTasks />}
        />
      </View>
    </View>
  );
}
