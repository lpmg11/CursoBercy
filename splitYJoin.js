let palabra = 'anitalabalatina'

function isPalindrome(p){
    return p === p.split('').reverse().join('')
}

console.log(isPalindrome(palabra))