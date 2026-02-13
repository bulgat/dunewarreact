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
import type { RadioChangeEvent } from 'antd';
import { ScoreService } from '../services/score.service'

const CommentPage = () => {
    const _scoreService = ScoreService();
    const _arsenalService = ArsenalService();
    const [secret, setSecret] = useState(0);
    const [visibleModal, setVisibleModal] = useState(false);
    const [page, size] = [1, 40]
    const [options, setOptions] = useState([]);

    const [clasterList, setClasterList] = useState({ });

    useEffect(() => {
        
        _arsenalService.getArsenal(page, size)
            .then(res => {
      
                let resList = res.map(a => {
                    return {
                        label: a.name,
                        value: a.id,
                    }
                })

                setOptions(resList);

                
            })
            .catch(err => {
                
            });
        console.log('ZZZ', _scoreService.getFunctionList()['score'])
            //score
        _scoreService.getFunctionList()['score']().then(res => {
            const list = res.data.map(a => {
                return {
                    value: a.id,
                    label: a.name
                }
            })
            clasterList['score'] = list
        })
        //student
        _scoreService.getFunctionList()['student']().then(res => {
             const list = res.data.map(a => {
                return {
                    value: a.studentId,
                    label: a.name
                }
            })
            clasterList['student'] = list
        })
        _scoreService.getSecret()
            .then(data => {


                setSecret(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
        
        console.log("apple".localeCompare("banana")); 
        console.log("banana".localeCompare("apple"));  
        console.log("apple".localeCompare("apple")); 
        
    }, [])


    const submitForm = () => {
        setVisibleModal(true);
    }

    const onHide = ()=>{
        setVisibleModal(false);
    }

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    const [placement, SetPlacement] = useState('bottomLeft');

    return (
        <>
        <div>
            <h5>Comment</h5>
            <div autoComplete='off' >

                    <AddproductComponent/>
                    <br />
                    <div>
                    width
                        <Select key={ 1 }
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
                    </div>
                    <div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <div className='up-select'>
                            <Select key={2}
                                defaultValue="score"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                placement={placement}
                                popupMatchSelectWidth={500}
                                options={clasterList['score']}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <Select key={2}
                        defaultValue="lucy01"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={clasterList['student']}
                    />
                    <br />
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