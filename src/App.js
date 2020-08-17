import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Main store={props.store}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
