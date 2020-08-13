import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Content from '../../components/Content'

const Article = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1E6',
  },
})
