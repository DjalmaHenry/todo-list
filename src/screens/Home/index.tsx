import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/logo.svg";
import React from "react";
import Task from "../../components/Task";
import { PlusCircle } from "phosphor-react-native";

export default function Home() {
  function handleTaskAdd() {
    console.log("Adicionar tarefa");
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <PlusCircle color="white" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.createdInfo}>Criadas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.completedInfo}>Concluídas</Text>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>99</Text>
          </View>
        </View>
      </View>

      <Task />
    </View>
  );
}
