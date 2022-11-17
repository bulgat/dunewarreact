import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {selectAction} from '../reducerAction/indexAction'

class CarList extends Component{
showList() {
    console.log("000====",this)
    console.log("001====",this.props)
    console.log("====",this.props.cars)
    return this.props.cars.map((car)=>{
        return (
            <li onClick ={()=>this.props.select(car)}
            key={car.id}>{car.name}</li>
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
function matchDispathToProps(dispatch) {
    return bindActionCreators({select:selectAction},dispatch)
}

export default connect (mapStateToProps,matchDispathToProps)(CarList)