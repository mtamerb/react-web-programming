import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";

const name = "Tamer Bilici";
const isLoggedIn = false;

class App extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <section>
                        {isLoggedIn ? <h1>Welcome, {name}</h1> : < Login/>}
                    </section>
                </div>
        );
    }
}

export default App;
