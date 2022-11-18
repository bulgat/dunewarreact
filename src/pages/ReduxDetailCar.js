import React from "react";
import { connect } from "react-redux";
import { Component } from "react";

class ReduxDetailCar extends Component{
    render( ){
        if(!this.props.car){
            return (<p>select car</p>)
        }
        return (
            <>
            <h2>{this.props.car.name}</h2>
            <img src={this.props.car.img}/><br/>
            <p>{this.props.car.name}</p>
            <p>Speed: {this.props.car.speed}</p>
            <p>weight: {this.props.car.weight}</p>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        car:state.active
    }
}
export default connect (mapStateToProps)(ReduxDetailCar)