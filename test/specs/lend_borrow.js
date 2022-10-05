const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../pageobjects/sol.pages.js/lend_borrow.page")
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");

require('dotenv').config()

describe('DevNet Lend/Borrow ', () => {

    it('LBD1 :  Verify DevNet SOL Pool Name Eqaul Or Not POP Token Name', async () => {
        await dashboardPage.verifySolDash();
        await lend_borrowPage.clickLend_Borrow();
        await lend_borrowPage.verify_First_TokenNameSamePopUpTokenName();
    })

    it('LBD2 : Verify DevNet SRM Pool Name Eqaul Or Not POP Token Name', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verify_Second_TokenNameSamePopUpTokenName();
    })
    it('LBD3 : Verify DevNet Before Supply Try to Borrow Come popup ', async () => {
        await lend_borrowPage.clickBorrowTab();
        await lend_borrowPage.clickBorrowMaxBtn();
        await lend_borrowPage.verifyBeforeSupply_BorrowPoPUP();
    })

    it('LBD4 : Verify DevNet first Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verifyLend_BorrowScreenUI();
        await lend_borrowPage.firstPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBD5 : Verify DevNet Second Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.secondPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBD6 : Verify Third Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.thirdPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBD7 : Verify DevNet Fourth Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.fourthPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBD8 : Verify DevNet First Pool Enter Max Greater than value will come Insufficient balance text', async () => {
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

    it('LBD9 : Verify DevNet Second Pool Enter Max Greater than value will come Insufficient balance text', async () => {
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
    it('LBD10 : Verify Aggergator best price Display or Not ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verifyAggeratorBestPrice();
    })

    it('LBD11 : Verify Solend Market place can SOL Deposit or Not ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYDEVSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBD12 : Verify Solend Market place can mSOL Borrow or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectmSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterBorrowAmount(process.env.BORROWDEVMSOL);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBD13 : Verify Solend Market place can mSOL Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectmSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYDEVMSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBD14 : Verify Solend Market place can mSOL Repay or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectmSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterRepayAmount(process.env.REPAYDEVMSOL);
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBD15 : Verify Solend Market place can SOL Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWDEVMSOL);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })


})


