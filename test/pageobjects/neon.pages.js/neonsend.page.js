class NeonSendPage {

    // Wallet name and holding value elements need
// need send element
    get neonSendBtn() {
        return $('');
    }
// Need to element
    get neonAddress() {
        return $('');
    }


    get dropdownSelectToken() {
        return $('openDropwdownBtnSendNeon');
    }
    get continueBtn() {
        return $('goToEnterTokenAmountBtnNeon');
    } 


    

}

module.exports = new NeonSendPage();