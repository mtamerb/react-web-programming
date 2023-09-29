import React, {useState} from 'react';
import './App.css';
/*import Form from "./components/Form";*/
/*import User from "./components/User";*/
import Counter from "./components/Counter";

/*const user = [{
    name: "Tamer Bilici",
    age: 23,
    jobs: "Software Developer",
    languages: ["Turkish", "English", "German"]
}, {
    name: "Ceyda Yılmaz",
    age: 21,
    jobs: "Software Developer",
    languages: ["Turkish", "English"]
}, {
    name: "Mehmet Bilici",
    age: 50,
    jobs: "Doctor",
    languages: ["Turkish"]
}]*/


function App() {
    const [isVisible, setIsVisible] = useState(true)

    return (
            <div>
                {isVisible &&  <Counter/>}
                <button onClick={() => setIsVisible(!isVisible)}>Display/Hide</button>
                {/*<Form/>*/}
                {/*<User/>*/}
            </div>
        );
}

export default App;
