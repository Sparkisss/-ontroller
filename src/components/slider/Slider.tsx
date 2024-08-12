import classes from './Slides.module.css'
import photo_1 from '../../assets/slider/1.jpg'
import photo_2 from '../../assets/slider/2.jpg'
import photo_3 from '../../assets/slider/3.jpg'
import photo_4 from '../../assets/slider/4.jpg'
import photo_5 from '../../assets/slider/5.jpg'
import { useState } from 'react'

const images = [photo_1, photo_2, photo_3, photo_4, photo_5];

const Slider = () => {        
    const [activeId, setActiveId] = useState<number>(0) 

    const handleClickPrev = () => {
        if (activeId > 0) {
            return setActiveId(activeId - 1)
        } else return setActiveId(images.length - 1)
    }

    const handleClickNext = () => {
        if (activeId + 1 <= images.length - 1) {
            return setActiveId(activeId + 1)
        } else return setActiveId(0)
    }
    return (
        <>
            <div className={classes.icon}>
                <div className={classes.prev} onClick={handleClickPrev}/>                
                <div className={classes.next} onClick={handleClickNext}/>
            </div>
            <div className={classes.slides}>
                {images.map((image, index) => (
                    <div key={index} className={`${classes.slide} ${index === activeId ? 'active' : ''}`}>
                        <img src={image}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Slider;