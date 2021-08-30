var initialPrice = document.querySelector('#initialPrice');
var stocksQuantity = document.querySelector('#stocksQuantity');
var currentPrice = document.querySelector('#currentPrice');
var btn = document.querySelector('#btn');
var output = document.querySelector('#output');

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    // Loss
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    output.classList.add('loss');
    output.classList.remove('profit');
    output.classList.remove('noGain');

    showOutput(
      `Hey! The loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}`
    );
  } else if (current > initial) {
    // Profit
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `YAY! The profit is ${profit} and the percent is ${profitPercentage.toFixed(
        2
      )}`
    );
    output.classList.add('profit');
    output.classList.remove('loss');
    output.classList.remove('noGain');
  } else {
    // rest
    showOutput(`No pain NO gain, No gain No Pain`);
    output.classList.remove('loss');
    output.classList.remove('profit');
  }
}

function showOutput(message) {
  output.innerText = message;
}

btn.addEventListener('click', () => {
  var ip = initialPrice.value;
  var qty = stocksQuantity.value;
  var cp = currentPrice.value;
  calculateProfitAndLoss(ip, qty, cp);
});
