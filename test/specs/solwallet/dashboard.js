const loginPage = require("../../pageobjects/login.page");
const neondashboardPage = require("../../pageobjects/neon.pages.js/neondashboard.page");
const dashboardPage = require("../../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../../pageobjects/sol.pages.js/lend_borrow.page");
const logutPage = require("../../pageobjects/sol.pages.js/logut.page");
const menutabsPage = require("../../pageobjects/sol.pages.js/menutabs.page");
const sendPage = require("../../pageobjects/sol.pages.js/send.page");
const stakePage = require("../../pageobjects/sol.pages.js/stake.page");
const swapPage = require("../../pageobjects/sol.pages.js/swap.page");
const CreateWalletPage = require('../../pageobjects/sol.pages.js/createwallet.page');




describe('Verify Dashboard SOL', async () => {

    it('DS1: Verify Tokens tab and history tab and Create/View wallet Display or Not ', async () => {
        await dashboardPage.verifySolDash();
        await dashboardPage.verifyHistorytab();
        await dashboardPage.verifyTokentab();
        await dashboardPage.verifyCreate_Viewwallet();
    });

    it('DS2: Verify Sol wallet dashboard and Menu option Neon wallet and Cliped copy and Scan QR and Holdling value  Displayed or Not  ', async () => {
        await dashboardPage.verifymenuoption();
        await neondashboardPage.verifyNeonWallet();
        await dashboardPage.verifyWalletName_SolLogo();
        await dashboardPage.verifyHoldingTextAndValue();
        await dashboardPage.verifyCopyclipboardAndQRcode();
    });

    it('DS3: Verify Buttons Displayed or Not Send and Swap and Stake and Turbo and Lend/borrow', async () => {
        await sendPage.verifySendbtn();
        await swapPage.verifySwapbtn();
        await stakePage.verifyStakebtn();
        await lend_borrowPage.verifylend_borrowBtn();
    });

    it('DS4: Verify Menu Options Displayed or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase ', async () => {

        await dashboardPage.clickMenuoption();
        await menutabsPage.verifyNetwork();
        await menutabsPage.verifyChangePinTab();
        //await menutabsPage.verifyReferralTab();
        await menutabsPage.verifyShow_Seed_phrase();
        await menutabsPage.verifyLogoutTab();
        await logutPage.clickLogoutCancelBtn();
    })

    it('DS5: Verify Menu option text displayed or Not ', async () => {
        await menutabsPage.verifyDisplay_DevNetAndMainNet();
        await menutabsPage.verifyLogout();
        await menutabsPage.clickChangePin();
        await menutabsPage.clickChangePinBackBtn();
    });

    it('DS6: Verify Menu Wallet Logo and Name and Balance etc  ', async () => {
        await menutabsPage.clickMenuTab();
        await menutabsPage.VerifyMenu_Wallet();
        await menutabsPage.clickMenuCancelBtn();
    });

    it('DS7: Verify Change pin after login new pin or not ', async () => {
        await menutabsPage.clickMenuTab();
        await menutabsPage.clickChangePin();
        await CreateWalletPage.enterIncorrectPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINZERO, process.env.PINZERO);
    });

    it('DS8: Verify ChangePin, Mismatch New Pin and Confirm Pin and Newly changed pin working or not', async () => {

        await logutPage.clickMenuSol();
        await menutabsPage.clickChangePin();
        await CreateWalletPage.changePin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO)
        await CreateWalletPage.enterSetPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE);
        await CreateWalletPage.enterIncorrectConfirmPin(process.env.PINZERO, process.env.PINONE, process.env.PINZERO, process.env.PINONE, process.env.PINZERO, process.env.PINONE);
        await CreateWalletPage.enterConfirmPin1(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE);
        await dashboardPage.verifySolDash();
        await logutPage.logout();
        await loginPage.verifyLoginScreen();
        await CreateWalletPage.enterPin(process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE, process.env.PINONE);
        await dashboardPage.verifySolDash();
    });


    it('DS9: Create/View Wallet use can wallet create or not ', async () => {
        await dashboardPage.clickCreate_View_Wallet();
        await dashboardPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.TEST);
        await dashboardPage.verifyWalletName(process.env.TEST);

        await dashboardPage.clickCreate_View_Wallet();
        await dashboardPage.clickCreateWalletBtn();
        await CreateWalletPage.enterWalletName(process.env.TEST1);
        await dashboardPage.verifyWalletName(process.env.TEST1);

    });


    it('DS10 : Verify Menu option in Create Wallet option while using New 4 Wallet Created displayed or not  ', async () => {
        await menutabsPage.clickMenuTab();
        await menutabsPage.clickCreateWalletINMenutab();
        await CreateWalletPage.enterWalletName(process.env.WALLETNAME1);
        await menutabsPage.verifyCreateFirstName(process.env.WALLETNAME1);

        await menutabsPage.clickMenuTab();
        await menutabsPage.clickCreateWalletINMenutab();
       // await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await CreateWalletPage.enterWalletName(process.env.WALLETNAME2);
        await menutabsPage.verifyCreateSecondName(process.env.WALLETNAME2);

        await menutabsPage.clickMenuTab();
        await menutabsPage.clickCreateWalletINMenutab();
       // await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await CreateWalletPage.enterWalletName(process.env.WALLETNAME3);
        await menutabsPage.verifyCreateThirdName(process.env.WALLETNAME3);

        await menutabsPage.clickMenuTab();
        await menutabsPage.clickCreateWalletINMenutab();
       // await menutabsPage.clickmenuINMultipleWallet_ViewOption();
        await CreateWalletPage.enterWalletName(process.env.WALLETNAME4);
        await menutabsPage.verifyCreateFourthName(process.env.WALLETNAME4);
    });

    it('DS11: If i have four solana wallet then i change Devnet to Mainnet need to change three wallet are Mainnet ', async () => {
        await dashboardPage.verifySolDash();
        await menutabsPage.changeToDevtoMain();
        await dashboardPage.verifySolDashMainNet();
        await dashboardPage.clickFirst_Wallet();
        await dashboardPage.verifySolDashMainNet();
        await dashboardPage.clickSecond_Wallet();
        await dashboardPage.verifySolDashMainNet();
        await dashboardPage.clickThird_Wallet();
        await dashboardPage.verifySolDashMainNet();
        await dashboardPage.clickFourth_Wallet();
        await dashboardPage.verifySolDashMainNet();


        await menutabsPage.changeToMaintoDev();
        await dashboardPage.verifySolDash();
        await dashboardPage.clickFirst_Wallet();
        await dashboardPage.verifySolDash();
        await dashboardPage.clickSecond_Wallet();
        await dashboardPage.verifySolDash();
        await dashboardPage.clickThird_Wallet();
        await dashboardPage.verifySolDash();
        await dashboardPage.clickFourth_Wallet();
        await dashboardPage.verifySolDash();

    });

    // it('DS : Verify ', async () => { });

    // it('DS: Verify ', async () => { });

});

