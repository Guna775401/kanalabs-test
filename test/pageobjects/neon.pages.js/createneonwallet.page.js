const createwalletPage = require("../sol.pages.js/createwallet.page");

class CreateNEONWallet {

    // need to verify all elements 
    get neonWallet() {
        return $('~neonWalletCard');
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



    async createwalletNeon(walletName) {
        await this.neonWallet.waitForDisplayed({ timeout: 60000 });
        await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
        await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
        await (await this.neonWallet).click();
        await (await this.createNewNeonWalletbtn).click();
        await (await this.inputNeonWalletName).click();
        await (await this.inputNeonWalletName).setValue(walletName);
        driver.hideKeyboard();
        await expect(createwalletPage.backBtn).toBeDisplayed();
        await expect(createwalletPage.nameYourWalletText).toBeDisplayed();
        await expect(createwalletPage.nameyourwalletDesText).toBeDisplayed();
        await expect(createwalletPage.walletNameText).toBeDisplayed();
        await (await this.continueBtn).click();
    }

   

    async backButtonClickNeon() {
        const backbutton = $('~goBackFromNameWallet');
        await backbutton.waitForDisplayed({ timeout: 60000 });
        await expect(backbutton).toBeDisplayed();
        await backbutton.click();
    }

    async clickNeonWalletlogo() {
        await this.neonWallet.waitForDisplayed({ timeout: 60000 });
        await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
        await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
        await (await this.neonWallet).click();
    }







}
module.exports = new CreateNEONWallet();