import { HomeService } from '../services/home.service'
import { useEffect, useState } from 'react'

const AddArsenalComponent = ({ arsenalId }) => {
    const _unitService = HomeService();
    const [createArsenalName, setCreateArsenalName] = useState('');
    const [createArsenalNumCannon, setCreateArsenalNumCannon] = useState('');
    const [arsenal, setArsenal] = useState('');

    const addArsenal = () => {

        _unitService.addArsenal(createArsenalName, createArsenalNumCannon)
            .then(a => { alert('add arsenal = ' + a.ok) });
    }

    const patchArsenal = () => {
        _unitService.patchArsenal(arsenal, 9);
    }

    return (
        <>
            <h4>add Arsenal</h4>
            <input type='text' name='arsenal' placeholder='arsenal' onChange={(e) => setArsenal(e.target.value)} />
            <button className="btn-comment" onClick={patchArsenal}>Update Arsenal</button>
            <br />
            <br />
            <input type='text' name='arsenalName' placeholder='name arsenal' onChange={(e) => setCreateArsenalName(e.target.value)} />
            <input type='text' name='arsenalNumCannon' placeholder='num cannon arsenal' onChange={(e) => setCreateArsenalNumCannon(e.target.value)} />
            <button className="btn-comment" onClick={addArsenal}>Add Arsenal</button>
        </>
    )
}
export { AddArsenalComponent }