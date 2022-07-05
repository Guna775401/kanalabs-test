
class SendPage {

    get sendBtn() {
        return $('~sendSol');
    }
    get backBtn() {
        return $('~goBackFromSendToken');
    }
   
    // Holding value but not sure its work
    get holdingValue() {
        return $('~contentViewDismiss');
    }
    get inputAddressField() {
        return $('~addressSol');
    }
    get openQRScanner() {
        return $('~openQRScanner');
    }
    get selectTokenDropdown() {
        return $('~openDropdown');
    }
    // dropdown select token but not sure
    get searchOptionSelectedToken() {
        return $('~selectedTokenForSendTokenArr');
    }
    get continueBtn() {
        return $('~enterTokenAmount');
    }
    get enterAmount() {
        return $('~enterAmountSOL');
    }
    get enterAmountMax() {
        return $('~enterAmountMaxSol');
    }
//android.view.ViewGroup[@content-desc="enterAmountMaxSol"]/android.widget.TextView
    
// need to write but no token , after sometime try


async sendbuttonclick(){
await (await this.sendBtn).click();
}
open(){
    return super.sendbuttonclick();
}

async toAddressWallet(publicAddress){
    await (await this.inputAddressField).setValue(publicAddress);
driver.hideKeyboard();
await (await this.continueBtn).click();

}
open(){
    return super.toAddressWallet();
}
async enteramountinput(amount){
    await (await this.enterAmount).setValue(amount);
driver.hideKeyboard();
// need slide to stake 
}
open(){
    return super.enteramountinput();
}




}
module.exports = new SendPage();