const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');
const dashboardPage = require('../../pageobjects/sol.pages.js/dashboard.page');
const ImportWalletPage = require('../../pageobjects/sol.pages.js/importwallet.page');
const LogoutPage = require('../../pageobjects/sol.pages.js/logut.page');
// const remindmelaterPage = require('../../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../../pageobjects/sol.pages.js/resetwallet.page');
// const menutabsPage = require('../../pageobjects/sol.pages.js/menutabs.page');
// const neondashboardPage = require('../../pageobjects/neon.pages.js/neondashboard.page');
// const neoncreatewalletPage = require('../../pageobjects/neon.pages.js/neoncreatewallet.page');

require('dotenv').config()

describe('Import Sol Account', async () => {

    it('IS1: Import acount valid seed pharse with invaild name', async () => {
      await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        //await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet1(process.env.VAILDSEEDPHRASE, process.env.INVAILDWALLETNAME);
        await ImportWalletPage.clickbackbtn();
    });

    it('IS2: Import acount invalid seed pharse with vaild name ', async () => {

        await ImportWalletPage.invalidSeedPhraseimportwallet(process.env.INVAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        await ImportWalletPage.clickbackbtn();
    });
    it('IS3: Import acount invalid seed pharse with invaild name', async () => {

        await ImportWalletPage.invaildWalletName_InvaildSeedphrase(process.env.INVAILDWALLETNAME, process.env.INVAILDSEEDPHRASE1, process.env.INVAILDSEEDPHRASE2);
        await ImportWalletPage.clickbackbtn();
    });
    it('IS4: Import acount Setpin confirmpin mismatch popup handling', async () => {

        await ImportWalletPage.importwallet(process.env.VAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await dashboardPage.verifySolDash();
    });
    it('IS5: Import acount valid seed pharse with vaild name', async () => {

       // await CreateWalletPage.firstnextBtn();
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet(process.env.SEEDBORING, process.env.VAILDWALLETNAME);
        await CreateWalletPage.enterSetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await dashboardPage.verifySolDash();
      
    });

});

