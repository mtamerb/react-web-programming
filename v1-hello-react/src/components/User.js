import React, {useState} from 'react'

function User() {
    const [user, setUser] = useState({
        name: "Tamer Bilici", age: 23,
        jobs: "Software Developer", languages: ["Turkish", "English", "German"]
    })

    return (
        <div>

            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.jobs}</div>
            <div>{user.languages}</div>

            <button onClick={()=> setUser(
                {name: "Ceyda", age: 19, jobs: "Software Developer", languages: "Turkish"})
            }>Change User</button>

            <button onClick={()=> setUser(
                {...user, languages: "Turkish"})
            }>Change2 User</button>

        </div>
    )
}

export default User
