import React, { useMemo, useEffect, useState } from 'react'
import axios from "axios";

const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toogle, setToogle] = useState(false)

    useEffect( () => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setData(response.data)
            });
    }, []);

    interface Comment {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }
    // findLongestName est recompilée à chque rechargement de la page
    const findLongestName = (comments: Comment[] | null): string | null => {
        if (!comments) 
            return null;

        let longestName = "";

        for(let i=0; i<comments.length; i++) {
            const currentName = comments[i].name
            
            if(currentName.length > longestName.length)
                longestName = currentName;
        }
        console.log("Was computed");
        
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <h1>MemoTutorial</h1>
            <div>
                {getLongestName}
            </div>
            <button onClick={() => setToogle(!toogle)}>
                {""} Toogle
            </button>
            {toogle &&  <h2>Toogle</h2> }
        </div>
    )
}

export default MemoTutorial