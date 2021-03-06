import * as React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { useScreens } from 'react-native-screens'
import {
  createAppContainer,
  createStackNavigator,
  NavigationScreenProps,
} from 'react-navigation'

// workaround for https://github.com/expo/expo/issues/3191
if (Platform.OS !== 'android') {
  useScreens()
}

class App extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Home',
  }

  _push = () => {
    this.props.navigation.navigate('Details')
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Hello, typescript</Text>
        <Button onPress={this._push} title="Push" />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  Details: App,
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
