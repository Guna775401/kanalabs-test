
const createwalletPage = require('./sol.pages.js/createwallet.page');
const resetwalletPage = require('./sol.pages.js/resetwallet.page');


class LoginPage  {

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get eyeButton() {
        return $('~showPassword');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
    get welcomeText() {
        const welcome = 'new UiSelector().text("Welcome").className("android.widget.TextView")'
        const welcome1 = $(`android=${welcome}`)
        return welcome1;
    }
    get enterPinText() {
        const enterPin = 'new UiSelector().text("Enter Pin").className("android.widget.TextView")'
        const enterPin1 = $(`android=${enterPin}`)
        return enterPin1;
    }

    get cantLoginText() {
        const cantlogin = 'new UiSelector().text("Can’t login? You can erase your current wallet and set up a new one").className("android.widget.TextView")'
        const cantlogin1 = $(`android=${cantlogin}`)
        return cantlogin1;
    }

    get signInwithBiometric() {
        const signInBiometric = 'new UiSelector().text("Sign in with biometrics?").className("android.widget.TextView")'
        const signInBiometric1 = $(`android=${signInBiometric}`)
        return signInBiometric1;
    }

    get resetWalletText() {
        const resetwallet = 'new UiSelector().text("Reset wallet").className("android.widget.TextView")'
        const resetwallet1 = $(`android=${resetwallet}`)
        return resetwallet1;
    }

    get() {
        const chooseYourWalletDes = 'new UiSelector().text("").className("android.widget.TextView")'
        const chooseYourWalletDes1 = $(`android=${chooseYourWalletDes}`)
        return chooseYourWalletDes1;
    }

    async verifyLoginScreen() {
        await expect(this.welcomeText).toBeDisplayed();
        await expect(this.enterPinText).toBeDisplayed();
        await expect(resetwalletPage.resetwalletBtn).toBeDisplayed();
        await expect(this.eyeButton).toBeDisplayed();
        await expect(createwalletPage.loginPin1).toBeDisplayed();
        await expect(createwalletPage.loginPin2).toBeDisplayed();
        await expect(createwalletPage.loginPin3).toBeDisplayed();
        await expect(createwalletPage.loginPin4).toBeDisplayed();
        await expect(createwalletPage.loginPin5).toBeDisplayed();
        await expect(createwalletPage.loginPin6).toBeDisplayed();
        await expect(this.cantLoginText).toBeDisplayed();
        await expect(this.resetWalletText).toBeDisplayed();
        await expect(this.signInwithBiometric).toBeDisplayed();
    }



}

module.exports = new LoginPage();
