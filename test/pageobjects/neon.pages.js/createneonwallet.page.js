class CreateNEONWallet {

    // need to verify all elements 
    get neonWallet() {
        return $('neonWalletCard');
    }

    get createNewNeonWalletbtn() {
        return $('~goToCreateWallet');
    }
    get inputNeonWalletName() {
        return $('~SOLWalletName');
    }
    get continueBtn() {
        return $('~createWalletSOL');
    }
    get backBtn() {
        return $('~goBackFromNameWallet');
    }
    //Need element set pin
    get inputsetPin() {
        return $('');
    }
    get inputconfirmPin() {
        return $('');
    }
}
module.exports = new CreateNEONWallet();