import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function loadParks() {
  const response = await fetch('http://localhost:8080/parks/list/');
  if (response.ok) {
    let data = await response.json()
    root.render(
      <React.StrictMode>
        <App parks={data.parks} />
      </React.StrictMode>
    );
  } else {
    throw console.error(response);
  }
  
}
loadParks();
