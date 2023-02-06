import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navegador.module.css';
import logo from '../img/logo_jyf.png';
const Navegador = () => {
  return (
    <div>
    <header className={styles.header}>
        <Link to='/'> <img className={styles.header__logo} src={logo} alt="logotipo"/></Link>
    </header>
    <nav className={styles.navegacion}>
        <Link to='/'className={styles.navegacion__enlace}>Inicio</Link>
        <Link to='/Productos' className={styles.navegacion__enlace} >Productos</Link>
        <Link to='/Usuarios' className={styles.navegacion__enlace} >Usuarios</Link>
        <Link to='/Facturas' className={styles.navegacion__enlace} >Facturas</Link>
    </nav>
    </div>
  )
}
export default Navegador;