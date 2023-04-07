
let itens = [
	{id:1,title: 'Lorem, ipsum dolor', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit eu amo naruto mais que dragon ball', img: './img/icon.png'},
	{id:2,title: 'Lorem, ipsum dolor', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit eu amo naruto mais que dragon ball', img: './img/icon.png'},
	{id:3,title: 'Lorem, ipsum dolor', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit eu amo naruto mais que dragon ball', img: './img/icon.png'},
];

itens.map((item,index)=>{

	let iconItem = document.querySelector('.area-copy .card').cloneNode(true);
	document.querySelector('.area-icons .container .area-dinamica').append(iconItem);

	iconItem.querySelector('.card .card-img img').src = item.img;
	iconItem.querySelector('.card .card-title').innerHTML = item.title;
	iconItem.querySelector('.card .card-desc').innerText = item.description;

});
