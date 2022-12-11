const aptoscreatewalletPage  = require('../../pageobjects/aptos.pages/aptos_createwallet.page');
const loginPage = require('../../pageobjects/login.page');
const createneonwalletPage = require('../../pageobjects/neon.pages.js/createneonwallet.page');
const neonDashCreateWallet = require('../../pageobjects/neon.pages.js/dashneoncreatewallet.page');
const neondashboardPage = require('../../pageobjects/neon.pages.js/neondashboard.page');
const createwalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const DashboardPage = require('../../pageobjects/sol.pages.js/dashboard.page');
const LogoutPage = require('../../pageobjects/sol.pages.js/logut.page');
const RemindMeLaterPage = require('../../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../../pageobjects/sol.pages.js/resetwallet.page');
const securenowPage = require('../../pageobjects/sol.pages.js/securenow.page');
const AptosDashboardScreen = require('../../pageobjects/aptos.pages/aptosdashboard.page');

require('dotenv').config()



describe.only('Create wallet Aptos', () => {

    it('CWA1: Verify Invalid wallet name while Aptos account create', async () => {
        await LogoutPage.logout();
        await loginPage.verifyLoginScreen();
        await resetwalletPage.clickResetWalletbutton();
       // await CreateWalletPage.firstnextBtn();
        await createneonwalletPage.verifyPopup(process.env.INVAILDWALLETNAME, process.env.INVAILDWITHSPACEWALLETNAME);
        await CreateWalletPage.backButtonClick();
    });

    it('CWA2: Verify Setpin confirm pin mismatch while come popup handling', async () => {

        await CreateWalletPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
       // await AptosDashboardScreen.verifyAptosTestNet();
    });

    it('CWA3: Create new Aptos wallet vaild wallet name, RemindmeLater ', async () => {
      
        await LogoutPage.logout();
        await loginPage.verifyLoginScreen();
        await resetwalletPage.clickResetWalletbutton();
        await aptoscreatewalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await RemindMeLaterPage.remindmelater();
       // await AptosDashboardScreen.verifyAptosTestNet();
    })

    it('CWA4: Create new Aptos wallet vaild wallet name Secure Now', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        // await CreateWalletPage.firstnextBtn(); // need to delete
        await aptoscreatewalletPage.createwallet(process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await securenowPage.clickstartBtn();
        await securenowPage.eyeIconClick();
        const pattern = await securenowPage.getAllKeyValue();
        await securenowPage.continueBtnClick();
        await securenowPage.checkFlashKeys(pattern);
        await securenowPage.clickContinueandFinishBtn();
        //await AptosDashboardScreen.verifyAptosTestNet();
    });
});



