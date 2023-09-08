import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/main.scss";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-kuo0maicgrpxz8t8.us.auth0.com"
    clientId="Cspu3WpNQRjaLxwZXohBSucNSyO0RneL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
);


