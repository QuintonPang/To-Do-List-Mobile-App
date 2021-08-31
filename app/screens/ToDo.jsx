import React from "react";
import { Text,
	StyleSheet,
	Dimensions,
	SafeAreaView

} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ToDo = (props)=>{



	return(


		


		


			<Card.Content>

				<Title>
					
					{props.toDo}

				</Title>


			</Card.Content>
			 
	

	);


};


export default ToDo;
