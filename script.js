// let plane = 1000;
// let hotel = 800;
// let food = 700;

// function budget(plane, hotel, food) {
// 		let total = plane + hotel + food;
// 		let perDay = total / 14;
// 		console.log("Total: " + total);
// 		console.log("Per day: " + perDay);
// }
// budget(plane, hotel, food);
// budget(2000,2000,2000);

/******************PLAN A VACATION AND CREATE BUDGET*/

let plane = 1000;
let hotel = 1000;
let food = 1000;

function budget(plane, hotel, food) {
	let total = plane + hotel + food;
	let perDay = total / 14
	console.log("Total: " + total);
	console.log("Per Day: " + perDay);
}

budget(plane, hotel, food);

/*******************CREATE A FUNCTION TO MAKE AN ORANGE JUICE*/

let fruit = "orange";

function squeeze(fruit){
	let juice = fruit + " " + "juice";
	console.log(juice);
}

let juice = squeeze("apple");
juice = squeeze("banana");
juice = squeeze("Watermelon");


/****************************FIND THE PRICE PER SQ METER OF A HOUSE!*****************/


function area(length, width){
	let area = length * width;
	return area;
}

function sqMeterPrice(area, price){
	let result = price / area;
	return result;
}

let houseArea = area(60, 80);

let result = sqMeterPrice(houseArea, 900000);

console.log(result);