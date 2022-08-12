// Tipado de datos
(() => {
    let userName: string = "Jane";
    let age: number = 34;
    let isMarried: boolean = false;
    // console.log(userName);
    // console.log(age);
    // console.log(isMarried);

    // Mala práctica
    let oneThing: any = true;
    oneThing = "Hello";
    oneThing = 35;
    oneThing = true;

    // Inferencia de tipado de datos
    let message = "This is a message";
    // console.log(message);
    let otherNumber = 5;

    let userName2!: string;
    console.log(userName2); // Bad practice

    let firstName: string | null;
    firstName = null;

    let months: string[] = ["Jan", "Feb", "Mar", "Apr", "May"];
    let prices: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    let numbersOrStrings: Array<string | number> = ["Hello", 34];
    // let numbersOrStrings: (string | number)[] = ["Hello", 34];

    type Person = {
        name: string;
        age: number;
        email: string;
        isMarried?: boolean;
        address?: Address;
    };

    type Address = {
        street: string;
        stNumber: number;
    };

    let jane: Person = {
        name: "Jane",
        age: 24,
        email: "jane@gmail.com",
        isMarried: false,
    };

    let jhon: Person = {
        name: "Jhon",
        age: 25,
        email: "jhon@gmail.com",
    };

    let users: Person[] = [
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

    function addTwoNumbers(n1: number, n2: number): number {
        return n1 + n2;
    }

    const result = addTwoNumbers(1, 2);
    console.log(result);

    type Machine = {
        name: string;
        year: number;
    };

    const buildMachine = (name: string, year: number): Machine => ({ name, year });

    const result2 = buildMachine("Coffe", 2022);
    console.log(result2);
})();
