const ImportWalletPage = require('./importwallet.page');


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

    get confirmPinBackBtn() {
        return $('~goBackFromPinValid')
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
    get termsAndConditionBtn() {
        return $('~goToTermsAndConditions')
    }
    

    // UI Elements
    get whatsKanaText() {
        const whatsKana = 'new UiSelector().text("What is Kana?").className("android.widget.TextView")'
        const whatsKana1 = $(`android=${whatsKana}`)
        return whatsKana1;
    }

    get whatsKanaDesText() {
        const whatsKanaDes = 'new UiSelector().text("It is a platform that integrates into the best of dapps on multiple blockchains").className("android.widget.TextView")'
        const whatsKanaDes1 = $(`android=${whatsKanaDes}`)
        return whatsKanaDes1;

    }

    get swapAndMoreText() {
        const swapAndMore = 'new UiSelector().text("HODL, Swap & More").className("android.widget.TextView")'
        const swapAndMore1 = $(`android=${swapAndMore}`)
        return swapAndMore1;
    }
    get swapAndMoreDesText() {
        const swapAndMoreDes = 'new UiSelector().text("With top-end technology, we have brought world-class features into our platform").className("android.widget.TextView")'
        const swapAndMoreDes1 = $(`android=${swapAndMoreDes}`)
        return swapAndMoreDes1;
    }

    get seamLessText() {
        const seamLessUi = 'new UiSelector().text("Seamless UI/UX").className("android.widget.TextView")'
        const seamLessUi1 = $(`android=${seamLessUi}`)
        return seamLessUi1;
    }

    get seamLessUiDesText() {
        const seamLessUiDes = 'new UiSelector().text("Users are presented with a seamless UX across chains and across applications to make it easy for new and experienced crypto users").className("android.widget.TextView")'
        const seamLessUiDes1 = $(`android=${seamLessUiDes}`)
        return seamLessUiDes1;
    }
    get chooseYourWalletText() {
        const chooseYourWallet = 'new UiSelector().text("Choose your wallet").className("android.widget.TextView")'
        const chooseYourWallet1 = $(`android=${chooseYourWallet}`)
        return chooseYourWallet1;

    }
    get chooseYourWalletDesText() {
        const chooseYourWalletDes = 'new UiSelector().text("Choose your walletType, Kana Labs Supports two types of wallets!").className("android.widget.TextView")'
        const chooseYourWalletDes1 = $(`android=${chooseYourWalletDes}`)
        return chooseYourWalletDes1;
    }
    get walletSetupText() {
        const walletSetup = 'new UiSelector().text("Wallet set up").className("android.widget.TextView")'
        const walletSetup1 = $(`android=${walletSetup}`)
        return walletSetup1;
    }

    get importExistingWalletDesText() {
        const importExistingWallet = 'new UiSelector().text("Import an existing wallet or Create a new wallet").className("android.widget.TextView")'
        const importExistingWallet1 = $(`android=${importExistingWallet}`)
        return importExistingWallet1;
    }
    get termsAndConditionText() {
        const termsAndcondition = 'new UiSelector().text("By proceeding, you agree to these ").className("android.widget.TextView")'
        const termsAndcondition1 = $(`android=${termsAndcondition}`)
        return termsAndcondition1;
    }
    get nameYourWalletText() {
        const nameyourwallet = 'new UiSelector().text("Name your wallet").className("android.widget.TextView")'
        const nameyourwallet1 = $(`android=${nameyourwallet}`)
        return nameyourwallet1;
    }
    get nameyourwalletDesText() {
        const nameyourwalletDes = 'new UiSelector().text("Give an unique name to your wallet. You will be able to receive tokens using this wallet name, without the need for using a complicated public address! Powered by Kana and SNS").className("android.widget.TextView")'
        const nameyourwalletDes1 = $(`android=${nameyourwalletDes}`)
        return nameyourwalletDes1;
    }
    get walletNameText() {
        const walletNametxt = 'new UiSelector().text("Wallet Name").className("android.widget.TextView")'
        const walletNametxt1 = $(`android=${walletNametxt}`)
        return walletNametxt1;
    }
    get setYourPinText() {
        const setyourpin = 'new UiSelector().text("Set your Pin").className("android.widget.TextView")'
        const setyourpin1 = $(`android=${setyourpin}`)
        return setyourpin1;
    }

    get setYourPinDesText() {
        const setyourpinDes = 'new UiSelector().text("Set 6-digit Pin to lock your app and keep your funds safe").className("android.widget.TextView")'
        const setyourpinDes1 = $(`android=${setyourpinDes}`)
        return setyourpinDes1;
    }
    get confirmYourPinText() {
        const confirmyourpin = 'new UiSelector().text("Confirm your Pin").className("android.widget.TextView")'
        const confirmyourpin1 = $(`android=${confirmyourpin}`)
        return confirmyourpin1;
    }

    get confirmYourPinDesText() {
        const confirmyourpinDes = 'new UiSelector().text("Enter your Pin again to confirm.").className("android.widget.TextView")'
        const confirmyourpinDes1 = $(`android=${confirmyourpinDes}`)
        return confirmyourpinDes1;
    }
    get proccessingYourRequestText() {
        const proccessingYourRequest = 'new UiSelector().text("Processing your request, Please wait!").className("android.widget.TextView")'
        const proccessingYourRequest1 = $(`android=${proccessingYourRequest}`)
        return proccessingYourRequest1;
    }

    get incorrectPopupText() {
        const incorrectPopup = 'new UiSelector().text("Please Enter only Alphabets and Numbers!").className("android.widget.TextView")'
        const incorrectPopup1 = $(`android=${incorrectPopup}`)
        return incorrectPopup1;
    }

    get invaildWalletNameText() {
        const invaildWalletname = 'new UiSelector().text("*Please Enter Wallet Name! ").className("android.widget.TextView")'
        const invaildWalletname1 = $(`android=${invaildWalletname}`)
        return invaildWalletname1;
    }
    get pindoesntmatchText() {
        const pindoesntmatch = 'new UiSelector().text("").className("android.widget.TextView")'
        const pindoesntmatch1 = $(`android=${pindoesntmatch}`)
        return pindoesntmatch1;
    }

    get() {
        const chooseYourWalletDes = 'new UiSelector().text("").className("android.widget.TextView")'
        const chooseYourWalletDes1 = $(`android=${chooseYourWalletDes}`)
        return chooseYourWalletDes1;
    }
    get() {
        const chooseYourWalletDes = 'new UiSelector().text("").className("android.widget.TextView")'
        const chooseYourWalletDes1 = $(`android=${chooseYourWalletDes}`)
        return chooseYourWalletDes1;
    }
    get() {
        const chooseYourWalletDes = 'new UiSelector().text("").className("android.widget.TextView")'
        const chooseYourWalletDes1 = $(`android=${chooseYourWalletDes}`)
        return chooseYourWalletDes1;
    }

    get() {

    }
    get() {

    }
    get() {

    }
    get() {

    }





    async firstnextBtn() {
       // driver.touchAction({actions: 'tap', x: 479, y: 360})

        await this.nextBtn.waitForDisplayed({ timeout: 60000 });
        await expect(this.whatsKanaText).toBeDisplayed();
        await expect(this.whatsKanaDesText).toBeDisplayed();
        await (await this.nextBtn).click();
        await expect(this.swapAndMoreText).toBeDisplayed();
        await expect(this.swapAndMoreDesText).toBeDisplayed();
        await (await this.nextBtn).click();
        await expect(this.seamLessText).toBeDisplayed();
        await expect(this.seamLessUiDesText).toBeDisplayed();
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
        await expect(this.chooseYourWalletText).toBeDisplayed();
        await expect(this.chooseYourWalletDesText).toBeDisplayed();
        await (await this.solWallet).click();
        await (await this.createNewWalletbtn).click();
        await (await this.inputwalletName).click();
        await (await this.inputwalletName).setValue(walletName);
        driver.hideKeyboard();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameyourwalletDesText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.continueBtn).click();
    }
    async clickSolWalletlogo() {
        await this.solWallet.waitForDisplayed({ timeout: 60000 });
        await expect(this.chooseYourWalletText).toBeDisplayed();
        await expect(this.chooseYourWalletDesText).toBeDisplayed();
        await (await this.solWallet).click();
    }
    async clickCreateWalletBtn() {
        await this.createNewWalletbtn.waitForDisplayed({ timeout: 60000 });
        await expect(this.walletSetupText).toBeDisplayed();
        await expect(this.importExistingWalletDesText).toBeDisplayed();
        await expect(ImportWalletPage.importWalletBtn).toBeDisplayed();
        await expect(this.termsAndConditionBtn).toBeDisplayed();
        await (this.createNewWalletbtn).click();
    }

    async enterWalletName(name) {
        await this.inputwalletName.waitForDisplayed({ timeout: 60000 });
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameyourwalletDesText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (this.inputwalletName).click();
        await (this.inputwalletName).setValue(name);
        driver.hideKeyboard();
    }

    async backButtonClick() {
       
        await this.backBtn.waitForDisplayed({ timeout: 60000 });
        await expect(this.backBtn).toBeDisplayed();
        await this.backBtn.click();
    }

    async continueBtnClick() {
        await this.continueBtn.waitForDisplayed({ timeout: 60000 });
        await (this.continueBtn).click();
    }

    async entersetPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 15000 });

        await expect(this.setYourPinText).toBeDisplayed();
        await expect(this.setYourPinDesText).toBeDisplayed();
        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
    }
    async enterConfirmPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 10000 });

        await expect(this.confirmYourPinText).toBeDisplayed();
        await expect(this.confirmYourPinDesText).toBeDisplayed();
        await expect(this.confirmPinBackBtn).toBeDisplayed();
        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
        await expect(this.proccessingYourRequestText).toBeDisplayed();
    }

    async enterIncorrectConfirmPin(pin1, pin2, pin3, pin4, pin5, pin6) {

        await (await this.loginPin1).waitForDisplayed({ timeout: 10000 });

        await expect(this.confirmYourPinText).toBeDisplayed();
        await expect(this.confirmYourPinDesText).toBeDisplayed();
        await expect(this.confirmPinBackBtn).toBeDisplayed();
        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);
    }

    async enterIncorrectConfirmPinClearValue() {

        await (await this.loginPin6).clearValue();
        await (await this.loginPin5).clearValue();
        await (await this.loginPin4).clearValue();
        await (await this.loginPin3).clearValue();
        await (await this.loginPin2).clearValue();
        await (await this.loginPin1).clearValue();
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

    // Popup Handles
    async verifyInvaildWalletNamePopup() {
      //  await expect(this.incorrectPopupText).toBeDisplayed();
     //   await expect(this.invaildWalletNameText).toBeDisplayed();
        driver.touchAction([
            {action: 'longPress', x: 525, y: 322},
            {action: 'moveTo', x: 517, y: 184},
            'release'
          ]);
    }
    async verifyPinDoesntMatchPopup() {
        await (this.pindoesntmatchText).waitForDisplayed({ timeout: 5000 });
        await expect(this.pindoesntmatchText).toBeDisplayed();
    }

}
module.exports = new CreateWalletPage();