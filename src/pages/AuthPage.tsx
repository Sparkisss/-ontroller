import { Link } from 'react-router-dom';
import Button from '../components/UI/button/Button';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getUsers } from '../store/slices/userSlice';
import { IUser } from '../types/types';

const AuthPage = () => {
    const dispatch = useAppDispatch()
    const users:IUser[] = useAppSelector(state => state.user.data)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <main className='authPageWrapper'>
            <h2>List of object:</h2>
            <ul className='list'>
                {users.map((user) => (
                    <Link key={user.id} to={`main/${user.id}`}>
                        <li>{user.id}.{user.address.city}-{user.address.street}-{user.address.suite}</li>
                    </Link>
                ))}
            </ul>
            <div className='arrowContain'>
                <Button className='custom-class'>
                    PREVIES
                </Button>
                <Button className='custom-class'>
                    NEXT
                </Button>
            </div>
        </main>
    );
};

export default AuthPage;
