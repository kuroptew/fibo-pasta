import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {HashRouter} from "react-router-dom";

import './style/style.scss';

import App from './components/app/App';
import {store} from "./store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

