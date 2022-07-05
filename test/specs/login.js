const { AppiumDriver } = require('appium/build/lib/appium');
const createWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    
  it('should login with valid credentials', async () => {
    
await createWalletPage.nextBtn.waitForDisplayed({timeout : 60000})    
await createWalletPage.nextBtn.click();
await createWalletPage.nextBtn.click();
await createWalletPage.nextBtn.click();
await createWalletPage.solWallet.click();
await createWalletPage.createNewWalletbtn.click();
await createWalletPage.walletName.click();
// Back
await createWalletPage.walletName.setValue("gunasssssjh");
await createWalletPage.continueBtn.click();
await browser.pause(10000);
    
        //     await LoginPage.open();

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     await expect(SecurePage.flashAlert).toBeExisting();
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    //});
console.log('Hello world');
     });
      });


