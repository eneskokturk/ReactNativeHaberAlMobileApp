import React, { Component } from 'react';
import { Container, Header, Content, Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#009387'}} hasTabs>
          <Left/>
        <Body>
          <Title style={{color:'white'}}>                   Haber AL</Title>
        </Body>
        <Right />
      </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#009387'}}
            activeTabStyle={{backgroundColor:'#009387'}}
            textStyle={{color:'white'}}
            activeTextStyle={{color:'white'}}
            heading="Gündem">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}}
            activeTabStyle={{backgroundColor:'#009387'}}
            textStyle={{color:'white'}}
            activeTextStyle={{color:'white'}}
            heading="Spor">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} 
            activeTabStyle={{backgroundColor:'#009387'}} 
            textStyle={{color:'white'}}
            activeTextStyle={{color:'white'}}
            heading="Teknoloji">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} 
            activeTabStyle={{backgroundColor:'#009387'}} 
            textStyle={{color:'white'}}
            activeTextStyle={{color:'white'}}
            heading="Sağlık">
            <Tab4 />
            </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} 
            activeTabStyle={{backgroundColor:'#009387'}} 
            textStyle={{color:'white'}}
            activeTextStyle={{color:'white'}}
            heading="Bilim">
            <Tab5 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}