describe (' Test 1', () => {

    it('LBM : Verify Solend Market place can SOL Deposit or Not ', async () => {
        // await lend_borrowPage.popupClose();
        await menutabsPage.changeToDevtoMain();
        await dashboardPage.verifySolDashMainNet();
        
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
        await lend_borrowPage.getSupplyAmount();
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM : Verify Solend Market place can USDC Borrow or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickBorrowTab();
        await lend_borrowPage.clickBorrowMaxBtn();
        await lend_borrowPage.getBorrowAmount();
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM : Verify Solend Market place can USDC Repay or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickRepayMaxBtn();
        await lend_borrowPage.getRepayAmount();
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBM : Verify Solend Market place can SOL Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickWithdrawMaxBtn();
        await lend_borrowPage.getWithdrawAmount();
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
})




describe('MainNet Lend/Borroww ', () => {

    it('LBM1 : Verify SOL Pool Name Eqaul Or Not POP Token Name', async () => {

        await menutabsPage.changeToDevtoMain();
        await dashboardPage.verifySolDashMainNet();
        await lend_borrowPage.clickLend_Borrow();
        await lend_borrowPage.verify_First_TokenNameSamePopUpTokenName();
    })

    it('LBM2 : Verify USDC Pool Name Eqaul Or Not POP Token Name', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verify_Second_TokenNameSamePopUpTokenName();
    })

    it('LBM3 : Verify Before Supply Try to Borrow Come popup ', async () => {
        await lend_borrowPage.clickBorrowTab();
        await lend_borrowPage.clickBorrowMaxBtn();
        await lend_borrowPage.verifyBeforeSupply_BorrowPoPUP();
    })

    it('LBM4 : Verify first Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.verifyLend_BorrowScreenUI();
        await lend_borrowPage.firstPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBM5 : Verify Second Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.secondPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBM6 : Verify Third Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.thirdPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBM7 : Verify Fourth Pool Lend/Borrow UI Text ', async () => {
        await lend_borrowPage.popupClose();
        await lend_borrowPage.fourthPoolSelect();
        await lend_borrowPage.verifyLend_BorrowPOPUPUIText();
    })

    it('LBM8 : Verify First Pool Enter Max Greater than value will come Insufficient balance text', async () => {
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

    it('LBM9 : Verify Second Pool Enter Max Greater than value will come Insufficient balance text', async () => {
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

    it('LBM10 : Verify Solend Market place can SOL Deposit or Not ', async () => {
        // await lend_borrowPage.popupClose();
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM11 : Verify Solend Market place can USDC Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYUSDC);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM12 : Verify Solend Market place can ORCA Deposit or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYORCA);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM13 : Verify Solend Market place can SRM Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSRM();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSRM);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM14 : Verify Solend Market place can SOL MAX and Minimum Amount Borrow or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterBorrowAmount(process.env.BORROWSOL);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount borrow later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectSOL();
        // await lend_borrowPage.selectSolend();
        // await lend_borrowPage.clickBorrowMaxBtn();
        // await lend_borrowPage.clickBorrowBtn();
        // await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM15 : Verify Solend Market place can SRM Borrow or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSRM();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterBorrowAmount(process.env.BORROWSRM);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount borrow later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectSRM();
        // await lend_borrowPage.selectSolend();
        // await lend_borrowPage.clickBorrowMaxBtn();
        // await lend_borrowPage.clickBorrowBtn();
        // await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM16 : Verify Solend Market place can SOL Repay or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterRepayAmount(process.env.REPAYSOL);
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Repay Max AMount
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickRepayMaxBtn();
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM17 : Verify Solend Market place can SRM Repay or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterRepayAmount(process.env.REPAYSRM);
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Repay Max AMount
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickRepayMaxBtn();
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM18 : Verify Solend Market place can USDC MAX and Minimum Amount Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWUSDC);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount withdraw later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectUSDC();
        // await lend_borrowPage.selectSolend();
        // await lend_borrowPage.clickWithdrawMaxBtn();
        // await lend_borrowPage.clickWithdrawBtn();
        // await lend_borrowPage.verifyDoneBtn();

    })

    it('LBM19 : Verify Solend Market place can ORCA Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWORCA);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount withdraw later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectORCA();
        // await lend_borrowPage.selectSolend();
        // await lend_borrowPage.clickWithdrawMaxBtn();
        // await lend_borrowPage.clickWithdrawBtn();
        // await lend_borrowPage.verifyDoneBtn();
    })


    // Withdraw

    it('LBM10 : Verify Solend Market place can SOL Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSOL);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM11 : Verify Solend Market place can USDC Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWUSDC);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM12 : Verify Solend Market place can ORCA Withdraw or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWORCA);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM13 : Verify Solend Market place can SRM Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSRM();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSRM);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })




})
//APRICOT Market Place

describe(' APRICOT Market Place MainNet Lend/Borroww ', () => {

    it('LBM20 : Verify Apricot Market place can SOL Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBM21 : Verify Apricot Market place can ORCA Deposit or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYORCA);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM22 : Verify Apricot Market place can USDC Borrow or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterBorrowAmount(process.env.BORROWUSDC);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM23 : Verify Apricot Market place can SRM Borrow or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterBorrowAmount(process.env.BORROWSRM);
        await lend_borrowPage.clickBorrowBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBM24 : Verify Apricot Market place can USDC Repay or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterRepayAmount(process.env.REPAYUSDC);
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBM25 : Verify Apricot Market place can SRM Repay or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterRepayAmount(process.env.REPAYSRM);
        await lend_borrowPage.clickRepayBtn();
        await lend_borrowPage.verifyDoneBtn();
    })
    it('LBM26 : Verify Apricot Market place can SOL Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSOL);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount withdraw later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectSOL();
        // await lend_borrowPage.selectApricot();
        // await lend_borrowPage.clickWithdrawMaxBtn();
        // await lend_borrowPage.clickWithdrawBtn();
        // await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM27 : Verify Apricot Market place can ORCA Withdraw or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectApricot();
        await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWORCA);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();

        // Need to run Max amount withdraw later

        // await lend_borrowPage.clickLend_BorrowBtn();
        // await lend_borrowPage.clickStartLendBtn();
        // await lend_borrowPage.selectORCA();
        // await lend_borrowPage.selectApricot();
        // await lend_borrowPage.clickWithdrawMaxBtn();
        // await lend_borrowPage.clickWithdrawBtn();
        // await lend_borrowPage.verifyDoneBtn();
    })

    it('LBD28 : Verify Aggergator best price Display or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.verifyAggeratorBestPrice();
    })
})


