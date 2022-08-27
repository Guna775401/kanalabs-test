

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
    get popupdismiss() {
        return $('~com.kanaswapapp:id/ib_core_onboarding_container')
    }

    async firstnextBtn() {
        // await this.popupdismiss.waitForDisplayed({ timeout: 60000 });
        // await (this.popupdismiss).click();
        await this.nextBtn.waitForDisplayed({ timeout: 60000 });
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
    };
    get colorGet() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
    }
    async getcolor() {
        // let el1 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup");
        //client.getCssProperty(selector,cssProperty).then(callback);

        //  const ele = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')

//div._highlighter-box_619e8

        const ele = $('div._highlighter-box_619e8')
        const color = await ele.getCSSProperty('color')
        console.log('color :' + color);


        // getCssProperty(ele, 'color').then(function(color) {
        //     console.log(color);

        // const fontize = await ele.getCSSProperty('font-size')
        // console.log('fontize :' + fontize);

        // const fontfamily = await ele.getCSSProperty('font-family')
        // console.log('fontfamily :' + fontfamily);
        // });
    }

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
        await this.solWallet.waitForDisplayed({ timeout: 60000 });
        await (await this.solWallet).click();
    }
    async clickCreateWalletBtn() {
        await this.createNewWalletbtn.waitForDisplayed({ timeout: 60000 });
        await (this.createNewWalletbtn).click();
    }
    async enterWalletName(name) {
        await this.inputwalletName.waitForDisplayed({ timeout: 60000 });
        await (this.inputwalletName).click();
        await (this.inputwalletName).setValue(name);
        driver.hideKeyboard();
        // const backbutton = $('~goBackFromNameWallet');
        // await backbutton.waitForDisplayed({ timeout: 60000 });
        await expect(this.backBtn).toBeDisplayed();
    }

    async backButtonClick() {
        const backbutton = $('~goBackFromNameWallet');
        await backbutton.waitForDisplayed({ timeout: 60000 });
        await expect(backbutton).toBeDisplayed();
        await backbutton.click();
    }


    async backButtonExisting() {
        const backbutton = $('~goBackFromNameWallet');
        await backbutton.waitForDisplayed({ timeout: 60000 });
        await expect(backbutton).toBeExisting();
    }
    async continueBtnClick() {
        await this.continueBtn.waitForDisplayed({ timeout: 60000 });
        await (this.continueBtn).click();
    }

    async entersetPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
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

    async enterPin(pin1, pin2, pin3, pin4, pin5, pin6) {
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