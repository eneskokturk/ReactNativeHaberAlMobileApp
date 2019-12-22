//import liraries
import React, { Component } from 'react';
import { Text } from 'native-base';
import moment from 'moment'
import 'moment/locale/tr'  
moment.locale('tr')

// create a component
class Time extends Component {

    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment( this.date || moment.now() ).fromNow();
        return (
            <Text note style={{marginHorizontal:10}}>{time}</Text>
        );
    }
}


//make this component available to the app
export default Time;
