//hacer funciones para hacer filtros de la informacion obtenida desde la api de jsonplaceholder
//las funciones para filtrar seran las siguientes:
//filtro por titulos
//filtro por status
//filtro por userid
//los filtros deben de poder ser stackeables
//puedes hacer todos los filtros en una sola funcion
//ordenar por estado

const obtenerDatos= async()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let json = await response.json()
    fitrarTitulo(json)
}

const filtrarTitulo = ()=>{

}