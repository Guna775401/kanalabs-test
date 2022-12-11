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
        const onceerased = 'new UiSelector().text("Once erased, the wallet cannot be restored in KanaLabs. Even though you are removing this wallet from kanaLabs, you will be able to re-derive it using your mnemonic in this or another wallet.").className("android.widget.TextView")'
        const onceerased1 =  $(`android=${onceerased}`)
        return onceerased1;
    }
    get processingYourText() {
        const processingYour = 'new UiSelector().text("Processing your request, Please wait").className("android.widget.TextView")'
        const processingYour1 =  $(`android=${processingYour}`)
        return processingYour1;
    }
    get cancelText() {
        const cancel = 'new UiSelector().text("Cancel").className("android.widget.TextView")'
        const cancel1 =  $(`android=${cancel}`)
        return cancel1;
    }

    get understoodEraseText() {
        const understood = 'new UiSelector().text("I Understand, Erase wallet").className("android.widget.TextView")'
        const understood1 =  $(`android=${understood}`)
        return understood1;
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
        await expect(this.cancelText).toBeDisplayed();
        await expect(this.understoodEraseText).toBeDisplayed();
        await (await this.understoodEraseWalletBtn).click();
        await expect(this.processingYourText).toBeDisplayed();
    }




}
module.exports = new ResetWalletPage();