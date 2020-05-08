import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import Routes from './routes';
const rootNode = document.getElementById('root');

render(<Routes />, rootNode);
