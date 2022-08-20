import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Trash } from "phosphor-react-native";

export default function Task() {
  function handleTaskDelete() {}
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="#1E6F9F"
        unfillColor="#1F1E25"
        text="Custom Checkbox"
        iconStyle={{ borderColor: "#1E6F9F" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={(isChecked: boolean) => {}}
      />

      <TouchableOpacity style={styles.deleteButton} onPress={handleTaskDelete}>
        <Trash color="gray" size={24} />
      </TouchableOpacity>
    </View>
  );
}
