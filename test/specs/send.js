const sendPage = require("../pageobjects/sol.pages.js/send.page");


describe('Solana Send DevNet', () => {

// Need to Login


it.only('SS2: Verify Valid public address Send tokens Sol Maxout amount and Valid amount', async () => {

   await sendPage.sendbuttonclick();
   await sendPage.toAddressWallet(process.env.SOLADDRESSVAILD);
    await sendPage.enteramountinput(process.env.SOLAMOUNTONE);
    await sendPage.slideToSend1();
   // await sendPage.verifySendDoneBtn();
    
});



})