import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');

    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        const button = document.querySelector('button') as HTMLButtonElement;
        button.removeAttribute('hidden');
        button.addEventListener('click', () => {
            // @ts-ignore
            event.prompt();
            button.setAttribute('disabled', String(true));
        });
    });
}
