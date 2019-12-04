"use strict";
import React, { Component } from "react";
import * as firebase from "firebase";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccScreen from "./screens/CreateAccScreen";
import CreateTutorScreen from "./screens/CreateTutorScreen";
import StudentCreateScreen from "./screens/StudentCreateScreen";
import ListScreen from "./screens/ListScreen";
import ChatScreen from "./screens/ChatScreen";
import finishedChatScreen from "./screens/finishedChatScreen";
import payScreen from "./screens/payScreen";


firebase.initializeApp({
  apiKey: "AIzaSyCvXlvAEtNjCvtt8kquDYrSi4JOqGLZr2c",
  authDomain: "cramapp-2997f.firebaseapp.com",
  databaseURL: "https://cramapp-2997f.firebaseio.com",
  storageBucket: "cramapp-2997f.appspot.com"
});
import MapScreen from "./screens/MapScreen";

const MainNavigatior = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  CreateAcc: { screen: CreateAccScreen },
  CreateTutor: { screen: CreateTutorScreen },
  StudentCreate: { screen: StudentCreateScreen },
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
  Chat: { screen: ChatScreen },
  finishedChat: { screen: finishedChatScreen },
  Pay: { screen: payScreen }
});

const App = createAppContainer(MainNavigatior);

export default App;
