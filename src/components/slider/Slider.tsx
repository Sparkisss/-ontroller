import classes from './Slides.module.css'
import { FC} from 'react'

interface AddSliderProps {
    images: File[] | undefined;
    setActiveId: any;
    activeId: any;
}

const Slider: FC<AddSliderProps> = ({images, setActiveId, activeId}) => {        
    

    const handleClickPrev = () => {
        if (activeId > 0) {
            return setActiveId(activeId - 1)
        } else return setActiveId(images?.length ? images.length- 1 : 0)
    }

    const handleClickNext = () => {
        if (images) {
            if (activeId + 1 <= images.length - 1) {
                return setActiveId(activeId + 1)
            } else return setActiveId(0)
        }
    }
    return (
        <>
            <div className={classes.icon}>
                <div className={classes.prev} onClick={handleClickPrev}/>                
                <div className={classes.next} onClick={handleClickNext}/>
            </div>
            <div className={classes.slides}>
                {images?.map((image, index) => (
                    <div key={index} className={`${classes.slide} ${index === activeId ? 'active' : ''}`}>
                       <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Slider;