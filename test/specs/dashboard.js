const loginPage = require("../pageobjects/login.page");
const neondashboardPage = require("../pageobjects/neon.pages.js/neondashboard.page");
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

describe('Verify Dashboard SOL', async () => {

    it('DS1: Verify Displayed or Not Tokens tab and history tab and Create/View wallet ', async () => {
        await dashboardPage.verifySolDash();
        await dashboardPage.verifyHistorytab();
        await dashboardPage.verifyTokentab();
        await dashboardPage.verifyCreate_Viewwallet();
        // Need create/view wallet verify function
    });

    it('DS2: Verify Displayed or Not Sol wallet dashboard and Menu option Neon wallet and Cliped copy and Scan QR and Holdling value and ', async () => {
        await dashboardPage.verifymenuoption();
        await neondashboardPage.verifyNeonWallet();
        await dashboardPage.verifyWalletName_SolLogo();
        await dashboardPage.verifyHoldingTextAndValue();
        await dashboardPage.verifyCopyclipboardAndQRcode();
    });

    it('DS3: Verify Buttons Displayed or Not Send and Swap and Stake and Turbo andLend/borrow', async () => {
        await sendPage.verifySendbtn();
        await swapPage.verifySwapbtn();
        await stakePage.verifyStakebtn();
        await lend_borrowPage.verifylend_borrowBtn();
    });

    it('DS4: Verify Menu Options Displayed or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase ', async () => {

        await dashboardPage.verifymenuoption();
        await dashboardPage.clickMenuoption();
        await menutabsPage.verifyNetwork();
        await menutabsPage.verifyChangePinTab();
        await menutabsPage.verifyReferralTab();
        //await menutabsPage.verifyLanguage();
        // await menutabsPage.verifyLightMode();
        await menutabsPage.verifyLogout();
        await menutabsPage.verifyShow_Seed_phrase();
        await menutabsPage.clickCancelbtn();
    });
    // DS3 same to DS5


    it('DS9: Verify Clickable and Displayed or Not DevNet and MainNet', async () => {
        await menutabsPage.verifyDisplay_DevNetAndMainNet();
        // await menutabsPage.clickCancelbtn();
    })

    it('DS10: Verify ChangePin funtionality working or not', async () => {

        // Need run becz fail
        await logutPage.clickMenuSol();
        await menutabsPage.clickChangePin();
        await menutabsPage.verifychangePintoDashBackbtn();
        await menutabsPage.changePin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO)
        await menutabsPage.changePin_SetPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE);
        await menutabsPage.verifyConfirmPinToSetPin();
        await menutabsPage.changePin_ConfirmPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE);
        await dashboardPage.verifySolDash();
        await logutPage.logout();
        await loginPage.verifyEyeicon();
        // Need to verify biometric and etc

        // and login
        await menutabsPage.changePin_ConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);



    })
    it('DS10: Create/View Wallet use can wallet create or not ', async () => {


    })


    it('DS: Verify Menu Wallet Logo and Name and Balance etc  ', async () => {
        await menutabsPage.clickMenuTab();
        await menutabsPage.VerifyMenu_Wallet();
    })

    it('DS : Verify Menu option in Create Wallet option while using New 4 Wallet Created displayed or not  ', async () => {
        await menutabsPage.clickCreateWalletINMenutab();
        await menutabsPage.enterWalletName(process.env.WALLETNAME1);
        await menutabsPage.verifyCreateFirstName(process.env.WALLETNAME1);

        await menutabsPage.clickCreateWalletINMenutab();
        await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await menutabsPage.enterWalletName(process.env.WALLETNAME2);
        await menutabsPage.verifyCreateSecondName(process.env.WALLETNAME2);

        await menutabsPage.clickCreateWalletINMenutab();
        await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await menutabsPage.enterWalletName(process.env.WALLETNAME3);
        await menutabsPage.verifyCreateThirdName(process.env.WALLETNAME3);

        await menutabsPage.clickCreateWalletINMenutab();
        await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await menutabsPage.enterWalletName(process.env.WALLETNAME4);
        await menutabsPage.verifyCreateFourthName(process.env.WALLETNAME4);
    })

    it('DS : Verify ', async () => {


    })

    it('DS: Verify Change pin after login new pin or not ', async () => {
        await menutabsPage.clickMenuTab();




    })

    it('DS: Verify ', async () => {

    })
    it('DS: Verify ', async () => {

    })



});

describe('Verify Dashboard NEON', async () => {

    it('DN1: Verify Displayed or Not Tokens tab and history tab and Create/View wallet ',)
    await neondashboardPage.clickNeonWalletDash();
    await neondashboardPage.verifyNeonDash();
    await neondashboardPage.verifyTokensNeon();
    await neondashboardPage.verifyHistoryNeon();
    await neondashboardPage.verifyCreate_ViewWallet();
});

it('DN2: Verify Displayed or Not Sol wallet dashboard and Menu option Neon wallet and Cliped copy and Scan QR and Holdling value and ', async () => {
    await neondashboardPage.verifySOLWallet();
    await neondashboardPage.verifyNeonWalletMenuOption();
    await neondashboardPage.verifyNeonWalletCopyClipboard();
    await neondashboardPage.verifyNeonWalletScanQR();
    await neondashboardPage.verifyNeonWalletHoldingValueTxt();
});

it('DN3: Verify Buttons Displayed or Not Send and Faucet ', async () => {
    await neondashboardPage.verifyNeonWalletSendBtnAndFaucetBtn();
});

it('DN4: Verify Menu Options Displayed or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase', async () => {
    await neondashboardPage.verifyMenuOptions();
});

it('DN5: Verify Buttons Clickable or Not Send and Faucet ', async () => {
    await neondashboardPage.verifyNeonWalletSendBtnAndFaucetBtn();
});
it('DN8: Verify Clickable or Not Tokens tab and history tab and Create/View wallet ', async () => {
    await neondashboardPage.verifyTokenAndHistoryAndCreate_ViewWallet();
});
it('DN10: Verify ChangePin funtionality working or not ', async () => {

    await neondashboardPage.clickNeonWalletMenuOption();
    await neondashboardPage.clickChangePin();
    await menutabsPage.changePin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO)
    await menutabsPage.changePin_SetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
    await menutabsPage.verifyConfirmPinToSetPin();
    await menutabsPage.changePin_ConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
    await neondashboardPage.verifyNeonDash();
});
