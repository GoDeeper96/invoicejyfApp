import React, {useState} from 'react'
import styles from './Facturas.module.css';
const Facturas = () => {
  const [nombre,SetNombreEmpresa] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
  const [ruc, setRuc] = useState("")
  const [correo, setCorreo] = useState("")
  const [nombreReferencia, setNombreReferencia] = useState("")
  const [gaga, setGaga] = useState("");
  const [test, setTest] = useState("");
  return (
    <div className={styles.contenedor}><form className={styles.formulario}>  
    <div className={styles.campo}>
        <label className={styles.campo__label} for="nombre">Nombre</label>
        <input 
            className={styles.campo__field}
            type="text" 
            placeholder="Por ejemplo: José PEPE Yagui" 
            id="nombre"
        />
    </div>

    <div className={styles.campo}>
        <label className={styles.campo__label} for="direccion">Direccion</label>
        <input 
            className={styles.campo__field}
            type="text" 
            placeholder="Por ejemplo: Lima, av san isidro 356" 
            id="direccion"
        />
    </div>

    <div className={styles.campo}>
        <label className={styles.campo__label} for="telefono">Teléfono</label>
        <input 
            className={styles.campo__field}
            type="tel" 
            placeholder="Por ejemplo: 965458978" 
            id="telefono"
        />
    </div>

    <div className={styles.campo}>
        <label className={styles.campo__label} for="ruc">Ruc</label>
        <input 
            className={styles.campo__field}
            type="num" 
            placeholder="Por ejemplo: 1011111111" 
            id="ruc"
        />
    </div>

    <div className={styles.campo}>
        <label className={styles.campo__label} for="email">E-mail</label>
        <input 
            className={styles.campo__field}
            type="email" 
            placeholder="Por ejemplo: email@dominio.com" 
            id="email"
        /> 
    </div>

    <div className={styles.campo}>
        <label className={styles.campo__label} for="nombrereferencia">Referencia</label>
        <input 
            className={styles.campo__field}
            type="text" 
            placeholder="Por ejemplo: José Sanchez Yagui" 
            id="nombrereferencia"
        />
    </div>

    <div className={styles.campo__boton_unido}>
        <input type="submit" value="Enviar" className={styles.boton_uniadoa_primario}/>
    </div>
    </form></div>
    
    
    
  )
}

export default Facturas
