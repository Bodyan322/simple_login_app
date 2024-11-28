import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({ title, onPress, disabled}) => (
  <TouchableOpacity
    style={[styles.buttonWrapper, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Button;
