
import { useEffect, useState } from 'react'
import './infoLine.component.css'
import React from 'react';
import { Radio, Select, Space } from 'antd';
import type { ConfigProviderProps, RadioChangeEvent, SelectProps } from 'antd';
import { HomeService } from '../services/home.service'
import { Input } from 'antd';

const InfoLineComponent = ({ item, index, Label, allProductList }) => {
    const _homeService = HomeService();
    const [name, setName] = useState(item.name);
    const [numCannon, setNumCannon] = useState(item.numCannon);
    const [productList, setProductList] = useState(allProductList.map(a => { return a.id }));

    const style = true;

    const options: SelectProps['options'] = [];
    /*
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }*/
    for (let item of allProductList) {
        options.push({
            label: item.name,
            value: item.id,
        });

    }


    const handleChange = (value: string[]) => {
        //delete
        console.log(`001 selected ${value}`);
        setProductList(value);
    };

    const clickSave = () => {

        _homeService.patchArsenal(item.id, name, numCannon, productList)
    }

    return (

        <li key={item.id} className='li-info'>
            <div className='line-info'>
                <div className='mini-column'>{index})</div>
                <div className={`mini-column ${style ? 'fat' : ''}`} >{Label}</div>
                <div className='mini-column'>id:{item.id}</div>

                <Input placeholder="name" defaultValue={item.name}
                    onChange={(e) => setName(e.target.value)} />
                <Input placeholder="cannon" defaultValue={item.numCannon}
                    onChange={(e) => setNumCannon(e.target.value)} />
                </div>
            <a href={'arsenal/' + item.id}>Текст ссылки</a>
            <br></br>
            <br></br>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={item.productList}
                onChange={handleChange}
                options={options}
            />
            <br></br>
            <button onClick={ clickSave }>save</button>
            <br></br>
            <br></br>
        </li>
 
    )
}
export { InfoLineComponent }