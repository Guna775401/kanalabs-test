const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const importwalletPage = require("../pageobjects/sol.pages.js/importwallet.page");
const { async } = require("../pageobjects/sol.pages.js/send.page");
const sendPage = require("../pageobjects/sol.pages.js/send.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");
require('dotenv').config()


describe('Solana Send DevNet', () => {
   it(' ', async () => { })

   // Need to Login

   it('SSD1 : Verify Invalid Public address couldnt allow popup ', async () => {
      await dashboardPage.devNetworkChange();
      await dashboardPage.verifySolDash();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.INVAILDPUBLICADDRESS)
      await sendPage.clickContinueBtn();
      // Need popup handle

   })
   it('SSD2 : Verify Valid public address Send tokens Sol Maxout amount equal to Balane ', async () => {


   })
   it('SSD3 : Verify Valid public address Send tokens Sol Minimum(0.001) amount and Valid amount ', async () => {

   })
   it('SSD4 : Verify Valid public address Send tokens mSOL Maxout amount and Valid amount ', async () => {

   })
   it('SSD5 : Verify Valid public address Send tokens Sol Minimum(0.001) amount and Valid amount', async () => {

   })

   it('SSD6 : Verify Sol send Devnet', async () => {
      await dashboardPage.devNetworkChange();
      await dashboardPage.verifySolDash();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS)
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.DEVNETAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
      // await sendPage.();

   })
   // Need to mSOL select option
   xit('SSD3 : Send mSOL Devnet ', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      // await sendPage.selectSecondToken(); mSOL select option
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.DEVNETAMOUNTUNKNOWTOKENDECIMAL);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })


   it(' ', async () => { })

})


describe('Solana Send DevNet in Dashboard ', async () => {

   it('DST1 : Verify Invalid Public address couldnt allow popup in  dashboard screen send ', async () => { })



   it('DST2 : Solana Send DevNet in Dashboard First Token', async () => {

      await dashboardPage.verifySolDash();
      await sendPage.dashboardFirstToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('DST3 :  Solana Send MainNet in Dashboard Second Token', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.dashboardSecondToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it('DST4 : Solana Send Devnet in Dashboard Third Token ', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.dashboardThirdToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })

   it('DST5 : Verify (Minimum) decimal amount Sol token can send or not (0.0001)', async () => {

   })

   it('DST6 : Verify (Minimum) decimal amount Sol token can send or not (0.0001) ', async () => {

   })




})


describe('Solana Send  Scenarios ', async () => {
   it('SS2: Verify Valid public address Send tokens Sol Maxout amount and Valid amount', async () => {
      await sendPage.sendbuttonclick();
      await sendPage.toAddressWallet(process.env.SOLADDRESSVAILD);
      await sendPage.enteramountinput(process.env.SOLAMOUNTONE);
      await sendPage.slideToSend1();
      // await sendPage.verifySendDoneBtn();

   });

})

describe('Solana Send Main Net ', async () => {

   it('Solana MainNet Sol Send ', async () => {

      await dashboardPage.mainNetworkChange();
      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })

   it('Solana MainNet USDC Send ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.selectUSDC();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it(' Solana MainNet USDH Send', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.selectUSDH();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('Solana MainNet UST Send ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.selectUST();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it(' Solana MainNet USDT Send', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.selectUSDT();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('Solana MainNet SoSUSHI Send ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.selectsoSUSHI();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

})

describe('Solana Send Main Net in Dashboard ', async () => {

   it(' Solana Send MainNet in Dashboard First Token', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.dashboardFirstToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it(' Solana Send MainNet in Dashboard Second Token', async () => {
      await dashboardPage.verifySolDashMainNet();
      await sendPage.dashboardSecondToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it('Solana Send MainNet in Dashboard Third Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await sendPage.dashboardThirdToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it(' Solana Send MainNet in Dashboard Fourth Token', async () => {
      await dashboardPage.verifySolDashMainNet();
      await sendPage.dashboardFourthToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it(' Solana Send MainNet in Dashboard Fiveth Token', async () => {
      await dashboardPage.verifySolDashMainNet();
      await sendPage.dashboardFivethToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.PUBLICADDRESS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })



})