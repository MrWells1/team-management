import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {

   //fetch employee data from Firebase after EmployeeList is rendered. 
   componentWillMount() {
      this.props.employeeFetch();
      this.createDataSource(this.props);
   }

   componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component
      //will be rendered with 
      //this.props is still the old set of props
      this.createDataSource(this.nextProps);
   }

   createDataSource({ employees }) {
      const ds = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(employees);
   }

   render() {
      return(
         <View>
            <Text>Here is the employee list</Text>
         </View>
      );
   }
}

const mapStateToProps = state => {

};

export default connect(null, { employeeFetch })(EmployeeList);