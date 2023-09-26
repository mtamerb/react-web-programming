import React, {Component} from 'react';
import './App.css';

import User from "./components/User";


const user = {
    name: "Tamer Bilici",
    age: 23,
    jobs: "Software Developer",
    languages: ["Turkish", "English", "German"]
}

class App extends Component {
    render() {
        return (
            <div>
                {/* <User name="Tamer Bilici" age={23} jobs="Software Developer"/>
                <br></br>
                    <User name="Ceyda Yılmaz" age={21} jobs="Software Developer"/>*/}
                {/*
                <User data = {user}/>
*/}
                <User data={user}/>
            </div>
        );
    }
}

export default App;
