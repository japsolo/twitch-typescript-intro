"use strict";
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 10] = "min";
    Volume[Volume["medium"] = 50] = "medium";
    Volume[Volume["max"] = 100] = "max";
})(Volume || (Volume = {}));
console.log("==============");
const userVolumeChoise = 0;
console.log(Volume.min === userVolumeChoise);
console.log(Volume.min);
console.log(Volume.medium);
console.log(Volume.max);
var CreditCards;
(function (CreditCards) {
    CreditCards["master"] = "Mastercard";
    CreditCards["visa"] = "Visa";
    CreditCards["amex"] = "American Express";
    CreditCards["dinners"] = "Dinners";
})(CreditCards || (CreditCards = {}));
console.log(CreditCards.master);
// Tipado de datos
(() => {
    let userName = "Jane";
    let age = 34;
    let isMarried = false;
    // console.log(userName);
    // console.log(age);
    // console.log(isMarried);
    // Mala práctica
    let oneThing = true;
    oneThing = "Hello";
    oneThing = 35;
    oneThing = true;
    // Inferencia de tipado de datos
    let message = "This is a message";
    // console.log(message);
    let otherNumber = 5;
    // let userName2!: string;
    let firstName;
    firstName = null;
    let months = ["Jan", "Feb", "Mar", "Apr", "May"];
    let prices = [1, 2, 3, 4, 5, 6, 7, 8];
    let numbersOrStrings = ["Hello", 34];
    let jane = {
        name: "Jane",
        age: 24,
        email: "jane@gmail.com",
        isMarried: false,
    };
    let jhon = {
        name: "Jhon",
        age: 25,
        email: "jhon@gmail.com",
    };
    let users = [
        jane,
        jhon,
        {
            name: "Peter",
            age: 16,
            email: "peter@gmail.com",
        },
    ];
    for (const oneUser of users) {
        console.log(oneUser.name);
        console.log(oneUser.email);
    }
    function addTwoNumbers(n1, n2) {
        return n1 + n2;
    }
    const result = addTwoNumbers(1, 2);
    console.log(result);
    const buildMachine = (name, year) => ({ name, year });
    const result2 = buildMachine("Coffe", 2022);
    console.log(result2);
})();
console.log("Este es el archivo types.ts");
console.log("un console log más");
//# sourceMappingURL=app.js.map