var MYVAR = {};
MYVAR.counter=0;

//Tell the library which element to use for the table
cards.init({table:'#card-table'});

//Create a new deck of cards
deck = new cards.Deck(); 
//By default it's in the middle of the container, put it slightly to the side
deck.x -= 50;

//cards.all contains all cards, put them all in the deck
deck.addCards(cards.all); 
//No animation here, just get the deck onto the table.
deck.render({immediate:true});

//Now lets create a couple of hands, one face down, one face up.
//upperhand = new cards.Hand({faceUp:false, y:60});
lowerhand = new cards.Hand({faceUp:true, y:340});

//Lets add a discard pile
discardPile = new cards.Deck({faceUp:true});
discardPile.x += 50;


//Let's deal when the Deal button is pressed:
$('#deal').click(function() {
	deck.deal(1, [lowerhand], 50, function() {
		//This is a callback function, called when the dealing
		//is done.
		//discardPile.addCard(deck.topCard());
		//discardPile.render();
	});
});

//Check card when the High button is pressed:
$('#high').click(function() {
      discardPile.addCard(deck.topCard());
      discardPile.render();
      dpRank=discardPile.topCard().rank;
      lhRank=lowerhand.topCard().rank;
      if (lhRank > dpRank) { MYVAR.counter++; }
      else {
       window.alert("INCORRECT.  Run ended at " + MYVAR.counter + " in a row");
       MYVAR.counter=0;
      }
      
});

//Check card when the Low button is pressed:
$('#low').click(function() {
      discardPile.addCard(deck.topCard());
      discardPile.render();
      dpRank=discardPile.topCard().rank;
      lhRank=lowerhand.topCard().rank;
      if (lhRank < dpRank) { MYVAR.counter++; }
      else {
       window.alert("INCORRECT.  Run ended at " + MYVAR.counter + " in a row");
       MYVAR.counter=0;
      }
});


//So, that should give you some idea about how to render a card game.
//Now you just need to write some logic around who can play when etc...
//Good luck :)
