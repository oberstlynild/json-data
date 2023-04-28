// let players = [];

function player(image, name, age, rating, kd, hs, adr, kast) {
    this.image=image;
    this.name=name;
    this.age=age;
    this.rating=rating;
    this.kd=kd;
    this.hs=hs;
    this.adr=adr;
    this.kast=kast;
}

function addNewPlayer(){
    let playerImage = document.getElementById('input-image').value;
    let playerName = document.getElementById('input-name').value;
    let playerAge = document.getElementById('input-age').value;
    let playerRating = document.getElementById('input-rating').value;
    let playerKd = document.getElementById('input-kd').value;
    let playerHs = document.getElementById('input-hs').value;
    let playerAdr = document.getElementById('input-adr').value;
    let playerKast = document.getElementById('input-kast').value;

    var newPlayer = new player(playerImage, playerName, playerAge, playerRating, playerKd, playerHs, playerAdr, playerKast);
    // players.push(newPlayer);
    drawHtml(newPlayer);
}

function drawHtml(data) {
    let playerWrapper = document.getElementById('player-wrapper');

    let playerImage = document.createElement('img');
    playerImage.src=data.image;
    playerWrapper.appendChild(playerImage);

    let playerName = document.createElement('h3');
    playerName.innerHTML = data.name;
    playerWrapper.appendChild(playerName);

    
}