import { useParams } from 'react-router';
import { useState } from 'react';
import { FC } from 'react';
import Slider from '../components/slider/Slider';
import AddPage from '../components/addPage/AddPage';
import Todo from '../components/todo/Todo';

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
                <Todo/>
            </div>
        </main>
    );
};

export default InfoPage;