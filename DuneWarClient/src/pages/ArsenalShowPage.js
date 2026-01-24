import { useParams } from "react-router-dom"
import { HomeService } from '../services/home.service'
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"

const ArsenalShowPage =()=>{
    const { id } = useParams()
    const [arsenal, setArsenal] = useState({});
    const _homeSrvice = HomeService();
    const navigate = useNavigate();

    useEffect(() => {

        _homeSrvice.GetArsenalWithId(id)
            .then(a => {

                return a.json();
            }).then(b => {
                console.log("0005 Arsenal ", b)
               setArsenal(b);
            })
    },[])

    const handleEdit = () => {
 
        navigate(`/arsenal/${id}/edit`, { state: 123 })
    }

    return (<>
        <div> Aresnal {id}</div>
        <h6>id:{arsenal.id}</h6>
        <h6>name:{arsenal.name}</h6>
        <h6>name:{arsenal.numCannon}</h6>
        <button onClick={handleEdit}>Edit</button>
    </>
    )
}
export { ArsenalShowPage }