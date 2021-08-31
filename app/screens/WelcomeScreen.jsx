import React from "react";
import {  Pressable,
	ImageBackground,
	StyleSheet,
	Text,
	Dimensions,
	View,


} from "react-native";

const WelcomeScreen=({navigation})=>{



	return(

	

			<ImageBackground style={styles.backgroundImage} source={{uri:"https://picsum.photos/5000"}}>

			<View style={styles.nameWrapper}>
			

				<Text style={styles.name}>

					Welcome!
				</Text>


			</View>
	
		

		<Pressable style={styles.enterButton} onPress={()=>navigation.navigate("ToDoList")}>

			<Text style={styles.enterText}>
				Enter
			</Text>


		</Pressable>


		</ImageBackground>
		
			
	);



};

const styles = StyleSheet.create({


	backgroundImage:{


		width:Dimensions.get("window").width,
		height:Dimensions.get("window").height+25,
		flex:1,
		


	},
	
	enterButton:{


		backgroundColor:"#e3e3e3",
		marginBottom:50,	
		justifyContent:"center",
		alignItems:"center",
		borderRadius:20,
		height:50,	

	},

	name:{

		alignSelf:"center",
		fontFamily:"sans-serif-light",
		fontSize:40,
		

	},

	nameWrapper:{

		justifyContent:"center",

		flex:9,

	},

	enterText:{

		fontFamily:"sans-serif-medium",
		fontSize:25,

	},

});




export default WelcomeScreen;


