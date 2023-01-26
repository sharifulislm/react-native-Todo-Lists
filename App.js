import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from './Colors';
import AddListModal from './components/AddListModal';
import ToduList from './components/ToduList';
import tempData from './tempData';


export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    list: tempData
  }

  componentDidMount() {
  //  firebase = new Fire();
  }

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }
  renderList = list => {
    return <ToduList list={list} updateList={this.updateList}/>
  };

 addList = list => {
      this.setState({list: [...this.state.list,{...list, id: this.state.list.length + 1, todos: []}]});
 };
 updateList = list => { 
  this.setState({
    list: this.state.list.map(item => {
      return item.id === list.id ? list : item;
    })
  })
 };

  render(){
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible}
        onRequestClose={()=> this.toggleAddTodoModal()}>
          <AddListModal closeModel={() => this.toggleAddTodoModal()}/>
        </Modal>
        <View style={{flexDirection: "row"}}>
        <View style={styles.divider}/>
        <Text style={styles.title}> Todo 
       <Text style={{fontWeight:"300", color:Colors.blue}}>Lists</Text>
        </Text>
        <View style={styles.divider}/>
        
      </View>
      <View style={{marginVertical: 48}}>
      <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal() }>
      <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.add}> Add List</Text>
      </View>
      <View style={{height: 275, paddingLeft: 32}}>
        <FlatList 
        data={this.state.list}
        keyExtractor={item => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem = {({item}) => this.renderList(item)}
        keyboardShouldPersistTaps="always"
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    backgroundColor:Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize:38,
    fontWeight:"800",
    color: Colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: Colors.blue,
    fontWeight: "600",
    fontSize: 14,
    margin: 8

  }
});
