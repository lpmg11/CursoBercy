// hacer una funcion que reciba como parametro la abreviatura del dia de la semana y como
// segundo parametro reciba la cantidad de dias a sumarle (Sun,4)=>Thu (Thu,4)=>Mon
// el parametro de dias a sumar es positivo entre 0 y 500

function dayOfWeek(day,value){
    const days = ['Sun','Mon','Tue','Wen','Thu','Fri','Sat'];
    let index = days.indexOf(day);
    console.log(index)
    index += value
    while(index >= days.length){
        index -= days.length
    }
    return days[index]
}

console.log(dayOfWeek('Fri',10))