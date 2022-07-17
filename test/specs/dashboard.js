const { createwallet } = require("../pageobjects/sol.pages.js/createwallet.page");
const { async } = require("../pageobjects/sol.pages.js/dashboard.page");
const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../pageobjects/sol.pages.js/lend_borrow.page");
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const sendPage = require("../pageobjects/sol.pages.js/send.page");
const stakePage = require("../pageobjects/sol.pages.js/stake.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");
const turboPage = require("../pageobjects/sol.pages.js/turbo.page");
const logindata = require('../../testdata/logindata');


// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView

describe.only('Verify Dashboard Sol', () => {

    it('DS1: Verify Displayed or Not Tokens tab and history tab and Create/View wallet ', async () => {
        await dashboardPage.verifyHistorytab();
        await dashboardPage.verifyTokentab();
        await dashboardPage.verifyCreate_Viewwallet();
        // Need create/view wallet verify function
    });

    it('DS2: Verify Displayed or Not Sol wallet dashboard and Menu option Neon wallet and Cliped copy and Scan QR and Holdling value and ', async () => {
        await dashboardPage.verifymenuoption();
        await dashboardPage.verifyHistorytab();
        await dashboardPage.verifyNeonWallet();
        await dashboardPage.verifyCopyclipboardAndQRcode();
        await dashboardPage.verifyHoldingTextAndValue();
    });

    it('DS3: Verify Buttons Displayed or Not Send and Swap and Stake and Turbo andLend/borrow', async () => {
        await sendPage.verifySendbtn();
        await swapPage.verifySwapbtn();
        await stakePage.verifyStakebtn();
        await turboPage.verifyTurbobtn();
        await lend_borrowPage.verifyLend_Borrowbtn();
    });

    it('DS4: Verify Menu Options Displayed or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase ', async () => {

        await dashboardPage.verifymenuoption();
        await menutabsPage.verifyNetwork();
        await menutabsPage.verifyChangePinTab();
        //await menutabsPage.verifyLanguage();
        await menutabsPage.verifyLightMode();
        await menutabsPage.verifyLogout();
        await menutabsPage.verifyShow_Seed_phrase();

    });

    it('DS10:Verify ChangePin funtionality working or not', async () => {

        await menutabsPage.clickMenuTab();
        await menutabsPage.clickChangePin();
        await menutabsPage.verifychangePintoDashBackbtn();
        await menutabsPage.changePin(logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero, logindata.pinzero)
        await menutabsPage.changePin_SetPin(logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone);
        await menutabsPage.verifyConfirmPinToSetPin();
        await menutabsPage.changePin_ConfirmPin(logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone, logindata.pinone);
        await dashboardPage.verifySolDash();

    })



});