// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ChronosCapsuleNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct Asset {
        uint256 basePrice;
        address payable owner;
        uint256 highestBid;
        address payable highestBidder;
        string urlOfAsset;
        mapping(address => uint256) bids;
    }

    struct AssetDetails {
        uint256 tokenId;
        uint256 basePrice;
        uint256 highestBid;
        address payable owner;
        string urlOfAsset;
    }

    uint256 public tokenCount;
    mapping(uint256 => Asset) public assets;
    address public administrator;
    mapping(uint256 => AssetDetails) public assetMap;
    uint256 public assetsCount;
    mapping (address => uint256) private countOfOwnedTokens;
 

    constructor() public ERC721("ChronosCapsuleNFT", "CCNFT") {
        administrator = msg.sender;
    }

    event AssetCancelled(uint256 tokenId, address owner);

    // Modifiers

     modifier bidHigherThanCurrentBid(uint256 _tokenId) {
        require(msg.value > assets[_tokenId].highestBid, "Bid must be higher than current highest bid");
        _;
    }

     modifier ownerValidation(uint256 _tokenId) {
        require(assets[_tokenId].owner == msg.sender, "You do not own this asset");
        _;
    }

    modifier notOwner(uint256 _tokenId) {
        require(assets[_tokenId].owner != msg.sender, "You cannot bid on your own asset");
        _;
    }


    function balanceOf() public view returns (uint256) {
        require(msg.sender != address(0), "ERC721: balance query for the zero address");

        return countOfOwnedTokens[msg.sender];
    }

     function tokenizeAsset(uint256 basePrice,string calldata urlOfAsset) public {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        Asset storage newAsset = assets[newItemId];
        newAsset.basePrice = basePrice;
        newAsset.owner = payable(msg.sender);
        newAsset.highestBid = basePrice;
        newAsset.highestBidder = payable(address(0));
        newAsset.urlOfAsset = urlOfAsset;
        assetMap[tokenCount] = AssetDetails(tokenCount,basePrice,basePrice,payable(msg.sender),urlOfAsset);
        _mint(msg.sender, newItemId);
        countOfOwnedTokens[msg.sender]++;
        tokenCount=tokenCount+1;
    }



    function getAllTokenIds() public view returns (uint256[] memory) {
    uint256[] memory tokenIds = new uint256[](_tokenIds.current());
    for (uint256 i = 1; i < _tokenIds.current(); i++) {
        tokenIds[i] = i;
    }
    return tokenIds;
    }

    function ownerOf(uint256 tokenId) public view override returns (address) {
        address owner = assetMap[tokenId].owner;
        require(owner != address(0), "NoAssetExists");
        return owner;
    }

    function getTokenHighestBid(uint256 _tokenId) public view returns (uint256) {
    return assets[_tokenId].highestBid;
}

    function bid(uint256 _tokenId) public payable notOwner(_tokenId){
        require(msg.value > assets[_tokenId].highestBid, "Bid must be higher than current highest bid");
        require(assets[_tokenId].owner != msg.sender, "You cannot bid on your own asset");

        if (assets[_tokenId].highestBid != 0) {
            assets[_tokenId].bids[assets[_tokenId].highestBidder] += assets[_tokenId].highestBid;
        }
        assets[_tokenId].highestBid = msg.value;
        assetMap[_tokenId].highestBid = msg.value;
        assets[_tokenId].highestBidder = payable(msg.sender);
    }

        function changeAssetValue(uint256 _tokenId, uint256 _newPrice) public ownerValidation(_tokenId) {
        assets[_tokenId].basePrice = _newPrice;
        assetMap[_tokenId].basePrice = _newPrice;
    }


    function withdrawBid(uint256 _tokenId) public {
        require(msg.sender != assets[_tokenId].highestBidder, "You cannot withdraw a winning bid");
        require(assets[_tokenId].owner != msg.sender, "You cannot withdraw your own asset");
        uint256 bidAmount = assets[_tokenId].bids[msg.sender];
        require(bidAmount > 0, "You have not made a bid yet");
        assets[_tokenId].bids[msg.sender] = 0;
        payable(msg.sender).transfer(bidAmount);
    }


    function sell(uint256 _tokenId) public ownerValidation(_tokenId){
    address payable recipient = payable(assets[_tokenId].highestBidder);
        uint256 amount = assets[_tokenId].highestBid;
        assets[_tokenId].highestBid = 0;
        assets[_tokenId].highestBidder = payable(address(0));
        assets[_tokenId].owner = recipient;
        assetMap[_tokenId].owner = recipient;
        countOfOwnedTokens[msg.sender]--;
        countOfOwnedTokens[recipient]++;

        payable(msg.sender).transfer(amount);
        _transfer(msg.sender, recipient, _tokenId);
    }

    function getBidCount(uint256 _tokenId) public view returns (uint256) {
        uint256 count = 0;
        for (uint256 i = 0; i < assets[_tokenId].highestBid; i++) {
            if (assets[_tokenId].bids[assets[_tokenId].highestBidder] > 0) {
                count++;
            }
        }
        return count;
    }

    function cancelAsset(uint256 _tokenId) public  ownerValidation(_tokenId){

    address tokenOwner = ownerOf(_tokenId);
    _burn(_tokenId);
    delete assetMap[_tokenId];
    countOfOwnedTokens[msg.sender]--;
    emit AssetCancelled(_tokenId, msg.sender);
}  
}