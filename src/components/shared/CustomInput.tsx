import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ViewStyle, TextInputProps} from 'react-native';

interface ClearableTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
}

const ClearableTextInput: React.FC<ClearableTextInputProps> = ({ value, onChangeText, style, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')} style={styles.clearButton}>
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingRight: 30,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 10,
  },
  clearText: {
    color: '#888',
    fontSize: 18,
  },
});

export default ClearableTextInput;
