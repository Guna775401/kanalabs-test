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



    // async createwalletNeon(walletName) {
    //     await this.neonWallet.waitForDisplayed({ timeout: 60000 });
    //     await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
    //     await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
    //     await (await this.neonWallet).click();
    //     await (await this.createNewNeonWalletbtn).click();
    //     await (await this.inputNeonWalletName).click();
    //     await (await this.inputNeonWalletName).setValue(walletName);
    //     driver.hideKeyboard();
    //     await expect(createwalletPage.backBtn).toBeDisplayed();
    //     await expect(createwalletPage.nameYourWalletText).toBeDisplayed();
    //     await expect(createwalletPage.nameyourwalletDesText).toBeDisplayed();
    //     await expect(createwalletPage.walletNameText).toBeDisplayed();
    //     await (await this.continueBtn).click();
    // }

    async createwalletNeon(walletName) {

        await this.neonWallet.waitForDisplayed({ timeout: 60000 });
        await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
        await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
        await (await this.neonWallet).click();
        await (await createwalletPage.createNewWalletbtn).click();
        await expect(createwalletPage.backBtn).toBeDisplayed();
        await expect(createwalletPage.nameYourWalletText).toBeDisplayed();
        await expect(createwalletPage.nameyourwalletDesText).toBeDisplayed();
        await expect(createwalletPage.walletNameText).toBeDisplayed();
        await (await createwalletPage.inputwalletName).clearValue();
        await (await createwalletPage.inputwalletName).setValue(walletName);
        await driver.hideKeyboard();
        await (await createwalletPage.continueBtn).click();
    }

    async verifyPopup(walletName, walletName1) {

        await this.neonWallet.waitForDisplayed({ timeout: 60000 });
        await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
        await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
        await (await this.neonWallet).click();
        await (await createwalletPage.createNewWalletbtn).click();
        await (await createwalletPage.inputwalletName).click();
        await expect(createwalletPage.backBtn).toBeDisplayed();
        await expect(createwalletPage.nameYourWalletText).toBeDisplayed();
        await expect(createwalletPage.nameyourwalletDesText).toBeDisplayed();
        await expect(createwalletPage.walletNameText).toBeDisplayed();
        await (await createwalletPage.inputwalletName).setValue(walletName);
        await driver.hideKeyboard();

        // Need to delete this line
        await (await this.continueBtn).click();

        await expect(createwalletPage.popupId).toHaveText('Please Enter only Alphabets and Numbers!')
        driver.touchAction([
            { action: 'longPress', x: 525, y: 322 },
            { action: 'moveTo', x: 517, y: 184 },
            'release'
        ]);
        await expect(createwalletPage.invaildWalletNameText).toBeDisplayed();

        await (await createwalletPage.inputwalletName).clearValue();
        await (await createwalletPage.inputwalletName).setValue(walletName1);
        await expect(createwalletPage.popupId).toHaveText('Please Dont Enter more than single space!')

        driver.touchAction([
            { action: 'longPress', x: 525, y: 322 },
            { action: 'moveTo', x: 517, y: 184 },
            'release'
        ]);

        //await (await this.continueBtn).click();
       // await expect(this.invaildWalletNameText).toBeDisplayed();
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