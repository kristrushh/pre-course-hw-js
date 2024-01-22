let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let deep = structuredClone(passportWithAddress);
deep.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(deep.address.city);