import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Item = ({ item,onCheckItem,onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity testID="button" onPress={() => onCheckItem(item)} onLongPress={() => onDelete(item)}>
            <View style={[styles.button,(item.isDone) ? styles.checkedView : null]}>
                <Text style={[(item.isDone) ? styles.checkedText : null]}>{item.title}</Text>
            </View>
            </TouchableOpacity>
      </View>
    );
}

export { Item };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },
      button: {
        alignItems: "center",
        backgroundColor: "red",
        color: 'white',
        padding: 10
      },
      checkedView:{
        opacity: 0.5,
      },
      checkedText:{
        textDecorationLine: 'line-through'
      },
});
