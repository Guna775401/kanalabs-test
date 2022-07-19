//const assert = require("assert");
//const { AppiumDriver } = require('appium/build/lib/appium');
const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const DashboardPage = require('../pageobjects/sol.pages.js/dashboard.page');
const LogoutPage = require('../pageobjects/sol.pages.js/logut.page');
const RemindMeLaterPage = require('../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../pageobjects/sol.pages.js/resetwallet.page');
require('dotenv').config()



// new UiSelector().text("Confirm your Pin").className("android.widget.TextView")
//new UiSelector().text("Confirm Pin doesen't match").className(" ")

// await browser.pause(10000);

describe('Create wallet Sol', () => {

    it('CS1: Verify Invalid wallet name while Sol account create', async () => {

        await CreateWalletPage.firstnextBtn();
       // console.log(await expect(CreateWalletPage.solWallet).toBeDisplayed());
        await CreateWalletPage.createwallet(process.env.INVAILDWALLETNAME);
        await CreateWalletPage.backButtonClick();
        // Need to handle popup 
        // try this
        // await expect(SecurePage.flashAlert).toBeExisting();
    });

    it('CS2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await (await CreateWalletPage.createNewWalletbtn).click();
        await (await CreateWalletPage.inputwalletName).click();
        await (await CreateWalletPage.inputwalletName).setValue(process.env.VAILDWALLETNAME);
        driver.hideKeyboard();
        await CreateWalletPage.backButtonExisting();
        await (await CreateWalletPage.continueBtn).click();
       
        await CreateWalletPage.entersetPin(process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINONE);

        // Need to handle popup
        // try this
        // await expect(SecurePage.flashAlert).toBeExisting();

        await CreateWalletPage.enterConfirmPin(process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO);
        //toastAnimatedContainer
        // const alret = await $('id=toastAnimatedContainer');
        //const alrettxt = alret.getText();
        //await console.log(alrettxt);
        //assert.deepEqual(alrettxt, "Confirm Pin doesen't match");
        // alret.click();
        //waitForDisplayed({ timeout: 120000 });
        //await (await $('~toastAnimatedContainer'));
        //console.log('Alert text',await driver.getAlertText());
        // await driver.acceptAlert();
        // await driver.closeApp();
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash();
    });

    it('CS3: Create new Sol wallet vaild wallet name', async () => {
       //console.log(process.env.NAME)
        await LogoutPage.logout();
       await resetwalletPage.clickResetWalletbutton();
        //  await CreateWalletPage.solWallet.waitForDisplayed({ timeout: 60000 });
        //await CreateWalletPage.firstnextBtn(); // need to delete
        await CreateWalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO,process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash();

    });



});


