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
            onChangeText={todoInputHandler}
            placeholder="Type someting to do.." style={styles.input} />
            <TouchableOpacity
                testID="button"
                onPress={addTodoHandler}
                style={styles.submit} >
                <Text style={styles.submitText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}

export {TodoForm};

const styles = StyleSheet.create({
    container: {
      margin: 0,
      padding: 20,
      backgroundColor:  '#ffffff',
    },
    input:{
        borderWidth: 1,
        fontSize: 20,
        padding: 20,
        borderRadius: 5,
    },
    submit:{
        backgroundColor: '#2a9df4',
        alignItems: 'center',
        padding: 20,
        marginTop: 10,
        borderRadius: 5,
    },
    submitText:{
        color: '#ffffff',
        fontSize: 20,
    }
  });
  