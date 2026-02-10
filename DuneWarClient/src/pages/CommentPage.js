import { HOST_SERVER } from '../environment'
import { useState } from 'react'
import '../pages/CommentPage.css'
import { HomeService } from '../services/home.service'
import { ArsenalService } from '../services/arsenal.service'
import { ActionModal } from '../modalWindow/ActionModal'
import { AddproductComponent } from '../components/addProduct.component'
import { AddArsenalComponent } from '../components/addArsenal.component'
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { useEffect } from 'react'

const CommentPage = () => {
    const _unitService = HomeService();
    const _arsenalService = ArsenalService();
    const [secret, setSecret] = useState(0);
    const [visibleModal, setVisibleModal] = useState(false);
    const [page, size] = [1, 40]
    const [options, setOptions] = useState([]);

    useEffect(() => {
        
        _arsenalService.getArsenal(page, size)
            .then(res => {
                console.log("   I    = ", res);

                let resList = res.map(a => {
                    return {
                        label: a.name,
                        value: a.id,
                    }
                })

                setOptions(resList);

                console.log("m   = ", options)
            })
            .catch(err => {
                
            });
            
    }, [])


    const getSecret = () => {

        fetch(HOST_SERVER + '/Basa/GetRevealedSecret',
            {
                method: 'POST',
                body: 9,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer gdfhdfhjdfhjdfjdj'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

 
                setSecret(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
    }
    getSecret();

   
    const submitForm = () => {
        setVisibleModal(true);
    }

    const onHide = ()=>{
        setVisibleModal(false);
    }

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    console.log("apple".localeCompare("banana")); 
        console.log("banana".localeCompare("apple"));  
            console.log("apple".localeCompare("apple")); 
 

    return (
        <>
        <div>
            <h5>Comment</h5>
            <div autoComplete='off' >

                    <AddproductComponent/>
                    <br />
                    <Select
                        showSearch={{
                            optionFilterProp: 'label',
                            filterSort: (optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
                        }}
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        defaultValue={[]}
                        onChange={handleChange}
                        options={options}
                    />
                    <br />
                    <br />
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />

                    <br />
                    <br />
                    <button onClick={submitForm}>Submit</button>
                    <br />
                    <br />
            </div>
                Secret revealed:  {secret}

            </div>
            <ActionModal show={visibleModal} onHide={onHide} />
        </>
    )
}
export {CommentPage}