import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Wizard from './components/wizard/Wizard';
import Layout from './components/layout/Layout';
import Characters from "./components/Characters.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/create" element={<Wizard/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;