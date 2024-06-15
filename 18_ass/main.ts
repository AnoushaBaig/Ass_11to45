let places: string []=["Paris","New zealand","Italy","Korea","China"]

// print in original order
console.log("Original order:", places);

// print array in alphabetical order with out modifying the actual list
console.log("Alphabetical order:", places.slice().sort());

// array is still in its original order  printing it

console.log("Orignal order :",places);

//Print  array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:",places .slice().reverse());

// array is still in its original order by printing it again.
console.log("Original order:",places);

// Reverse the order of  list. Print the array to show that its order has changed.
console.log("reverse the order");
places.reverse()
console.log(places);

//Reverse the order of  list again. Print the list to show it’s back to its original order.

console.log("Original order:", places.sort());
console.log(places);

// Sort to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("reverse alphabetical order changed:",places.sort().reverse());
console.log(places);














