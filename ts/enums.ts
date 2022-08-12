enum Volume {
    min = 10,
    medium = 50,
    max = 100,
}
console.log("==============");
const userVolumeChoise: number = 0;
console.log(Volume.min === userVolumeChoise);
console.log(Volume.min);
console.log(Volume.medium);
console.log(Volume.max);

enum CreditCards {
    master = "Mastercard",
    visa = "Visa",
    amex = "American Express",
    dinners = "Dinners",
}

console.log(CreditCards.master);
