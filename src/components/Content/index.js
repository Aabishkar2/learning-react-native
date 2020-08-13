import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const Content = (props) => {
  const posts = props.content
  return (
    <View style={styles.contentView}>
      <Text style={styles.content}>समकालीन साहित्यिक रचना</Text>
    </View>
  )
}

export default Content
