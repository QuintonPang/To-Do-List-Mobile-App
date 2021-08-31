import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ToDoListScreen from "./app/screens/ToDoListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


export default function App() {

	 const Stack = createNativeStackNavigator();


	return(
		<PaperProvider settings={{icons:props=><Ionicons {...props}/>,}}>

			<SafeAreaView style={{flex:1}}>

				<NavigationContainer>

					<Stack.Navigator screenOptions={{headerShown:false}}>

						<Stack.Screen 
						name="Welcome"
						component={WelcomeScreen}/>



						<Stack.Screen
						name="ToDoList"
						component={ToDoListScreen}/>

					</Stack.Navigator>

					


				</NavigationContainer>


				
			


			</SafeAreaView>

		</PaperProvider>
			
	);
};
