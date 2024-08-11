import {FC, useEffect, useState} from 'react';
import classes from "./ManageTool.module.css"
import { DataProps } from '../../types/types';
import Button from '../UI/button/Button';

const ManageTool: FC<DataProps> = ({data, coreCommands, send}) => {
    //обработка состояния прибора пересмотреть
    let [nData, setNData] = useState<number>(0)    

    useEffect(() => {
        if (data) setNData(nData + +data - 1)
            else setNData(5)
    }, [nData])

    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true)
    const [pumpOne, setPompOne] = useState<number>(0)
    const [pumpTwo, setPompTwo] = useState<number>(0)

    useEffect(() => {
        if(coreCommands?.[0]?.value === 1) setIsBtnDisabled(false)
        else setIsBtnDisabled(true)
    }, [coreCommands]); 
    
    const handleClickBtn = (btn: number) => {
        if (btn === 1) {
            setPompOne(prev => {
                const newPumpOne = prev === 0 ? 1 : 0;
                send(1, newPumpOne, pumpTwo); 
                return newPumpOne;
            });
        } else if (btn === 2) {
            setPompTwo(prev => {
                const newPumpTwo = prev === 0 ? 1 : 0;
                send(1, pumpOne, newPumpTwo); 
                return newPumpTwo; 
            });
        }
    }   
    // Интерфейсы
    interface IControl {
        info: IStatus[];
    }    
    interface IStatus {
        pump1: string;
        pump2: string;
        sensor1: string;
        sensor2: string;
    }
    //Данные о состоянии прибора
    const controlStateInfo: IControl = {
        info: [
            {
                pump1: 'off',
                pump2: 'off',
                sensor1: '1',
                sensor2: 'off'
            },
            {
                pump1: 'on',
                pump2: 'off',
                sensor1: '2',
                sensor2: 'off'
            },
            {
                pump1: 'on',
                pump2: 'on',
                sensor1: '3',
                sensor2: 'off'
            },
            {
                pump1: 'on',
                pump2: 'on',
                sensor1: '4',
                sensor2: 'off'
            },
            {
                pump1: 'off',
                pump2: 'off',
                sensor1: '---',
                sensor2: 'on'
            },
            {
                pump1: '...error',
                pump2: '...error',
                sensor1: '...error',
                sensor2: '...error'
            },
        ]
    };

    return (
        <div className={classes.contain}>
            <div className={classes.contain__btn}>
                <Button className={classes.contain__btn_one} disabled={isBtnDisabled} onClick={() => handleClickBtn(1)}>PUMP ONE</Button>
                <Button className={classes.contain__btn_two} disabled={isBtnDisabled} onClick={() => handleClickBtn(2)}>PUMP TWO</Button>
            </div>
            <div className={classes.contain__table}>
                <h3 className={classes.title}>Control status is in work</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Equipment</th>
                            <th>Name</th>
                            <th>State</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>pump 1</td>
                            <td>willo-12/2</td>
                            <td>{(controlStateInfo !== undefined) ? controlStateInfo.info[nData].pump1 : 'no'}</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td>pump 2</td>
                            <td>willo-12/2</td>
                            <td>{(controlStateInfo !== undefined) ? controlStateInfo.info[nData].pump2 : 'no'}</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td>sensor 1</td>
                            <td>ekf 1-11</td>
                            <td>{(controlStateInfo !== undefined) ? controlStateInfo.info[nData].sensor1 : 'no'}</td>
                            <td>OK</td>
                        </tr>
                        <tr>
                            <td>sensor 2</td>
                            <td>ekf 3-11</td>
                            <td>{(controlStateInfo !== undefined) ? controlStateInfo.info[nData].sensor2 : 'no'}</td>
                            <td>OK</td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
    );
};

export default ManageTool;