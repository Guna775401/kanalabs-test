const { sleep } = require("@wdio/utils");


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

    // Input Address Field

    get inputAddressField() {
        return $('~addressSol');
    }
    get openQRScanner() {
        return $('~openQRScanner');
    }
    get selectTokenDropdown() {
        return $('~openDropdown');
    }


    get firstDropdownToken() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[1]')
    }
    get secondDropdownToken() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[2]')
    }
    get thirdDropdownToken() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[3]')
    }
    get fourthDropdownToken() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[4]')
    }
    get fivthDropdownToken() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[5]')
    }

    // Dropdown token name
    get firstDropdownTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[1]/android.widget.TextView[1]')
    }
    get secondDropdownTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[2]/android.widget.TextView[1]')
    }
    get thirdDropdownTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[3]/android.widget.TextView[1]')
    }
    get fourthDropdownTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[4]/android.widget.TextView[1]')
    }
    get fivthDropdownTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[5]/android.widget.TextView[1]')
    }

    // Dropdown token balance
    get firstDropdownTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[1]/android.widget.TextView[2]')
    }
    get secondDropdownTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[2]/android.widget.TextView[2]')
    }
    get thirdDropdownTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[3]/android.widget.TextView[2]')
    }
    get fourthDropdownTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[4]/android.widget.TextView[2]')
    }
    get fivthDropdownTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="selectedTokenForSendTokenArr"])[5]/android.widget.TextView[2]')
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
    get inputAmount() {
        return $('~enterAmountSOL');
    }
    get maxBtn() {
        return $('~enterAmountMaxSol');
    }

    get selectTokenText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[3]');
    }
    get solAmountBalance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[4]');
    }
    get slideBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup');

    }
    get sendDonebutton() {
        return $('~goToHomeDone');
    }

    get sendFailedDonebutton() {
        return $('~goToHomeFromTokenSendFailed');
    }

    get successOrFail() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get result() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]')
    }


    get dashboardFirstToken() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[1]/android.view.ViewGroup');
    }
    get dashboardSecondToken() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[2]/android.view.ViewGroup');
    }
    get dashboardThirdToken() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[3]/android.view.ViewGroup');
    }
    get dashboardFourthToken() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[4]/android.view.ViewGroup');
    }
    get dashboardFivethToken() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[5]/android.view.ViewGroup');
    }

    get() {
    }

    get() {
    }
    get() {
    }


    async clickSendBtn() {
        await this.sendBtn.waitForDisplayed({ timeout: 60000 });
        await (await this.sendBtn).click();
    }


    async clickSendDoneBtn() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const successOrFailRes = await (this.successOrFail).getText();
        const typeFailText = await (this.result).getText();

        let sucess = await (this.sendDonebutton).isDisplayed();
        let fail = await (this.sendFailedDonebutton).isDisplayed();

        if (sucess == true) {
            console.log(successOrFailRes);
            await (await this.sendDonebutton).click();
        }
        else if (fail == true) {
            console.log(successOrFailRes);
            console.log(typeFailText);
            await (await this.sendFailedDonebutton).click();

        }
        else {
            console.log(successOrFailRes);
            console.log(typeFailText);
        }
    }

    async dashboardSelectFirst() {
        await this.dashboardFirstToken.waitForDisplayed({ timeout: 30000 });
        await (await this.dashboardFirstToken).click();
    }
    async dashboardSelectSecond() {
        await this.dashboardSecondToken.waitForDisplayed({ timeout: 30000 });
        await (await this.dashboardSecondToken).click();
    }
    async dashboardSelectThird() {
        await this.dashboardThirdToken.waitForDisplayed({ timeout: 30000 });
        await (await this.dashboardThirdToken).click();
    }
    async dashboardSelectFourth() {
        await this.dashboardFourthToken.waitForDisplayed({ timeout: 30000 });
        await (await this.dashboardFourthToken).click();
    }
    async dashboardSelectFiveth() {
        await this.dashboardFivethToken.waitForDisplayed({ timeout: 30000 });
        await (await this.dashboardFivethToken).click();
    }

    async selectUSDC() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        const usdc = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDC = await $(`android=${usdc}`)
        await uSDC.waitForDisplayed({ timeout: 30000 });
        await uSDC.click();
        await (await this.continueBtn).click();
    }

    async selectUSDT() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        const usdt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDT = await $(`android=${usdt}`)
        await uSDT.waitForDisplayed({ timeout: 30000 });
        await uSDT.click();
        await (await this.continueBtn).click();
    }
    async selectUSDH() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        const usdh = 'new UiSelector().text("USDH").className("android.widget.TextView")'
        const uSDH = await $(`android=${usdh}`)
        await uSDH.waitForDisplayed({ timeout: 30000 });
        await uSDH.click();
        await (await this.continueBtn).click();
    }
    async selectUST() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        const ust = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uST = await $(`android=${ust}`)
        await uST.waitForDisplayed({ timeout: 30000 });
        await uST.click();
        await (await this.continueBtn).click();
    }
    async selectsoSUSHI() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        const soSUSHI = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
        const soSUSHI1 = await $(`android=${soSUSHI}`)
        await soSUSHI1.waitForDisplayed({ timeout: 30000 });
        await soSUSHI1.click();
        await (await this.continueBtn).click();
    }






    async() {

    }

    async() {

    }
    async() {

    }
    async() {

    }
    async() {

    }




    async verifySendscreen() {
        const send = 'new UiSelector().text("Send").className("android.widget.TextView")'
        const sendscreen = await $(`android=${send}`)
        await sendscreen.waitForDisplayed({ timeout: 30000 });
        await expect(sendscreen).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.continueBtn).toBeDisplayed();
    }

    async verifySendUI() {
        const address = 'new UiSelector().text("To Address or Name of the wallet").className("android.widget.TextView")'
        const addressInput = await $(`android=${address}`)
        await addressInput.waitForDisplayed({ timeout: 30000 });
        await expect(addressInput).toBeDisplayed();
        const selectToken = 'new UiSelector().text("Select Token To Transfer").className("android.widget.TextView")'
        const selectTokenDropdown = await $(`android=${selectToken}`)
        await expect(selectTokenDropdown).toBeDisplayed();
        // const balance = 'new UiSelector().text("Balance").className("android.widget.TextView")'
        // const balancetxt = await $(`android=${balance}`)
        // await expect(balancetxt).toBeDisplayed();
    }

    async enterAddress(address) {
        await this.inputAddressField.waitForDisplayed({ timeout: 30000 });
        await (await this.inputAddressField).click();
        await (await this.inputAddressField).setValue(address);
        driver.hideKeyboard();
    }

    async enterAmount(amount) {
        await this.inputAmount.waitForDisplayed({ timeout: 30000 });
        await (await this.inputAmount).click();
        await (await this.inputAmount).setValue(amount);
        driver.hideKeyboard();
        await browser.pause(3000)
    }
    async clickContinueBtn() {
        await this.continueBtn.waitForDisplayed({ timeout: 30000 });
        await (await this.continueBtn).click();
    }

    async verifySendUI1() {
        const selected = 'new UiSelector().text("Selected Token: SOL").className("android.widget.TextView")'
        const selectedSol = await $(`android=${selected}`)
        await selectedSol.waitForDisplayed({ timeout: 30000 });
        await expect(selectedSol).toBeDisplayed();
        const balance1 = 'new UiSelector().text("Balance:").className("android.widget.TextView")'
        const balancetxt1 = await $(`android=${balance1}`)
        await expect(balancetxt1).toBeDisplayed();
    }

    async slidetoSend() {
        // await browser.pause(5000);
        await this.slideBtn.waitForDisplayed({ timeout: 15000 })
        const slideToSendTxt = 'new UiSelector().text("Slide to send").className("android.widget.TextView")'
        const slideToSendTxt1 = $(`android=${slideToSendTxt}`)
        await slideToSendTxt1.waitForDisplayed({ timeout: 15000 })
        await expect(slideToSendTxt1).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 142, y: 2164 },
            { action: 'moveTo', x: 938, y: 2160 },
            'release'
        ]);

    }
    async selectUNKNOWN() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();


        await (await this.selectTokenDropdown).click();
        const unKnownSel = 'new UiSelector().text("Unknown Solana Token").className("android.widget.TextView")'
        const unKnownSel1 = $(`android=${unKnownSel}`)
        await expect(unKnownSel1).toBeDisplayed();
        unKnownSel1.click
    }

    async selectSecondToken() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();
        await this.secondDropdownTokenName.waitForDisplayed({ timeout: 120000 })
        await (this.secondDropdownTokenName).click();
        await (this.secondDropdownTokenName).click();

        // const unKnownSel = 'new UiSelector().text("Unknown Solana Token").className("android.widget.TextView")'
        // const unKnownSel1 = $(`android=${unKnownSel}`)
        // await expect(unKnownSel1).toBeDisplayed();
        // unKnownSel1.click
    }

    async selectSecondToken() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();
        await this.secondDropdownTokenName.waitForDisplayed({ timeout: 120000 })
        await (this.secondDropdownTokenName).click();
        await (this.secondDropdownTokenName).click();
    }

    async selectThirdToken() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();
        await this.thirdDropdownTokenName.waitForDisplayed({ timeout: 120000 })
        await (this.thirdDropdownTokenName).click();
        await (this.thirdDropdownTokenName).click();
    }
    async selectFourthToken() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();
        await this.fourthDropdownTokenName.waitForDisplayed({ timeout: 120000 })
        await (this.fourthDropdownTokenName).click();
        await (this.fourthDropdownTokenName).click();
    }
    async selectFivthToken() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 120000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();
        await this.fivthDropdownTokenName.waitForDisplayed({ timeout: 120000 })
        await (this.fivthDropdownTokenName).click();
        await (this.fivthDropdownTokenName).click();
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



    //android.view.ViewGroup[@content-desc="enterAmountMaxSol"]/android.widget.TextView

    // need to write but no token , after sometime try

    async toAddressWallet(publicAddress) {
        await (await this.inputAddressField).click();
        await (await this.inputAddressField).setValue(publicAddress);
        driver.hideKeyboard();
        await (await this.continueBtn).click();
    }


    async verifySendDoneBtn() {
        await this.sendDonebutton.waitForDisplayed({ timeout: 10000 });
        await expect(this.sendDonebutton).toBeDisplayed();
    }









}



module.exports = new SendPage();