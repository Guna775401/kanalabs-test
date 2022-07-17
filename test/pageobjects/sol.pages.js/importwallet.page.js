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
        return $('~');
    }
    //Need to need element
    get eyeIcon() {
        return $('~');
    }

    // Setpin Elemet
    get setPin() {
        return $('~');
    }
    get confirmPin() {
        return $('~');
    }
    // Confirm pin Back Button
    get confirmPinbackBtn() {
        return $('~goBackFromPinValid');
    }


    async importwallet(seeds, name) {
        await (await this.importWalletBtn).click();
        await (await this.seedPharse).setValue(seeds);
        await (await this.walletName).setValue(name);
        await (await this.importBtn).click();
    }

    async clickbackbtn() {
        await (await this.backBtn).click();

    }
}
module.exports = new Importwallet();