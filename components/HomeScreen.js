
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text>Brasil</Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate('SaoPaulo')}
      >
          <Text>
              São Paulo  
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});