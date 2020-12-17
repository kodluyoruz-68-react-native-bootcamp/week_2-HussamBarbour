import React, {useState} from 'react';
import {View, TextInput,Text, TouchableOpacity, StyleSheet} from 'react-native';



const TodoForm = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const addTodoHandler = () => {
        if (newTodoItem){
            onAddTodo(newTodoItem);
        }
        setNewTodoItem('');
    };
    return (
        <View style={styles.container}>
            <TextInput testID="input"
            value={newTodoItem}
            ref={input => { textInput = input }} 
            onChangeText={todoInputHandler}
            placeholder="Type someting to do.." style={styles.input} />
            <TouchableOpacity
                testID="button"
                onPress={addTodoHandler}
                style={styles.submit} >
                <Text>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}

export {TodoForm};

const styles = StyleSheet.create({
    container: {
      margin: 20,
      padding: 20,
      borderRadius: 20,
      backgroundColor:  '#ccc',
    },
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    submit:{
        backgroundColor: '#ddd',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    }
  });
  