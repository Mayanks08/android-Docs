import { useEffect, useState } from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [title, setTitle] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
      method: "GET",
      
    })
    .then((response) =>{
      if(!response.ok){
        Alert.alert("Error occured");
       
      }
       return response.json();
    })
    .then((data) => setTitle(data.title))
    .catch((ex) => Alert.alert("Somethink went wrong",ex));
  },[])
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
