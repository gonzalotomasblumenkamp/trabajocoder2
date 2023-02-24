


class Producto {
  constructor(producto) {
    this.id = producto.id.toUpperCase();
    this.nombre = producto.nombre.toUpperCase();
    this.tipo = producto.tipo.toUpperCase();
    this.año = producto.año.toUpperCase();
    this.precio = producto.precio;
  }
}

const suma = (precioproducto, recargoPagotarjeta) => precioproducto + recargoPagotarjeta;
let precioproducto = 1500;
let recargoPagotarjeta = 250;
let PrecioConrecargo = suma(precioproducto, recargoPagotarjeta);
const miTienda = [
  { id: 1, nombre: "Adrianna Vineyard River Stones Malbec 2015", tipo: "malbec", precio: 1500, año: "2015"},
  { id: 2, nombre: "Cobos Marchiori Vineyard Malbec 2012", tipo: "malbec", precio: 1500, año: "2012"},
  { id: 3, nombre: "Cobos Chañares Estate Malbec 2016", tipo: "malbec", precio: 1500, año: "2016"},
  { id: 4, nombre: "Linda flor La Violeta Malbec 2011", tipo: "malbec", precio: 1500, año: "2011"},
  { id: 5, nombre: "Gran Cabernet Sauvignon (IV) 2014", tipo: "Cabernet Sauvignon", precio: 1500, año: "2014",},
  { id: 6, nombre: "Bramare Marchiori Vineyard Cabernet Sauvignon 2013", tipo: "Cabernet Sauvignon", precio: 1500, año: "2013"},
  { id: 7, nombre: "Primus Cabernet Sauvignon 2012", tipo: "Cabernet Sauvignon", precio: 1500, año: "2012"},
  { id: 8, nombre: "D.V. Catena Cabernet – Cabernet 2012", tipo: "Cabernet Sauvignon", precio: 1500, año: "2012" }
];

const filtroVinoCabernet = miTienda.filter(nombre => nombre.id > 4);
console.log(filtroVinoCabernet)
const filtroVinoMalbec = miTienda.filter(nombre => nombre.id < 5);
console.log(filtroVinoMalbec)


$(function(){

  $("#compraefectivo1").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito1").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo2").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito2").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo3").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito3").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo4").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito4").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo5").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito5").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo6").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito6").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo7").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito7").on("click", () => {
  console.log ("El precio con recargo es " + PrecioConrecargo)

});

$("#compraefectivo8").on("click", () => {
  console.log ("El precio en efectivo es " + precioproducto)

});

$("#compratarjetadecredito8").on("click", () => {
console.log ("El precio con recargo es " + PrecioConrecargo)

});




}())



$(function(){

$("#vinosBlancos").click(function(){

  $("#malbec,#malbec1").hide();

  
});

});

const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];

let template = "";
arrayItem.forEach((item) => {
  template += `
  <div class="container">
  <div id="malbec" class="card">
    <img src="">
    <h4></h4>
    <p></p>
    <button id="compraefectivo1">Comprar en efectivo</button>
    <button id="compratarjetadecredito1">Comprar con Tarjeta de credito</button>
  
  </div>
 
    `;
});
lista.innerHTML = template;