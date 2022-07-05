const { AppiumDriver } = require('appium/build/lib/appium');
const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const RemindMeLaterPage = require('../pageobjects/sol.pages.js/remindmelater.page');
const SendPage = require('../pageobjects/sol.pages.js/send.page');
//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {

    it('should first time login with valid credentials', async () => {

        await CreateWalletPage.nextBtn.waitForDisplayed({ timeout: 60000 });
        await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.createwallet('gunatest0965');
       // await RemindMeLaterPage.remindmelater();
    });

xit('should login with Invalid credentials', async () => {
//need to logout function
//reset function
        await CreateWalletPage.solWallet.waitForDisplayed({ timeout: 60000 });
        //await CreateWalletPage.firstnextBtn();
        await CreateWalletPage.createwallet('gunatest0965', '000001', '000000');
    //handle the alert popup
    await driver.back();
    });

    it('send amount', async () => {
        await SendPage.sendBtn.waitForDisplayed({ timeout: 120000 });
        await SendPage.sendbuttonclick();
        await SendPage.toAddressWallet('6qLQAekc6VUBqsCMuLoRHT6o3m4vELSureKo3rdGeMew ');
        await SendPage.enterAmount.waitForDisplayed({ timeout: 60000 });
        await SendPage.enteramountinput ('1');
 // await RemindMeLaterPage.remindmelater();
    });



        // await createWalletPage.nextBtn.waitForDisplayed({timeout : 60000})    
        // await createWalletPage.nextBtn.click();
        // await createWalletPage.nextBtn.click();
        // await createWalletPage.nextBtn.click();
        // await createWalletPage.solWallet.click();
        // await createWalletPage.createNewWalletbtn.click();
        // await createWalletPage.walletName.click();
        // // Back
        // await createWalletPage.walletName.setValue("gunasssssjh");
        // await createWalletPage.continueBtn.click();
        // await browser.pause(10000);

        //     await LoginPage.open();

        //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //     await expect(SecurePage.flashAlert).toBeExisting();
        //     await expect(SecurePage.flashAlert).toHaveTextContaining(
        //         'You logged into a secure area!');
        //});
       
    });


