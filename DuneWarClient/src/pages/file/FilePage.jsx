import { HomeService } from '../../services/home.service'
import { useNavigate } from 'react-router-dom';
import { IconComponent } from '../../components/icon.component'
import './FilePage.css'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';


const FilePage = () => {
    const _homeService = HomeService();
    const navigate = useNavigate();
    const iconList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    const connectForbidden = () => {
        _homeService.getAuth().then(res => {

        }).catch(err => {
            console.log('0100 error = ', err)
        });
        
    }


    const props: UploadProps = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
            console.log('Your upload file:', file);
            // Your process logic. Here we just mock to the same file
            return fetch('file/upload', {
                method: 'POST',
                body: file,
            })
                .then((res) => res.json())
                .then(({ thumbnail }) => thumbnail);
        },
    };



 
    return (
        <>
            <div className='head-text'>FILE</div>
            <div className='mini-menu'>
            {iconList.map(a => {
                return <IconComponent number={ a } />
            })}
            </div>
            <br></br>
            <a href="./doc/polkan.pdf" download>Скачать pdf</a>
            <br></br>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

            <br></br>
            <button onClick={connectForbidden } area-label='button connect' role='presentation'>Conect Forbidden site</button>
        </>)
}
export { FilePage }