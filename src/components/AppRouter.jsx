import React, {useContext, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading}  =useContext(AuthContext);
    console.log(isAuth)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    );
};

export default AppRouter;