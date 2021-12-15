import React from 'react';
import ReactDOM from 'react-dom';

import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="53ea4cfc-e937-406c-a109-39ee6afe598c" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);