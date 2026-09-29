const Usuario = [
    {
    nombre: "Miguel Antonio",
    email: "miguelantoniobc1108@gmail.com",
    rol: "Administrador"
    },
    {
        nombre:"Carlos Ruiz",
        email:"Carlos@rmpresas.com",
        rol:"Editor"
    }
];

const tbody = document.querySelector("#Usuarios");

Usuario.forEach(usuario => {
    
    const fila = document.createElement("tr");
    const nombre = document.createElement("td");
    const email = document.createElement("td");
    const rol = document.createElement("td");

    nombre.textContent = usuario.nombre;
    email.textContent = usuario.email;
    rol.textContent = usuario.rol;

    fila.append(nombre, email, rol);

    tbody.appendChild(fila);

});