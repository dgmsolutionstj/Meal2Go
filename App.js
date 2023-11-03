import { StatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.components}>
      <View style={styles.search}>
        <Text style={styles.searchText}>Search Bar Here!</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.listText}>The List goes Here!</Text>
      </View>
    </SafeAreaView>
    <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({

  components: {
    flex: 1
  },
  
  search: {
    padding: 16,
    backgroundColor: '#A5ACAF',
  },

  searchText: {
    color: 'white',
    fontSize: 15,
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: '#005A9C'
  },

  listText: {
    color: 'white',
    fontSize: 15,
  }
});
