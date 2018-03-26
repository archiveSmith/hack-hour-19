/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  const rank1 = calculateHand(hand1);
  const rank2 = calculateHand(hand2);
  let winner;
  if (rank1 > rank2) winner = 'Player 1';
  if (rank2 > rank1) winner = 'Player 2';
  if (rank1 === rank2) winner = breakTie(hand1, hand2);
  return winner ? `${winner} wins` : 'Draw'; 
}

function calculateHand(hand) {
  // track frequencies of each card in object
  const tracker = hand.reduce((trackObj, element) => {
    if (!trackObj[element]) trackObj[element] = 1;
    else trackObj[element]++;
    return trackObj;
  }, {});
  const frequencies = Object.values(tracker);
  const highestFreq = frequencies.reduce((maxFreq, curr) => {
    return (curr > maxFreq) ? curr : maxFreq;
  });
  // Switch statement on max of frequency tracking object
  // Default card rank is highest card value; hand values are 15-20 for 1  pair through 4-of-a-kind
  switch (highestFreq) {
    case 4:
      return 20;
    case 3: {
      // Check for full house
      if (frequencies.indexOf(2) > -1) return 19;
      return 17;
    }
    case 2: {
      // Check for 2 pair
      if (frequencies.indexOf(2) !== frequencies.lastIndexOf(2)) return 16;
      return 15;
    }
    default: {
      // Check for straight
      let max = Math.max(...hand);
      let straight = max - 4 > 2 
        && hand.indexOf(max - 3) > -1
        && hand.indexOf(max - 2) > -1 
        && hand.indexOf(max - 1) > -1;
      return straight ? 18 : Math.max(...hand);
    }
  }
}

function breakTie(hand1, hand2) {
  const highest1 = Math.max(...hand1);
  const highest2 = Math.max(...hand2);
  if (highest1 === highest2) return undefined;
  return (highest1 > highest2) ? 'Player 1' : 'Player 2';
}

console.log(poker([3,5,5,5,2], [4,5,6,7,8]));

module.exports = poker;
