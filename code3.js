//problem:3
/* declare function  */
function picnicBudget(person) {
    /*    declare variable and assign their value  */
    const forFirst100persons = 5000;
    const forSecond100persons = 4000;
    const forrestPersons = 3000;
    /*  error handaling  */
    if (typeof person != "number") {
        return "please give a number";
    }
    if (person < 0) {
        return "please enter positive input";
    }
    else {

        /*  code for first 100 persions  */
        if (person <= 100) {
            const count = person * forFirst100persons;
            return count;
        }
        /*    code for second 100 persions  */

        else if (person <= 200) {
            const first100person = 100 * forFirst100persons;
            const restpersons = person - 100;
            const second100person = restpersons * forSecond100persons;
            const totalPersons = first100person + second100person;
            return totalPersons;

        }
        /*   code for rest persions  */

        else {
            const first100person = 100 * forFirst100persons;
            const second100person = 100 * forSecond100persons;
            const restpersons = person - 200;
            const restPicnicpersons = restpersons * forrestPersons;
            const totalPicnicpersons = first100person + second100person + restPicnicpersons;
            return totalPicnicpersons;

        }
    }

}
/* call function  */
const picnic = picnicBudget(400);
/* print  */
console.log(picnic);