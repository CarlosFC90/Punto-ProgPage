import React from 'react';
import { Link } from 'react-router-dom';

function FormSuccess() {
    return (
        <div>
            <h1 className='success-title'>Punto-Prog <i className="fas fa-laptop-code"></i> &copy;{new Date().getFullYear()} </h1>
            <h2 className='success-subtitle'>Tu consulta se envio correctamente!</h2>
            <p className='success-p'>Gracias por tu consulta de parte del equipo de Punto-Prog</p>
            <p className='success-p'>En la brevedad nos estaremos comunicando via E-mail</p>
            <p className='success-p'>Saludos!</p>
            <div className='row'>
                <button className='btn' type=""><i className="fas fa-chevron-left"></i> <Link className='link' to='/'>Home</Link></button>
                <button className='btn' type=""><Link className='link' to='/services'>Services</Link> <i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export default FormSuccess
