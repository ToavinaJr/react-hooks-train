import { AppContext } from "../context";
import { useState } from "react";
import Login from "./Login";
import User from "./User";

const ContextTutorial = () => {
    const [userName, setUserName] = useState('');
    
    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <h1>ContextTutorial</h1>
            <Login />
            <User />
        </AppContext.Provider>
    )
}

export default ContextTutorial