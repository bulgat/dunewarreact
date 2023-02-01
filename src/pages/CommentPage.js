import { CommentRedux } from "../components/CommentRedux"
import CarList from '../reducerComponent/CarList'
import ReduxDetailCar from './ReduxDetailCar'
import Like from "../reducer/Like"
import Comment from "../reducer/Comment"

const CommentPage =()=>{
    return (
        <>
        <h5>Comment   CCCCCCCCCCCC</h5>
        <CarList/>
        {//<CommentRedux/>
        }
        <ReduxDetailCar/>
        <Like/>
        <Comment/>
        </>
    )
}
export {CommentPage}