


 // Версия 1
// Исходные данные
// let subtotal_sum = 0; 
// let subtotal = document.querySelectorAll(".subtotal");

// Подсчёт общего итога
// subtotal.forEach(function(value, key) {
	// 	subtotal_sum = subtotal_sum + parseInt(value.innerHTML)	
// });	

// Вывод общего итога
// document.getElementById("total").innerHTML = subtotal_sum;






// let total = 0;
// let digit = document.querySelectorAll(".digit");
// let subtotal = document.querySelectorAll(".subtotal");

// // console.log(digit);
// // console.log(subtotal);
// // Подсчёт общего итога
// subtotal.forEach(function(value, key) {
// 	// console.log(value.innerHTML)
// 	console.log(digit[key])
// 	total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);
// 	console.log(totall);
// 	document.getElementById("total").innerHTML = total;
// });
// Почему происходит сложение всех итераций, 
// ведь код для этого не написан.
// сложение происходит потому что есть операция 
// сложения с total + ...



 // Версия 2
// Исходные данные
// let total = 0;
// let digit = document.querySelectorAll(".digit");
// let subtotal = document.querySelectorAll(".subtotal");

// Подсчёт общего итога
// subtotal.forEach(function(value, key) {
	// (1*45) + (2*75) + (3*65)
	// total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);	
// });

// Вывод общего итога
// document.getElementById("total").innerHTML = total; 



/* Версия 3. При изменении "количества" на странице должен пересчитываться "итог",
 без перезагрузки страницы (по событию).
TODO: 
- код из второй версии оформить в виде функции, которая будет вызываться 
сразу и при наступлении события.

https://learn.javascript.ru/keyboard-events?ysclid=m20h2917t4210723717
https://doka.guide/js/element-keyup/
https://snipp.ru/handbk/js-kbd-codes
*/


// let digit = document.querySelectorAll(".digit");

// На каждое "количество" вешаем событие нажатие клавиши.
// digit.forEach(function(value, key) {
	// value.addEventListener("keyup", function() {
		// Проверяем ввод только цифр
		// if (event.keyCode >= 48 && event.keyCode <= 57) {
			// console.log(event.keyCode);
		// }
	// }); 
// });

// let digit = document.querySelectorAll(".digit");

// На каждое "количество" вешаем событие нажатие клавиши.

// digit.forEach(function(value, key) {
// 		value.addEventListener("keyup", function() {
// 			Проверяем ввод только цифр
// 			if (event.keyCode >= 48 && event.keyCode <= 57) {
// 				console.log(event.keyCode);
// 			}
// 		}); 
// });


/*++++++++++

let arDigit = document.querySelectorAll(".digit");
let arSubtotal = document.querySelectorAll(".subtotal");

 // На каждое "количество" вешаем событие нажатие клавиши.
arDigit.forEach(function(item, key) {
	item.addEventListener("keyup", function(event) {
		 // Проверяем ввод только цифр
		if (event.keyCode >= 48 && event.keyCode <= 57) {
			// document.write(event.keyCode - 48);
			let total = 0;
			// Подсчёт общего итога
			arSubtotal.forEach(function(subtotal, key) {
				// (1*45) + (2*75) + (3*65)
				total = total + parseInt(arDigit[key].value) * parseInt(subtotal.innerHTML);	
			});
			document.getElementById("total").innerHTML = total;
		}	 
	}); 		
});


*/

/*

window.onload = function() {
	arSubtotal.forEach(function(subtotal, key) {
		// (1*45) + (2*75) + (3*65)
		total = total + parseInt(arDigit[key].value) * parseInt(subtotal.innerHTML);	

	});
	document.getElementById("total").innerHTML = total; 
};

*/	

// document.addEventListener("DOMContentLoaded", function() {
// 		subtotal.forEach(function(value, key) {
// 			// (1*45) + (2*75) + (3*65)
// 			total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);	

// 		});
// 	document.getElementById("total").innerHTML = total;
// });



let total = 0;
let digit = document.querySelectorAll(".digit");
let subtotal = document.querySelectorAll(".subtotal");

/*
function calculnum() {
	subtotal.forEach(function(value, key) {
		// (1*45) + (2*75) + (3*65)
		total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);		
	});	
	document.getElementById("total").innerHTML = total;
} 
calculnum();
*/

function calculnum() {
	subtotal.forEach(function(value, key) {
		// (1*45) + (2*75) + (3*65)
		total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);		
	});	
	document.getElementById("total").innerHTML = total;
} 
calculnum();


/*

function calculnumber() {
	digit.forEach(function(value,key) {
		value.addEventListener("keyup", function() {
			// (1*45) + (2*75) + (3*65)
			total = 0;
			total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);
			document.getElementById("total").innerHTML = total;
		});	
	});		
} 
calculnumber();
//???? NaN

*/

/*
function calculnumber() {
	digit.forEach(function(value,key) {
		value.addEventListener("keyup", function() {
			let total = 0;
			subtotal.forEach(function(value, key) {
				// (1*45) + (2*75) + (3*65)
				total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);
				document.getElementById("total").innerHTML = total;
			});
		});	
	});
	if(document.getElementById("total").innerHTML = total;) {
		function calculnum() {
			subtotal.forEach(function(value, key) {
				// (1*45) + (2*75) + (3*65)
				total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);		
			});	
			document.getElementById("total").innerHTML = total;
		}
		calculnum();
	}		
} 
calculnumber();

*/
// проверка на пустое содержимое вместе с проверкой на 
// keyCode какое значение выдаёт переменная в случае Nan console.log

function calculnumber() {
	digit.forEach(function(value,key) {
		value.addEventListener("keyup", function() {
			let total = 0;
			subtotal.forEach(function(value, key) {
				// (1*45) + (2*75) + (3*65)
				total = total + parseInt(digit[key].value) * parseInt(value.innerHTML);
				document.getElementById("total").innerHTML = total;
			});
		});	
	});		
} 
calculnumber();
