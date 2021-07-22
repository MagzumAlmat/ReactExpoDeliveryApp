import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';
import firebase from "../database/firebase";

const UserScreenMin = (props) => {
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
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Добавить груз"
        
      >
        <Entypo name="add-to-list" size={4} color="black" />
      </Button>
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            {/* <Avatar
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnfSzUsm2RERk8HrsgVX0yYbQbBCtM_6hCw&usqp=CAU",
              }}
              rounded
            /> */}
            <ListItem.Content>
              <ListItem.Title>Наименование груза: {user.name}</ListItem.Title>
              <ListItem.Subtitle>Описание: {user.description}</ListItem.Subtitle>
              <ListItem.Subtitle>Расстояние: {user.range}</ListItem.Subtitle>
              <ListItem.Subtitle>Куда довезти: {user.destination}</ListItem.Subtitle>
              <ListItem.Subtitle>Цена: {user.price}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserScreenMin;
