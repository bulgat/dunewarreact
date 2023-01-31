import {connect} from 'react-redux'
import { Button } from 'react-bootstrap'

function Like(props){
    console.log(props)


    return (
    <div className="button-control">
        <Button onClick={props.onIncrementLikes}>Like{props.likes}</Button>
        <Button onClick={props.onDecrementLikes}>Dislike</Button>
        
    </div>)
} 
/*
function mapStateToProps(state){
    // console.log("mapStateToProps >",state)
     const {likesReducer} = state
     return (
         {likes:likesReducer.likes}
     )
 }
 function mapDispatchToProps(dispatch){
     return { 
         onIncrementLikes:()=>{dispatch(incrementLikes())},
         onDecrementLikes:()=>{dispatch(decrementLikes())
         
     }
    }
 }
 */
//export default connect(mapStateToProps,mapDispatchToProps)(Like)
export default (Like)