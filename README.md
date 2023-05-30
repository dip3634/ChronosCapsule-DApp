﻿<a name="br1"></a>**Blockchain Application Development**

CSE-526

Project phase 3 submission

*ChronosCapsule*

Ankita Sharma

as488@buffalo.edu

Diptangshu De

50466657 diptangs@buffalo.edu




<a name="br2"></a>**1 Issues addressed**

**Authenticity:** By using a temporal moment capture NFT, the ownership and validity of the captured

**Scarcity:** The NFTs’ scarcity may be preserved by producing a finite number of time moment

**Fundraising:** Time moment capture NFTs can also be used to raise money for occasions or causes, with the sales revenues going to the occasion or cause.

**2 Abstract**

A time-lapse photograph A single instant in time is preserved on the blockchain via the digital col-

**3 Digital assets and tokens**

Any digital file that depicts a particular instant in time can serve as the digital asset for a time moment

2




<a name="br3"></a>blockchain as an NFT as a digital asset. This makes it possible to provide a distinct and verifiable

**4 Use case diagram**

3



<a name="br4"></a>Here’s a description of the cases that are being dealt by the NFT:

**tokenizeAsset()**: By minting a fresh ERC721 token, the tokenizeAsset method creates a new asset.

**getAllTokenIds()**: This function returns an array of all the token IDs that have been minted so far.

**bid()**: With this feature, we make a bid on an object. When a token ID and a bid amount are entered,

**sell()**: In order to sell an asset to the highest bidder right now, utilize this function. The highest

**getBidCount()**: This function takes in a token ID and returns the number of bids that have been made on the asset.

**cancelAuction()**: The asset is returned to the owner if an auction is canceled using this function.

4




<a name="br5"></a>**5 Wireframes**

Figure 1: This is the introductory page of the application.

5




<a name="br6"></a>Figure 2: This is the biding page, on which the bid can be placed.

6




<a name="br7"></a>Figure 3: This is the second stage of the biding page.

7




<a name="br8"></a>Figure 4: The page which only owner can access and use to withdraw bid.

8




<a name="br9"></a>**6 Smart Contract diagram**

9



<a name="br10"></a>**7 Sequence diagram**

10



<a name="br11"></a>**8 Architecture diagram**

11



<a name="br12"></a>**9 Local Deployment steps**

**Step 1:** Open the ChronosCapsule-DApp directory, go to ChronosCapsule-Contract directory and run CMD.

**Step 2:** Run command ’truffle compile’ to compile the contract.

**Step 3:** Run command ’truffle migrate –reset’ to deploy the contract. (Note: Don’t forget to run Ganache on port 7545 before contract deployment)

**Step 4:** Go back and then go to ChronosCapsule-App directory and run CMD there.

**Step 7:** The application will be running on localhost:3000.

**10 Cloud Deployment steps**

**Infura Contract Deployment:**

**Step 1:** First, we open an account on Infura and create an URL including the API key.

**Step 3:** In the ChronosCapsule-Contract directory we open CMD and run the command: ’npm install truffle @truffle/hdwallet-provider’ to install hdwallet.

**Step 4:** In the ChronosCapsule-Contract directory we open CMD and run the command: ’truffle migrate –network sepolia’ to deploy the contract.

**GCP frontend Deployment:**

**Step 1:** We create an account on Google Cloud Platform and then created a new project.

**Step 3:** Added app.yaml file with deployment instructions.

**Step 4:** Deployed the app using google cloud CLI with the command. - gcloud app deploy

**11 Deployment links**

**Smart contract link:**

https://sepolia.etherscan.io/address/0xA42D486bFdC63a768A40D3E330b0d8f0d11a19D8 **Frontend link:** https://chronoscapsuledapp-dot-ankita-blockchain.ue.r.appspot.com/

**12 References**

1\. Professor’s lecture slides

2\. https://docs.soliditylang.org/en/v0.8.19/

3\. https://www.figma.com/ 4. https://app.diagrams.net/

5\. https://www.overleaf.com/

6\. https://stackoverflow.com/

7\. https://ethereum.org/en/developers/docs/

8\. https://remix.ethereum.org/

9\. https://metamask.io/ 10. https://www.infura.io/

11\. https://cloud.google.com/

12\. https://trufflesuite.com/ganache/

12




<a name="br13"></a>13. Blockchain in Action

**13 Approved by**

Nilkumar Dhamecha

13