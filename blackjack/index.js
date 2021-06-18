"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var player = [];
var dealer = [];
function deckOfCards(suits, values) {
    var cards = [];
    for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
        var suit = suits_1[_i];
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            var card = { suit: suit, value: value };
            cards.push(card);
        }
    }
    getRandCard(cards);
    return cards;
}
var cards = deckOfCards(suits, values);
function getRandCard(cards) {
    var randCard = cards[Math.floor(Math.random() * cards.length)];
    return randCard;
}
function givePlayerCards() {
    for (var i = 0; i <= 1; i++) {
        player.push(getRandCard(cards));
    }
    console.log("Players Hand: [" + player[0]["value"] + " of " + player[0]["suit"] + "][" + player[1]["value"] + " of " + player[1]["suit"] + "]");
}
function giveDealerCards() {
    for (var i = 0; i <= 1; i++) {
        dealer.push(getRandCard(cards));
    }
    console.log("Dealers Hand: [" + dealer[0]["value"] + " of " + dealer[0]["suit"] + "][HIDDEN CARD]");
}
// 
function hit() {
    return getRandCard(cards);
}
var playersHand = givePlayerCards();
var dealersHand = giveDealerCards();
var playerDecision = prompt('Hit, Double or Stay');
if (playerDecision === 'Hit' || 'Double') {
    var hitCard = hit();
    player.push(hitCard);
    console.log("Players Hand: [" + player[0]["value"] + " of " + player[0]["suit"] + "][" + player[1]["value"] + " of " + player[1]["suit"] + "][" + player[2]["value"] + " of " + player[2]["suit"] + "]");
    var playerDecision2 = prompt('Hit, Stay or Bust');
    if (playerDecision2 === "Bust") {
        console.log("Too Many, you lose. Ctrl C to restart.");
    }
    if (playerDecision2 === 'Hit') {
        var hitCard_1 = hit();
        player.push(hitCard_1);
        console.log("Players Hand: [" + player[0]["value"] + " of " + player[0]["suit"] + "][" + player[1]["value"] + " of " + player[1]["suit"] + "][" + player[2]["value"] + " of " + player[2]["suit"] + "][" + player[3]["value"] + " of " + player[3]["suit"] + "]");
        var playerDecision3 = prompt('Stay or Bust');
        if (playerDecision3 === "Bust") {
            console.log("Too Many, you lose. Ctrl C to restart.");
        }
    }
}
console.log("Dealers Hand: [" + dealer[0]["value"] + " of " + dealer[0]["suit"] + "][" + dealer[1]["value"] + " of " + dealer[1]["suit"] + "]");
var dealerDecision = prompt('CPU - Hit or Stay');
if (dealerDecision === 'Hit') {
    var hitCard = hit();
    dealer.push(hitCard);
    console.log("Dealers Hand: [" + dealer[0]["value"] + " of " + dealer[0]["suit"] + "][" + dealer[1]["value"] + " of " + dealer[1]["suit"] + "][" + dealer[2]["value"] + " of " + dealer[2]["suit"] + "]");
    var dealerDecision2 = prompt('Hit, Stay or Bust');
    if (dealerDecision2 === "Bust") {
        console.log("Too Many for the dealer! You Win!");
    }
    if (dealerDecision2 === 'Hit') {
        var hitCard_2 = hit();
        player.push(hitCard_2);
        console.log("Players Hand: [" + dealer[0]["value"] + " of " + dealer[0]["suit"] + "][" + dealer[1]["value"] + " of " + dealer[1]["suit"] + "][" + dealer[2]["value"] + " of " + dealer[2]["suit"] + "][" + dealer[3]["value"] + " of " + dealer[3]["suit"] + "]");
    }
}
