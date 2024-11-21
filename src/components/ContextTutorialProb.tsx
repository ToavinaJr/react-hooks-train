import { useState } from 'react';
import LoginProb from './LoginProb';
import UserProb from './UserProb';

const ContextTutorialProb = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <h1>ContextTutorialProb</h1>
            <LoginProb setUserName={setName}/>
            <UserProb userName={name}/>
        </div>
    )
}

export default ContextTutorialProb