import {connect} from 'react-redux'
import { Button } from 'react-bootstrap'
import {decrementLikes,incrementLikes} from '../reducerAction/indexAction'

function Like(props){
    console.log(props)


    return (
    <div className="button-control">
        <Button onClick={props.onIncrementLikes}>Like={props.like}</Button>
        <Button onClick={props.onDecrementLikes}>Dislike</Button>
        
    </div>)
} 

function mapStateToProps(state){
     
     const {likeReducer} = state
     return (
         {like:likeReducer.like}
     )
 }
 function mapDispatchToProps(dispatch){
     return { 
         onIncrementLikes:()=>{dispatch(incrementLikes())},
         onDecrementLikes:()=>{dispatch(decrementLikes())
         
     }
    }
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(Like)
//export default (Like)