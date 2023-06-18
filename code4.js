//problem:4
/* declare function  */
function oddFriend(name) {
    /* error handaling  */
    if (typeof name != "object") {
        return "please input array!";
    }
    else

        /* loop for array */
        for (const element of name) {
            /*  odd function calculation  */
            if (element.length % 2 != 0) {
                /*  return value  */
                return element;
            }
        }
}
// declare array 
friendString = ["sazzad", "Riyad", "saba", "boby", "hossain"];
// call function 
var oddResult = oddFriend(friendString);
// print first odd firend 
console.log(oddResult);