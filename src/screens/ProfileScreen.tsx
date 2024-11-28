import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getUser } from "../api/user";
import Button from "../components/shared/Button";
import { deleteFromSecureStore } from "../api/secureStorage";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ['userData'],
    queryFn: getUser,
    refetchInterval: 5000,
    refetchIntervalInBackground: true
  })

  const logout = () => {
    queryClient.clear()
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }

  useEffect(() => {
    const timer = setTimeout(() =>  deleteFromSecureStore('userToken'), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (error?.message) {
      Alert.alert(error.message)
      logout()
    }
  }, [error]);

  const handleLogout = async () => {
    await deleteFromSecureStore('userToken');
    logout()
  };


  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, {data.firstName} {data.lastName}!</Text>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
