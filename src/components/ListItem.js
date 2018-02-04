import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardItem } from './commons';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
   handlePressRow() {
      Actions.createEmployee({ item: this.props.item});
   }
   render() {
      const { name } = this.props.item;
      return(
         <TouchableWithoutFeedback onPress={this.handlePressRow.bind(this)}>
            <View>
               <CardItem style={styles.cardStyle}>
                  <Text style={[styles.textStyle, styles.nameStyle]}>{name}</Text>
                  {/* <Text style={styles.textStyle}>{phone}</Text>
                  <Text style={styles.textStyle}>{shift}</Text> */}
               </CardItem>
            </View>
         </TouchableWithoutFeedback>
      );
   }
};

const styles = {
   cardStyle: {
      flexDirection: 'column'
   },
   textStyle: {
      fontSize: 18,
      paddingLeft: 5,
      paddingTop: 10, 
      paddingBottom: 10
   },
   nameStyle: {
      fontWeight: 'bold'
   }
};

export default ListItem;   