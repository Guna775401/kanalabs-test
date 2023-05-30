const neondashboardPage = require("../../pageobjects/neon.pages.js/neondashboard.page");
const dashboardPage = require("../../pageobjects/sol.pages.js/dashboard.page");
const importwalletPage = require("../../pageobjects/sol.pages.js/importwallet.page");
const { async } = require("../../pageobjects/sol.pages.js/send.page");
const sendPage = require("../../pageobjects/sol.pages.js/send.page");
const swapPage = require("../../pageobjects/sol.pages.js/swap.page");
require('dotenv').config()





describe('NEON Send Devnet  ', async () => {

it('SSD1 : Verify Invalid Public address couldnt allow popup ', async () => {
   await neondashboardPage.verifyNeonDash();
   await sendPage.clickSendBtn();
   await sendPage.verifySendscreen();
   await sendPage.verifySendUI();
   await sendPage.enterAddress(process.env.INVAILDPUBLICADDRESS)
   await sendPage.clickContinueBtn();
   // Need popup handle

})
it('SSD2 : Verify Valid public address Send tokens Sol Maxout amount equal to Balane ', async () => {

   await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS)
   await sendPage.clickContinueBtn();
   await sendPage.verifyBalanceEqualToMax_Amount();

})
it('SSD3 : Verify Valid public address Send tokens Sol Minimum(0.001) amount and Valid amount ', async () => {
   await sendPage.enterAmount(process.env.DECIMALAMOUNT);
   await sendPage.slidetoSend();
   await sendPage.clickSendDoneBtn();


})
})