
const ImportWalletPage = require('./importwallet.page');
const menutabsPage = require('./menutabs.page');

class CreateWalletPage {

    //FirstTime open the application What is Kana page NextButton

    get nextBtn() {
        return $('~nextButton');
    }
    get errMessage() {
        return $('//android.view.ViewGroup[@content-desc="SOLNameWallet"]/android.widget.TextView[4]');
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
   get popupId() {
         return $('~toastText1')
    }
    open() {
        return super.open('popupId');
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
        const chooseYourWalletDes = 'new UiSelector().text("Choose your walletType, Kana Labs Supports three types of wallets!").className("android.widget.TextView")'
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
        const nameyourwalletDes = 'new UiSelector().text("Give an Unique Name to Your Wallet. You will be able to create additional wallets from within the dashboard.").className("android.widget.TextView")'
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

    // Need to change

    get walletCreateLoaderText() {
        const walletCreateloadertext = 'new UiSelector().text("Hang on while your Wallets are being Created").className("android.widget.TextView")'
        const walletCreateloadertext1 = $(`android=${walletCreateloadertext}`)
        return walletCreateloadertext1;
    }
    get proccessingYourRequestText() {
        const proccessingYourRequest = 'new UiSelector().text("Processing your request, Please wait!").className("android.widget.TextView")'
        const proccessingYourRequest1 = $(`android=${proccessingYourRequest}`)
        return proccessingYourRequest1;
    }

    get walletNameIncorrectText() {
        const incorrectPopup = 'new UiSelector().text("*Please Enter only Alphabets and Numbers!").className("android.widget.TextView")'
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

    get moreThanSpaePopupText() {
        const morethanspace = 'new UiSelector().text("Please Dont Enter more than single space!").className("android.widget.TextView")'
        const morethanspace1 = $(`android=${morethanspace}`)
        return morethanspace1;
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

        await this.nextBtn.waitForDisplayed({ timeout: 30000 });
        await expect(this.whatsKanaText).toBeDisplayed();
        await expect(this.whatsKanaDesText).toBeDisplayed();
        await (await this.nextBtn).click();
        await expect(this.swapAndMoreText).toBeDisplayed();
        await expect(this.swapAndMoreDesText).toBeDisplayed();
        await (await this.nextBtn).click();
        await expect(this.seamLessText).toBeDisplayed();
        await expect(this.seamLessUiDesText).toBeDisplayed();
        await (await this.nextBtn).click();
    }

    get colorGet() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
    }
    get colors() {
        return $('~SolHomeDashboard')
    }
    async getcolor() {
        // let el1 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup");
        //client.getCssProperty(selector,cssProperty).then(callback);

        //  const ele = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')

        //div._highlighter-box_619e8

        try {
            const color = await this.colors.getCSSProperty('background-color')
            console.log('color:' + color);
        } catch (e) {
            console.log('error:', e)
        }

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
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameyourwalletDesText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.inputwalletName).clearValue();
        await (await this.inputwalletName).setValue(walletName);
        await driver.hideKeyboard();
        await (await this.continueBtn).click();
    }

    async verifyPopup(walletName, walletName1) {

        await this.solWallet.waitForDisplayed({ timeout: 60000 });
        await expect(this.chooseYourWalletText).toBeDisplayed();
        await expect(this.chooseYourWalletDesText).toBeDisplayed();
        await (await this.solWallet).click();
        await (await this.createNewWalletbtn).click();
        await (await this.inputwalletName).click();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameyourwalletDesText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (await this.inputwalletName).setValue(walletName);
        await driver.hideKeyboard();

        const errmessage = await this.errMessage.getText(); // Can use this also  await expect(this.invaildWalletNameText).toBeDisplayed();
        ( errmessage == process.env.ERRORMESSAGE )
        // Need to delete this line
        await (await this.continueBtn).click();

        await expect(this.popupId).toHaveText('Please Enter only Alphabets and Numbers!')
        driver.touchAction([
            { action: 'longPress', x: 525, y: 322 },
            { action: 'moveTo', x: 517, y: 184 },
            'release'
        ]);
        await expect(this.walletNameIncorrectText).toBeDisplayed();

        await (await this.inputwalletName).clearValue();
        await (await this.inputwalletName).setValue(walletName1);
       // await expect(this.popupId).toHaveText('Please Dont Enter more than single space!')

        // driver.touchAction([
        //     { action: 'longPress', x: 525, y: 322 },
        //     { action: 'moveTo', x: 517, y: 184 },
        //     'release'
        // ]);

        //await (await this.continueBtn).click();
       // await expect(this.invaildWalletNameText).toBeDisplayed();
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
        await expect(this.termsAndConditionText).toBeDisplayed();
        await (this.createNewWalletbtn).click();
    }

    async enterWalletName(name) {
        await this.inputwalletName.waitForDisplayed({ timeout: 60000 });
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameyourwalletDesText).toBeDisplayed();
        await expect(this.walletNameText).toBeDisplayed();
        await (this.inputwalletName).clearValue();
        await (this.inputwalletName).setValue(name);
        await driver.hideKeyboard();
        await (this.continueBtn).click();
       }
   
