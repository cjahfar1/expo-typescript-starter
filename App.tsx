import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Hello, typescript</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})