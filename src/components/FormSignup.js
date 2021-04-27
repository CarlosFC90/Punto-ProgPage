import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './styles/Form.css';

function FormSignup({submitForm}) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Contact for us services</h1>
                <div className='row'>
                    <div className='col-md-6 form-input-row'>
                        <label htmlFor='name'>Nombre: &nbsp;</label>
                        <input 
                            type='text'
                            className='form-input' 
                            name='name' 
                            placeholder='Nombre'
                            id='name'
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div className='col-md-6 form-input-row'>
                        <label htmlFor='email'>Email: &nbsp;</label>
                        <input 
                            type='email'
                            className='form-input' 
                            name='email' 
                            placeholder='usuario@gmail.com'
                            id='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor='description'>Descripción: &nbsp;</label>
                    <textarea 
                        type='text'
                        className='form-input' 
                        name='description' 
                        placeholder='Escriba aquí su pedido'
                        id='description'
                        value={values.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>
                <button className='form-input-button' type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormSignup
