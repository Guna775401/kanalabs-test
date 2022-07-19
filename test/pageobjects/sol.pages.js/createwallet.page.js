

class CreateWalletPage {

    //FirstTime open the application What is Kana page NextButton

    get nextBtn() {
    return $('~nextButton');
    }
    get nextBtn1() {
        return $('~nextButton');
        }
    // Choose wallet Sol
    get solWallet() {
        return $('~solWalletCard');
    }
    get createNewWalletbtn() {
        return $('~goToCreateWallet');
    }
    get inputwalletName() {
        return $('~SOLWalletName');
    }
    get continueBtn() {
        return $('~createWalletSOL');
    }
    get backBtn() {
        return $('~goBackFromNameWallet');
    }
    get loginPin1() {
        return $('~pin1');
    }
    get loginPin2() {
        return $('~pin2');
    }
    get loginPin3() {
        return $('~pin3');
    }
    get loginPin4() {
        return $('~pin4');
    }
    get loginPin5() {
        return $('~pin5');
    }
    get loginPin6() {
        return $('~pin6');
    }

    async firstnextBtn() {
        await this.nextBtn.waitForDisplayed({ timeout: 60000 });
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
    };

    async createwallet(walletName) {
        await this.solWallet.waitForDisplayed({ timeout: 60000 });
        await (await this.solWallet).click();
        await (await this.createNewWalletbtn).click();
        await (await this.inputwalletName).click();
        await (await this.inputwalletName).setValue(walletName);
        driver.hideKeyboard();
        await (await this.continueBtn).click();

    }
    async clickSolWalletlogo() {
        await (await this.solWallet).click();
    }

    async backButtonClick() {
        const backbutton = $('~goBackFromNameWallet');
        await backbutton.waitForDisplayed({ timeout: 60000 });
        // need to clickable but now click using
        await expect(backbutton).toBeClickable();
    }
    async backButtonExisting() {
        const backbutton = $('~goBackFromNameWallet');
        await backbutton.waitForDisplayed({ timeout: 60000 });
        // need to clickable but now click using
        await expect(backbutton).toBeExisting();
    }

    async entersetPin(pin1,pin2,pin3,pin4,pin5,pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
    }

    async enterPin2(pin2) {
        await (await this.loginPin2).setValue(pin2);
    }
    async enterPin3(pin3) {
        await (await this.loginPin3).setValue(pin3);
    }
    async enterPin4(pin4) {
        await (await this.loginPin4).setValue(pin4);
    }
    async enterPin5(pin5) {
        await (await this.loginPin5).setValue(pin5);
    }
    async enterPin6(pin6) {
        await (await this.loginPin6).setValue(pin6);
    }

    async enterConfirmPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
    }

    async enterPin(pin1,pin2,pin3,pin4,pin5,pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
    }


}
module.exports = new CreateWalletPage();