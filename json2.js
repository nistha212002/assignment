import json2html from './json2html.js';

const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
];

document.body.innerHTML = json2html(data);