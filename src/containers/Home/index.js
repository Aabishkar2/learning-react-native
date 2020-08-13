import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Featured from '../../components/Featured'
import Posts from '../../components/Posts'
import { HomePosts } from '../../mockdata/posts'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Featured />
        <Posts content={HomePosts} />
        <StatusBar style='auto' />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1E6',
  },
})
