import React from 'react'
import PropTypes from 'prop-types';

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

    if (!data) {
        return null;
    }

    return (
        <div>
            {/*<div>Name : {props.name}</div>
            <div>Age : {props.age}</div>
            <div>Jobs : {props.jobs}</div>*/}

            <h1>User </h1>
            <div>Name : {data.name}</div>
            <div>Age : {data.age}</div>
            <div>Jobs : {data.jobs}</div>
            <h2>Languages :</h2>
            <ul> {data.languages.map((language, i) => {
                return (
                    <li key={i}>{language}</li>
                )
            })}</ul>
            <hr/>
        </div>
    )
}


User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    })
};

export default User

