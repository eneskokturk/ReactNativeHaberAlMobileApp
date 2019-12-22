import React, { Component } from 'react';
import {Alert, View ,ActivityIndicator, Text} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Button,Right } from 'native-base';

import  DataItem from '../../component/dataItem';
import Modal from '../../component/modal';

import { getArticles } from '../../service/news';

export default class Tab2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

componentDidMount(){
  getArticles('sport').then(data=>{
    this.setState({
      isLoading: false,
      data: data
    });
  },error => {
    Alert.alert('Error','Birşeyler yanlış gitti...');
  }
  )
}


  render() {

    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#0000ff" animating ={this.state.is}/>
          <Text >Lütfen Bekleyiniz...</Text>
      </View>
    ) :(
      <List 
      dataArray={this.state.data}
      renderRow={(item) => {
          return (
            <DataItem onPress={this.handleItemDataOnPress} data={item} />
          )
      }} />
  )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />

      </Container>
    );
  }
}