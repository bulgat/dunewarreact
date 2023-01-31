import { CommentRedux } from "../components/CommentRedux"
import CarList from '../reducerComponent/CarList'
import ReduxDetailCar from './ReduxDetailCar'
import Like from "../reducer/Like"

const CommentPage =()=>{
    return (
        <>
        <h5>Comment   CCCCCCCCCCCC</h5>
        <CarList/>
        {//<CommentRedux/>
        }
        <ReduxDetailCar/>
        <Like/>
        </>
    )
}
export {CommentPage}