import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import initialState from '../redux/store/initialState';
import Dashboard from '../components/Dashboard';
import Detail from '../components/Detail';
import Header from '../components/Header';
import configureStore from '../redux/store/configureStore';
import './styles.scss';

const App = ():void => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={configureStore(initialState)}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default App;
