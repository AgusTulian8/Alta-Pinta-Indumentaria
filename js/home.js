const prendas = JSON.parse(localStorage.getItem("productos")) ||[]

prendas.forEach(prenda=> document.write (prenda.titulo +"\n"))