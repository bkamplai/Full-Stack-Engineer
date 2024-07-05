// Current forecast in Kelvin
const kelvin = 0;
// Conversion from Kelvin to Celsius
let celsius = kelvin - 273;
// Conversion from Celsius to Fahrenheit rounding down to nearest integer
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton.`);