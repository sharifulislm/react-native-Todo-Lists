import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Colors";
import ToduModal from "./ToduModal";


export default class ToduList extends React.Component {
   state = {
     showListvisible: false
   };
   toggleListModal(){
    this.setState({showListvisible: !this.state.showListvisible});
   }

    render(){
        const list = this.props.list;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        const RemainingCount = list.todos.length - completedCount;
        return(
            <View>
                <Modal animationType="slide" visible={this.state.showListvisible} onRequestClose={()=> this.toggleListModal()}>
                <ToduModal list={list} CloseModal={()=> this.toggleListModal()} updateList={this.props.updateList}/>
                </Modal>
                <TouchableOpacity style={[styles.listContainer, {backgroundColor: list.color}]}
                onPress={() => this.toggleListModal()}
                >
                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.name}
                </Text>
                <View>
                    <View style={{alignItems: "center"}}>
                    <Text style={styles.count}> { RemainingCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                    <Text style={styles.count}>{completedCount} </Text>
                    <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        );

    }


};
const styles = StyleSheet.create({
  
    listContainer: {
        paddingVertical: 23,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.white
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white
    }

})