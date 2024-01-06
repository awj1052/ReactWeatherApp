import { memo } from "react";
import logo from '../assets/logo.png';
import style from './Header.module.css';

function Header(){

  return (
    <header className={style.header}>
      <img src={logo} alt="logo"></img>
      <h1>Today's Weather</h1>
    </header>
  );
}

export default memo (Header);