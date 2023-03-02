
function nparameters(...suma){
  console.log(suma)
  return suma.reduce((prev,curr)=> prev + curr ,0)
}

console.log(nparameters(2))

function letras(a,b,c,d){
    console.log(a,b,c,d)
}

let ar = [1,2,3,4,5,6,23,65]

//letras(...ar)