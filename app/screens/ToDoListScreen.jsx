import React,{useState, useEffect} from "react";
import {Text,
	KeyboardAvoidingView,
	Platform,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	View,
	ScrollView,
	Dimensions,
	Linking,	

} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; ;
import { Card, Button } from "react-native-paper";
import ToDo from "./ToDo";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ToDoListScreen=({navigator})=>{

	//get data from async storage

	const getData = async () => { 

		//getting it with key "todolist", await makes sure it is unwrapped from promises

		
	 
		const jsonValue=await	AsyncStorage.getItem('toDoList');



		//parse the json back to array, then set it to to do list
		

		jsonValue!==undefined&&setToDoList(JSON.parse(jsonValue));




		
	
	};

		
		



			
					              
		

		    

								               
	



		
	const [ toDoList, setToDoList ] = useState([]);

	useEffect(()=>{


	//get data whenever it is mounted

		getData();
					

	},[]);


	const [ input, setInput ] = useState("");

		

	//store data in asyc storage

	const storeData = async (value) => {

		  try {

			  //make the list to string and store it
			
			  AsyncStorage.setItem('toDoList', JSON.stringify(value));
			  
		
		  } catch (e) {
			
			  console.log(e.message);
				
			    }
				 
	};

	const handleInput=(text)=>{

		//set input variable according to text whenever it changes
		setInput(text);

		

		
	};

	const addToDo=()=>{

		//set new list with original list and input from handleInput

		setToDoList([...toDoList,input]);

		//reset input
		storeData([...toDoList,input]);
		
		//reset input                                               
		setInput();
			

	};

	const deleteToDo=(index)=>{


		let tempList=[...toDoList];


		tempList.splice(index,1);
		setToDoList(tempList);

		//make sure it is deleted from async storage also
		storeData(tempList);

	};

	return(

		<View style={styles.background}>


		<Text style={styles.title}>TO DO LIST:</Text>

		<Text style={styles.desc} onPress={() => Linking.openURL('https://qr.tngdigital.com.my/m/281011018300720479265798345')}>

		                                                                                                          
			Buy the creator a cup of coffee by tapping here!
		                            
		</Text>
		{/* behaviour affects the height between screen and keyboard when keyboard is triggered depending on os*/}

		<KeyboardAvoidingView style={{flex:1}} behaviour={Platform.OS==="ios"?"padding":"height"}>

		<View style={styles.toDoListWrapper}>
	
			<ScrollView style={styles.scroll}>


				{toDoList.map((toDo,index)=>{

				   return (
					
					   <Card key={index} style={styles.ToDoCard}>

					   <ToDo toDo={toDo}/>
					   	<Card.Actions>
					   		
					   		<Button onPress={()=>deleteToDo(index)}>Delete <AntDesign size={15} name="delete"/></Button>


					   	</Card.Actions>
					   </Card>

				   )



				})}

				

			</ScrollView>

		</View>
			


			


			{/* behaviour affects the height between screen and keyboard when keyboard is triggered depending on os*/}

			<View style={styles.inputWrapper}>

				<TextInput style={styles.input}  placeholder="  Enter your task" value={input} onChangeText={(text)=>handleInput(text)} />

				<TouchableOpacity onPress={()=>addToDo()} style={styles.addButton}>

				
														<Ionicons size={40}name="add-circle-outline"/>

				

			
				</TouchableOpacity>

			</View>

			</KeyboardAvoidingView>

		</View>
		

	);
	


};



const styles=StyleSheet.create({


	title:{

		marginTop:35,
		alignSelf:"center",
		fontSize:20,
	},

	desc:{


		          
		alignSelf:"center",
		           
		fontFamily:"sans-serif-light",
		            

		fontSize:10,
		textDecorationLine:"underline",


		     
	},

	ToDoCard:{

		                
		width: Dimensions.get("window").width,

		                
		margin:10,


		                                                                                    
	},



	toDoListWrapper:{


		flex:9,
		justifyContent:"flex-start",
		alignItems:"center",
		


	},

	background:{

		backgroundColor:"#dcdcde",
		flex:1,

	},

	inputWrapper:{
		
		flexDirection:"row",
		flex:1,
		


	},

	input:{

		backgroundColor:"#ffffff",
		borderRadius:15,
		margin:10,
		height:50,
		flex:8,


	},

	addButton:{
		
		flex:1,
		bottom:-15,

	},

	scroll:{

		marginTop:20,
	
	//	height:Dimensions.get("window").height-120,
		
	},
	
	


});

export default ToDoListScreen;
