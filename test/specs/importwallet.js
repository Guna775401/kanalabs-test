const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const dashboardPage = require('../pageobjects/sol.pages.js/dashboard.page');
const ImportWalletPage = require('../pageobjects/sol.pages.js/importwallet.page');
const LogoutPage = require('../pageobjects/sol.pages.js/logut.page');
const remindmelaterPage = require('../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../pageobjects/sol.pages.js/resetwallet.page');
const logindata = require('../../testdata/logindata');

describe('Import Sol Account', () => {

    it('IS1: Import acount valid seed pharse with invaild name', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet(logindata.vaildSeedPhrase, logindata.inVaildWalletname1);
        // handle the popup

        await ImportWalletPage.clickbackbtn();
    });

    it('IS2: Import acount invalid seed pharse with vaild name ', async () => {

        await ImportWalletPage.importwallet(logindata.inVaildSeedPhrase, logindata.vaildwalletname);
        // Need to handle the popup
        await ImportWalletPage.clickbackbtn();
    });
    it('IS3: Import acount invalid seed pharse with invaild name', async () => {

        await ImportWalletPage.importwallet(logindata.inVaildSeedPhrase, logindata.invaildwalletname);
        // Need to handle the popup
        await ImportWalletPage.clickbackbtn();
    });
    it('IS4: Import acount Setpin confirmpin mismatch popup handling', async () => {

        await ImportWalletPage.importwallet(logindata.vaildSeedPhrase, logindata.vaildwalletname);
        await CreateWalletPage.enterPin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero);
        await CreateWalletPage.enterConfirmPin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinone);
        // Need to handle the popup
        await ImportWalletPage.clickbackbtn();
        await CreateWalletPage.enterConfirmPin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero);
        await remindmelaterPage.remindmelater();
        await dashboardPage.verifySolDash();
    });
    it('IS5: Import acount valid seed pharse with vaild name', async () => {

        //  await CreateWalletPage.firstnextBtn();
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet(logindata.vaildSeedPhrase, logindata.vaildwalletname);
        await CreateWalletPage.enterPin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero);
        await CreateWalletPage.enterConfirmPin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero);
        await remindmelaterPage.remindmelater();
        await dashboardPage.verifySolDash();

    });





});