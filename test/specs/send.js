


xit('send amount', async () => {
    await SendPage.sendBtn.waitForDisplayed({ timeout: 120000 });
    await SendPage.sendbuttonclick();
    await SendPage.toAddressWallet('6qLQAekc6VUBqsCMuLoRHT6o3m4vELSureKo3rdGeMew ');
    await SendPage.enterAmount.waitForDisplayed({ timeout: 120000 });
    await SendPage.enteramountinput('1');
    // await RemindMeLaterPage.remindmelater();
});
