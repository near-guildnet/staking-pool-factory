(this["webpackJsonpstaking-pool-factory"]=this["webpackJsonpstaking-pool-factory"]||[]).push([[0],{117:function(t,e){},123:function(t,e){},141:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(65),i=a.n(r),l=(a(76),a(66)),s=a(1),c=a.n(s),u=a(17),d=a(67),h=a(68),g=a(70),m=a(69),p=(a(78),a(19)),k=a(12),f=a.n(k),w=a(24),v="ed25519:2mVXS5ETmjdJRm9ncgTKNjc8V4v6Q99vHoHnTmLPNc6k",I=new f.a("1000000000000000000000000"),y="stake.guildnet",P=/^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/,E=/^([a-z\d]+[-_])*[a-z\d]+$/,b=new f.a("200000000000000"),_=function(t){return Math.floor(t/I*1e3)/1e3},F=function(t){Object(g.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={connected:!1,signedIn:!1,creating:!1,accountId:null,stakingPoolAccountLoading:!1,stakingPoolAlreadyExists:!1,ownerId:"",stakingPoolId:"",stakePublicKey:"",rewardFeeFraction:{numerator:10,denominator:100},yourStakingPoolAccountId:null,poolSuccess:!1},n._initNear().then((function(){n.setState({connected:!0,signedIn:!!n._accountId,accountId:n._accountId,ownerId:n._accountId})})),n._minAttachedBalance="30000000000000000000000000",n}return Object(h.a)(a,[{key:"_initYourStakingPool",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=window.localStorage.getItem(v)){t.next=3;break}return t.abrupt("return");case 3:return a="".concat(e,".").concat(y),t.prev=4,t.next=7,this._near.connection.provider.query("account/".concat(a),"");case 7:this.setState({yourStakingPoolAccountId:a,poolSuccess:!0}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(4),window.localStorage.removeItem(v),this.setState({yourStakingPoolAccountId:a,poolSuccess:!1,stakingPoolId:e});case 14:case"end":return t.stop()}}),t,this,[[4,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"_initNear",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e,a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={networkId:"guildnet",nodeUrl:"https://rpc.openshards.io",contractName:y,walletUrl:"https://wallet.openshards.io"},a=new p.keyStores.BrowserLocalStorageKeyStore,t.next=4,p.connect(Object.assign({deps:{keyStore:a}},e));case 4:return n=t.sent,this._keyStore=a,this._nearConfig=e,this._near=n,this._walletConnection=new p.WalletConnection(n,y),this._accountId=this._walletConnection.getAccountId(),this._account=this._walletConnection.account(),this._contract=new p.Contract(this._account,y,{viewMethods:["get_min_attached_balance","get_number_of_staking_pools_created"],changeMethods:["create_staking_pool"]}),t.next=14,this._contract.get_min_attached_balance();case 14:return this._minAttachedBalance=t.sent,t.next=17,this._initYourStakingPool();case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t,e){var a=this,n=Object(l.a)({},t,e);"numerator"===t?(e=e.replace(/[^\d]/,"")||0,n.rewardFeeFraction={numerator:parseInt(e),denominator:this.state.rewardFeeFraction.denominator}):"denominator"===t?(e=e.replace(/[^\d]/,"")||0,n.rewardFeeFraction={numerator:this.state.rewardFeeFraction.numerator,denominator:parseInt(e)}):"stakingPoolId"===t&&(e=e.toLowerCase().replace(/[^a-z\d\-_]/,""),n[t]=e,n.stakingPoolAlreadyExists=!1,this.isValidStakingPoolId(e)&&(n.stakingPoolAccountLoading=!0,this._near.connection.provider.query("account/".concat(e,".").concat(y),"").then((function(t){a.state.stakingPoolId===e&&a.setState({stakingPoolAccountLoading:!1,stakingPoolAlreadyExists:!0})})).catch((function(t){a.state.stakingPoolId===e&&a.setState({stakingPoolAccountLoading:!1,stakingPoolAlreadyExists:!1})})))),this.setState(n)}},{key:"isValidAccountId",value:function(t){return t.length>=2&&t.length<=64&&t.match(P)}},{key:"isValidStakingPoolId",value:function(t){return t.match(E)&&this.isValidAccountId(t+"."+y)}},{key:"stakingPoolIdClass",value:function(){return!this.state.stakingPoolId||this.isValidStakingPoolId(this.state.stakingPoolId)&&this.state.stakingPoolAccountLoading?"form-control form-control-large":this.isValidStakingPoolId(this.state.stakingPoolId)?"form-control form-control-large is-valid":"form-control form-control-large is-invalid"}},{key:"ownerIdClass",value:function(){return this.state.ownerId?this.isValidAccountId(this.state.ownerId)?"form-control form-control-large is-valid":"form-control form-control-large is-invalid":"form-control form-control-large"}},{key:"rewardFeeFractionValid",value:function(){return this.state.rewardFeeFraction.numerator<=1e6&&this.state.rewardFeeFraction.numerator>=0&&this.state.rewardFeeFraction.denominator<=1e9&&this.state.rewardFeeFraction.denominator>0&&this.state.rewardFeeFraction.numerator<=this.state.rewardFeeFraction.denominator}},{key:"rewardFeeFractionClass",value:function(){return this.rewardFeeFractionValid()?"form-control form-control-large is-valid":"form-control form-control-large is-invalid"}},{key:"stakingPublicKeyValid",value:function(){try{return 32===w.PublicKey.fromString(this.state.stakePublicKey).data.length}catch(t){return!1}}},{key:"stakingPublicKeyClass",value:function(){return this.state.stakePublicKey?this.stakingPublicKeyValid()?"form-control form-control-large is-valid":"form-control form-control-large is-invalid":"form-control form-control-large"}},{key:"requestSignIn",value:function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"Token Factory",t.next=3,this._walletConnection.requestSignIn(y,"Token Factory");case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"logOut",value:function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._walletConnection.signOut(),this._accountId=null,this.setState({signedIn:!!this._accountId,accountId:this._accountId});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createStakingPool",value:function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({creating:!0}),window.localStorage.setItem(v,this.state.stakingPoolId),t.next=4,this._contract.create_staking_pool({staking_pool_id:this.state.stakingPoolId,owner_id:this.state.accountId,stake_public_key:this.state.stakePublicKey,reward_fee_fraction:this.state.rewardFeeFraction},b,this._minAttachedBalance);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.connected?this.state.signedIn?o.a.createElement("div",null,o.a.createElement("div",{className:"float-right"},o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return t.logOut()}},"Log out")),o.a.createElement("h4",null,"Hello, ",o.a.createElement("span",{className:"font-weight-bold"},this.state.accountId),"!"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{forhtml:"stakingPoolId"},"Staking Pool ID"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"@")),o.a.createElement("input",{type:"text",className:this.stakingPoolIdClass(),id:"stakingPoolId",placeholder:"well-done-pool",disabled:this.state.creating,value:this.state.stakingPoolId,onChange:function(e){return t.handleChange("stakingPoolId",e.target.value)}}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("div",{className:"input-group-text"},".",y))),o.a.createElement("small",null,"It'll be used to uniquely identify the staking pool and to create an Account ID for the staking pool.",o.a.createElement("br",null),this.isValidStakingPoolId(this.state.stakingPoolId)&&o.a.createElement("span",null,"The staking pool account ID will be ",o.a.createElement("strong",null,"@",this.state.stakingPoolId,".",y)))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{forhtml:"ownerId"},"Owner ID"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"@")),o.a.createElement("input",{type:"text",className:this.ownerIdClass(),id:"ownerId",placeholder:this.state.accountId,disabled:this.state.creating,value:this.state.ownerId,onChange:function(e){return t.handleChange("ownerId",e.target.value)}})),o.a.createElement("small",null,"The account ID of the pool owner. Usually, it's just your account ID and you don't need to change it.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{forhtml:"stakePublicKey"},"Initial Staking Public Key"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"ed25519:")),o.a.createElement("input",{type:"text",className:this.stakingPublicKeyClass(),id:"stakePublicKey",placeholder:"A74xPSNpgQhqHtoidA3Q7oKTXZ9G12cRRt3DjeWsF7vf",disabled:this.state.creating,value:this.state.stakePublicKey,onChange:function(e){return t.handleChange("stakePublicKey",e.target.value)}})),o.a.createElement("small",null,"The initial staking public key that the staking pool will use to issue staking transaction.",o.a.createElement("br",null),"As a owner you should get your staking public key from the ",o.a.createElement("code",null,"validator_key.json")," file.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{forhtml:"rewardFeeFractionNumerator"},"Initial Reward Fee Fraction"),o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"text",className:this.rewardFeeFractionClass(),id:"rewardFeeFractionNumerator",placeholder:10,disabled:this.state.creating,value:this.state.rewardFeeFraction.numerator,onChange:function(e){return t.handleChange("numerator",e.target.value)}}),o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("div",{className:"input-group-text"},"/")),o.a.createElement("input",{type:"text",className:this.rewardFeeFractionClass(),id:"rewardFeeFractionDenominator",placeholder:100,disabled:this.state.creating,value:this.state.rewardFeeFraction.denominator,onChange:function(e){return t.handleChange("denominator",e.target.value)}})),o.a.createElement("small",null,"The initial reward fee fraction that the owner of the pool will take from the rewards. The reward fee can be from 0% to 100%.",o.a.createElement("br",null),"Your initial reward fee will be ",o.a.createElement("strong",null,(100*this.state.rewardFeeFraction.numerator/this.state.rewardFeeFraction.denominator).toFixed(2)+"%"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-success",disabled:this.state.creating||!this.isValidStakingPoolId(this.state.stakingPoolId)||this.state.stakingPoolAccountLoading||this.state.stakingPoolAlreadyExists||!this.isValidAccountId(this.state.ownerId)||!this.stakingPublicKeyValid()||!this.rewardFeeFractionValid(),onClick:function(){return t.createStakingPool()}},"Create Staking Pool ",this.isValidStakingPoolId(this.state.stakingPoolId)&&"@".concat(this.state.stakingPoolId,".").concat(y)," (",_(this._minAttachedBalance)," \u24c3)")))):o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.requestSignIn()}},"Log in with NEAR Wallet to create a new staking pool")):o.a.createElement("div",null,"Connecting... ",o.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return o.a.createElement("div",{className:"px-5"},o.a.createElement("h1",null,"Staking Pool Factory (guildnet)"),o.a.createElement("p",null,"Create and deploy a new staking pool. It'll cost you ",o.a.createElement("span",{className:"font-weight-bold"},_(this._minAttachedBalance)," \u24c3")," to cover storage fees on the new staking pool."),o.a.createElement("p",null,"Staking Pool allows users to delegate tokens in a secure way. Once the staking pool is created, the owner of the staking pool should run the validation node on the behalf of the staking pool account. If the staking pool accumulates enough stake to qualify for a validator seat, then all participants of this staking pool will split the staking rewards from the pool."),this.state.yourStakingPoolAccountId&&(this.state.poolSuccess?o.a.createElement("div",{className:"alert alert-success",role:"alert"},"Successfully created your staking pool ",o.a.createElement("a",{href:"https://explorer.openshards.io/accounts/".concat(this.state.yourStakingPoolAccountId)},"@",this.state.yourStakingPoolAccountId)):o.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Failed to create your staking pool. Take a look at the factory contract on explorer: ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://explorer.openshards.io/accounts/".concat(y)},"@",y))),o.a.createElement("div",{style:{minHeight:"10em"}},e))}}]),a}(o.a.Component);i.a.render(o.a.createElement(F,null),document.getElementById("root"))},71:function(t,e,a){t.exports=a(141)},76:function(t,e,a){},78:function(t,e,a){},94:function(t,e){},96:function(t,e){}},[[71,1,2]]]);
//# sourceMappingURL=main.d29e8730.chunk.js.map