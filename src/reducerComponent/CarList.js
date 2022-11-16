import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CarList extends Component{
showList() {
    console.log("000====",this)
    console.log("001====",this.props)
    console.log("====",this.props.cars)
    return this.props.cars.map((car)=>{
        return (
            <li key={car.id}>{car.name}</li>
        );
    });
}

    render(){
        return(
            <>
            <ol>
{this.showList()}
            </ol>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
       cars: state.cars 
    };
}
//export default {CarList}
export default connect (mapStateToProps)(CarList)