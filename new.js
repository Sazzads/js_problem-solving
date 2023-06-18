function oddFriend(name) {
    if (typeof name != 'object') {
        return 'plese give a object';
    }
    for (const element of name) {
        if (element.length % 2 != 0) {
            return element;
        }
    }
}
friendString = ["sazzad", "Riyad", "saba", "boby"];
var oddResult = oddFriend(friendString);
console.log(oddResult);