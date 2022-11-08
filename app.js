const ingresar = document.getElementById('ingresar');
if (ingresar) {
    ingresar.addEventListener('click', function () {
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        if (usuario == 'admin@admin.com' && password == 'admin') {
            window.location.href = './perfil.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
}