const menutabsPage = require("../pageobjects/sol.pages.js/menutabs.page");
const swapPage = require("../pageobjects/sol.pages.js/swap.page");



describe('Solana Swap USDT to USDC', () => {


    // Need to Login
    it.only('SS2: USDT To USDC Swap', async () => {
  
       await swapPage.clickSwapBtn();
       await swapPage.verifyDevToMainNetWarning();
       await swapPage.changeToDevtoMain();
       await swapPage.verifySwapScreen();
       await swapPage.uSDTtoUSDC(process.env.USDT,process.env.USDC);
       await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
       await swapPage.verifySwapScreenUI();
       await swapPage.firstMarketPlace();
       await swapPage.slidetoSwap();
   });
    
   it('SS3: USDT To USDC Swap', async () => {
    
      await swapPage.clickSwapBtn();
      await swapPage.verifyDevToMainNetWarning();
      await swapPage.changeToDevtoMain();
      await swapPage.verifySwapScreen();
      await swapPage.uSDTtoUSDC(process.env.USDT,process.env.USDC);
      await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
      await swapPage.verifySwapScreenUI();
      await swapPage.secondMarketPlace()
      await swapPage.slidetoSwap();
  });

  it('SS5: USDT To USDC Swap', async () => {
    
   await swapPage.clickSwapBtn();
   await swapPage.verifyDevToMainNetWarning();
   await swapPage.changeToDevtoMain();
   await swapPage.verifySwapScreen();
   await swapPage.uSDTtoUSDC(process.env.USDT,process.env.USDC);
   await swapPage.enterAmtInput(process.env.SWAPAMOUNT);
   await swapPage.verifySwapScreenUI();
   await swapPage.fivthMarketPlace();
   await swapPage.slidetoSwap();
});

})  
  describe('Solana Swap USDC to USDT', () => {


    })