import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
             <div className="navbar__links">
                <Link to="/about">About</Link>
                 <div style={{padding: '10px'}}></div>
                <Link to="/posts">Posts</Link>
            </div>
            <div>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
        </div>

    );
};

export default Navbar;