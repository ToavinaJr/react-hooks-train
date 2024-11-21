import { useEffect, useState } from "react";
import axios from "axios";


const EffectTutorial = () => {
    const [data, setData] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Hello world");
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setData(response.data[0].email);
                console.log("Api wws called");
                
            })
    }, [data]);
    
    return (
        <div>
            <h1>EffectTutorial </h1>
            <div>{data}</div>
            <div>{count}</div>
            <button onClick={() => {setCount(count+1)}}>+</button>
        </div>
    )
}

export default EffectTutorial