import { useParams } from 'react-router';
import { useState } from 'react';
import Button from '../components/UI/button/Button';
import { FC } from 'react';
import Slider from '../components/slider/Slider';
import AddPage from '../components/addPage/AddPage';

const InfoPage: FC = () => {
    const params = useParams<{id: string}>()
    const [activeId, setActiveId] = useState<number>(0) 
    const [images, setImages] = useState<File[]>([])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setImages(prevFiles => [...prevFiles, ...filesArray]);
        }
    }

    const handlePhotoRemove = (index: number) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };    
    
    return (
        <main className='mainInfoWrapper'>
            <div className='listOfEquipment'>
                <AddPage params={params.id} 
                handleFileChange={handleFileChange} 
                handlePhotoRemove ={handlePhotoRemove}
                activeId={activeId}/>
            </div>
            <div className='slider'>
                <Slider images={images} setActiveId={setActiveId} activeId={activeId}/>
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