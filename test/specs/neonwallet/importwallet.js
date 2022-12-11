const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const dashboardPage = require('../../pageobjects/sol.pages.js/dashboard.page');
const ImportWalletPage = require('../../pageobjects/sol.pages.js/importwallet.page');
const LogoutPage = require('../../pageobjects/sol.pages.js/logut.page');
const remindmelaterPage = require('../../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../../pageobjects/sol.pages.js/resetwallet.page')
const neondashboardPage = require('../../pageobjects/neon.pages.js/neondashboard.page');
const neoncreatewalletPage = require('../../pageobjects/neon.pages.js/neoncreatewallet.page');

require('dotenv').config()



describe('Import Neon Account', async () => {

    // Bug
    it('IN1: Import Neon acount valid seed pharse with invaild name', async () => {
        await CreateWalletPage.firstnextBtn();
       // await LogoutPage.logout();
        //await resetwalletPage.clickResetWalletbutton();
        await neoncreatewalletPage.clickNeonWalletlogo();
        await ImportWalletPage.importwallet1(process.env.VAILDSEEDPHRASE, process.env.INVAILDWALLETNAME);
        await ImportWalletPage.clickbackbtn();
    });

    it('IN2: Import Neon acount invalid seed pharse with vaild name ', async () => {

        await ImportWalletPage.invalidSeedPhraseimportwallet(process.env.VAILDWALLETNAME, process.env.INVAILDSEEDPHRASE);
        await ImportWalletPage.clickbackbtn();
    });

    it('IN3: Import Neon acount invalid seed pharse with invaild name', async () => {

        await ImportWalletPage.invaildWalletName_InvaildSeedphrase(process.env.INVAILDWALLETNAME, process.env.INVAILDSEEDPHRASE);
        await ImportWalletPage.clickbackbtn();
    });

    it('IN4: Import Neon acount Setpin confirmpin mismatch popup handling', async () => {

        await ImportWalletPage.importwallet(process.env.VAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await neondashboardPage.verifyNeonDash();

    });
    it('IN5: Import Neon acount valid seed pharse with vaild name', async () => {

        //await CreateWalletPage.firstnextBtn();
        await LogoutPage.logoutNeon();
        await resetwalletPage.clickResetWalletbutton();
        await neoncreatewalletPage.clickNeonWalletlogo();
        await ImportWalletPage.importwallet(process.env.SEEDDEMO, process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await neondashboardPage.verifyNeonDash();


    })
})