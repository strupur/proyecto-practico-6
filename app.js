const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {

        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        listaDeTarea.appendChild(tareaNueva);
    } else {
        alert('Por favor ingrese una tarea');
    }
}

function completarTarea(event) {
    let tarea = event.target.parentNode.parentNode;
    console.log('jjj:',tarea);
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea =event.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);