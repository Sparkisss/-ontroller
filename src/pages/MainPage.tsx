import { useParams } from 'react-router';
import Button from '../components/UI/button/Button';

const MainPage = () => {
    const params = useParams<{id: string}>()

    return (
        <main className='mainPageWrapper'>
            <div className='controlState'>
                <div className='mode'>
                    <h3>Mode:</h3>
                    <Button>Auto</Button>
                    <Button>Man.</Button>
                </div>
                <div className='state'>
                    <h3>State:</h3>
                    <div className='divContain'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='infoOfObject'>
                <h2>Object {params.id}</h2>
                <ul>
                    <li>work 1</li>
                    <li>work 2</li>
                    <li>work 3</li>
                </ul>
            </div>
            <div className='manageTool'>
                <h3>Control</h3>
                <ul>
                    <li>pump 1</li>
                    <li>pump 2 </li>
                    <li>sensor 1</li>
                    <li>sensor 2</li>
                </ul>
            </div>
            <div className='archive'>
                <h3>Archive of events</h3>
                <div>event 1</div>
                <div>event 2</div>
                <div>event 3</div>
            </div>
        </main>
    );
};

export default MainPage;