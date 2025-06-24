document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // validación de los campos del formulario, para asegurarse que no esten vacíos o no sean válidos
        let errores = [];

        if (nombre === '') {
            errores.push('El campo Nombre es obligatorio.');
        }

        if (correo === '') {
            errores.push('El campo Correo Electrónico es obligatorio.');
        } else if (!validarEmail(correo)) {
            errores.push('Por favor, ingrese un correo electrónico válido.');
        }

        if (asunto === '') {
            errores.push('El campo Asunto es obligatorio.');
        }
        
        if (mensaje === '') {
            errores.push('El campo Mensaje es obligatorio.');
        }

        if (errores.length > 0) {
            alert('Por favor corrija los siguientes errores:\n\n' + errores.join('\n'));
        } else {
            alert(`Gracias por su contacto, ${nombre}.\nEn breve le estaré respondiendo.`);
            formulario.reset();
        }
    });

    // validar si un correo electrónico es valido
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
