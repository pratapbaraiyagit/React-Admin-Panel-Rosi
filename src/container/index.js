import React, { Suspense, useEffect } from 'react';
import axios from 'axios';
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Routes from './routes';
import ScrollToTop from '../components/common/scroll';
import Loader from '../components/common/loader';
import { setupAxios } from '../utils';
import { storeMetaData } from '../actions/meta';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const { PUBLIC_URL } = process.env;

setupAxios(axios, store);

const AppContainer = () => {
    return (
        <Provider store={store} >
            <ToastContainer />
            <Suspense fallback={<Loader isSuspense />}>
                <Loader>
                    <BrowserRouter basename={PUBLIC_URL}>
                        <ScrollToTop>
                            <Routes />
                        </ScrollToTop>
                    </BrowserRouter>
                </Loader>
            </Suspense>
        </Provider >)
}

export default AppContainer;