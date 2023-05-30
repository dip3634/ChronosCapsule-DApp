App = {
    web3: null,
    contracts: {},
    //development
    infuraApiKey:'1b4674085ec140869519018f1e3122bf',
    url:'https://sepolia.infura.io/v3/1b4674085ec140869519018f1e3122bf',
    address: '0x48a8aB9fE90008A4f9300FEe52fdA117A37a9507',
    network_id:5777,
    administrator:null,
    current_account:null,
    value:1000000000000000000,
    index:0,
    margin:10,
    left:15,
    init: function() {
      return App.initWeb3();
    },
  
    initWeb3: function() {         
      if (typeof web3 !== 'undefined') {
        App.web3 = new Web3(Web3.givenProvider);
      } else {
        App.web3 = new Web3(App.url);
      }
      ethereum.enable();      
      return App.initContract();
        
    },
  
    initContract: async function() { 
      App.current_account = await ethereum.request({method: 'eth_accounts'});  
      $.getJSON('../data/ChronosCapsuleNFT.json', function(data) {  
        console.log(data);   
        App.contracts.ChronosCapsuleNFT = new App.web3.eth.Contract(data.abi, App.address, {});
        console.log(App.contracts.ChronosCapsuleNFT);
        App.contracts.ChronosCapsuleNFT.methods.administrator()
        .call()
        .then((r)=>{
          console.log("Administrator: "+ r);
          App.administrator=r;
        })
        App.contracts.ChronosCapsuleNFT.methods.balanceOf()
        .call({from:App.current_account[0]})
        .then((receipt)=>{
          jQuery('#balance').html(" Number of token owned by the current account: "+ receipt +"<hr>")
          console.log(App.current_account[0] + " " + receipt);
        })

        App.fetchAllAssets();
        
        
      }) 
      return App.bindEvents();
    },  
    

    bindEvents: function() {  
      $(document).on('click', '#add_token', function(){
         App.tokenizeAsset(jQuery('#base_price').val(),jQuery('#urlOfAsset').val());
        
      });
      $(document).on('click', '#bid_price', function(){
        App.BidAsset(jQuery('#bid_asset_id').val(),jQuery('#bid_value').val());
     });
  
     $(document).on('click', '#sell_asset', function(){
      App.SellAsset(jQuery('#sell_asset_id').val());
     });
  
      $(document).on('click', '#withdraw_asset', function(){
        App.WithdrawBid(jQuery('#withdraw_asset_id').val(),);
      });
  
      $(document).on('click', '#cancel_asset', function(){
        App.CancelAsset(jQuery('#cancel_asset_id').val());
      });
  
      $(document).on('click', '#change_base', function(){
        App.ChangeAssetValue(jQuery('#change_asset_id').val(),jQuery('#change_base_value').val());
      });
  
  
    },
    tokenizeAsset:function(basePrice,urlOfAsset){
        if(basePrice===''|| urlOfAsset===''){
          alert('Please enter all values');
          return false;
        }
  
        var option={from:App.current_account[0]}    
        App.contracts.ChronosCapsuleNFT.methods.tokenizeAsset(basePrice,urlOfAsset)
        .send(option).on('transactionHash', function(hash){
        console.log(hash);
        location.reload()
        App.fetchAllAssets();
        
      }).on('error',(e)=>{
        console.log('error')
      })
      },
  
    
    fetchAllAssets:function(){     
      App.contracts.ChronosCapsuleNFT.methods.getAllTokenIds().call().then((tokenIds)=>{   
        var length = tokenIds.length;     
        for(var i=0;i<length;i++){
          App.contracts.ChronosCapsuleNFT.methods.assetMap(i)
          .call()
          .then((r)=>{
            App.contracts.ChronosCapsuleNFT.methods.ownerOf(r.tokenId).call().then((result)=>{              
                
                var card='<div class="col-lg-2"><div class="card">'+
                '<div class="card-body">'+
                '<img src="' + r.urlOfAsset + '" style="max-width: 100%; height: 100px; width:100px;"></img>'+
                '<h6 class="card-title">Asset # '+r.tokenId+'</h6>'+
                '<p class="card-text">Price: '+r.basePrice+' Wei </p>' +
                '<p class="card-text">Highest Bid: '+r.highestBid+' Wei </p></div>'+
                '<div class="card-footer">'+'<small><b>Owner:</b> '+result;            
                  $('#assets').append(card);  
              })
          })
        }
  
      })
    },
  

    BidAsset: async function(_tokenId,value){
      App.current_account = await ethereum.request({method: 'eth_accounts'});
      App.contracts.ChronosCapsuleNFT.methods.bid(parseInt(_tokenId))
      .send({from:App.current_account[0],value:(value.toString())})
      .on('receipt',(r)=>{
        location.reload()
        App.fetchAllAssets();
        
      })
    } ,

    SellAsset: async function(_tokenId){
      App.current_account = await ethereum.request({method: 'eth_accounts'});
      App.contracts.ChronosCapsuleNFT.methods.sell(parseInt(_tokenId))
      .send({from:App.current_account[0]})
      .on('receipt',(r)=>{
        location.reload()
        App.fetchAllAssets();
        
      })
      .on('error',(e)=>{
        console.log(e)        
      })
    } ,

    WithdrawBid: async function(_tokenId){
      App.current_account = await ethereum.request({method: 'eth_accounts'});
      App.contracts.ChronosCapsuleNFT.methods.withdrawBid(parseInt(_tokenId))
      .send({from:App.current_account[0]})
      .on('receipt',(r)=>{
        location.reload()
        App.fetchAllAssets();
        
      })
      .on('error',(e)=>{
        console.log(e)        
        alert("You haven't made a bid yet or you are the highest bidder")
      })
    } ,

    CancelAsset: async function(_tokenId){
      App.current_account = await ethereum.request({method: 'eth_accounts'});
      App.contracts.ChronosCapsuleNFT.methods.cancelAsset(parseInt(_tokenId))
      .send({from:App.current_account[0]})
      .on('receipt',(r)=>{
        location.reload()
        App.fetchAllAssets();
        
      })
    } ,

    ChangeBaseValue: async function(assetId,value){
      App.current_account = await ethereum.request({method: 'eth_accounts'});
      App.contracts.ChronosCapsuleNFT.methods.build(parseInt(assetId),parseInt(value))
      .send({from:App.current_account[0],value:Web3.utils.toWei(value.toString())})
      .on('receipt',(r)=>{
        location.reload()
        App.fetchAllAssets();
        
      })
    } ,
  
  ChangeAssetValue:function(_tokenId,value){
  App.contracts.ChronosCapsuleNFT.methods.changeAssetValue(parseInt(_tokenId),parseInt(value))
  .send({from:App.current_account[0]})
  .on('receipt',(r)=>{
    location.reload()
    App.fetchAllAssets();
    
  })
  } ,
  
}
  
  
  $(function() {
    $(window).load(function() {
      App.init();
      toastr.options = {
        // toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": false,
          "positionClass": "toast-bottom-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        // }
      };
    });
  });
  