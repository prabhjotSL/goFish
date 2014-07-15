function createPlayers (number_of_players) {
	/*
		Author: Prabhjot
		Input: Number of Players
		Output: An Array containing the player data.
	*/
	var players = [];
	for(var i = 0; i < number_of_players; i++){
		players[i] = {
			id: i+1,
			cards: []
		};
	}
	return players;
};

/* 
	Testing function createPlayers with a test data set
*/
console.log(createPlayers(4));
var players = createPlayers(4);


var CARDS_IN_DECK = 52;

function initializeDeck(){
	/*
		Author: Prabhjot
		Input: Nothing
		Output: A deck of cards without the color or type of number. Only numbers are stored.
		Note: A:1 , J: 11, Q: 12, K: 13
	*/
	var deck = [];
	var count = 0;
	while(deck.length < CARDS_IN_DECK) {
		deck.push(count+1);
		count++;
		if(count == CARDS_IN_DECK/4) {
			count = 0;
		}
	}
	return deck;
};

/* 
	Testing function initializeDeck
*/
console.log(initializeDeck());
var deck = initializeDeck();

function assignCardsToPlayers(players, deck, number_of_card_to_distribute){
	/*
		Author: Prabhjot
		Input: players array, deck array, number_of_card_to_distribute
		Output: Each player is assigned a set of 7 cards (Hard coded for now) from the deck of cards.
	*/
	for(var j=0; j<players.length; j++){
		for(var i=0; i<number_of_card_to_distribute; i++){
			var card_given = deck.splice(Math.floor(Math.random()*(CARDS_IN_DECK-i-(j*number_of_card_to_distribute))), 1);
			console.log(card_given, i, j);
			players[j].cards.push(card_given[0]);
		}
	}
	return {
		"players": players,
		"deck": deck
	}

}

var afterDistribution = assignCardsToPlayers(players, deck, 7);
players = afterDistribution["players"];
deck = afterDistribution["deck"];
console.log(players, "Players");
console.log(deck, "Deck");