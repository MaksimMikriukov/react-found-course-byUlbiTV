import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import {AuthContext} from "../context";
const Login = () => {
    const [modal, setModal] = useState(true);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth' , 'true')
    }
    return (
        <div>
            <MyModal visible={modal} setVisible={setModal} >
            <h1>Вход:</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
                <a> ⟵просто нажми эту кнопочку ^. ^</a>
            </form>
            </MyModal>
        </div>
    );
};

export default Login;