document.getElementById("icono-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

   document.getElementById("move-contenido").classList.toggle("mover-contenedor-todo");
   document.getElementById("mostrar-menu").classList.toggle("mostrar-lateral");
}