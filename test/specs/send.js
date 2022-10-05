const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const importwalletPage = require("../pageobjects/sol.pages.js/importwallet.page");
const { async } = require("../pageobjects/sol.pages.js/send.page");
const sendPage = require("../pageobjects/sol.pages.js/send.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");
require('dotenv').config()


describe('Solana Send DevNet', () => {
   it(' ', async () => { })


   it(' ', async () => { })
   it(' ', async () => { })
   it(' ', async () => { })
   it(' ', async () => { })
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

      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS)
      await sendPage.clickContinueBtn();
      await sendPage.verifyBalanceEqualToMax_Amount();

   })
   it('SSD3 : Verify Valid public address Send tokens Sol Minimum(0.001) amount and Valid amount ', async () => {
      await sendPage.enterAmount(process.env.DECIMALAMOUNT);
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();


   })
   it('SSD4 : Verify Valid public address Send tokens mSOL Maxout amount and Valid amount ', async () => {


   })
   it('SSD5 : Verify Valid public address Send tokens mSol Minimum(0.001) amount and Valid amount', async () => {

   })

   it('SSD6 : Verify 1 Sol send Devnet', async () => {
      await dashboardPage.devNetworkChange();
      await dashboardPage.verifySolDash();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS)
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.DEVNETAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
      // await sendPage.();

   })
   // Need to mSOL select option
   xit('SSD3 : Send 1 mSOL Devnet ', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      // await sendPage.selectSecondToken(); mSOL select option
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.DEVNETAMOUNTUNKNOWTOKENDECIMAL);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })


   it(' Dashboard tokens balane & select token to transfer balance & Next screen send balance Equal or not ', async () => {






   })

})


describe('Solana Send DevNet in Dashboard ', async () => {

   it('DST1 : Verify Invalid Public address couldnt allow popup in  dashboard screen send ', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.dashboardFirstToken();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.INVAILDPUBLICADDRESS);
      await sendPage.clickContinueBtn();
   })



   it('DST2 : Solana Send DevNet in Dashboard First Token', async () => {

      // await dashboardPage.verifySolDash();
      // await sendPage.dashboardFirstToken();
      // await sendPage.verifySendscreen();
      // await sendPage.verifySendUI();
      await sendPage.clearAddress();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('DST3 :  Solana Send MainNet in Dashboard Second Token', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.dashboardSecondToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it('DST4 : Solana Send Devnet in Dashboard Third Token ', async () => {
      await dashboardPage.verifySolDash();
      await sendPage.dashboardThirdToken();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
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
      await sendPage.clickSendBtn();
      await sendPage.toAddressWallet(process.env.SOLADDRESSVAILD);
      await sendPage.enteramountinput(process.env.SOLAMOUNTONE);
      await sendPage.slideToSend1();
      // await sendPage.verifySendDoneBtn();

   });

})



describe('Solana Send Main Net ', async () => {

   it('SSM1 : Solana MainNet Send Sol ', async () => {

      await dashboardPage.verifySolDash();
      await dashboardPage.mainNetworkChange();
      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      //await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDSOL);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })

   it('SSM2 : Solana MainNet Send USDC ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUSDC();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM3 :  Solana MainNet Send USDH ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUSDH();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM4 : Solana MainNet Send UST ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUST();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM5 :  Solana MainNet Send USDT', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUSDT();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM6 : Solana MainNet Send SoSUSHI ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectsoSUSHI();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })


   it('SSM7 :  Solana MainNet Send APT ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectAPT();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM8 :  Solana MainNet Send CCG', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectCCG();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM9 :  Solana MainNet Send DFL', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectDFL();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM10 :  Solana MainNet Send DUST', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectDUST();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM11 :  Solana MainNet Send FTT', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectFTT();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM12 :  Solana MainNet Send FORGE', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectFORGE();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM13 :  Solana MainNet Send FUM ', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectFUM();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM14 :  Solana MainNet Send GMT', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectGMT();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM15 :  Solana MainNet Send GST', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectGST();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM16 :  Solana MainNet Send ORCA', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectORCA();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM17 :  Solana MainNet Send MNDE', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectMNDE();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM18 :  Solana MainNet Send PAI', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectPAI();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM19 :  Solana MainNet Send RAY', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectRAY();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM20 :  Solana MainNet Send UXD', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUXD();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM21 :  Solana MainNet Send soTOMO', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectsoTOMO();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSM22 :  Solana MainNet Send USH', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectUSH();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSM23 :  Solana MainNet Send SRM', async () => {

      await dashboardPage.verifySolDashMainNet();
      await sendPage.clickSendBtn();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.selectSRM();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

})

describe('Solana Send Main Net in Dashboard ', async () => {


   it('SSMD1 : Solana Send MainNet in Dashboard UST Token', async () => {

      await dashboardPage.mainNetworkChange();
      await dashboardPage.verifySolDashMainNet();
      await sendPage.selectDashUST();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD2 : Solana Send MainNet in Dashboard SOL Token', async () => {

      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashSOL();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDSOL);
      //await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })
   it('SSMD3 : Solana Send MainNet in Dashboard USDC Token', async () => {

      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashUSDC();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD4 : Solana Send MainNet in Dashboard ORCA Token', async () => {

      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashORCA();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD5 : Solana Send MainNet in Dashboard SRM Token', async () => {

      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashSRM();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD6 : Solana Send MainNet in Dashboard APT Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashAPT();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })


   it('SSMD7 : Solana Send MainNet in Dashboard USDT Token', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashUSDT();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD8 : Solana Send MainNet in Dashboard USDH Token', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashUSDH();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSENDAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();

   })
   it('SSMD9 : Solana Send MainNet in Dashboard RAY Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashRAY();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD10: Solana Send MainNet in Dashboard FTT Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashFTT();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD11: Solana Send MainNet in Dashboard FUM Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashFUM();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD12: Solana Send MainNet in Dashboard FORGE Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashFORGE();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD13: Solana Send MainNet in Dashboard USH Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashUSH();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD14: Solana Send MainNet in Dashboard CCG Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashCCG();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })

   it('SSMD15: Solana Send MainNet in Dashboard DUST Token ', async () => {
      await dashboardPage.verifySolDashMainNet();
      await swapPage.refresh();
      await sendPage.selectDashDUST();
      await sendPage.verifySendscreen();
      await sendPage.verifySendUI();
      await sendPage.enterAddress(process.env.HURRYPUBLICADDERSS);
      await sendPage.clickContinueBtn();
      await sendPage.enterAmount(process.env.MAINNETSOLAMOUNT);
      // await sendPage.verifySendUI1();
      await sendPage.slidetoSend();
      await sendPage.clickSendDoneBtn();
   })





})