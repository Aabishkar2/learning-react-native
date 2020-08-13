import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> समकलिन साहित्य </Text>
    </View>
  )
}

export default Header
