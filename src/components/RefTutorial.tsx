import { useRef, useState } from 'react'

const RefTutorial = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("Pedro");

    const handleName = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log(inputRef.current.value);
            setName(inputRef.current.value)
            inputRef.current.value = ''
        }
    }
    return (
        <div>
            <h1>{name}</h1>
            <input style={{padding: "10px"}} type="text" placeholder='place name..' ref={inputRef}/>
            <button onClick={() => { handleName() }}>Change Name</button>
        </div>
    )
}

export default RefTutorial