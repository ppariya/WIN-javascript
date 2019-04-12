// Examples:
// argh("abcd") -> "A-Bb-Ccc-Dddd"
// argh("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// argh("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of argh is a string which includes only letters from a..z and A..Z
function argh(string) {
    // your code
    var sentence = [];
    var word = null;
    var letter = null;
    for(var i = 0; i < string.length ; i++){
        letter = string.charAt(i);
        word = letter.toUpperCase();
        for(var j = 0; j < i; j++){
            word += letter.toLowerCase(); 
        }
        sentence.push(word);
    }
    console.log(sentence.join('-'));

}
argh("abcd") //-> "A-Bb-Ccc-Dddd"
argh("RqaEzty") //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
argh("cwAt") //-> "C-Ww-Aaa-Tttt"