import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem } from './commons';

const ListItem = (props) => {
   const { name, phone, shift } = props.item;
   return(
      <CardItem style={styles.cardStyle}>
         <Text style={[styles.textStyle, styles.nameStyle]}>{name}</Text>
         <Text style={styles.textStyle}>{phone}</Text>
         <Text style={styles.textStyle}>{shift}</Text>
      </CardItem>
   );
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