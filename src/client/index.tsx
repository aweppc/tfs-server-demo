import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '../application/Root';

const rootNode = document.getElementById('root');

ReactDOM.hydrate(<Root />, rootNode);