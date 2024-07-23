import {FC, useEffect, useRef, useState} from 'react';
import Button from '../UI/button/Button';
import { DataProps } from '../../types/types';


const ObjectState: FC<DataProps> = ({data, send} :DataProps) => {

    const [autoActive, autoSetIsActive] = useState<boolean>(true);
    const [manActive, manSetIsActive] = useState<boolean>(false);

    let newData = data?.split(" ").map(String); 

    const divRef = useRef<HTMLDivElement>(null)

    const handleClickBtnAuto = () => {
        send(0, 0, 0)
        changeStatusRender('1')
        autoSetIsActive(true)
        manSetIsActive(false)
    }

    const handleClickBtnManual = () => {
        send(1, 1, 1)
        changeStatusRender('2')
        manSetIsActive(true)
        autoSetIsActive(false)
    }

    useEffect(() => {
        if (newData) {
            for (let i = 0; i < newData?.length; i++) {
                if(newData[7] === '1') {
                    changeStatusRender('ok') 
                } else if (newData[8] === '1') {
                    changeStatusRender('attention')
                } else if (newData[9] === '1') {
                    changeStatusRender('error')
                }
            }
        }
               
    }, [data])

    const changeStatusRender = (status: string) => {
        if (status && divRef.current) {
            if (divRef.current && status === 'ok') {
                divRef.current.className = '';
                divRef.current.classList.add('divContain', 'ok')
            }
            if (divRef.current && status === 'attention') {
                divRef.current.className = '';
                divRef.current.classList.add('divContain', 'attention')
            }
            if (divRef.current && status === 'error') {
                divRef.current.className = '';
                divRef.current.classList.add('divContain', 'error')
            }
        }
        if (divRef.current && status === '2') {
            divRef.current.className = '';
            divRef.current.classList.add('divContain', 'manual')
        }   
    }

    return (
        <>
            <div className='mode'>
                <h3>Mode: {data}</h3>
                <Button active={autoActive} onClick={handleClickBtnAuto}>Auto</Button>
                <Button active={manActive} onClick={handleClickBtnManual}>Man.</Button>
            </div>
            <div className='state'>
                <h3>State:</h3>
                <div ref={divRef} className='divContain'>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default ObjectState;