import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import registerServiceWorker from 'registerServiceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
