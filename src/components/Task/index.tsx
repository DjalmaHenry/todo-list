import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";

type Props = {
  name: string;
  onCheck: (isChecked: boolean) => void;
  onDelete: () => void;
};

export default function Task({ name, onCheck, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="#1E6F9F"
        unfillColor="#1F1E25"
        text={name}
        iconStyle={{ borderColor: "#1E6F9F" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ textAlign: "center" }}
        onPress={onCheck}
      />

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Trash color="gray" size={24} />
      </TouchableOpacity>
    </View>
  );
}
