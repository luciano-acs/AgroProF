const cuentaUsuario = {
    usuario: 'admin@admin.com',
    contraseña: 'admin'
};

const ingresar = document.getElementById('ingresarPerfil');
if (ingresar) {
    ingresar.addEventListener('click', function () {
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        if (usuario == cuentaUsuario.usuario && password == cuentaUsuario.contraseña) {            
            window.location.href = './perfil.html';
            rellenarDatos();
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
}

function rellenarDatos(){
    document.getElementById('tituloUsuario').innerHTML = cuentaUsuario.usuario;
}
// const meteorologicos = document.getElementById('meteorologico');
// if (meteorologicos) {
//     meteorologicos.addEventListener('click', function () {
//         document.getElementById('tituloUsuario').innerHTML = 'Meteorológico';
//     });
// }

const botonClima = document.getElementById('meteorologico');
if (botonClima) {
    botonClima.addEventListener('click', function () {
        fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-26.8528&lon=-65.7083&days=10&lang=es&key=66a5873f866745edb4f9132616310ae5')
        .then(response => response.json())
        .then(data => mostrarClima(data));
    });
}

function mostrarClima(data) {
    const datosClima = JSON.parse(JSON.stringify(data));
    window.location.href = './datosMeteorologicos.html';
    console.log(datosClima);

    for(let i = 0; i < datosClima.data.length; i++) {
        //const cuerpoTabla = document.getElementById('cuerpoTabla');    
        const fila = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.text = datosClima.data[i].datetime;
        const td2 = document.createElement('td');
        td2.text = datosClima.data[i].max_temp;
        const td3 = document.createElement('td');
        td3.text = datosClima.data[i].min_temp;
        fila.appendChild(td1);
        fila.appendChild(td2);
        fila.appendChild(td3);
    }
}