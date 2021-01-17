import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Item = ({ item,onToggle,onLongPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity testID="button" onPress={() => onToggle(item)} onLongPress={() => onLongPress(item)}>
            <View style={[styles.button,(item.isDone) ? styles.checkedView : null]}>
                <Text style={[styles.buttonText,(item.isDone) ? styles.checkedText : null]}>{item.title}</Text>
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
        backgroundColor: "white",
        color: 'black',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 10,
        borderRadius: 5,
      },
      buttonText:{
        fontSize: 20,
      },
      checkedView:{
        opacity: 0.5,
      },
      checkedText:{
        textDecorationLine: 'line-through'
      },
});
