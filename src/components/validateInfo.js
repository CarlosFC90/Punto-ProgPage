export default function validateInfo(values) {
    let errors = {}

    //Name
    if (!values.name.trim()) {
        errors.name = 'El Nombre es un campo requerido'
    }

    //Email
    if (!values.email) {
        errors.email = 'El Email es un campo requerido'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Dirección de Email invalida'
    }

    //Description
    if (!values.description) {
        errors.description = 'El Detalle de la Consulta es un campo requerido'
    } else if(values.description.lenght < 10) {
        errors.description = 'El Detalle de Consulta debe contener 10 o más carácteres'
    }

    return errors;
}