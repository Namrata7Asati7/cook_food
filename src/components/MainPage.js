import { useState } from 'react';
import { fetchAIResponse } from '../api';

function MainPage() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const aiResponse = await fetchAIResponse(query);
        setResponse(aiResponse);
    };

    return (
        <div style={{ padding: '50px' }}>
            <h2>Ask Your Cooking Questions!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="What would you like to know about cooking?"
                    style={{ width: '300px', padding: '10px', fontSize: '16px' }}
                    required
                />
                <br></br>
                <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Ask</button>
            </form>
            {response && (
                <div style={{ marginTop: '20px', fontSize: '18px' }}>
                    <h3>AI Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}

export default MainPage;
