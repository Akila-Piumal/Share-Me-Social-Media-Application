import React from "react";
import  ReactDOM  from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css'

ReactDOM.render(
    <Router>
        <GoogleOAuthProvider clientId="439389635915-6ms62lheglmv86tblnjr6hjknsf1110b.apps.googleusercontent.com">
            <App/>
        </GoogleOAuthProvider>;
    </Router>,
    document.getElementById('root')
);