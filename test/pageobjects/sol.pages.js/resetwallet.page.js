class ResetWalletPage {

get resetwalletBtn() {
        return $('~showResetWalletBtn');
    }

    get understoodEraseWalletBtn() {
        return $('~clearWalletBtn');
    }

    get cancelBtn() {
        return $('~cancelResetWalletBtn');
    }


async clickResetWalletbutton(){
await (await this.resetwalletBtn).click();
await (await this.understoodEraseWalletBtn).click();

}

}
module.exports = new ResetWalletPage();