import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
   Alert,
  ActivityIndicator,
  Platform,
  Image,
  Button,
  ScrollView,
} from 'react-native';

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WebView } from 'react-native-webview';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'
import UserDetailScreenMin from "./screens/UserDetailScreenMin";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersListMin from "./screens/UsersListMin";
import UsersList from "./screens/UsersList";
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { colors } from 'react-native-elements';
// import firebase from "../database/firebase";
import Profile1 from './screens/Profile1'
import Profile2 from './screens/Profile2'
import Profile3 from './screens/Profile3'
import Setting1 from './screens/Setting1'
import { FontAwesome } from '@expo/vector-icons';
import Product1 from './screens/Product1'
import { AntDesign } from '@expo/vector-icons';
import SettingOption1 from './screens/Setting1/Options'
import index from './components/index'
import Nav from './components/Nav'
import NavAbsolute from './components/NavAbsolute'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from './assets/logo.png';
const HomeStack = createStackNavigator(screens);
const Tab = createBottomTabNavigator();

const screens={
  HomeScreen:{screen:HomeScreen},
  Cargo1:{screen:Cargo},
  SettingsScreen1:{screen:SettingsScreen}

}


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



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Домашняя страница,тут будут обьявления все</Text>
      <Button 
        title="Регистрация"
        onPress={() => navigation.navigate('Регистрация')}
      />
   </View>
    
  );
}

// pressHandler=()=>{
//   navigation.navigate('Регистрация')
// }

function Cargo(props) {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#621FF7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="UsersList"
      component={UsersListMin}
      options={{ title: "Список грузов" }}
    />
    <HomeStack.Screen
      name="CreateUserScreen"
      component={CreateUserScreen}
      options={{ title: "Create a New User" }}
    />
    <HomeStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreenMin}
      options={{ title: "User Detail" }}
    />
  </HomeStack.Navigator>
    
  );
}


function SettingsScreen(props) {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#621FF7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="UsersList"
      component={UsersListMin}
      options={{ title: "Users List" }}
    />
    <HomeStack.Screen
      name="CreateUserScreen"
      component={CreateUserScreen}
      options={{ title: "Create a New User" }}
    />
    <HomeStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{ title: "User Detail" }}
    />
  </HomeStack.Navigator>
    
  );
}

//test////////////////////////////////////////////////////////////
function SettingsScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.logo} source={logo} />
       <Text style={styles.title}> Добро пожаловать</Text>
       <Text style={styles.text}> Данное приложение позволяет находить перевозчиков груза</Text>
      {/* <Text><Entypo name="add-to-list" size={14} color="black" />Добавить груз  </Text> */}
      <Button 
      
        title="Добавить груз"
        onPress={() => navigation.navigate('Список грузов')}
      />

       <Button  title="Войти"
        
        onPress={() => navigation.navigate('Вход')}/>
       
        {/* <Button  title="Информация"
        
        onPress={() => navigation.navigate('Details')}/> */}
      
      
    
      {/* <Text><FontAwesome name="sign-in" size={14} color="black" />Войти</Text> */}
      
    </View>
  );
}

function ProfileScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      alert('Вы внутри полного просмотра грузов');
  
      // Do something when the screen is focused
      return () => {
        alert('Вы вышли из просмотра грузов');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
      

  return (
   <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#621FF7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      
    }}
  >
    <HomeStack.Screen
      name="UsersList"
      component={UsersList}
      options={{ title: "Cписок грузов" }}
    />
    {/* <HomeStack.Screen
      name="CreateUserScreen"
      component={CreateUserScreen}
      options={{ title: "Create a New User" }}
    />*/}
    <HomeStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{ title: "Просмотр груза" }}
    /> 
  </HomeStack.Navigator>
    
  );
}

function HomeScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const SettingsStack = createStackNavigator();



//test////////////////////////////////////////////////////////////end

