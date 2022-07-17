
class SendPage {

    get sendBtn() {
        return $('~sendSol');
    }
    get backBtn() {
        return $('~goBackFromSendToken');
    }
    get walletLogo() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[1]');
    }
    get holdingValue() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[2]');
    }
    get toAddressOrScanText() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[3]');
    }
    
    get selectTokensToTransferText() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[4]');
    }

    get balanceAmount() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[5]');
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
    // need dropdown select
    // get searchOptionSelectedToken() {
    //     return $('');
    // }
    get continueBtn() {
        return $('~enterTokenAmount');
    }
    get backbtnamountscreen() {
        return $('~enterTokenAccountBackIcon');
    }
    get enterAmount() {
        return $('~enterAmountSOL');
    }
    get enterAmountMax() {
        return $('~enterAmountMaxSol');
    }
    
    get selectTokenText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[3]');
    }
    get solAmountBalance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[4]');
    }
    get slidetoSend() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
    }
    get sendDonebutton() {
        return $('~goToHomeDone');
    }

    async verifySendscreen(){
    const send = 'new UiSelector().text("Send").className("android.widget.TextView")'
    const sendscreen = await (await $(`android=${send}`))
    await expect(sendscreen).toBeDisplayed();
}

async verifySendbtn () {
    await expect(this.sendBtn).toBeDisplayed();
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