const index = document.querySelector("#contacto");

index.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nombre = document.querySelector("#nombre");
    const paterno = document.querySelector("#paterno");
    const materno = document.querySelector("#materno");
    const correo = document.querySelector("#correo");
    const mensaje = document.querySelector("#mensaje");

    const confirmar = confirm(
    `
    ¿Los datos son correctos?
    Nombre:${nombre.value}
    Apellido Paterno:${paterno.value}
    Apellido Materno:${materno.value}
    Correo:${correo.value}
    Mensaje:${mensaje.value}
    `
    );

    if(confirmar){
        index.submit();
    }
});