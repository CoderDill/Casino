/**
 * Determines True or False by random number
 * @returns boolean
 */
var determineCoin = function () {
    var randNum = Math.floor(Math.random() * 100);
    return randNum >= 50 ? true : false;
};
/**
 * Determines if coin is heads or tails
 *
 * @returns 'heads' or 'tails'
 */
var assignCoin = function () {
    var coin = determineCoin();
    if (coin === false) {
        return coin = 'heads';
    }
    else {
        return coin = 'tails';
    }
};
/**
 * Determines if Player or Computer wins
 *
 * @param guess
 *
 * @returns nothing
 */
var getPlayersGuess = function (guess) {
    var result = assignCoin();
    if (guess === result) {
        console.log("Your guess of " + guess + " was right! You Win!");
    }
    else {
        console.log("It was " + result + "! Computer Wins, please try again.");
    }
};
getPlayersGuess('heads');
