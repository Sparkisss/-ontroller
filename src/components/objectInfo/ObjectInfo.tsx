import { FC } from 'react';
import { DataProps } from '../../types/types';

const ObjectInfo : FC<DataProps> = ({info, workFirst, workSecond, workTheard} : DataProps) => {
    return (
        <>
            <h2>{info}</h2>
            <ul>
                <li>{workFirst}</li>
                <li>{workSecond}</li>
                <li>{workTheard}</li>
            </ul>
        </>
    );
};

export default ObjectInfo;