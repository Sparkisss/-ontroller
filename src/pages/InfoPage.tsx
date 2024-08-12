import { useParams } from 'react-router';
import Button from '../components/UI/button/Button';
import { FC } from 'react';
import Slider from '../components/slider/Slider';
import AddPage from '../components/addPage/AddPage';

const InfoPage: FC = () => {
    const params = useParams<{id: string}>()
    
    return (
        <main className='mainInfoWrapper'>
            <div className='listOfEquipment'>
                <AddPage params={params.id}/>
            </div>
            <div className='slider'>
                <Slider/>
            </div>
            <div className='todoTask'>
                <h3>List of tasks</h3>
                <Button></Button>
                <Button></Button>
                <ul>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                </ul>
            </div>
        </main>
    );
};

export default InfoPage;