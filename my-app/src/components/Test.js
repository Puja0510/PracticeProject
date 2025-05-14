let str = "hello how is the weather today"

function getFirst(str){
    let word = str.split("")
    console.log(word)
    for(let i = word.length - 1; i > 0; i--){
        console.log("mmmm", word[i])
    }
}
console.log(getFirst(str))