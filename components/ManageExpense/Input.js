import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {},
});