// describe('Verify Dashboard NEON', async () => {

//     it('DN1: Verify Displayed or Not Tokens tab and history tab and Create/View wallet ',)
//     await neondashboardPage.clickNeonWalletDash();
//     await neondashboardPage.verifyNeonDash();
//     await neondashboardPage.verifyTokensNeon();
//     await neondashboardPage.verifyHistoryNeon();
//     await neondashboardPage.verifyCreate_ViewWallet();
// });

// it('DN2: Verify Displayed or Not Sol wallet dashboard and Menu option Neon wallet and Cliped copy and Scan QR and Holdling value and ', async () => {
//     await neondashboardPage.verifySOLWallet();
//     await neondashboardPage.verifyNeonWalletMenuOption();
//     await neondashboardPage.verifyNeonWalletCopyClipboard();
//     await neondashboardPage.verifyNeonWalletScanQR();
//     await neondashboardPage.verifyNeonWalletHoldingValueTxt();
// });

// it('DN3: Verify Buttons Displayed or Not Send and Faucet ', async () => {
//     await neondashboardPage.verifyNeonWalletSendBtnAndFaucetBtn();
// });

// it('DN4: Verify Menu Options Displayed or Not Network and Change Pin and Language and Lightmode and Logout Show seed phrase', async () => {
//     await neondashboardPage.verifyMenuOptions();
// });

// it('DN5: Verify Buttons Clickable or Not Send and Faucet ', async () => {
//     await neondashboardPage.verifyNeonWalletSendBtnAndFaucetBtn();
// });
// it('DN8: Verify Clickable or Not Tokens tab and history tab and Create/View wallet ', async () => {
//     await neondashboardPage.verifyTokenAndHistoryAndCreate_ViewWallet();
// });
// it('DN10: Verify ChangePin funtionality working or not ', async () => {

//     await neondashboardPage.clickNeonWalletMenuOption();
//     await neondashboardPage.clickChangePin();
//     await menutabsPage.changePin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO)
//     await menutabsPage.changePin_SetPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
//     await menutabsPage.verifyConfirmPinToSetPin();
//     await menutabsPage.changePin_ConfirmPin(process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINZERO, process.env.PINONE);
//     await neondashboardPage.verifyNeonDash();
// });
