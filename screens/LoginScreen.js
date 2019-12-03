"use strict";
import React, { Component } from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as firebase from "firebase";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  async login(email, pass) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, pass);
      alert("Logged in!");
      const { navigate } = this.props.navigation;

      navigate("Map");
    } catch (error) {
      alert(error.toString());
    }
  }

  bypass = () => {
    const { navigate } = this.props.navigation;
    navigate("Map");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="   Email"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="   Password"
          placeholderTextColor="#9a73ef"
          onChangeText={this.handlePassword}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.bypass()}>
          <Text>Bypass Login (Testing Only)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCBA03",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    height: 40,
    width: 150,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  },

  submitButton: {
    backgroundColor: "grey",
    padding: 10,
    margin: 15,
    height: 40
  }
});