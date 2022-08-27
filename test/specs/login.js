const { AppiumDriver } = require('appium/build/lib/appium');
const createWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const LoginPage = require('../pageobjects/login.page');
const LogoutPage = require('../pageobjects/sol.pages.js/logut.page');
const { async } = require('../pageobjects/sol.pages.js/dashboard.page');
const loginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {

  it('LS1: Verify Login Invaild Pin popup handling', async () => {
    await LogoutPage.logout();
    await createWalletPage.enterPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZONE);
    // Need to popup handle
  });

  it('LS2: Verify Welcome back tittle and Eye icon and Reset Wallet button Displayed or Not', async () => {
    await loginPage.verifyWelcomeBack();
    await loginPage.verifyEyeiconClickable();
    await loginPage.verifyResetWalletBtn();
  })

  // Need to Login
  it(' ', async () => {


  })
  
});


