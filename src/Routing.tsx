import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Link,
} from "react-router-dom";
import { Login } from './components/login';
import { Race } from './components/race';
import { BACKTOLOGIN, PAGENOTFOUNDMSG, ROUTESNAME } from './helpers/constants';
import { InitialStateType } from './store/reducers/Login';

// Page not found screen
const NotFound = (): JSX.Element => {
    return (
        <div className="not-found">
            <h1>{PAGENOTFOUNDMSG}</h1>
            <div>
                <Link to="/">{BACKTOLOGIN}</Link>
            </div>
        </div>
    );
};

export default function Routing(): JSX.Element {
    const { login } = useSelector((state: InitialStateType) => state);
    const isLogin = login.data?.token ? true : false;
    return (
        <BrowserRouter>
            <div className="main" id="routing">
                <div className="app">
                    <Routes>
                        <Route path="/" element={<Navigate to="/login" />}></Route>
                        <Route path={ROUTESNAME.LOGIN.PATH} element={<Login />} />
                        <Route path={ROUTESNAME.RACE.PATH} element={isLogin ? <Race /> : <Navigate to="/login" />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes >
                </div>
            </div>
        </BrowserRouter>
    )
}
