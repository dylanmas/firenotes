import React, {useState, useEffect} from "react";
import { Home, Login, Signup, NoteEdit } from "./pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged, auth } from "./firebase/config";
import { Provider } from "react-redux";
import store from "./redux/store"


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null)
 
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="NoteEdit" component={NoteEdit} />
        </Stack.Navigator>
        
      </NavigationContainer> */}
      <NoteEdit />
    </Provider>
  );
}
