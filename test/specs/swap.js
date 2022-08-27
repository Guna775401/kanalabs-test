const { async } = require("../pageobjects/sol.pages.js/dashboard.page");
const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");

const CreateWalletPage = require('../pageobjects/sol.pages.js/createwallet.page');
const dashboardPage = require('../pageobjects/sol.pages.js/dashboard.page');
const ImportWalletPage = require('../pageobjects/sol.pages.js/importwallet.page');
require('dotenv').config()

describe('Solana Swap USDT to USDC & USDC to USDT ', () => {

  it.only('SS1: USDT To USDC First Market Swap', async () => {
    await swapPage.clickSwapBtn();
    await swapPage.verifyDevToMainNetWarning();
    await swapPage.changeToDevtoMain();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDC(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS2: USDT To USDC Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDC(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS3: USDT To USDC Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDC(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS4: USDT To USDC Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDC(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  // USDC to USDT

  it('SS5: USDC To USDT First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoUSDT(process.env.USDC, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS6: USDC To USDT Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoUSDT(process.env.USDC, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS7: USDC To USDT Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoUSDT(process.env.USDC, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS8 : USDC To USDT Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoUSDT(process.env.USDC, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });
})

describe('Solana Swap SOL to USDC & USDC to SOL', () => {

  it.only('SS9 : SOL To USDC First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS10 : SOL To USDC Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS11 : SOL To USDC Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS12 : SOL To USDC Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  // USDC tO SOL

  it('SS13 : USDC to SOL First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoSOL(process.env.USDC, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS14 : USDC to SOL Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoSOL(process.env.USDC, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS15 : USDC to SOL Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoSOL(process.env.USDC, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS16 : USDC to SOL Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDCtoSOL(process.env.USDC, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPUSDC);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

})

describe('Solana Swap SOL to USDT & USDT to SOL ', () => {

  it.only('SS17 : SOL to USDT First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtoUSDT(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS18 : SOL to USDT Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtoUSDT(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS19 : SOL to USDT Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtoUSDT(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS20 : SOL to USDT Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtoUSDT(process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPSOL);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  // USDT to SOL

  it('SS21 : USDT to SOL First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoSOL(process.env.USDT, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS22 : USDT to SOL Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoSOL(process.env.USDT, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS23 : USDT to SOL Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoSOL(process.env.USDT, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS24 : USDT to SOL Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoSOL(process.env.USDT, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

})

describe('Solana Swap SOL to SRM & SRM to SOL', () => {

  it.only('SS25 : SOL to SRM First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtoSRM(process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS26 : SOL to SRM Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
   await swapPage.sOLtoSRM(process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS27 : SOL to SRM Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
   await swapPage.sOLtoSRM(process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  it('SS28 : SOL to SRM Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
   await swapPage.sOLtoSRM(process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySOLSwapped();
  });

  // SRM to SOL

  it('SS29 : SRM to SOL First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoSOL(process.env.SRM, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS30 : SRM to SOL Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoSOL(process.env.SRM, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS31 : SRM to SOL Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoSOL(process.env.SRM, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS32 : SRM to SOL Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoSOL(process.env.SRM, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

})

describe('Solana Swap USDH to USDT & USDT to USDH', () => {

  it('SS33 : USDH to USDT First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    // Need to comment two line
    // await swapPage.verifyDevToMainNetWarning();
    //await swapPage.changeToDevtoMain();

    await swapPage.verifySwapScreen();
    await swapPage.uSDHtoUSDT(process.env.USDH, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDHSwapped();
  });

  it('SS34 : USDH to USDT Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDHtoUSDT(process.env.USDH, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDHSwapped();
  });

  it('SS35 : USDH to USDT Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDHtoUSDT(process.env.USDH, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDHSwapped();
  });

  it('SS36 : USDH to USDT Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDHtoUSDT(process.env.USDH, process.env.USDT);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDHSwapped();
  });

  // USDT to USDH

  it('SS37 : USDT to USDH First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDH(process.env.USDT, process.env.USDH);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS38 : USDT to USDH Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDH(process.env.USDT, process.env.USDH);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS39 : USDT to USDH Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDH(process.env.USDT, process.env.USDH);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

  it('SS40 : USDT to USDH Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSDTtoUSDH(process.env.USDT, process.env.USDH);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSDTSwapped();
  });

})

describe('Solana Swap SOL to mSOL & mSOL to SOL', () => {

  it('SS41 :SOL to mSOL First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtomSOL(process.env.MSOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  it('SS42 : SOL to mSOL Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtomSOL(process.env.MSOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
  });

  it('SS43 : SOL to mSOL Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtomSOL(process.env.MSOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  it('SS44 : SOL to mSOL Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sOLtomSOL(process.env.MSOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  // mSOL to SOL

  it('SS45 : mSOL to SOL First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.mSOLtoSOL(process.env.MSOL, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  it('SS46 : mSOL to SOL Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.mSOLtoSOL(process.env.MSOL, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  it('SS47 : mSOL to SOL Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.mSOLtoSOL(process.env.MSOL, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });

  it('SS48 : mSOL to SOL Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.mSOLtoSOL(process.env.MSOL, process.env.SOL);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn(); 
  });
})


describe('Solana Swap SRM to UST && UST to SRM', () => {

  // SRM to UST

  it('SS49 : SRM to UST First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoUST(process.env.SRM, process.env.UST);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS50 : SRM to UST Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoUST(process.env.SRM, process.env.UST);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS51 : SRM to UST Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoUST(process.env.SRM, process.env.UST);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  it('SS52 : SRM to UST Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.sRMtoUST(process.env.SRM, process.env.UST);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifySRMSwapped();
  });

  // UST to SRM

  it('SS53 : UST to SRM First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSTtoSRM(process.env.UST, process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //await swapPage.verifyUSTSwapped();
  });

  it('SS54 : UST to SRM Second Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSTtoSRM(process.env.UST, process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.secondMarketPlace()
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    // await swapPage.verifyUSTSwapped();
  });

  it('SS55 : UST to SRM Third Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSTtoSRM(process.env.UST, process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.thirdMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //   await swapPage.verifyUSTSwapped();
  });

  it('SS56 : UST to SRM Fourth Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.uSTtoSRM(process.env.UST, process.env.SRM);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.fourthMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
   // await swapPage.verifyUSTSwapped();
  });

})

// soSHUSHI to ORCA & ORCA to soSHUSHI

describe('Solana Swap soSHUSHI to ORCA & ORCA to soSHUSHI', () => {


  it('SS57 : soSHUSHI to ORCA First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.soSUSHItoORCA(process.env.SOSUSHI, process.env.ORCA);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
   // await swapPage.verifysoSUSHISwapped();
  });

  // it('SS58 : soSHUSHI to ORCA Second Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.soSUSHItoORCA(process.env.SOSUSHI, process.env.ORCA);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.secondMarketPlace()
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifysoSUSHISwapped();
  // });

  // it('SS59 : soSHUSHI to ORCA Third Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.soSUSHItoORCA(process.env.SOSUSHI, process.env.ORCA);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.thirdMarketPlace();
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifysoSUSHISwapped();
  // });

  // it('SS60 : soSHUSHI to ORCA Fourth Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.soSUSHItoORCA(process.env.SOSUSHI, process.env.ORCA);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.fourthMarketPlace();
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifysoSUSHISwapped();
  // });


  // ORCA to soSHUSHI

  it('SS61 : ORCA to soSHUSHI First Market Swap', async () => {
    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    await swapPage.verifySwapScreen();
    await swapPage.oRCAtosoSUSHI(process.env.ORCA, process.env.SOSUSHI);
    await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
    await swapPage.verifySwapScreenUI();
    await swapPage.firstMarketPlace();
    await swapPage.slidetoSwap();
    await swapPage.verifyResult_And_DoneBtn();
    //   await swapPage.verifyORCASwapped();
  });

  // it('SS62 : ORCA to soSHUSHI Second Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.oRCAtosoSUSHI(process.env.ORCA, process.env.SOSUSHI);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.secondMarketPlace()
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifyORCASwapped();
  // });

  // it('SS63 : ORCA to soSHUSHI Third Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.oRCAtosoSUSHI(process.env.ORCA, process.env.SOSUSHI);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.thirdMarketPlace();
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifyORCASwapped();
  // });

  // it('SS64 : ORCA to soSHUSHI Fourth Market Swap', async () => {
  //   await swapPage.refresh();
  //   await swapPage.clickSwapBtn();
  //   await swapPage.verifySwapScreen();
  //   await swapPage.oRCAtosoSUSHI(process.env.ORCA, process.env.SOSUSHI);
  //   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
  //   await swapPage.verifySwapScreenUI();
  //   await swapPage.fourthMarketPlace();
  //   await swapPage.slidetoSwap();
  //   await swapPage.verifyORCASwapped();
  // });

})




describe('Verify Solana Swap Max Amount equal to Balance Amount ', () => {

  it('SS: Verify Sol max amount eqaul to balance', async () => {

    await swapPage.refresh();
    await swapPage.clickSwapBtn();
    // Need to delete two line
    // await swapPage.verifyDevToMainNetWarning();
    // await swapPage.changeToDevtoMain();
    // SOL
    await swapPage.verifySwapScreen();
    // await swapPage.getMaxAmount();
    await swapPage.selectUSDC(process.env.USDC);
    await swapPage.getMaxAmount();
    await swapPage.selectUSDT(process.env.USDT);
    await swapPage.getMaxAmount();
    await swapPage.selectUST(process.env.UST);
    await swapPage.getMaxAmount();
    await swapPage.selectmSOL(process.env.MSOL);
    await swapPage.getMaxAmount();
    await swapPage.selectSRM(process.env.SRM);
    await swapPage.getMaxAmount();
  })
})


// describe('Solana Swap integration test case', () => {


// })



// describe('Solana Swap USDT to SOL', () => {
// })

// describe('Solana Swap USDT to SOL', () => {
// })