import React, { useState } from "react";
import axios from "axios";

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            const res = await axios.post("https://your-backend-url.com/bfhl", parsedData);
            setResponse(res.data);
            setError('');
        } catch (err) {
            setError("Invalid JSON format");
            setResponse(null);
        }
    };

    return (
        <div>
            <h1>MERN Full Stack Challenge</h1>
            <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} placeholder='Enter JSON input'></textarea>
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
