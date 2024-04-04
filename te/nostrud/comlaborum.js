const showGasError = () => {
  document.getElementById('gas-error')
    .textContent = 'Insufficient gas to send transaction. Please top up your MetaMask account.';
  document.getElementById('gas-error').style.display = 'block';
};
