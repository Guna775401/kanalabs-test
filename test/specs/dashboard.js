const { createwallet } = require("../pageobjects/sol.pages.js/createwallet.page");
const { async } = require("../pageobjects/sol.pages.js/dashboard.page");
const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../pageobjects/sol.pages.js/lend_borrow.page");
const logutPage = require("../pageobjects/sol.pages.js/logut.page");
const { logout } = require("../pageobjects/sol.pages.js/logut.page");
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const sendPage = require("../pageobjects/sol.pages.js/send.page");
const stakePage = require("../pageobjects/sol.pages.js/stake.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");
const turboPage = require("../pageobjects/sol.pages.js/turbo.page");



// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ImageView

describe.only('Verify Dashboard SOL', () => {

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
        await dashboardPage.clickMenuoption();
         await menutabsPage.verifyNetwork();
        await menutabsPage.verifyChangePinTab();
        //await menutabsPage.verifyLanguage();
        await menutabsPage.verifyLightMode();
        await menutabsPage.verifyLogout();
        await menutabsPage.verifyShow_Seed_phrase();
        await menutabsPage.clickCancelbtn();

    });

    it('DS5: Verify Buttons Clickable or Not Send and Swap and Stake and Turbo and Lend/borrow', async () => {
        await sendPage.verifySendbtn();
        await swapPage.verifySwapbtn();
        await stakePage.verifyStakebtn();
        await turboPage.verifyTurbobtn();
        await lend_borrowPage.verifyLend_Borrowbtn();
    })
    xit('DS6: Verify Menu Options Clickable or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase and Cancel  ', async () => {

        await menutabsPage.verifyMenuTab();
        await menutabsPage.clickMenuTab();
        await menutabsPage.verifyNetworkClickable();
        await menutabsPage.verifyChangePinClickable();
        await menutabsPage.verifyLightModeClickable();
        await menutabsPage.verifyLanguageClickable();
        await menutabsPage.verifyShow_Seed_phraseClickable();
        await menutabsPage.verifyLogoutClickable();
        await menutabsPage.clickCancelbtn();

    })
    xit('DS7: Verify Clickable or Not Sol wallet dashboard and Menuoption Neon wallet and Cliped copy and Scan QR and Display Holdling value and Holding Value Text', async () => {

        await dashboardPage.verifyCopyclipboardAndQRcode_Clickable();
        await dashboardPage.verifyNeonWalletClickable();
        await dashboardPage.verifyHoldingTextAndValue();
    })

    xit('DS8: Verify Clickable or Not Tokens tab and history tab and Create/View wallet', async () => {

        await dashboardPage.verifyHistorytabClickable();
        await dashboardPage.verifyTokentabClickable();
        await dashboardPage.verifyCreate_ViewwalletClickable();
    })

    it('DS9: Verify Clickable and Displayed or Not DevNet and MainNet', async () => {

        await menutabsPage.verifyDisplay_DevNetAndMainNet();
       // await menutabsPage.clickCancelbtn();
    })


    it('DS10:Verify ChangePin funtionality working or not', async () => {

        // Need run becz fail
        await logutPage.clickMenuSol();
        await menutabsPage.clickChangePin();
        await menutabsPage.verifychangePintoDashBackbtn();
        await menutabsPage.changePin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO)
        await menutabsPage.changePin_SetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
        await menutabsPage.verifyConfirmPinToSetPin();
        await menutabsPage.changePin_ConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
        await dashboardPage.verifySolDash();
 })

});

describe('Verify Dashboard NEON', () => {




})