import { Link } from 'react-router-dom';
import Button from '../components/UI/button/Button';
import arrowLeft from '../source/icon/angle-square-left.svg';
import arrowRight from '../source/icon/angle-square-right.svg';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getUsers } from '../store/slices/userSlice';

const AuthPage = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.user.data)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <main className='authPageWrapper'>
            <ul className='list'>
                {users.map((user:any) => (
                    <Link key={user.id} to={`main/${user.id}`}>
                        <li>{user.id}.{user.address.city}-{user.address.street}-{user.address.suite}</li>
                    </Link>
                ))}
            </ul>
            <div className='arrowContain'>
                <Button className='custom-class'>
                    <img src={arrowLeft} alt="left"/>
                </Button>
                <Button className='custom-class'>
                    <img src={arrowRight} alt="right"/>
                </Button>
            </div>
        </main>
    );
};

export default AuthPage;
