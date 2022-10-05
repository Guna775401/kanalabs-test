const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const dashboardPage = require('../pageobjects/sol.pages.js/dashboard.page');
const ImportWalletPage = require('../pageobjects/sol.pages.js/importwallet.page');
const LogoutPage = require('../pageobjects/sol.pages.js/logut.page');
const remindmelaterPage = require('../pageobjects/sol.pages.js/remindmelater.page');
const resetwalletPage = require('../pageobjects/sol.pages.js/resetwallet.page');
const menutabsPage = require('../pageobjects/sol.pages.js/menutabs.page');
const { async } = require('../pageobjects/sol.pages.js/dashboard.page');
const createneonwalletPage = require('../pageobjects/neon.pages.js/createneonwallet.page');
const neondashboardPage = require('../pageobjects/neon.pages.js/neondashboard.page');

require('dotenv').config()

describe('Import Sol Account', async () => {

    it('IS1: Import acount valid seed pharse with invaild name', async () => {
        //  await LogoutPage.logoutNeon();
        //await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet1(process.env.VAILDSEEDPHRASE, process.env.INVAILDWALLETNAME);
       // await ImportWalletPage.invalidWalletNameToastHandle();
        await ImportWalletPage.clickbackbtn();
    });

   it('IS2: Import acount invalid seed pharse with vaild name ', async () => {

        await ImportWalletPage.invalidSeedPhraseimportwallet( process.env.VAILDWALLETNAME, process.env.INVAILDSEEDPHRASE);
        await ImportWalletPage.invalidSeedPhraseToastHandle();
        await ImportWalletPage.clickbackbtn();
    });
    it('IS3: Import acount invalid seed pharse with invaild name', async () => {

        await ImportWalletPage.invalidSeedPhraseimportwallet( process.env.INVAILDWALLETNAME, process.env.INVAILDSEEDPHRASE);
        await ImportWalletPage.invaildWalletName_InvaildSeedphraseToastHandle();
        await ImportWalletPage.clickbackbtn();
    });
    it('IS4: Import acount Setpin confirmpin mismatch popup handling', async () => {

        await ImportWalletPage.importwallet(process.env.VAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        // await CreateWalletPage.verifyPinDoesntMatchPopup();
        await CreateWalletPage.enterIncorrectConfirmPinClearValue();
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await dashboardPage.verifySolDash();
    });
    it.only('IS5: Import acount valid seed pharse with vaild name', async () => {

        await CreateWalletPage.firstnextBtn();
        //await LogoutPage.logout();
        //await resetwalletPage.clickResetWalletbutton();
        await CreateWalletPage.clickSolWalletlogo();
        await ImportWalletPage.importwallet(process.env.SEEDBORING, process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await dashboardPage.verifySolDash();

    });

});

describe('Import Neon Account', async () => {

    // Bug
    it('IN1: Import Neon acount valid seed pharse with invaild name', async () => {
        await LogoutPage.logout();
        await resetwalletPage.clickResetWalletbutton();
        await createneonwalletPage.clickNeonWalletlogo();
        // need to INVAILDSEEDPHRASE to VAILDSEEDPHRASE
        await ImportWalletPage.importwallet(process.env.VAILDSEEDPHRASE, process.env.INVAILDWALLETNAME);
        // handle the popup

        await ImportWalletPage.clickbackbtn();
    });

    it('IN2: Import Neon acount invalid seed pharse with vaild name ', async () => {

        await ImportWalletPage.importwallet(process.env.INVAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        // Need to handle the popup
        await ImportWalletPage.clickbackbtn();
    });
    it('IN3: Import Neon acount invalid seed pharse with invaild name', async () => {

        await ImportWalletPage.importwallet(process.env.INVAILDSEEDPHRASE, process.env.INVAILDWALLETNAME);
        // Need to handle the popup
        await ImportWalletPage.clickbackbtn();
    });
    it('IN4: Import Neon acount Setpin confirmpin mismatch popup handling', async () => {

        await ImportWalletPage.importwallet(process.env.VAILDSEEDPHRASE, process.env.VAILDWALLETNAME);
        // need verify button clickable or not
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await ImportWalletPage.verifyConfirmPinToSetPinBackBtDisplay();
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
        // Need to handle the popup
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        // await remindmelaterPage.remindmelater();
        await neondashboardPage.verifyNeonDash();

    });
    it('IN5: Import Neon acount valid seed pharse with vaild name', async () => {

        //   await CreateWalletPage.firstnextBtn();
        await LogoutPage.logoutNeon();
        await resetwalletPage.clickResetWalletbutton();
        await createneonwalletPage.clickNeonWalletlogo();
        await ImportWalletPage.importwallet(process.env.SEEDDEMO, process.env.VAILDWALLETNAME);
        await CreateWalletPage.entersetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await CreateWalletPage.enterConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO);
        await neondashboardPage.verifyNeonDash();


    })
})