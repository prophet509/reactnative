import React,{ Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import {StyleSheet,Text,View,TextInput,Button} from "react-native-web"



export default class App extends Component {
  state = {
    text:""
  }
  render() {
    return (
      <View style={styles.root}>
        <Text>Battle Math</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button
          onPress={() => {
            alert(this.state.text)
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  root:{
    justifyContent:"center",
    alignItems:"center"
  }
});
