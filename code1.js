//problem:1
/* declare function */
function anaToVori(ana) {
    var vori = 16;
    /*   error handaling  */

    if (typeof ana != "number") {
        return "please input number only";
    }
    if (ana < 0) {
        return "please enter positive input";
    }
    else
        /*   calculation */
        var anaConvertVori = ana / 16;
    /*  return value  */
    return anaConvertVori;

}
/* call function  */
var result = anaToVori(64);
/* print  */
console.log(result);