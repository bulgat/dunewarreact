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

//type SelectCommonPlacement = SelectProps['placement'];

const CommentPage = () => {
    const _unitService = HomeService();
    const _scoreService = ScoreService();
    const _arsenalService = ArsenalService();
    const [secret, setSecret] = useState(0);
    const [visibleModal, setVisibleModal] = useState(false);
    const [page, size] = [1, 40]
    const [options, setOptions] = useState([]);
    const [scoreList, setScoreList] = useState([]);
    const [studentList, setStudentList] = useState([]);

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
        _scoreService.getScoreList().then(res => {
            console.log("m   = ", res)
            setScoreList(res.data.map(a => {
                return {
                    value: a.id,
                    label: a.name
                }
            }));
        })
        _scoreService.getStudentList().then(res => {
 
            setStudentList(res.data.map(a => {
                return {
                    value: a.studentId,
                    label: a.name
                }
            }));
        })
        _scoreService.getSecret()
            .then(data => {


                setSecret(data);
            })
            .catch(err => {
                console.error('Error fetching data');
            });
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

    console.log("apple".localeCompare("banana")); 
    console.log("banana".localeCompare("apple"));  
    console.log("apple".localeCompare("apple")); 

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
                                defaultValue="lucy0"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                placement={placement}
                                popupMatchSelectWidth={500}
                                options={scoreList}
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
                        options={studentList}
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