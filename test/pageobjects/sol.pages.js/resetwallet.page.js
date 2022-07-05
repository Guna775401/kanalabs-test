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


}
module.exports = new ResetWalletPage();