type userProps = {
    userName: string;
}

const UserProb = ( {userName} : userProps ) => {
  return (
    <div>
        <h1>user : {userName}</h1>
    </div>
  )
}

export default UserProb