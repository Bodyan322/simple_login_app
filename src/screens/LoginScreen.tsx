import React from 'react';
import {
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LoginError, loginUser} from "../api/auth";
import LoginForm from "../components/Forms/LoginForm";
import { saveToSecureStore } from "../api/secureStorage";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const handleLogin = async (username: string, password: string) => {
    try {
      const { accessToken } = await loginUser(username, password);
      await saveToSecureStore('userToken', accessToken);
      navigation.replace('Profile');
    } catch (e) {
      const error = e as LoginError;
      Alert.alert('Login failed', `${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginForm onSubmit={handleLogin}/>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
