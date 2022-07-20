
class SendPage {

    get sendBtn() {
        return $('~sendSol');
    }
    get backBtn() {
        return $('~goBackFromSendToken');
    }
    get walletLogo() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[1]');
    }
    get holdingValue() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[2]');
    }
    get toAddressOrScanText() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[3]');
    }

    get selectTokensToTransferText() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[4]');
    }

    get balanceAmount() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[5]');
    }
    get inputAddressField() {
        return $('~addressSol');
    }
    get openQRScanner() {
        return $('~openQRScanner');
    }
    get selectTokenDropdown() {
        return $('~openDropdown');
    }
    // need dropdown select
    // get searchOptionSelectedToken() {
    //     return $('');
    // }
    get continueBtn() {
        return $('~enterTokenAmount');
    }
    get backbtnamountscreen() {
        return $('~enterTokenAccountBackIcon');
    }
    get enterAmount() {
        return $('~enterAmountSOL');
    }
    get enterAmountMax() {
        return $('~enterAmountMaxSol');
    }

    get selectTokenText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[3]');
    }
    get solAmountBalance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[4]');
    }
    get slidetoSend() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
    }
    get sendDonebutton() {
        return $('~goToHomeDone');
    }

    async verifySendscreen() {
        const send = 'new UiSelector().text("Send").className("android.widget.TextView")'
        const sendscreen = await (await $(`android=${send}`))
        await expect(sendscreen).toBeDisplayed();
    }
    // Display

    async verifySendbtn() {
        await expect(this.sendBtn).toBeDisplayed();
    }

    // Clickable function

    async verifySendbtnClickable() {
        await expect(this.sendBtn).toBeClickable();
    }

    // Click function 

    async sendbuttonclick() {
        await this.sendBtn.waitForDisplayed({ timeout: 120000 });
        await (await this.sendBtn).click();
    }
   
//android.view.ViewGroup[@content-desc="enterAmountMaxSol"]/android.widget.TextView

    // need to write but no token , after sometime try

    async toAddressWallet(publicAddress) {
        await (await this.inputAddressField).click();
        await (await this.inputAddressField).setValue(publicAddress);
        driver.hideKeyboard();
        await (await this.continueBtn).click();
    }
    async enteramountinput(amount) {
        await (await this.enterAmount).setValue(amount);
        driver.hideKeyboard();
        }

      async verifySendDoneBtn(){
        await this.sendDonebutton.waitForDisplayed({ timeout: 10000 });
        await expect(this.sendDonebutton).toBeDisplayed();
      }  
    
  async slideToSend(){
    const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup')
    //const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
        await browser.touchAction({
            action: 'tap',
            x: 700,
        element: swipe
        })
    }

    async slideToSend1(){
        //const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup')
    const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
    await swipe.touchAction([
        'press',
        { action: 'moveTo', element: swipe },
        'release'
    ])
    }
    async slideToSend2(){
    //    const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup')
        const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
        await swipe.touchAction([
            'press',
            { action: 'moveTo', x: 700},
            'release'
        ])

    }

    async slideToSend3(){
        //const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup');
        const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup')
        //const swipe = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup')
        await swipe.touchAction({
            action: 'tap', x: 700,
        })

    }


}



module.exports = new SendPage();