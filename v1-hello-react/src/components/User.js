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

    const {data, title} = props

    console.log(data.title)
    
    if (!data) {
        return null;
    }

    return (
        <div>
            {/*<div>Name : {props.name}</div>
            <div>Age : {props.age}</div>
            <div>Jobs : {props.jobs}</div>*/}

            <strong>{title}</strong>
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
        name: PropTypes.string.isRequired, /* object : PropTypes.string*/
        age: PropTypes.number.isRequired,
        jobs: PropTypes.string
    })
};

User.defaultProps = {
    title: "Default Title"
}
export default User

