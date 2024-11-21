import React, { useContext } from 'react'
import { AppContext } from '../context';

const Login = () => {
    const { setUserName } = useContext(AppContext);

    return (
        <div>
        <input
            type="text"
            style={{padding: "10px"}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value)
            }}
        />
        </div>
    )
}

export default Login