const resetwalletPage = require("./sol.pages.js/resetwallet.page");

class Loginpage {

    //android.view.ViewGroup[@content-desc="showBtn"]/android.view.ViewGroup
    get eyeIcon() {
        return $('~showBtn');
    }

    // Need to Welcome back! Text
    async verifyWelcomeBack() {
        const welcomeBack = 'new UiSelector().text("Welcome Back").className("")'
        const welcomeback = await $(`android=${welcomeBack}`)
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
