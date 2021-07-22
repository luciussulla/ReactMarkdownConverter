import logo from './logo.svg';
import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("## Markdown preview")
  return (
    <div className="App">
      <div className="text-area">
        <form>
          <textarea className="text-area__area"
            onChange={(e)=>setMarkdown(e.target.value)}
            value={markdown}
          ></textarea>
        </form>
      </div>
      <div className="markup-area">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
