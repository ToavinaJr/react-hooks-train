import { useEffect, useLayoutEffect } from 'react'


const LayoutEffectTutorial = () => {
    useEffect(() => {
        console.log("use effect");        
    }, []);

    useLayoutEffect(() => {
        console.log("use layout effect");        
    }, []);

    return (
        <h1>LayoutEffectTutorial</h1>
    )
}

export default LayoutEffectTutorial