/* const lista = document.getElementById("listado");



fetch("json/productos.json")
.then(response => response.json())
.then(productos => {
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h4>${producto.titulo}</h4>
            <p class="precio"><span class="u-pull-left ">$ ${producto.precio}</span></p>
            <h5>Detalle: ${producto.detalle}</h5>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${producto.dataId}" >Agregar Al Carrito</a>
        `;
    lista.append(li);
    });
}); */

const traerProductos = async() => {
  const lista = document.getElementById("listado");

  try{
    const response = await fetch('../json/productos.json');
    const productos = await response.json();

    productos.forEach(producto => {
      const li = document.createElement("li");
      li.innerHTML = `
            <h4>${producto.titulo}</h4>
            <p class="precio"><span class="u-pull-left ">$ ${producto.precio}</span></p>
            <h5>Detalle: ${producto.detalle}</h5>
            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${producto.dataId}" >Agregar Al Carrito</a>
        `;
  
      lista.append(li);
    });
  }catch (error){
    console.log(error);
  }
}

traerProductos();
