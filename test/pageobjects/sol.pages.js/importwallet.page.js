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
    async verifyConfirmPinToSetPinBackBtnClickable() {
        await expect(this.confirmPinbackBtn).toBeClickable();
    }

    async verifyConfirmPinToSetPinBackBtDisplay() {
        await expect(this.confirmPinbackBtn).toBeDisplayed();
    }

    async importwallet(seeds, name) {
        await this.importWalletBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.importWalletBtn).click();
        await (await this.seedPharse).click();
        await (await this.seedPharse).setValue(seeds);
        await (await this.walletName).setValue(name);
        driver.hideKeyboard();
        await (await this.importBtn).click();
    }

    async clickbackbtn() {
        await (await this.backBtn).click();

    }


}
module.exports = new Importwallet();