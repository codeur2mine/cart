var products =
	[{
		"name": "Théière Malienne",
		"detail": "théière vintage bleu du Mali",
		"price": "79.63 $",
		"info": "This is the latest and greatest product from Derp corp.",
		"image": "http://cdn.shopify.com/s/files/1/0050/7478/0275/products/theiere-bleu-1.jpg?v=1569373160"
	}, {
		"name": "Short de Boxe",
		"detail": "Short de kick boxing et muay thai",
		"price": "399 $",
		"info": "This is the latest and greatest product from Derp corp.",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/273064/1.jpg?8877"
	}, {
		"name": "Gants Kickboxing",
		"detail": "Gants pour Hommes et Femmes",
		"price": "3199 $",
		"info": "This is the latest and greatest product from Derp corp.",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/30/746834/1.jpg?7361"
	}, {
		"name": "Pakka Sac de Boxe",
		"detail": "Sac de Frappe Professionnel",
		"price": "12 $",
		"offer": "BOGOF",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/11/192074/1.jpg?6941"
	}, {
		"name": "Gants de MMA",
		"detail": "1 Pair 10OZ K PU Punch Bag",
		"price": "2399 $",
		"info": "This is the latest and greatest product from Derp corp.",
		"offer": "info with offer",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/935474/1.jpg?0710"
	}, {
		"name": "SIBOTE",
		"detail": "cheville sangle de soutien unisexe sports d'exercice",
		"price": "189 $",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/51/217254/3.jpg?2249"
	}, {
		"name": "NIKE Tn 2021",
		"detail": "chaussure volante et très résistante",
		"price": "2179 $",
		"offer": "No srsly GTFO",
		"image": "https://www.cdiscount.com/pdt2/8/1/9/1/700x700/mp50799819/rw/baskets.jpg"
	}, {
		"name": "Jacket en jeans",
		"detail": "Jacket Bleu en jeans",
		"price": "1750 $",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/99/358454/1.jpg?6405"
	}, {
		"name": "Baskets d'URBANO",
		"detail": "Baskets à lacets montant en Cuir - Noir",
		"price": "1249 $",
		"hero": "OMG This just came out today!",
		"image": "https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/556673/1.jpg?6091",
		"like": '<font-awesome-icon icon="fa-solid fa-heart" />'
	}];
// const div=document.createElement('div');
// const image=document.createElement('img')
// image.src=products[6].image;

// const image2=document.createElement('img')
// image2.src=products[5].image;
// const image3=document.createElement('img')
// image3.src=products[4].image;
// const image4=document.createElement('img')
// image4.src=products[3].image;
// const image5=document.createElement('img')
// image4.src=products[2].image;
// const image6=document.createElement('img')
// image6.src=products[1].image;
// const image7=document.createElement('img')
// image7.src=products[0].image;

// //  document.getElementsByClassName("first_name").style.width="100%"
// //  document.getElementsByClassName("first_name").style.width="100%"


// document.getElementsByClassName("first_main")[0].appendChild(image)
// document.getElementsByClassName("first_main")[0].appendChild(image2)
// document.getElementsByClassName("first_main")[0].appendChild(image3)
// document.getElementsByClassName("first_main")[0].appendChild(image4)
// document.getElementsByClassName("first_main")[0].appendChild(image5)
// document.getElementsByClassName("first_main")[0].appendChild(image6)
// document.getElementsByClassName("first_main")[0].appendChild(image7)

//     let array=document.querySelectorAll(".first_main")
// let arrayofchildren=array[0].children

// for (const img of arrayofchildren) {
//     img.style="width:30%";

// }
var cart = []
function addtocart(e) {
	var parent = e.parentElement;
	var image = parent.getElementsByClassName("image")[0].getAttribute("src");
    console.log(image)
	var name = parent.getElementsByClassName("name")[0].innerText;
	// console.log(name.innerText)
	var detail = parent.getElementsByClassName("detail")[0].innerText;
	// console.log(detail.innerText)
	var price = parent.getElementsByClassName("price")[0].innerText;
	// console.log(price.innerText)
	cart.push(image,name, detail, price)
	// console.log(cart)

	document.getElementsByClassName("dropdown")[0].insertAdjacentHTML('afterbegin', "<li> <img style='width:150px;' src='"+image+"'></li>")
	document.getElementsByClassName("dropdown")[0].insertAdjacentHTML('afterbegin', "<li>" + name + "</li>")
	document.getElementsByClassName("dropdown")[0].insertAdjacentHTML('afterbegin', "<li>" + price + "</li>")



}

for (const item of products) {


	let node = `<div>
    
    <img class="image" src=${item.image} style="width:400px">
    <p class="name" style="color:maroon"> ${item.name} </p>
    <p class="detail" style="color:black"> ${item.detail}</p>
    <p class="price" style="color: black"> ${item.price}</p>
    <button onclick=addtocart(this)>J'achète</button> 
	<i style="color:red" onclick="like()" class="fa-solid fa-heart"></i>


    
    </div>`;
	document.getElementsByClassName("first_main")[0].insertAdjacentHTML('afterbegin', node);
}