import React from 'react';
import Timer from './Timer';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header" style={{width:'500px',margin:'auto'}}>
                <h1>Timer Application</h1>
                <Timer />
            </header>
        </div>
    );
};

export default App;
