"use strict";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "grey"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.yellowbox}>
          <Image source={require("./branding/logo.png")} />
        </View>
        <View style={styles.greybox}>
          {/* <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigate("Cdr")}
          >
            <Text>CALNDR</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={styles.loginButton}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigate("CreateAcc")}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FCBA03",
    alignItems: "center",
    justifyContent: "center"
  },

  yellowbox: {
    height: 300,
    width: 500,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center"
  },

  greybox: {
    height: 500,
    width: 500,
    backgroundColor: "#FCBA03",
    alignItems: "center",
    justifyContent: "center"
  },

  loginButton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    width: 100,
    backgroundColor: "grey",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
    borderWidth: 1
  },

  registerButton: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    width: 100,
    backgroundColor: "grey",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    borderWidth: 1
  }
});
