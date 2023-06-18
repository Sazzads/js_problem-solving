//problem:2
/* declare function  */
function pandaCost(singaraQuantity, shomuchaQuantity, jilapiQuantity) {
    /*    declare variable */
    var perSingaraPrice = 7;
    var perShomuchaPrice = 10;
    var perJilapiPrice = 15;
    /*  error handaling */
    if (typeof singaraQuantity != "number" || typeof shomuchaQuantity != "number" || typeof jilapiQuantity != "number") {
        return "please input a valid number";
    }
    if (singaraQuantity < 0 || shomuchaQuantity < 0 || jilapiQuantity < 0) {
        return "please input positive input";

    }

    else {
        /*  calculation  */
        singaraQuantity = singaraQuantity * perSingaraPrice;
        shomuchaQuantity = shomuchaQuantity * perShomuchaPrice;
        jilapiQuantity = jilapiQuantity * perJilapiPrice;

        var totalPrice = singaraQuantity + shomuchaQuantity + jilapiQuantity;
        /*   return value  */
        return totalPrice;
    }
}
/* call function  */
var myTotalPrice = pandaCost(10, 10, 10);
/* print  */
console.log(myTotalPrice);