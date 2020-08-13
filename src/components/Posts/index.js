import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Posts = (props) => {
  const posts = props.content
  const navigation = useNavigation()
  const showArticle = (id) => {
    return navigation.navigate('Article')
  }
  return (
    <View style={styles.posts}>
      <Text style={styles.title}>समकालीन साहित्यिक रचना</Text>
      {posts.map((post) => (
        <TouchableHighlight key={post.id} onPress={() => showArticle(post.id)}>
          <View style={styles.postsContainer}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.authorName}>- {post.author}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  )
}

export default Posts
