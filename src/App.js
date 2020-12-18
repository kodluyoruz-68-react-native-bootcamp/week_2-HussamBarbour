import React, {useState} from 'react';
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
    <Item onToggle={checkItem} onLongPress={deleteItem} item={item}/>
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
        
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.countContainer}><Text style={styles.count}>{count}</Text></View>
          </View>
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
    backgroundColor: '#c2e5f5',
    justifyContent: 'space-between',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  title: {
    fontSize: 50,
    color: 'blue'
  },
  emptyText : {
    alignSelf: 'center',
    fontSize : 26,
    color: '#666'
  },
  countContainer: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 44/2,
  },
  count:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    marginHorizontal: 16,
    paddingVertical: 10,
    flex: 5,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 2,
  }
});