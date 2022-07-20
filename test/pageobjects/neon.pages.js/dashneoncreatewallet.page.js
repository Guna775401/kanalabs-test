class NeonDashCreateWallet{

//create wallet in dashboard page element need 
//Need to elements
get neonDashCreate_viewWallet() {
    return $('');
}

 get neonDash() {
        return $('~goToNameWalletNeon');
    }
//Wallet name element need 

get continueBtn() {
    return $('~createWalletNeon');
}

}
module.exports = new NeonDashCreateWallet();