import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, ListItem, Button, Icon, Divider } from "react-native-elements";
import BottomBar from "../components/BottomBar";
import { db } from "../config";
import firebase from "firebase";
import { Row } from "native-base";

let userData = db.ref("/users/tutors");

let url = "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      firstName: "",
      lastName: "",
      Bio: "",
      Type: "",
      Users: [{}]
    };
    this.getuser = this.getuser.bind(this);
  }

  getuser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Inside ID: " + user.uid);
        this.setState({ currentUser: user.uid });
        console.log("ID: " + this.state.currentUser);
      } else {
        alert("Not logged in!");
      }
    });
  };

  componentWillMount() {
    this.getuser();
    userData.on("value", snapshot => {
      let data = snapshot.val();

      this.setState({ Users: Object.values(data) });
    });
  }

  toProfile(id, fname, lname, bio) {
    console.log("In profile switch " + fname);
    const { navigate } = this.props.navigation;
    navigate("ViewProfile", {
      userID: id,
      userFName: fname,
      userLName: lname,
      userBio: bio
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.Users}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <View style={styles.tutor}>
                <Image
                  classkey="Avatar"
                  source={{ uri: url }}
                  style={{ width: 128, height: 128, borderRadius: 128 / 2 }}
                />
                <View style={styles.tutText}>
                  <Text style={styles.item}>{item.fname}</Text>
                  <Text style={styles.rating}>{item.rating}</Text>
                  <Divider
                    style={{
                      backgroundColor: "grey",
                      height: 1,
                      width: "200%"
                    }}
                  />
                </View>
              </View>
              <View style={styles.classes}>
                <Text style={{ paddingRight: 40, fontSize: 28 }}>
                  {item.class1}
                </Text>
                <Text style={{ paddingRight: 40, fontSize: 28 }}>
                  {item.class2}
                </Text>
                <Text style={{ paddingRight: 40, fontSize: 28 }}>
                  {item.class3}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("ViewProfile", {
                      ID: item.ID,
                      FN: item.fname,
                      LN: item.lname,
                      Bio: item.bio,
                      c1: item.class1,
                      c2: item.class2,
                      c3: item.class3,
                      rating: item.rating
                    });
                  }}
                >
                  <Text>View Profile and Book!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <BottomBar nav={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 44
  },
  tutor: {
    flex: 1,
    flexDirection: "column",
    padding: 4,
    paddingBottom: 8
  },
  tutText: {
    flexDirection: "column",
    padding: 2
  },
  class: {
    paddingLeft: 10,
    paddingVertical: 6,
    fontSize: 20,
    height: 44
  },
  rating: {
    paddingLeft: 10,
    paddingVertical: 6,
    fontSize: 15,
    height: 44
  },
  wrapper: {
    flexDirection: "row",
    flex: 1
  },
  classes: {
    flexDirection: "column"
  }
});
