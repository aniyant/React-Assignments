import React from 'react';
import './App.css';
import Users from './Users';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React TypeScript API Example</h1>
                <Users />
            </header>
        </div>
    );
};

export default App;