    async backButtonClick() {

        await this.backBtn.waitForDisplayed({ timeout: 15000 });
        await expect(this.backBtn).toBeDisplayed();
        await this.backBtn.click();
    }

    async continueBtnClick() {
        await this.continueBtn.waitForDisplayed({ timeout: 60000 });
        await (this.continueBtn).click();
    }

    async enterSetPin(pin1, pin2, pin3, pin4, pin5, pin6) {
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
        await expect(this.walletCreateLoaderText).toBeDisplayed();
    }
    async enterConfirmPin1(pin1, pin2, pin3, pin4, pin5, pin6) {
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

        await expect(this.popupId).toHaveText('Confirm Pin doesn’t match')

        driver.touchAction([
            { action: 'longPress', x: 525, y: 322 },
            { action: 'moveTo', x: 517, y: 184 },
            'release'
        ]);

    }
    async enterIncorrectPin(pin1, pin2, pin3, pin4, pin5, pin6) {

        await (await this.loginPin1).waitForDisplayed({ timeout: 10000 });

        await expect(menutabsPage.changePinText).toBeDisplayed();
        await expect(menutabsPage.changePinDesText).toBeDisplayed();
        await expect(menutabsPage.changepinToBackDash).toBeDisplayed();
        await (await this.loginPin1).click();
        await (await this.loginPin1).setValue(pin1);
        await (await this.loginPin2).setValue(pin2);
        await (await this.loginPin3).setValue(pin3);
        await (await this.loginPin4).setValue(pin4);
        await (await this.loginPin5).setValue(pin5);
        await (await this.loginPin6).setValue(pin6);

        // await expect(this.popupId).toHaveText('Please enter the correct pin')

        // driver.touchAction([
        //     { action: 'longPress', x: 525, y: 322 },
        //     { action: 'moveTo', x: 517, y: 184 },
        //     'release'
        // ]);
        
        await (menutabsPage.changepinToBackDash).click();
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

    async changePin(pin1, pin2, pin3, pin4, pin5, pin6) {
        // await (await createwalletPage.loginPin1).waitForDisplayed({ timeout: 30000 });
       //  await expect(menutabsPage.changepinToBackDash).toBeDisplayed();
         await expect(menutabsPage.changePinText).toBeDisplayed();
         await expect(menutabsPage.changePinDesText).toBeDisplayed();
 
         await (this.loginPin1).click();
         await (await this.loginPin1).setValue(pin1);
         await (await this.loginPin2).setValue(pin2);
         await (await this.loginPin3).setValue(pin3);
         await (await this.loginPin4).setValue(pin4);
         await (await this.loginPin5).setValue(pin5);
         await (await this.loginPin6).setValue(pin6);
     }



    // Hang on while your Wallets are being Created



}
module.exports = new CreateWalletPage();