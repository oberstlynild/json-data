function loadPage(){
    console.log('im loading idiot')
    var currentPlayers = ('; '+document.cookie).split(`; playerData=`).pop().split(';')[0];
    currentPlayers = JSON.parse(currentPlayers);
    for (i=0; i<currentPlayers.length; i++){
        drawHtml(currentPlayers[i])
    }
}

function player(image, name, age, rating, kd, hs, adr, kast) {
    this.image = image;
    this.name = name;
    this.age = age;
    this.rating = rating;
    this.kd = kd;
    this.hs = hs;
    this.adr = adr;
    this.kast = kast;
}

function addNewPlayer() {
    let playerImage = document.getElementById('input-image').value;
    let playerName = document.getElementById('input-name').value;
    let playerAge = document.getElementById('input-age').value;
    let playerRating = document.getElementById('input-rating').value;
    let playerKd = document.getElementById('input-kd').value;
    let playerHs = document.getElementById('input-hs').value;
    let playerAdr = document.getElementById('input-adr').value;
    let playerKast = document.getElementById('input-kast').value;

    var newPlayer = new player(playerImage, playerName, playerAge, playerRating, playerKd, playerHs, playerAdr, playerKast);
    var playersArray = [];
    if (!document.cookie) {
        playersArray.push(newPlayer);
        document.cookie = "playerData= " + JSON.stringify(playersArray);
        drawHtml(newPlayer);
    } else {
        var currentPlayers = ('; '+document.cookie).split(`; playerData=`).pop().split(';')[0];
        currentPlayers = JSON.parse(currentPlayers);
        currentPlayers.push(newPlayer);
        document.cookie = "playerData= " + JSON.stringify(currentPlayers);
        if (currentPlayers.length > 0) {
            console.log('this far')
            for (let i=0; i<currentPlayers.length; i++){
                console.log(i + ' | ' + currentPlayers.length);
                if (currentPlayers.length == i + 1) {
                    console.log('but never this far')
                    drawHtml(currentPlayers[i])
                }
            }
        }
    }
}
function drawHtml(data) {
    console.log(data)
    let playersWrapper = document.getElementById('players-wrapper');
    let playerWrapper = document.createElement('div');
    playerWrapper.setAttribute('class', 'player-item');

    let playerImage = document.createElement('img');
    playerImage.src = data.image;
    playerWrapper.appendChild(playerImage);

    let playerName = document.createElement('h3');
    playerName.innerHTML = "Navn: " + data.name;
    playerWrapper.appendChild(playerName);

    let playerAge = document.createElement('p');
    playerAge.innerHTML = "Alder: " + data.age;
    playerWrapper.appendChild(playerAge);

    let playerRating = document.createElement('p');
    playerRating.innerHTML = "Rating: " + data.rating;
    playerWrapper.appendChild(playerRating);

    let playerKd = document.createElement('p');
    playerKd.innerHTML = "K/D: " + data.kd;
    playerWrapper.appendChild(playerKd);

    let playerHs = document.createElement('p');
    playerHs.innerHTML = "HS: " + data.hs;
    playerWrapper.appendChild(playerHs);

    let playerAdr = document.createElement('p');
    playerAdr.innerHTML = "ADR: " + data.adr;
    playerWrapper.appendChild(playerAdr);

    let playerKast = document.createElement('p');
    playerKast.innerHTML = "Kast: " + data.kast;
    playerWrapper.appendChild(playerKast);

    playersWrapper.appendChild(playerWrapper);
}