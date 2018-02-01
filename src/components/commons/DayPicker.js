import React from 'react';
import { Picker, Text } from 'react-native';
import { CardItem } from '../commons';

const DayPicker = props => {
   return(
      <CardItem>
         <Text>Shift</Text>
         <Picker
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
         >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
         </Picker>
      </CardItem>
   );
};

export default DayPicker;