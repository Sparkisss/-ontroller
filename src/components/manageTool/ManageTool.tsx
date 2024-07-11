import {FC, ReactNode} from 'react';
import classes from "./ManageTool.module.css"
import { DataProps } from '../../types/types';

const ManageTool: FC<DataProps> = ({data}) => {
    let nData: number = 0; 
    if (data !== '') nData = +data - 1
    else nData = 1
   

    interface IControl {
        info: IStatus[];
    }
    
    interface IStatus {
        pump1: string;
        pump2: string;
        sensor1: string;
        sensor2: string;
    }
    
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
        ]
    };

    console.log(typeof data)
    console.log(data)

    return (
        <>
            <h3 className={classes.title}>Control status is {data}</h3>
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
        </>
    );
};

export default ManageTool;