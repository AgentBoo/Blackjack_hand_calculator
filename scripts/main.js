/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let h = hand;
  let n = 0, f = 0, aOne = 0, aEleven = 0;

  for (let i = 0; i < h.length; i++){
    if (h[i] == "A"){
      aOne += 1;
      aEleven += 11;
    } else if (h[i]== "J" || h[i] == "Q" || h[i] == "K"){
      f += 10;
    } else {
      n += Number(h[i]);
    }
  } const sum1 = n + f + aOne;
    const sum2 = n + f + aEleven;

  if (sum2 > sum1 && sum2 <= 21){
    console.log(sum2);
    return sum2;
  } else {
    console.log(sum1);
    return sum1;
  }

}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
