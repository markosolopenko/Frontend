let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let weakMapData = new WeakMap();

weakMapData.set(messages[0], new Date(2017, 1, 1));
console.log(weakMapData.has(messages[0]));


