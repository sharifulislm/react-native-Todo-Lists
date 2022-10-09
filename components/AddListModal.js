import { AntDesign } from '@expo/vector-icons';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../Colors';
export default class AddListModal extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModel}>
        <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={{alignSelf: "stretch",marginHorizontal: 32}}>
            <Text style={styles.title}> Create Todo List</Text>
            <TextInput style={styles.input} placeholder="List Name"/>
            <TouchableOpacity style={[styles.create, {backgroundColor: "blue"}]}>
               <Text style={{color: Colors.white, fontWeight: "600"}}> Create </Text>
            </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: Colors.black,
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.blue,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 36,
        fontSize: 18
    },
    create:{
        marginTop: 24,
        height:50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    }
})