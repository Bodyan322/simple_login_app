import { StyleSheet, Text, View } from "react-native";
import GradientButton from "../shared/GradientButton";
import React, { useState } from "react";
import CustomInput from "../shared/CustomInput";

interface ILoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const [userFields, setUserFields] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors ] = useState({
    username: '',
    password: ''
  })

  const { username, password} = userFields;

  const validateFields = (text: string, fieldName: string) => {
    if (fieldName === 'username' && text.length > 0 && text.length < 4) {
      return 'Username must be at least 4 characters long.';
    } else if (/\S+@\S+\.\S+/.test(username)) {
      return 'Username should not look like an email.';
    }

    if (fieldName === 'password' && text.length > 0 && text.length < 4) {
      return 'Password must be at least 4 characters long.';
    } else if (password.length > 16) {
      return 'Password must not exceed 16 characters.';
    }

    return ''
  };

  const handleInputChange = (text: string, inputName: string) => {
    setUserFields((prevState) => ({ ...prevState, [inputName]: text }))
    const error = validateFields(text, inputName);
    setErrors((prevErrors) => ({ ...prevErrors, [inputName]: error }));
  };

  const handleSubmit = () => {
    if (!username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
      return
    }
    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      return
    }
    if (errors.username || errors.password) {
      return
    }
    onSubmit(username, password);
  }

  return (
    <View style={styles.container}>
      <CustomInput
        value={username}
        placeholder="Enter username"
        style={errors.username ? styles.inputError : undefined}
        onChangeText={(text) => handleInputChange(text, 'username')}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
      <CustomInput
        value={password}
        placeholder="Enter password"
        style={errors.password ? styles.inputError : undefined}
        secureTextEntry
        onChangeText={(text) => handleInputChange(text, 'password')}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <View style={styles.buttonContainer}>
        <GradientButton title='Login' disabled={!(username || password)} onPress={handleSubmit} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default LoginForm;
