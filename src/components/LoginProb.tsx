import React from 'react'

const LoginProb = ({ setUserName }: { setUserName: (text: string) => void }) => {
  return (
    <div>
      <input
        type="text"
        style={{padding: "10px"}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  )
}

export default LoginProb