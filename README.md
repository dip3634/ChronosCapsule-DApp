
**ChronosCapsule**

**1 Issues addressed**

**Authenticity:** By using a temporal moment capture NFT,the ownership and validity of the captured moment may be confirmed on the blockchain, helping to thwart fraud and guarantee that the moment is actually special and precious.

**Scarcity:** The NFTs’ scarcity may be preserved by producing a finite number of time moment capture NFTs for each instant, which can assist to raise their value and attractiveness. **Preservation:** By using blockchain technology, it is possible to ensure that the moment is kept in a safe, decentralized manner, preventing the loss or erasure of the original event or memory. **Access:** The usage of time moment capture NFTs can also offer greater access to historical events or moments that might otherwise be challenging or impossible to access, especially for people who are physically unable to attend or experience the moment.

**Fundraising:** Time moment capture NFTs can also be used to raise money for occasions or causes, with the sales revenues going to the occasion or cause.

**2 Abstract**

A time-lapse photograph A single instant in time is preserved on the blockchain via the digital col- lectible known as NFT. With the use of these NFTs, historical memories and events can be captured and preserved, and a new type of collectible can be created as well as a way to support causes and events. These can be made and owned by anyone, and they are particularly helpful for docu- menting significant occasions like historical occurrences or defining moments in one’s life. On the blockchain, there are time moment capture NFTs that may be accessed and traded internationally. Byutilizingblockchaintechnology,itispossibletoverifythevalidityandownershipofthemoment that was captured, making these treasures one of a kind.

**3 Digital assets and tokens**

Anydigitalfilethatdepictsaparticularinstantintimecanserveasthedigitalassetforatimemoment captureNFT.Inthisinstance,we’vechosentoemployphotographs. Thenon-fungibletoken(NFT), which is a distinct digital asset that is maintained on the blockchain and signifies ownership of the digital asset, may be used as the token for a time moment capture. NFTs are unique digital assets that can represent any form of unique digital asset, including images, videos, audio files, and other types of media. They are created via smart contracts on blockchain networks like Ethereum. NFTs are distinctive because they each possess a distinct set of qualities that set them apart from other NFTs. Cryptographic hashing algorithms are used to generate a unique code that represents the NFT and its metadata, enabling its uniqueness. NFTs can be easily exchanged between people and purchased, sold, and traded in marketplaces built on blockchain technology. The ownership and authenticity of each moment can be confirmed and maintained on the blockchain by utilizing NFTs as the token for time moment capture NFTs. By doing so, fraud may be avoided and every moment can be guaranteed to be genuine unique and priceless as a collection. Because they have a longhistoryofbeingusedtorecordandretainmemories, photoswerechosenasthedigitalassetfor time-momentcaptureNFTs. Photographsserveasavisualrecordofacertainpointintimeandhave the capacity to stir up strong feelings and memories in individuals who view them. Photographs are a realistic option for usage in NFTs since they are simple to digitize and put on the blockchain as a digital asset. They can be used to represent a wide range of diverse occasions, from historical events to personal milestones, and are simple to share and access on a worldwide scale. Moreover, it is simple to digitize and store photos on the blockchain: Photos can be readily stored on the blockchain as an NFT as a digital asset. This makes it possible to provide a distinct and verifiable recordofownershipandvalidityforeachmomentthatisfilmed. Photosmayalsobequicklyshared and accessed from anywhere in the globe because they are in a digital format.

**4 Use case diagram**

![First diagram](https://github.com/dip3634/ChronosCapsule-DApp/blob/master/Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.002.jpeg?raw=true)

Here’s a description of the cases that are being dealt by the NFT:

**tokenizeAsset()**: By minting a fresh ERC721 token, the tokenizeAsset method creates a new asset. It requests information on the asset’s description, URL, base price, and auction expiration date. Using this data, it constructs a new Asset struct and designates the sender as the asset’s owner. After that, it uses the ERC721. mint method to produce a new token and returns the ID of that token.

**getAllTokenIds()**: This function returns an array of all the token IDs that have been minted so far. **getTokenHighestBid()**: This function takes in a token ID and returns the current highest bid for that token.

**bid()**: Withthisfeature,wemakeabidonanobject. WhenatokenIDandabidamountareentered, the system checks to see if the amount is higher than the highest bid currently in place and if the auction has not yet ended. If the bid is higher, it changes the asset’s highest bid and highest bidder and transfers the prior highest bid to the previous highest bidder’s bids mapping. **withdrawBid()**:With this function, the owner can cancel a previous bid they made on an asset. It accepts a token ID, confirms that the sender is not the top bidder at the moment, and, if they have placed a bid, sends the winnings back to them.

**sell()**: In order to sell an asset to the highest bidder right now, utilize this function. The highest bid amount is transferred to the asset’s owner after the system receives a token ID, verifies that the sender is the owner of the asset and that the auction has ended. The highest bidder is then given the token.

**getBidCount()**: This function takes in a token ID and returns the number of bids that have been made on the asset.

**cancelAuction()**: The asset is returned to the owner if an auction is canceled using this function. The asset is deleted and the token is burned once it receives a token ID, verifies that the sender is the owner of the asset and that no bids have been placed on it, and then deletes the asset.

**5 Wireframes**

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.003.jpeg)

Figure 1: This is the introductory page of the application.

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.004.jpeg)

Figure 2: This is the biding page, on which the bid can be placed.

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.005.jpeg)

Figure 3: This is the second stage of the biding page.

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.006.jpeg)

Figure 4: The page which only owner can access and use to withdraw bid.

**6 Smart Contract diagram**

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.007.jpeg)

**7 Sequence diagram**

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.008.jpeg)

**8 Architecture diagram**

![](Aspose.Words.c97c9e3d-d47b-4a95-8ee6-95355e3f38bd.009.jpeg)

**9 Local Deployment steps**

**Step 1:** Open the ChronosCapsule-DApp directory, go to ChronosCapsule-Contract directory and run CMD.

**Step 2:** Run command ’truffle compile’ to compile the contract.

**Step 3:** Run command ’truffle migrate –reset’ to deploy the contract. (Note: Don’t forget to run Ganache on port 7545 before contract deployment)

**Step 4:** Go back and then go to ChronosCapsule-App directory and run CMD there.

**Step 5:** Run command ’npm install’.

**Step 6:** Run command ’npm start’.

**Step 7:** The application will be running on localhost:3000.

**10 Cloud Deployment steps**

**Infura Contract Deployment:**

**Step 1:** First, we open an account on Infura and create an URL including the API key.

**Step 2:** We write the deployment configuration in the truffle.config file including the compiler and Sepolia network configurations.

**Step 3:** In the ChronosCapsule-Contract directory we open CMD and run the command: ’npm install truffle @truffle/hdwallet-provider’ to install hdwallet.

**Step 4:** In the ChronosCapsule-Contract directory we open CMD and run the command: ’truffle migrate –network sepolia’ to deploy the contract.

**GCP frontend Deployment:**

**Step 1:** We create an account on Google Cloud Platform and then created a new project.

**Step 2:** Started Google App Engine.

**Step 3:** Added app.yaml file with deployment instructions.

**Step 4:** Deployed the app using google cloud CLI with the command. - gcloud app deploy

**11 Deployment links**

**Smart contract link:** https://sepolia.etherscan.io/address/0xA42D486bFdC63a768A40D3E330b0d8f0d11a19D8 **Frontend link:** https://chronoscapsuledapp-dot-ankita-blockchain.ue.r.appspot.com/
