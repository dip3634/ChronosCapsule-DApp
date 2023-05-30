document.addEventListener('DOMContentLoaded', () => {

    // Checking if Web3 is injected by Metamask
    if (typeof window.ethereum !== 'undefined') {
        console.log('Metamask is installed!');
        
        // Checking if Metamask is connected to a wallet
        window.ethereum.request({ method: 'eth_accounts' })
          .then((accounts) => {
            if (accounts.length > 0) {
              console.log('Metamask is connected to a wallet!');
              // Updating the wallet status message to show that Metamask is connected
              document.getElementById('connect-button').innerHTML = "Account connected  \t" + accounts[0];
            } else {
              console.log('Metamask is not connected to a wallet!');
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        console.log('Metamask is not installed!');
      }
    
    // Connecting to Metamask function
    async function connectToMetamask() {
        // Checking if Metamask is installed
        if (typeof window.ethereum !== 'undefined') {
          try {
            // Requesting account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Metamask:', accounts[0]);
            // Updating status of connection
            const statusElement = document.getElementById('connect-button');
            statusElement.textContent = "Account connected \t" + accounts[0]; 
          } catch (error) {
            console.error('Error connecting to Metamask:', error);
          }
        } else {
          console.error('Metamask not detected. Please install Metamask.');
        }
      }
      
      const connectButton = document.getElementById('connect-button');
      connectButton.addEventListener('click', connectToMetamask);
    });