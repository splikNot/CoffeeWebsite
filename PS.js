


function coffeeCard(name, intensity, price, description, photo){
    const capsule = document.createElement("div");
    const container = document.createElement("div");
    const divFoto = document.createElement("div");
    const coffeeImg = document.createElement("img");
    const button = document.createElement('button');
    const divInfo = document.createElement("div");
    const coffeeName = document.createElement("h3");
    const coffeeIntensity = document.createElement("p");
    const coffeeDescription = document.createElement("p");

    const divSale = document.createElement("div");
    const quantidade = document.createElement("div");
    const minus = document.createElement("img");
    const divDisplay = document.createElement("input");
    const plus = document.createElement("img");
    const prize = document.createElement("h2");



    coffeeName.innerText = 'NOME: ' + name;
    coffeeIntensity.innerText = 'INTENSIDADE: ' + intensity;
    coffeeDescription.innerText =  '\n' +  description;
    coffeeImg.src = photo;
    prize.innerText ="R$: " + price + ',00' ;
    plus.src = "imagem/plus.svg";
    minus.src = "imagem/minus.svg";
    button.innerText = 'COMPRAR';
    divDisplay.type = "Number";
    divDisplay.placeholder = '1';


    capsule.classList.add("coffee");
    container.classList.add("container");
    divFoto.classList.add("cafeFoto");
    coffeeImg.classList.add("productImage");
    button.classList.add('compre')

    divInfo.classList.add("info");
    coffeeName.classList.add("cafeNome");
    coffeeIntensity.classList.add("cafeIntensidade");
    coffeeDescription.classList.add("cafeDescription");

    divSale.classList.add("productSale");
    quantidade.classList.add("qtnds");
    minus.classList.add("menos");
    divDisplay.classList.add("display");
    plus.classList.add("mais");
    prize.classList.add("preco");


    const capsuleWraper = document.querySelector(".row")

    capsuleWraper.appendChild(capsule);

    capsule.appendChild(container);
    capsule.appendChild(divSale);
    capsule.appendChild(button);

    container.appendChild(divFoto);
    container.appendChild(divInfo);

    divFoto.appendChild(coffeeImg);

    divInfo.appendChild(coffeeName);
    divInfo.appendChild(coffeeIntensity);
    divInfo.appendChild(coffeeDescription);

    divSale.appendChild(quantidade);
    divSale.appendChild(prize);

    quantidade.appendChild(minus);
    quantidade.appendChild(divDisplay);
    quantidade.appendChild(plus);



}



async function getData() {
    const response = await fetch("https://entregavel.polijrinternal.com/produtos");

    const produtos = await response.json();

    l = produtos.length;
    for (var i = 0; i < l; i++){
        coffeeCard(produtos[i].nome, produtos[i].intensidade, produtos[i].preco, produtos[i].descricao, produtos[i].foto);
    }
}   

getData();