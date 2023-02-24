//Declaramos la url del archivo JSON local
const URLJSON = "data/datos.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const datos of misDatos) {
        $("body").prepend(`<div>
                                <h3>${datos.precio}</h3>
                                <p> ${datos.tittle}</p>
                            </div>`)
      }  
    }
    });
});