describe.only(' Solend & APRICOT Market Place MainNet Lend/Borroww ', () => {

    // deposit

    it('LBM10 : Verify Solend Market place can SOL Deposit or Not ', async () => {
        // await lend_borrowPage.popupClose();
        await menutabsPage.changeToDevtoMain();
        await dashboardPage.verifySolDashMainNet();
        
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM11 : Verify Solend Market place can USDC Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYUSDC);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM12 : Verify Solend Market place can ORCA Deposit or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYORCA);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM13 : Verify Solend Market place can SRM Deposit or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSRM();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSRM);
        await lend_borrowPage.clickSupplyBtn();
        await lend_borrowPage.verifyDoneBtn();
    })


    // Withdraw

    it('LBM10 : Verify Solend Market place can SOL Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSOL();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickWithdrawMaxBtn();
        //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSOL);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM11 : Verify Solend Market place can USDC Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectUSDC();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickWithdrawMaxBtn();
        //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWUSDC);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM12 : Verify Solend Market place can ORCA Withdraw or Not', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectORCA();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickWithdrawMaxBtn();
        //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWORCA);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })

    it('LBM13 : Verify Solend Market place can SRM Withdraw or Not ', async () => {
        await lend_borrowPage.clickLend_BorrowBtn();
        await lend_borrowPage.clickStartLendBtn();
        await lend_borrowPage.selectSRM();
        await lend_borrowPage.selectSolend();
        await lend_borrowPage.clickWithdrawMaxBtn();
        //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSRM);
        await lend_borrowPage.clickWithdrawBtn();
        await lend_borrowPage.verifyDoneBtn();
    })


// Apricot


it('LBM10 : Verify Apricot Market place can SOL Deposit or Not ', async () => {
    // await lend_borrowPage.popupClose();
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectSOL();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSOL);
    await lend_borrowPage.clickSupplyBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM11 : Verify Apricot Market place can USDC Deposit or Not ', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectUSDC();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYUSDC);
    await lend_borrowPage.clickSupplyBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM12 : Verify Apricot Market place can ORCA Deposit or Not', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectORCA();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYORCA);
    await lend_borrowPage.clickSupplyBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM13 : Verify Apricot Market place can SRM Deposit or Not ', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectSRM();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.enterSupplyAmount(process.env.SUPPLYSRM);
    await lend_borrowPage.clickSupplyBtn();
    await lend_borrowPage.verifyDoneBtn();
})


// Withdraw

it('LBM10 : Verify Apricot Market place can SOL Withdraw or Not ', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectSOL();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.clickWithdrawMaxBtn();
    // await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSOL);
    await lend_borrowPage.clickWithdrawBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM11 : Verify Apricot Market place can USDC Withdraw or Not ', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectUSDC();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.clickWithdrawMaxBtn();
    //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWUSDC);
    await lend_borrowPage.clickWithdrawBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM12 : Verify Apricot Market place can ORCA Withdraw or Not', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectORCA();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.clickWithdrawMaxBtn();
    //await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWORCA);
    await lend_borrowPage.clickWithdrawBtn();
    await lend_borrowPage.verifyDoneBtn();
})

it('LBM13 : Verify Apricot Market place can SRM Withdraw or Not ', async () => {
    await lend_borrowPage.clickLend_BorrowBtn();
    await lend_borrowPage.clickStartLendBtn();
    await lend_borrowPage.selectSRM();
    await lend_borrowPage.selectApricot();
    await lend_borrowPage.clickWithdrawMaxBtn();
   // await lend_borrowPage.enterWithdrawAmount(process.env.WITHDRAWSRM);
    await lend_borrowPage.clickWithdrawBtn();
    await lend_borrowPage.verifyDoneBtn();
})







})