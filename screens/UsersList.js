import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles';
import firebase from "../database/firebase";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBEB0wSiFglXgebNMfL5LVGNsQRVn9V4CA",
  authDomain: "react-firebase-50911.firebaseapp.com",
  projectId: "react-firebase-50911",
  storageBucket: "react-firebase-50911.appspot.com",
  messagingSenderId: "397631052348",
  appId: "1:397631052348:web:bdcbfb484b2762d2520139",
  measurementId: "G-0YWVY3PX9R"
};
try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}



const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, description, phone ,destination,price,range} = doc.data();
        users.push({
          id: doc.id,
          name,
          description,
          phone,
          destination,
          price,
          range
        });
      });
      setUsers(users);
    });
  }, []);


  return (
    <ScrollView>
  
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
                phone: user.phone,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnfSzUsm2RERk8HrsgVX0yYbQbBCtM_6hCw&usqp=CAU",
              }}
              rounded
            />
            <ListItem.Content style={styles.formContainer}>
              <ListItem.Title >Наименование груза: {user.name}</ListItem.Title>
              <ListItem.Subtitle >Описание: {user.description}</ListItem.Subtitle>
              <ListItem.Subtitle >Куда довезти: {user.destination}</ListItem.Subtitle>
              <ListItem.Subtitle >Куда довезти: {user.range}</ListItem.Subtitle>
              <ListItem.Subtitle >Цена: {user.price}</ListItem.Subtitle>
              <ListItem.Subtitle >Телефон: {user.phone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserScreen;


