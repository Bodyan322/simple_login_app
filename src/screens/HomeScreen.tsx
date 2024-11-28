import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import GradientButton from "../components/shared/GradientButton";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <GradientButton
          title='Go to login'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});

export default HomeScreen;
