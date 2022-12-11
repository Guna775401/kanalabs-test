
const loginPage = require('../../pageobjects/login.page');
const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const DashboardPage = require('../../pageobjects/sol.pages.js/dashboard.page');
const LogoutPage = require('../../pageobjects/sol.pages.js/logut.page');
const RemindMeLaterPage = require('../../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../../pageobjects/sol.pages.js/resetwallet.page');
const securenowPage = require('../../pageobjects/sol.pages.js/securenow.page');

require('dotenv').config()


describe('Create wallet Sol', () => {

    it('CS1: Verify Invalid wallet name while Sol account create', async () => {

        await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.verifyPopup(process.env.INVAILDWALLETNAME, process.env.INVAILDWITHSPACEWALLETNAME);
        await CreateWalletPage.backButtonClick();
    });

    it('CS2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash();
    });

    it('CS3: Create new Sol wallet vaild wallet name, RemindmeLater ', async () => {
       
        await LogoutPage.logout();
         await loginPage.verifyLoginScreen();
         await resetwalletPage.clickResetWalletbutton();
         //await CreateWalletPage.firstnextBtn(); // need to delete
        await CreateWalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
        await DashboardPage.verifySolDash();
    })

    it('CS4: Create new Sol wallet vaild wallet name Secure Now', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        // await CreateWalletPage.firstnextBtn(); // need to delete
        await CreateWalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await securenowPage.clickstartBtn();
        await securenowPage.eyeIconClick();
        const pattern = await securenowPage.getAllKeyValue();
        await securenowPage.continueBtnClick();
        await securenowPage.checkFlashKeys(pattern);
        await securenowPage.clickContinueandFinishBtn();
        await DashboardPage.verifySolDash();
    });
});



