# Card_game_2
Application description:
 Playing cards come as Full Pack of 52 cards. (4 Suits X 13 Ranks). Ref
the picture
 4 Suits are CLUB, DIAMOND, HEART, SPADE (from smallest to highest
in value)
 Ranks are called as TWO, THREE, ..., TEN, JACK, QUEEN, KING, ACE
(from smallest to highest in value)

 Any group of cards (containing 1..52 cards) is called Pack of Cards.
 Full pack used in the game initially contains all 52 cards, but in the
game as one or more cads are drawn, the count may go down till zero.
 A Player can do following actions with Pack
o can shuffle
o can get top card
o can get random card
o can query size of pack.
o Can reset sequence in ascending/ descending order.

 Writing the complete pack of cards in to the file named “pack-of-
cards.json in json format as shown below

[
{ “SUIT”:"SPADE", “RANK”: “TEN” },
{“SUIT” : "HEART", “RANK”:”JACK”},
... more cards here
]
