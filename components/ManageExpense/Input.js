import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, textInputConfig, invalid }) {
  let inputStyles = [styles.textInput];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  text: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500, // Label turns red for invalid
  },
  invalidInput: {
    borderColor: GlobalStyles.colors.error500, // Red border
    borderWidth: 1, // Border thickness
    backgroundColor: GlobalStyles.colors.error50, // Optional light red background
  },
});
