function make_car(
    manufactuter : string,
    model : string,
  ...option :[string , any][]
) {
    let car = {manufactuter , model}
    option.forEach(([key,value]) => (car[key] = value));


return car
}
console.log(make_car("Toyota","Carolla",["color","red"],["year","2020"]));
console.log(make_car("Ford","Fiesta",["color","Blue"],["sunrooof",true]));

