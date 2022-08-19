const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const lend_borrowPage = require("../pageobjects/sol.pages.js/lend_borrow.page")
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");


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


})