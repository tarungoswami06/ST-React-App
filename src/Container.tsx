import React, { FC, useEffect } from 'react';
import './App.css';
import Routing from './Routing';
import 'antd/dist/antd.css'
import { useDispatch, useSelector } from 'react-redux';
import { CommonInitialStateType } from './types/CommonTypes';
import { connectionOffline, connectionOnline } from './store/actions/Global';
import NoInternet from './components/common/NoInternet/NoInternet';
import Loader from './components/common/Loader/Loader';

const Container: FC = () => {
  const { global } = useSelector((state: CommonInitialStateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //Add event lister to check internet availability
    window.addEventListener("online", () => {
      dispatch(connectionOnline());
    });
    window.addEventListener("offline", () => {
      dispatch(connectionOffline());
    });
  }, [dispatch]);

  return (
    <>
      {global.online ? (
        <>
          <Routing />
          {/* Common Loader component */}
          <Loader loading={global.loading} />
        </>
      ) : (
        <NoInternet />
      )}
    </>
  );
}

export default Container;