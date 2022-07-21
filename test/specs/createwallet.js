//const assert = require("assert");
//const { AppiumDriver } = require('appium/build/lib/appium');
const createneonwalletPage = require('../pageobjects/neon.pages.js/createneonwallet.page');
const neonDashCreateWallet = require('../pageobjects/neon.pages.js/dashneoncreatewallet.page');
const neondashboardPage = require('../pageobjects/neon.pages.js/neondashboard.page');
const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const { async } = require('../pageobjects/sol.pages.js/dashboard.page');
const DashboardPage = require('../pageobjects/sol.pages.js/dashboard.page');
const LogoutPage = require('../pageobjects/sol.pages.js/logut.page');
const RemindMeLaterPage = require('../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../pageobjects/sol.pages.js/resetwallet.page');
const securenowPage = require('../pageobjects/sol.pages.js/securenow.page');
require('dotenv').config()



// new UiSelector().text("Confirm your Pin").className("android.widget.TextView")
//new UiSelector().text("Confirm Pin doesen't match").className(" ")

// await browser.pause(10000);

describe('Create wallet Sol', () => {

    it('CS1: Verify Invalid wallet name while Sol account create', async () => {

        await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.createwallet(process.env.INVAILDWALLETNAME);
        await CreateWalletPage.backButtonClick();
        // Need to handle popup verify toast message text

    });

    it('CS2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.continueBtnClick();
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
        // Need to handle popup
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash();
    });

    it('CS3: Create new Sol wallet vaild wallet name, RemindmeLater ', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.firstnextBtn(); // need to delete
        await CreateWalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash(); 
       
       })

   it('CS4: Create new Sol wallet vaild wallet name Secure Now', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        // await CreateWalletPage.firstnextBtn(); // need to delete
        await CreateWalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await securenowPage.clickstartBtn();
        await securenowPage.eyeIconClick();
        const pattern = await securenowPage.getAllKeyValue();
        await securenowPage.continueBtnClick();
        await securenowPage.checkFlashKeys(pattern);
        await DashboardPage.verifySolDash();
    });

});

describe('Create wallet Neon', async () => {

    it('CN1: Verify Invalid wallet name while Neon account create', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await createneonwalletPage.createwalletNeon(process.env.INVAILDWALLETNAME);
        await createneonwalletPage.backButtonClickNeon();
        // Need to popup handle

    })

    it('CN2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.continueBtnClick();
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
        // Need to handle popup
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await neondashboardPage.verifyNeonDash();
    });

    it('CN3: Create new Neon wallet vaild wallet name RemindmeLater', async () => {

        await LogoutPage.logoutNeon();
        await resetwalletPage.clickResetWalletbutton();
        //await CreateWalletPage.firstnextBtn();
        await createneonwalletPage.clickNeonWalletlogo();
        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.continueBtnClick();
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        // Need to handle popup
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await neondashboardPage.verifyNeonDash();
    });

 it('CS4: Create new Neon wallet vaild wallet name Secure Now', async () => {
        await LogoutPage.logoutNeon();
        await resetwalletPage.clickResetWalletbutton();
        // await CreateWalletPage.firstnextBtn(); // need to delete
        await createneonwalletPage.clickNeonWalletlogo();
        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.continueBtnClick();
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await securenowPage.clickstartBtn();
        await securenowPage.eyeIconClick();
        const pattern = await securenowPage.getAllKeyValue();
        await securenowPage.continueBtnClick();
        await securenowPage.checkFlashKeys(pattern);
        await neondashboardPage.verifyNeonDash();
});

})

