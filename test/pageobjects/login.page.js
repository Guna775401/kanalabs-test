const resetwalletPage = require("./sol.pages.js/resetwallet.page");

class Loginpage {

    //android.view.ViewGroup[@content-desc="showBtn"]/android.view.ViewGroup
    get eyeIcon() {
        return $('~showBtn');
    }
    get biometric() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.Switch');
    }

    // UI Text

    get welcomeBackText() {
        const welcomeBack = 'new UiSelector().text("Welcome Back").className("android.widget.TextView")'
        const welcomeback =  $(`android=${welcomeBack}`)
        return welcomeback;
    }
    get enterPinText() {
        const enterPin = 'new UiSelector().text("Enter Pin").className("android.widget.TextView")'
        const enterPin1 =  $(`android=${enterPin}`)
        return enterPin1;
    }
    get SignInWithBiometricsText() {
        const SignInWithBiometrics = 'new UiSelector().text("Sign in with biometrics?").className("android.widget.TextView")'
        const SignInWithBiometrics1 =  $(`android=${SignInWithBiometrics}`)
        return SignInWithBiometrics1;
    }

    get cantloginText() {
        const cantlogin = 'new UiSelector().text("Can’t login? You can erase your current wallet and set up a new one").className("android.widget.TextView")'
        const cantlogin1 =  $(`android=${cantlogin}`)
        return cantlogin1;
    }
    // get() {
    //     const mainDash = 'new UiSelector().text("Sign in with biometrics?").className("android.widget.TextView")'
    //     const mainDash1 = await $(`android=${mainDash}`)
    //     return mainDash1;
    // }

    get() {
        const mainDash = 'new UiSelector().text("").className("android.widget.TextView")'
        const mainDash1 =  $(`android=${mainDash}`)
        return mainDash1;
    }
    get() {
        const mainDash = 'new UiSelector().text("").className("android.widget.TextView")'
        const mainDash1 =  $(`android=${mainDash}`)
        return mainDash1;
    }


    // POPUP Text

    get incorrectPinPopupText() {
        const pleaseEnterCorrectPin = 'new UiSelector().text("Please enter the correct Pin").className("android.widget.TextView")'
        const pleaseEnterCorrectPin1 =  $(`android=${pleaseEnterCorrectPin}`)
        return pleaseEnterCorrectPin1;
    }

    // Need to Welcome back! Text
    async verifyWelcomeBack() {

        await welcomeback.waitForDisplayed({ timeout: 120000 })
        await expect(welcomeback).toBeDisplayed();
    }

    async verifyResetWalletBtn() {
        await expect(resetwalletPage.resetwalletBtn).toBeDisplayed();
        await resetwalletPage.resetwalletBtn.click();
        await expect(resetwalletPage.cancelBtn).toBeDisplayed();
        await expect(resetwalletPage.understoodEraseWalletBtn).toBeDisplayed();
        await resetwalletPage.cancelBtn.click();
    }

    async verifyEyeicon() {
        await expect(this.eyeIcon).toBeDisplayed();
    }
    async verifyEyeiconClickable() {
        await expect(this.eyeIcon).toBeClickable();
    }
async verifyLoginScreenUI(){
    await (this.enterPinText).waitForDisplayed({ timeout: 60000 })
   // await expect(this.welcomeBackText).toBeDisplayed();
    await expect(this.enterPinText).toBeDisplayed();
    await expect(this.SignInWithBiometricsText).toBeDisplayed();
    await expect(this.cantloginText).toBeDisplayed();
    await expect(resetwalletPage.resetwalletBtn).toBeDisplayed();
    await expect(this.biometric).toBeDisplayed();
}



async (){
    
}
async (){
    
}
    async loginSOL() {


    }

}


module.exports = new Loginpage();



// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();
