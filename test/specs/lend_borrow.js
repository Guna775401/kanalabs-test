const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../pageobjects/sol.pages.js/lend_borrow.page")
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");

require('dotenv').config()

// describe('DevNet Lend/Borrow ', () => {

//     it('  ', async () => {

//         await dashboardPage.verifySolDash(); 
//         await lend_borrowPage.selectSOL();

//     })
// })




describe.only('MainNet Lend/Borroww ', () => {

    xit(' firt test', async () => {

        await menutabsPage.changeToDevtoMain();
        // await dashboardPage.verifySolDashMainNet(); 
        await lend_borrowPage.clickLend_Borrow();
        // await lend_borrowPage.verifyNAText();
        await lend_borrowPage.selectSOL();
    })
    

    it(' Verify first Pool Lend/Borrow UI Text ', async () => {

        await swapPage.refresh();
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.verifyLend_BorrowUIText();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.verifyLend_BorrowScreenUI();
        await lend_borrowPage.firstPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it(' Verify Second Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.secondPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it(' Verify Third Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.thirdPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it(' Verify Fourth Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.fourthPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })
    it(' Verify Pool Name Eqaul Or Not POP Token Name ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verifyClickTokenNameSamePopUpTokenName();

        
    })

    it('Verify First Pool Enter Max Greater than value will come Insufficient balance text', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.firstPoolSelect();
        await lend_borrowPage.clickSupplyTab();
        await lend_borrowPage.clickSupplyMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceSupply(process.env.ONE);
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickBorrowTab();
        await lend_borrowPage.clickBorrowMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceBorrow(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickWithdrawTab();
        await lend_borrowPage.clickWithdrawMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceWithdraw(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickRepayTab();
        await lend_borrowPage.clickRepayMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceRepay(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);
    })

    it('Verify Second Pool Enter Max Greater than value will come Insufficient balance text', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.secondPoolSelect();
        await lend_borrowPage.clickSupplyTab();
        await lend_borrowPage.clickSupplyMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceSupply(process.env.ONE);
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickBorrowTab();
        await lend_borrowPage.clickBorrowMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceBorrow(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickWithdrawTab();
        await lend_borrowPage.clickWithdrawMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceWithdraw(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);

        await lend_borrowPage.clickRepayTab();
        await lend_borrowPage.clickRepayMaxBtn();
        await lend_borrowPage.enterGreaterThanMaxBalanceRepay(process.env.ONE)
        await lend_borrowPage.verifyInsufficientBalanceText(process.env.INSUFFICIENT);
    })

    it('Verify can SOL Deposit or Not ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();

    })

    it('Verify can USDC Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYUSDC);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    // it(' ', async () => { })

    // it(' ', async () => { })

    // it(' ', async () => { })
    // it(' ', async () => { })
    // it(' ', async () => { })
    // it(' ', async () => { })
    // it(' ', async () => { })
    // it(' ', async () => { })

    // it(' Verify SOL Deposit USDC Borrow After USDC Repay After SOL Withdraw ', async () => { })

})