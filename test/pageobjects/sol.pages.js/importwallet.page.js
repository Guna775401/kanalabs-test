const createwalletPage = require("./createwallet.page");

class Importwallet {


    get importWalletBtn() {
        return $('~goToImportWallet');
    }

    get seedPharse() {
        return $('~seedPhrase');
    }

    get walletName() {
        return $('~walletName');
    }
    get importBtn() {
        return $('~importAccount');
    }
    // back button element need
    get backBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
    }
    //Need to need element
    get eyeIcon() {
        return $('~');
    }

    // Confirm pin to Set Pin Back Button
    get confirmPinbackBtn() {
        return $('~goBackFromPinValid');
    }
    async toastClose() {

        driver.touchAction([
            { action: 'longPress', x: 471, y: 314 },
            { action: 'moveTo', x: 467, y: 218 },
            'release'
        ]);
    }


    get walletnameinccorrectToastText() {
        const walletnameinccorrecttoast = 'new UiSelector().text("Please Enter only Alphabets and Numbers!").className("android.widget.TextView")'
        const walletnameinccorrecttoast1 = $(`android=${walletnameinccorrecttoast}`)
        return walletnameinccorrecttoast1;
    }
    get seedphraseinccorrectToastText() {
        const seedphraseinccorrecttoast = 'new UiSelector().text("Please Dont Enter more than single space!").className("android.widget.TextView")'
        const seedphraseinccorrecttoast1 = $(`android=${seedphraseinccorrecttoast}`)
        return seedphraseinccorrecttoast1;
    }
    get incorrectseedErrorMessageText() {
        const incorrectseedErrorMessage = 'new UiSelector().text("*Incorrect seed. Try again! ").className("android.widget.TextView")'
        const incorrectseedErrorMessage1 = $(`android=${incorrectseedErrorMessage}`)
        return incorrectseedErrorMessage1;
    }

    get incorrectWalletNameErrorMessageText() {
        const incorrectWalletNameErrorMessage = 'new UiSelector().text("*Please Enter Wallet Name! ").className("android.widget.TextView")'
        const incorrectWalletNameErrorMessage1 = $(`android=${incorrectWalletNameErrorMessage}`)
        return incorrectWalletNameErrorMessage1;
    }

    get importFromSeedText() {
        const importFromSeed = 'new UiSelector().text("Import from seed").className("android.widget.TextView")'
        const importFromSeed1 = $(`android=${importFromSeed}`)
        return importFromSeed1;
    }
    get importFromSeedDesText() {
        const importFromSeedDes = 'new UiSelector().text("Write your secret recovery phrase to import your existing wallet").className("android.widget.TextView")'
        const importFromSeedDes1 = $(`android=${importFromSeedDes}`)
        return importFromSeedDes1;
    }
    get seedPharseText() {
        const seedPharse = 'new UiSelector().text("Seed phrase").className("android.widget.TextView")'
        const seedPharse1 = $(`android=${seedPharse}`)
        return seedPharse1;
    }
    get walletNameText() {
        const walletName = 'new UiSelector().text("Wallet Name").className("android.widget.TextView")'
        const walletName1 = $(`android=${walletName}`)
        return walletName1;
    }




    async verifyConfirmPinToSetPinBackBtnClickable() {
        await expect(this.confirmPinbackBtn).toBeClickable();
    }

    async verifyConfirmPinToSetPinBackBtDisplay() {
        await expect(this.confirmPinbackBtn).toBeDisplayed();
    }

    async importwallet(seeds, name) {
        await this.importWalletBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.importWalletBtn).click();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.importFromSeedText).toBeDisplayed();
        await expect(this.importFromSeedDesText).toBeDisplayed();
        await expect(this.seedPharseText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.seedPharse).click();
        await (await this.seedPharse).setValue(seeds);
        await (await this.walletName).setValue(name);
        driver.hideKeyboard();
        await (await this.importBtn).click();
    }
    async importwallet1(seeds, name) {
        await this.importWalletBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.importWalletBtn).click();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.importFromSeedText).toBeDisplayed();
        await expect(this.importFromSeedDesText).toBeDisplayed();
        await expect(this.seedPharseText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.seedPharse).click();
        await (await this.seedPharse).setValue(seeds);
        await (await this.walletName).click();
        await (await this.walletName).setValue(name);
driver.hideKeyboard();
        //await expect(this.walletnameinccorrectToastText).toBeDisplayed();
        await expect(this.incorrectWalletNameErrorMessageText).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 471, y: 314 },
            { action: 'moveTo', x: 467, y: 218 },
            'release'
        ]);
    }

    async invalidSeedPhraseimportwallet(name, seeds) {
        await this.importWalletBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.importWalletBtn).click();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.importFromSeedText).toBeDisplayed();
        await expect(this.importFromSeedDesText).toBeDisplayed();
        await expect(this.seedPharseText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.walletName).click();
        await (await this.walletName).setValue(name);
        await (await this.seedPharse).click();
        await (await this.seedPharse).setValue(seeds);
        driver.hideKeyboard();
        await (await this.importBtn).click();
    }


    async invalidWalletNameToastHandle() {
        await expect(this.walletnameinccorrectToastText).toBeDisplayed();
        await expect(this.incorrectWalletNameErrorMessageText).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 471, y: 314 },
            { action: 'moveTo', x: 467, y: 218 },
            'release'
        ]);
    }
    async invalidSeedPhraseToastHandle() {
         await expect(this.seedphraseinccorrectToastText).toBeDisplayed();
        await expect(this.incorrectseedErrorMessageText).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 471, y: 314 },
            { action: 'moveTo', x: 467, y: 218 },
            'release'
        ]);
    }

    async invaildWalletName_InvaildSeedphraseToastHandle() {
        await expect(this.walletnameinccorrectToastText).toBeDisplayed();
        await expect(this.incorrectWalletNameErrorMessageText).toBeDisplayed();
        await expect(this.incorrectseedErrorMessageText).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 471, y: 314 },
            { action: 'moveTo', x: 467, y: 218 },
            'release'
        ]);


    }


    async clickbackbtn() {
        await (await this.backBtn).click();

    }


}
module.exports = new Importwallet();