function SignUp({ navigation },props) {
const recaptchaVerifier = React.useRef(null);
const verificationCodeTextInput = React.useRef(null);
const [phoneNumber, setPhoneNumber] = React.useState('');
const [verificationId, setVerificationId] = React.useState('');
const [verifyError, setVerifyError] = React.useState();
const [verifyInProgress, setVerifyInProgress] = React.useState(false);
const [verificationCode, setVerificationCode] = React.useState('');
const [confirmError, setConfirmError] = React.useState();
const [confirmInProgress, setConfirmInProgress] = React.useState(false);
const isConfigValid = !!FIREBASE_CONFIG.apiKey;

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-sharp" size={44} color="black"  title="Назад" 
        onPress={() => navigation.navigate('Список грузов')}/>
      
     
     
<View><Text> </Text></View>
<View><Text> </Text></View>

    <View >
      <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={FIREBASE_CONFIG}
      />
      {/* <Text style={styles.title}>Firebase Phone Auth</Text>
      <Text style={styles.subtitle}>using expo-firebase-recaptcha</Text> */}
      
      <Text style={styles.text}>Введите номер телефона</Text>
      <TextInput
        style={styles.textInput}
        autoFocus={isConfigValid}
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        placeholder="+7 700 777 7777"
        editable={!verificationId}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />

      <Button
        title={`${verificationId ? 'Переотправить' : 'Отправить'} код верификации`}
        disabled={!phoneNumber}
        onPress={async () => {
          const phoneProvider = new firebase.auth.PhoneAuthProvider();
          try {
            setVerifyError(undefined);
            setVerifyInProgress(true);
            setVerificationId('');
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              // @ts-ignore
              recaptchaVerifier.current
            );
            setVerifyInProgress(false);
            setVerificationId(verificationId);
            verificationCodeTextInput.current?.focus();
          } catch (err) {
            setVerifyError(err);
            setVerifyInProgress(false);
          }
        }}
      />
       {/* <Text style={styles.text}>{phoneNumber}</Text> */}
      {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
      {verifyInProgress && <ActivityIndicator style={styles.loader} />}
      {verificationId ? (
        <Text style={styles.success}>Код верификации выслан по SMS на ваш телефон</Text>
      ) : (
        undefined
      )}
      <Text style={styles.text}>Введите код верификации</Text>
      <TextInput
        ref={verificationCodeTextInput}
        style={styles.textInput}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={(verificationCode) => setVerificationCode(verificationCode)}
      />
      <Button
        title="Подтвердить код верификации"
        disabled={!verificationCode}
        onPress={async () => {
          try {
            setConfirmError(undefined);
            setConfirmInProgress(true);
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            console.log('====================================================================')
            console.log('Credential',credential)
            const authResult = await firebase.auth().signInWithCredential(credential);
            console.log('Отработался Сайн ин с Криденшалсами ',authResult)

                
            setConfirmInProgress(false);
            setVerificationId('');
            setVerificationCode('');
            verificationCodeTextInput.current?.clear();
            // Alert.alert('Регистрация прошла успешно!');
            
            navigation.navigate('Profile')
            
            

            
                  //изменил 
            

          } catch (err) {
            setConfirmError(err);
            setConfirmInProgress(false);
          }
          
        }
      }
      // onPress={() => navigation.navigate('Settings')}    Чекаем
      />
      
      
      {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}
      {confirmInProgress && <ActivityIndicator style={styles.loader} />}
    </View>
    {!isConfigValid && (
      <View style={styles.overlay} pointerEvents="none">
        <Text style={styles.overlayText}>
          База свалилась
        </Text>
      </View>
    )}
  </View>
  );
}
const HomeIcon = ({ focused, tintColor }) => (
  <Feather name="list" size={24} color="black" />
  // <Ionicons name="md-checkmark-circle" size={32} color="green" />;
)


const Profile1Stack = createStackNavigator()
function Profile1StackScreen() {
  return (
    <Profile1Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Profile1Stack.Screen name="Profile" component={Profile1} />
    </Profile1Stack.Navigator>
  )
}
export default function App() {
  
  return (
    <NavigationContainer style={styles.container} >
      
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
      </Stack.Navigator> */}
      
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Список грузов') {
              return (
                <Entypo name="list" size={34} color="black" />
              );
            } else if (route.name === 'Вход') {
              return (
                <FontAwesome name="sign-in" size={34} color="black" />
              );
            }
            else if (route.name === 'Главная') {
              return (
                <AntDesign name="home" size={24} color="black" />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >



        <Tab.Screen name="Главная" component={SettingsScreen2} 
      screenOptions={({ route }) => ({
        tabBarIcon: props => <AntDesign name="home" size={24} color="black" />
        
      })} />


      <Tab.Screen name="Список грузов" component={Cargo} 
       screenOptions={({ route }) => ({
          tabBarIcon: props => <Feather name="list" size={24} color="black" />
          
        })} />

      {/* <Tab.Screen name="Войти" component={HomeScreen}  /> */}
      {/* {() => (
      <Tab.Screen name="Регистрация" component={SignUp}  >
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Screen>)} */}
      {/* <Tab.Screen name="SettingsScreen" component={SettingsScreen}  /> */}
        
      
      
        <Tab.Screen name="Вход">
          {() => (
            <SettingsStack.Navigator>
              
              <SettingsStack.Screen
                name="Регистрация"
                component={SignUp}
                
              />
               
              <SettingsStack.Screen name="Profile" component={ProfileScreen}  />
            </SettingsStack.Navigator>
          )}
         
        </Tab.Screen>
        
        {/* <Tab.Screen name="Profile1" component={Profile1StackScreen} /> */}
        {/* <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen1} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen> */}     
           </Tab.Navigator>
          
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
  content: {
    marginTop: 10,
  },
  title: {
    marginBottom: 0,
    fontSize: 29,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 10,
    opacity: 0.35,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 0,
    marginBottom: 4,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
  },
  error: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  success: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  loader: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFFC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontWeight: 'bold',
  },
  logo: {
    width: 400,
    height: 200,
    marginBottom: 30,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
});