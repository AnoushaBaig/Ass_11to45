function tshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love type script"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
tshirt();
tshirt("medium");
tshirt("small", "Dive with the coding");
