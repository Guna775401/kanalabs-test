//const assert = require("assert");
//const { AppiumDriver } = require('appium/build/lib/appium');
const loginPage = require('../../pageobjects/login.page');
const neoncreatewalletPage = require('../../pageobjects/neon.pages.js/neoncreatewallet.page');
const neonDashCreateWallet = require('../../pageobjects/neon.pages.js/dashneoncreatewallet.page');
const neondashboardPage = require('../../pageobjects/neon.pages.js/neondashboard.page');
const createwalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const { async } = require('../../pageobjects/sol.pages.js/dashboard.page');
const DashboardPage = require('../../pageobjects/sol.pages.js/dashboard.page');
const LogoutPage = require('../../pageobjects/sol.pages.js/logut.page');
const RemindMeLaterPage = require('../../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../../pageobjects/sol.pages.js/resetwallet.page');
const securenowPage = require('../../pageobjects/sol.pages.js/securenow.page');

require('dotenv').config()



// new UiSelector().text("Confirm your Pin").className("android.widget.TextView")
//new UiSelector().text("Confirm Pin doesen't match").className(" ")

// await browser.pause(10000);


describe.only('Create wallet Neon', async () => {

    it('CN1: Verify Invalid wallet name while Neon account create', async () => {
        //await LogoutPage.logout();
        //await loginPage.verifyLoginScreen();
        //await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.firstnextBtn();
        await neoncreatewalletPage.verifyPopup(process.env.INVAILDWALLETNAME, process.env.INVAILDWITHSPACEWALLETNAME);
        await CreateWalletPage.backButtonClick();
    })

    it('CN2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINZERO, process.env.PINONE, process.env.PINZERO, process.env.PINZERO, process.env.PINONE, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await neondashboardPage.verifyNeonDash();
    });

    it('CN3: Create new Neon wallet vaild wallet name RemindmeLater', async () => {

        await LogoutPage.logoutNeon();
        await loginPage.verifyLoginScreen();
        await resetwalletPage.clickResetWalletbutton();
        await neoncreatewalletPage.clickNeonWalletlogo();
        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await neondashboardPage.verifyNeonDash();
    });

    it('CS4: Create new Neon wallet vaild wallet name Secure Now', async () => {
        await LogoutPage.logoutNeon();
        await loginPage.verifyLoginScreen();
        await resetwalletPage.clickResetWalletbutton();
        // await CreateWalletPage.firstnextBtn(); // need to delete
        await neoncreatewalletPage.clickNeonWalletlogo();
        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await securenowPage.clickstartBtn();
        await securenowPage.eyeIconClick();
        const pattern = await securenowPage.getAllKeyValue();
        await securenowPage.continueBtnClick();
        await securenowPage.checkFlashKeys(pattern);
        await securenowPage.clickContinueandFinishBtn();
       await neondashboardPage.verifyNeonDash();
    });

})

