import React, { FC } from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import store from './store/store';
import Container from './Container';

const App: FC = () => {

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;

