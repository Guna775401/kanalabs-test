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






describe('MainNet Lend/Borroww ', () => {

    it.only(' firt test', async () => {

        await menutabsPage.changeToDevtoMain();
          await dashboardPage.verifySolDashMainNet(); 
        await lend_borrowPage.clickLend_Borrow();
        // await lend_borrowPage.verifyNAText();
        await lend_borrowPage.selectSOL();

    })
})