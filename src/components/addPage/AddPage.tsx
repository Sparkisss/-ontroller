import { FC, useRef, useState } from 'react';
import Button from '../UI/button/Button';

interface AddPageProps {
    params: string | undefined;
}

const AddPage: FC<AddPageProps> = ({ params }) => {
    const [images, setImages] = useState<File[]>([])
    const refInput = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setImages(prevFiles => [...prevFiles, ...filesArray]);
        }
    }

    const handleButtonClick = () => {
        refInput.current?.click()
        console.log(images)
    }

    return (        
        <>
            <h3>Photo of Object {params}</h3>
            <input 
                ref={refInput} 
                type='file' 
                onChange={handleFileChange} 
                multiple
                style={{display: 'none'}}/>
            <Button onClick={handleButtonClick}>Add photo</Button>
        </>
    );
};

export default AddPage;