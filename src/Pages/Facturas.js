import React, {useState} from 'react'
import styles from './Facturas.module.css';
const Facturas = () => {
  const [nombre,SetNombreEmpresa] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
  const [ruc, setRuc] = useState("")
  const [correo, setCorreo] = useState("")
  const [nombreReferencia, setNombreReferencia] = useState("")
  
  return (
    <div>Facturas</div>
  )
}

export default Facturas