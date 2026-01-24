import { AddproductComponent } from '../components/addProduct.component'
import { useParams } from "react-router-dom"

const EditArsenalPage = () => {
    const { id } = useParams()

    return (
        <>
            <h5>Edit page: { id }</h5>
            <AddproductComponent arsenalId={ id } />
        </>
    )
}

export { EditArsenalPage }