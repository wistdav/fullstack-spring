// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
  mostrarEmail();
});

function mostrarEmail(){
    document.getElementById("emailUser").outerHTML = localStorage.email;
}

async function cargarUsuarios(){
    const request = await fetch('api/usuarios', {
      method: 'GET',
      headers: getHeaders(),
    });
    const usuarios = await request.json();

    let listadoHTML = "";
    for(let usuarioR of usuarios){

        let btnDelete = '<a href="#" onclick="eliminarUsuario('+usuarioR.id+')" class="btn btn-danger btn-circle btn-sm"> <i class="fas fa-trash"></i> </a>';

        let usuarioHtml = '<tr> <td>'+usuarioR.id+'</td> <td>'+usuarioR.nombre+ '  '
        + usuarioR.apellido+'</td> <td>'+usuarioR.email+'</td> <td>'
        +usuarioR.telefono+'</td> <td> '
        +btnDelete+' <a href="#" class="btn btn-warning btn-circle btn-sm"> <i class="fas fa-exclamation-triangle"></i> </a> </td> </tr>';
        listadoHTML += usuarioHtml;
    }

    console.log(usuarios);
    document.querySelector('#usuarios tbody').outerHTML = listadoHTML;

}

function getHeaders() {
    return {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': localStorage.token
   };
}


async function eliminarUsuario(id){

    if(!confirm('¿Desea eliminar este usuario')){
    return;
    }
    const request = await fetch('api/usuarios/'+id, {
          method: 'DELETE',
          headers: getHeaders(),
    });
    location.reload();
}

