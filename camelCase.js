String.prototype.camelCase = function () {
    return this.split(" ") // splits every word
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // maps every word then always uppercases the first letter and adds the rest of it
        .join(""); // joins it together
};

console.log("hello case".camelCase());
