import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wizard from './components/wizard/Wizard';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Wizard />} />
                    {/* Add other routes as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
