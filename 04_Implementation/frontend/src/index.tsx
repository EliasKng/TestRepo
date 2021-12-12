import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
const a =   <React.StrictMode>
                <App />
            </React.StrictMode>;
ReactDOM.render(
  a,
  document.getElementById('root')
);

function Welcome(props: any) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="ABC" />;
ReactDOM.render(
    element,
    document.getElementById('test'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
