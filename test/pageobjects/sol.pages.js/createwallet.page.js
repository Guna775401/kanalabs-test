const remindmelaterPage = require("./remindmelater.page");

class CreateWalletPage {

    //FirstTime open the application What is Kana page NextButton

    get nextBtn() {

        return $('~nextButton');
    }
    // Choose wallet Sol
    get solWallet() {
        return $('~solWalletCard');
    }
    get createNewWalletbtn() {
        return $('~goToCreateWallet');
    }
    get inputwalletName() {
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
        return $('~settYourPinContentWrapper');
    }
    get inputconfirmPin() {
        return $('~confirmPinContentWrapper');
    }
//android.view.ViewGroup[@content-desc="settYourPinContentWrapper"]/android.view.ViewGroup/android.view.ViewGroup[1]
    //android.view.ViewGroup[@content-desc="settYourPinContentWrapper"]/android.view.ViewGroup/android.view.ViewGroup[1]
    //android.view.ViewGroup[@content-desc="confirmPinContentWrapper"]/android.view.ViewGroup/android.view.ViewGroup[1]

    async firstnextBtn() {
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
    }
    open() {
        return super.firstnextBtn();
    };

    async createwallet(walletName, setpin, confirmpin) {
        // await createWalletPage.nextBtn.waitForDisplayed({timeout : 60000}) 
        await (await this.solWallet).click();
        await (await this.createNewWalletbtn).click();
        await (await this.inputwalletName).setValue(walletName);
        driver.hideKeyboard();
        await (await this.continueBtn).click();
       // await (await this.inputsetPin).click(); 
        //await (await this.inputsetPin).setValue(setpin);
      //  await (await this.inputconfirmPin).setValue(confirmpin);

        
        // Need skip function
        
    }
    open() {
        return super.createwallet();
    };

    // Secure or skip use securenow page




}
module.exports = new CreateWalletPage();