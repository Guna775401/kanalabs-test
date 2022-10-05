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

    get areYouSureText() {
        const areyousure = 'new UiSelector().text("Are you sure you want to erase your wallet?").className("android.widget.TextView")'
        const areyousure1 =  $(`android=${areyousure}`)
        return areyousure1;
    }
    get onceErasedText() {
        const onceerased = 'new UiSelector().text("Once erased, the wallet cannot be restored").className("android.widget.TextView")'
        const onceerased1 =  $(`android=${onceerased}`)
        return onceerased1;
    }
    get processingYourText() {
        const processingYour = 'new UiSelector().text("Processing your request, Please wait!").className("android.widget.TextView")'
        const processingYour1 =  $(`android=${processingYour}`)
        return processingYour1;
    }
    get() {
        const pleaseEnterCorrectPin = 'new UiSelector().text("").className("android.widget.TextView")'
        const pleaseEnterCorrectPin1 =  $(`android=${pleaseEnterCorrectPin}`)
        return pleaseEnterCorrectPin1;
    }
    get() {
        const pleaseEnterCorrectPin = 'new UiSelector().text("").className("android.widget.TextView")'
        const pleaseEnterCorrectPin1 =  $(`android=${pleaseEnterCorrectPin}`)
        return pleaseEnterCorrectPin1;
    }
    get() {
        const pleaseEnterCorrectPin = 'new UiSelector().text("").className("android.widget.TextView")'
        const pleaseEnterCorrectPin1 =  $(`android=${pleaseEnterCorrectPin}`)
        return pleaseEnterCorrectPin1;
    }

    async clickResetWalletbutton() {
        
        await (await this.resetwalletBtn).click();
        await expect(this.areYouSureText).toBeDisplayed();
        await expect(this.onceErasedText).toBeDisplayed();
        await expect(this.cancelBtn).toBeDisplayed();
        await (await this.understoodEraseWalletBtn).click();
        await expect(this.processingYourText).toBeDisplayed();
    }




}
module.exports = new ResetWalletPage();