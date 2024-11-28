import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

interface IGradientButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}
const GradientButton: React.FC<IGradientButton> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={['#51C7FE', '#338BFF']}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    height: 40,
    borderRadius: 80,
    overflow: 'hidden',
  },
  disabled: {
    opacity: 0.5
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton;
