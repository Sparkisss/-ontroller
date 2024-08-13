import { FC, useRef} from 'react';
import Button from '../UI/button/Button';
import classes from './AddPage.module.css'

interface AddPageProps {
    params: string | undefined;
    handleFileChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    handlePhotoRemove: ((index: number) => void);
    activeId: any;
}

const AddPage: FC<AddPageProps> = ({ params, handleFileChange, handlePhotoRemove, activeId}) => {

    const refInput = useRef<HTMLInputElement | null>(null)

    const handleButtonClick = () => {
        refInput.current?.click()
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
                <div className={classes.wrap_btn}>
                    <Button onClick={handleButtonClick}>Add photo</Button>
                    <Button onClick={() => handlePhotoRemove(activeId)}>Delete photo</Button>
                </div>
        </>
    );
};

export default AddPage;