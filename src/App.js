import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text,FlatList, StyleSheet} from 'react-native';

import {TodoForm,Item} from './components';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [items, setItems] = useState([]);
  const [count, updateCount] = useState(0);
  const renderItem = ({item}) => (
    <Item onCheckItem={checkItem} onDelete={deleteItem} item={item}/>
  );
  function addItem(item) {
    setItems([...items, {id: Math.random().toString(),title:item, isDone: false}]);
    updateCount(count + 1);
  }
  function deleteItem(todo) {
    if (!todo.isDone){
      updateCount(count - 1);
    }
    setItems(items.filter(item => item.id !== todo.id));
  }
  function checkItem({id}) {
    const checkItems = items.map(item =>{
        if (item.id === id){
          if (item.isDone){
            updateCount(count + 1);
          } else {
            updateCount(count - 1);
          }
          return {...item, isDone: !item.isDone};
        } else {
          return item;
        }
      }
    )
    setItems(checkItems);

  }

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Todo</Text>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.body}>
          <FlatList testID="list"
            ListEmptyComponent={
              <Text style={styles.emptyText}>Empty..</Text>
            }
            keyExtractor={(item, index) => index.toString()}
            data={items}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.footer}>
          <TodoForm onAddTodo={addItem}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header:{
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    margin: 16,
  },
  title: {
    fontSize: 50,
    color: 'red'
  },
  count:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  body: {
    marginHorizontal: 16,
    paddingVertical: 10,
    flex: 3,
  },
  footer: {
    flex: 1,
  }
});