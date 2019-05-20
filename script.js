//Fonctionnalité 1
var data = document.querySelector('footer');
data.addEventListener("click", function(){
	console.log('click');
});

//Fonctionnalité 1bis

var data = document.querySelector('footer');
var count = 0;

data.addEventListener("click", function(){
	count++;
	console.log("Nombre de clicks : " + count);
});

//Fonctionnalité 2
var navbar = document.getElementsByClassName('navbar-toggler')[0]
var navbar_2 = document.getElementById("navbarHeader");
navbar.addEventListener("click", function(){
	console.log("ok");
	navbar_2.classList.toggle("collapse");
});

//Fonctionnalité 3
var card = document.getElementsByClassName("col-md-4")[0]
console.log(card)
var edit_card = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
console.log(edit_card)
edit_card.addEventListener("click", function(){
	console.log("ok");
	card.style.color = "red";
});

//Fonctionnalité 4
var card_2 = document.getElementsByClassName("col-md-4")[1]
console.log(card_2)
var edit_card_2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
console.log(edit_card_2)
edit_card_2.addEventListener("click", function(){
	console.log("ok");
if (card_2.style.color === 'green'){ 
card_2.style.color = '' ; 
}
else (card_2.style.color = "green");
});

//Fonctionnalité 5
var bootstrap = document.querySelector('header');
bootstrap.addEventListener("dblclick", function(){
	document.querySelector("link").disabled = true;
	console.log('hey')

});

// Fonctionnalité 6
let cards = document.getElementsByClassName("col-md-4");
let picture = document.getElementsByClassName("card-img-top");
let view_card = document.getElementsByClassName("btn btn-sm btn-success");
for(let i = 0; i < cards.length; i++) {
view_card[i].addEventListener("mouseover", function(){
	console.log('yes')
if (cards[i].style.color === 'white'){
	cards[i].style.color = '';
	picture[i].style.width = '';
}
else (cards[i].style.color = "white") && (picture[i].style.width = "20%");
})
};

// Fonctionnalité 7
var cardsAll = document.getElementsByClassName('col-md-4');
var cardLast = cards[cards.length - 1]; 
var cardFirst = document.getElementsByClassName('col-md-4')[0];
var button = document.getElementsByClassName("btn btn-secondary my-2")[0];
var parent = cardFirst.parentNode;
button.addEventListener("click", function (){
	console.log('hop')
	parent.insertBefore(cardLast, cardFirst);
});

// Fonctionnalité 8
// Fonctionnalité 9