import React from 'react'

function User(props) {

    /*
    function User({data : {name , age , jobs}}) {
        return (
            <div>
                <div>Name : {name}</div>
                <div>Age : {age}</div>
                <div>Jobs : {jobs}</div>
            </div>
        )*/

    const {data} = props

    console.log(data.languages)
    console.log(data)


    return (
        <div>
            {/*<div>Name : {props.name}</div>
            <div>Age : {props.age}</div>
            <div>Jobs : {props.jobs}</div>*/}

            <h1>User </h1>
            <div>Name : {data.name}</div>
            <div>Age : {data.age}</div>
            <div>Jobs : {data.jobs}</div>
            <hr/>
            <h2>Languages :</h2>
            <div> {data.languages.map((language, i) => {
                return (
                    <div key={i}>{language}</div>
                )
            })}</div>
        </div>
    )
}

export default User

