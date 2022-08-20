import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.svg";
import React from "react";
import Task from "../../components/Task";
import { PlusCircle, ClipboardText } from "phosphor-react-native";

export default function Home() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [newTask, setNewTask] = React.useState("");
  const [completed, setCompleted] = React.useState(0);
  function handleTaskAdd() {
    if (newTask === "") {
      return Alert.alert(
        "Oops!",
        "Você precisa dar um nome à tarefa para cria-la."
      );
    } else if (tasks.includes(newTask)) {
      return Alert.alert(
        "Tarefa duplicada",
        "Já existe uma tarefa com este nome."
      );
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleTaskCheck(isChecked: boolean) {
    if (isChecked) {
      setCompleted(completed + 1);
    } else {
      setCompleted(completed - 1);
    }
  }

  function handleTaskDelete(name: string) {
    Alert.alert("Excluir tarefa", `Excluir tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <PlusCircle color="white" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.createdInfo}>Criadas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{tasks.length - completed}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.completedInfo}>Concluídas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{completed}</Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onCheck={handleTaskCheck}
            onDelete={() => handleTaskDelete(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <ClipboardText color="gray" size={54} />
            <Text style={styles.emptyListTextPrimary}>
              Você ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.emptyListTextSecondary}>
              Crie tarefas e organize seus itens a fazer.
            </Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
