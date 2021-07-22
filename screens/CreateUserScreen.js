import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";
// import UsersListMin from './UsersListMin'

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    description:"",
    phone:"",
    price:"",
    destination:"",
    range:""
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
        await firebase.db.collection("users").add({
          
          name: state.name,
          description: state.description,
          phone: state.phone,
          price: state.price,
          destination: state.destination,
          range:state.range
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
    alert('Заказ добавлен!')
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="description"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "description")}
          value={state.description}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="range"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "range")}
          value={state.range}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="price"
          onChangeText={(value) => handleChangeText(value, "price")}
          value={state.price}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="destination"
          onChangeText={(value) => handleChangeText(value, "destination")}
          value={state.destination}
        />
      </View>

      <View style={styles.button}>
        <Button title="Добавить груз" onPress={() => saveNewUser()} />
      </View>
      
    </ScrollView>
  
  );
  
};
console.log('Груз добавлен!')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;
