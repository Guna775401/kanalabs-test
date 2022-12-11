
const createwalletPage = require('../sol.pages.js/createwallet.page');

class CreateAptosWalltePage {

    get aptosWallet() {
        return $('~aptosWalletCard');
    }

    get () {
        return $('~');
    }
    get () {
        return $('~');
    }

// aptosWalletCard


async createwallet(walletName) {

    await createwalletPage.solWallet.waitForDisplayed({ timeout: 60000 });
    await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
    await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
    await (await this.aptosWallet).click();
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

    await this.aptosWallet.waitForDisplayed({ timeout: 10000 });
    await expect(createwalletPage.chooseYourWalletText).toBeDisplayed();
    await expect(createwalletPage.chooseYourWalletDesText).toBeDisplayed();
    await (await this.aptosWallet).click();
    await (await createwalletPage.createNewWalletbtn).click();
    await (await createwalletPage.inputwalletName).click();
    await expect(createwalletPage.backBtn).toBeDisplayed();
    await expect(createwalletPage.nameYourWalletText).toBeDisplayed();
    await expect(createwalletPage.nameyourwalletDesText).toBeDisplayed();
    await expect(createwalletPage.walletNameText).toBeDisplayed();
    await (await createwalletPage.inputwalletName).setValue(walletName);
    await driver.hideKeyboard();

    // Need to delete this line
    await (await createwalletPage.continueBtn).click();

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
}
open() {
    return super.open('verifyPopup');
}























}

module.exports = new CreateAptosWalltePage();