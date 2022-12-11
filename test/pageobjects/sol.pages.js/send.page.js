const swapPage = require("./swap.page");


var fs = require('fs');
const menutabsPage = require("./menutabs.page");
const dashboardPage = require("./dashboard.page");
const createwalletPage = require("./createwallet.page");

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

    get walletNameSendScreen() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[1]');
    }

    // Balance Amount 

    get balanceAmount() {
        return $('//android.view.ViewGroup[@content-desc="contentViewDismiss"]/android.widget.TextView[5]');
    }

    get nextScreenBalance() {
        return $('//android.view.ViewGroup[@content-desc="SOLEnterTokenAmount"]/android.view.ViewGroup[2]/android.widget.TextView[4]');
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
        return $('//android.view.ViewGroup[@content-desc="SOLEnterTokenAmount"]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup');

    }
    get sendDonebutton() {
        return $('~goToHomeDone');
    }

    get sendFailedDonebutton() {
        return $('~goToHomeFromTokenSendFailed');
    }

    get successOrFail() {
        return $('//android.view.ViewGroup[@content-desc="SOLNFTSendSuccess"]/android.widget.TextView[1]')
    }
    get result() {
        return $('//android.view.ViewGroup[@content-desc="SOLTokenSendFailed"]/android.widget.TextView[2]')
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

    get balanceAmountNextScreen() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[4]')
    }


    // Dashboard First token balance

    get dashboardFirstTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[1]/android.view.ViewGroup/android.widget.TextView[2]');
    }
    get dashboardSecondTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[2]/android.view.ViewGroup/android.widget.TextView[2]');
    }
    get dashboardThirdTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[3]/android.view.ViewGroup/android.widget.TextView[2]');
    }
    get dashboardFourthTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[4]/android.view.ViewGroup/android.widget.TextView[2]');
    }
    get dashboarTokenBalance() {
        return $('(//android.view.ViewGroup[@content-desc="sendSolToken"])[5]/android.view.ViewGroup/android.widget.TextView[2]');
    }

    get() {
        return $('');
    }
    get() {
        return $('');
    }

    get() {
    }
    get() {
    }

    get create_Viewwallet() {
        return $('~CREATEORVIEWWALLET');
    }

    async checkBalanceThreeScreens(address) {

        var firstbalance = await this.dashboardFirstTokenBalance.getText();

        await this.sendBtn.click();
        var secondbalance = await this.balanceAmount.getText();
        await this.addressInput.setValue(address);
        await this.continueBtn.click();

        var thirdbalance = await this.nextScreenBalance.getText();

        secondbalance = secondbalance.replace(/[^Balance: ]/g, '');
        thirdbalance = thirdbalance.replace(/[^Balance: ]/g, '');

        (firstbalance == secondbalance == thirdbalance)

    }


    async clickSendBtn() {
        await this.sendBtn.waitForDisplayed({ timeout: 60000 });
        await (await this.sendBtn).click();
    }


    async clickSendDoneBtn() {

        await swapPage.doneText.waitForDisplayed({ timeout: 30000 });

        let sucess = await (this.sendDonebutton).isDisplayed();
        let fail = await (this.sendFailedDonebutton).isDisplayed();

        if (sucess) {

            const successOrFailRes = await (this.successOrFail).getText();

            // (successOrFailRes == "SOL Token Sent!")

            fs.appendFile('./reports/send.txt', "Result : " + successOrFailRes + '\n', function (err) {
                console.log(err)
            })

            await (await this.sendDonebutton).click();
        }
        else if (fail) {

            const successOrFailRes = await (this.successOrFail).getText();
            const typeFailText = await (this.result).getText();

            fs.appendFile('./reports/send.txt', "Result : " + successOrFailRes + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/send.txt', "Fail Reason : " + typeFailText + '\n', function (err) {
                console.log(err)
            })
            await (await this.sendFailedDonebutton).click();

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



    // async selectUSDC() {
    //     await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
    //     await expect(this.selectTokenDropdown).toBeDisplayed();
    //     await (await this.selectTokenDropdown).click();

    //     // const usdc = 'new UiSelector().text("USDC").className("android.widget.TextView")'
    //     // const uSDC = await $(`android=${usdc}`)
    //     await swapPage.uSDCText.waitForDisplayed({ timeout: 30000 });
    //     await swapPage.uSDCText.click();
    //     await (await this.continueBtn).click();
    // }

    // async selectUSDT() {
    //     await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
    //     await expect(this.selectTokenDropdown).toBeDisplayed();
    //     await (await this.selectTokenDropdown).click();

    //     // const usdt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
    //     // const uSDT = await $(`android=${usdt}`)
    //     await swapPage.uSDTText.waitForDisplayed({ timeout: 30000 });
    //     await swapPage.uSDTText.click();
    //     await (await this.continueBtn).click();
    // }
    // async selectUSDH() {
    //     await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
    //     await expect(this.selectTokenDropdown).toBeDisplayed();
    //     await (await this.selectTokenDropdown).click();

    //     const usdh = 'new UiSelector().text("USDH").className("android.widget.TextView")'
    //     const uSDH = await $(`android=${usdh}`)
    //     await uSDH.waitForDisplayed({ timeout: 30000 });
    //     await uSDH.click();
    //     await (await this.continueBtn).click();
    // }
    // async selectUST() {
    //     await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
    //     await expect(this.selectTokenDropdown).toBeDisplayed();
    //     await (await this.selectTokenDropdown).click();

    //     const ust = 'new UiSelector().text("UST").className("android.widget.TextView")'
    //     const uST = await $(`android=${ust}`)
    //     await uST.waitForDisplayed({ timeout: 30000 });
    //     await uST.click();
    //     await (await this.continueBtn).click();
    // }
    // async selectsoSUSHI() {
    //     await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
    //     await expect(this.selectTokenDropdown).toBeDisplayed();
    //     await (await this.selectTokenDropdown).click();

    //     const soSUSHI = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
    //     const soSUSHI1 = await $(`android=${soSUSHI}`)
    //     await soSUSHI1.waitForDisplayed({ timeout: 30000 });
    //     await soSUSHI1.click();
    //     await (await this.continueBtn).click();
    // }

    async selectsoSUSHI() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const soSUSHI = await (await swapPage.soSUSHIText).isDisplayed();

            if (soSUSHI) {
                await (await swapPage.soSUSHIText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectSOL() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const sol1 = await (await swapPage.sOLText).isDisplayed();

            if (sol1) {
                await (await swapPage.sOLText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectUSDC() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const usdc = await (await swapPage.uSDCText).isDisplayed();

            if (usdc) {
                await (await swapPage.uSDCText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectUST() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const ust = await (swapPage.uSTText).isDisplayed();

            if (ust) {
                await (await swapPage.uSTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectUSDT() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const usdt = await (swapPage.uSDTText).isDisplayed();

            if (usdt) {
                await (await swapPage.uSDTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }
    async selectSRM() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const srm = await (swapPage.sRMText).isDisplayed();

            if (srm) {
                await (await swapPage.sRMText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectORCA() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const orca = await (swapPage.oRCAText).isDisplayed();

            if (orca) {
                await (await swapPage.oRCAText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectUSDH() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const usdh = await (swapPage.uSDHText).isDisplayed();

            if (usdh) {
                await (await swapPage.uSDHText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }
    async selectRAY() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const ray = await (swapPage.rAYText).isDisplayed();

            if (ray) {
                await (await swapPage.rAYText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectAPT() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const apt = await (swapPage.aPTText).isDisplayed();

            if (apt) {
                await (await swapPage.aPTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectFTT() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const ftt = await (swapPage.fTTText).isDisplayed();

            if (ftt) {
                await (await swapPage.fTTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectFUM() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const fum = await (swapPage.fUMText).isDisplayed();

            if (fum) {
                await (await swapPage.fUMText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDUST() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const dust = await (swapPage.dUSTText).isDisplayed();

            if (dust) {
                await (await swapPage.dUSTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectFORGE() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const forge = await (swapPage.fORGEText).isDisplayed();

            if (forge) {
                await (await swapPage.fORGEText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectUSH() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const ush = await (swapPage.uSHText).isDisplayed();

            if (ush) {
                await (await swapPage.uSHText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectCCG() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const ccg = await (swapPage.cCGText).isDisplayed();

            if (ccg) {
                await (await swapPage.cCGText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectPAI() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const pai = await (swapPage.pAIText).isDisplayed();

            if (pai) {
                await (await swapPage.pAIText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectDFL() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const dfl = await (swapPage.dFLText).isDisplayed();

            if (dfl) {
                await (await swapPage.dFLText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectGST() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const gst = await (swapPage.gSTText).isDisplayed();

            if (gst) {
                await (await swapPage.gSTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectMNDE() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const mnde = await (swapPage.mNDEText).isDisplayed();

            if (mnde) {
                await (await swapPage.mNDEText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectsoTOMO() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const soTOMO = await (swapPage.soTOMOText).isDisplayed();

            if (soTOMO) {
                await (await swapPage.soTOMOText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectUXD() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const uxd = await (swapPage.uXDText).isDisplayed();

            if (uxd) {
                await (await swapPage.uXDText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectGMT() {

        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await expect(swapPage.sOLText).toBeDisplayed();
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const gmt = await (swapPage.gMTText).isDisplayed();

            if (gmt) {
                await (await swapPage.gMTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }




    async verifyBalanceEqualToMax_Amount() {
        await this.balanceAmountNextScreen.waitForDisplayed({ timeout: 30000 });
        var balance = await (await this.balanceAmountNextScreen).getText();
        var balance1 = balance.replace(/[^0-9 ^.]/g, '');
        await (await this.maxBtn).click();
        const maxAmount = await (await this.inputAmount).getText();
        (balance1 == maxAmount)
    }

   get selectTokenSol() {
        const seltoken = 'new UiSelector().text("Selected Token: SOL").className("android.widget.TextView")'
        const seltoken1 =  $(`android=${seltoken}`)
        return seltoken1;

    }

    async verify_Selected_Token_Sol() {
        await (this.selectTokenSol).waitForDisplayed({ timeout: 15000 });
        await expect(this.selectTokenSol).toBeDisplayed();
    }

    async verify_Selected_Token_mSol() {

    }

    async selectDashSOL() {

        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const sol = await (await swapPage.sOLText).isDisplayed();

            if (sol) {
                await (await swapPage.sOLText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashUSDC() {
        await (await this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {
            const sol = await (await swapPage.uSDCText).isDisplayed();

            if (sol) {
                await (await swapPage.uSDCText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async selectDashUST() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const ust = await (swapPage.uSTText).isDisplayed();

            if (ust) {
                await (await swapPage.uSTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectDashUSDT() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const usdt = await (swapPage.uSDTText).isDisplayed();

            if (usdt) {
                await (await swapPage.uSDTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }
    async selectDashSRM() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const srm = await (swapPage.sRMText).isDisplayed();

            if (srm) {
                await (await swapPage.sRMText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectDashORCA() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const orca = await (swapPage.oRCAText).isDisplayed();

            if (orca) {
                await (await swapPage.oRCAText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }

    async selectDashUSDH() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const usdh = await (swapPage.uSDHText).isDisplayed();

            if (usdh) {
                await (await swapPage.uSDHText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);

            }
        }
    }
    async selectDashRAY() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const ray = await (swapPage.rAYText).isDisplayed();

            if (ray) {
                await (await swapPage.rAYText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashAPT() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const apt = await (swapPage.aPTText).isDisplayed();

            if (apt) {
                await (await swapPage.aPTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashFTT() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const ftt = await (swapPage.fTTText).isDisplayed();

            if (ftt) {
                await (await swapPage.fTTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }


    async selectDashFUM() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const fum = await (swapPage.fUMText).isDisplayed();

            if (fum) {
                await (await swapPage.fUMText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashDUST() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const dust = await (swapPage.dUSTText).isDisplayed();

            if (dust) {
                await (await swapPage.dUSTText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashFORGE() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const forge = await (swapPage.fORGEText).isDisplayed();

            if (forge) {
                await (await swapPage.fORGEText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashUSH() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const ush = await (swapPage.uSHText).isDisplayed();

            if (ush) {
                await (await swapPage.uSHText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }
    async selectDashCCG() {
        await this.create_Viewwallet.waitForDisplayed({ timeout: 10000 });

        for (let i = 0; i <= 10; i++) {

            const ccg = await (swapPage.cCGText).isDisplayed();

            if (ccg) {
                await (await swapPage.cCGText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }




    async() {

    }
    async() {

    }
    async() {

    }

    get sendText() {
        const send = 'new UiSelector().text("Send").className("android.widget.TextView")'
        const sendscreen = $(`android=${send}`)
        return sendscreen;
    }



    async verify_WalletName_Dashboard_And_Sendscreen() {

        var dashName = await dashboardPage.walletName.getText();
        await this.sendBtn.click();
        var sendName = await this.walletNameSendScreen.getText();
        (dashName == sendName)
    }

    get toAddressText() {
        const address = 'new UiSelector().text("To Address of the wallet").className("android.widget.TextView")'
        const addressInput = $(`android=${address}`)
        return addressInput;
    }
    get selectTokenDropdownText() {
        const selectToken = 'new UiSelector().text("Select Token To Transfer").className("android.widget.TextView")'
        const selectTokenDropdown = $(`android=${selectToken}`)
        return selectTokenDropdown;
    }

    get balanceText() {
        const balance = 'new UiSelector().text("Balance").className("android.widget.TextView")'
        const balancetxt = $(`android=${balance}`)
        return balancetxt;
    }

    get invalidToastText() {
        const balance = 'new UiSelector().text("Please Enter Valid To Address").className("android.widget.TextView")'
        const balancetxt = $(`android=${balance}`)
        return balancetxt;
    }

    get() {

    }
    get() {

    }
    get() {

    }
    get() {

    }





    async verifySendUI() {
        await this.sendText.waitForDisplayed({ timeout: 15000 });
        await expect(this.sendText).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.continueBtn).toBeDisplayed();
        await expect(this.toAddressText).toBeDisplayed();
        await expect(this.selectTokenDropdownText).toBeDisplayed();
    }

    async enterAddress(address) {
        await this.inputAddressField.waitForDisplayed({ timeout: 15000 });
        await (await this.inputAddressField).click();
        await (await this.inputAddressField).clearValue();
        await (await this.inputAddressField).setValue(address);
        await driver.hideKeyboard();
    }
    async clearAddress() {
        await this.inputAddressField.waitForDisplayed({ timeout: 30000 });
        await (await this.inputAddressField).clearValue();
        await driver.hideKeyboard();
    }

    async enterAmount(amount) {
        await this.inputAmount.waitForDisplayed({ timeout: 10000 });
        await (await this.inputAmount).click();
        await (await this.inputAmount).setValue(amount);
        await driver.hideKeyboard();
        //await browser.pause(3000)
    }
    async clickContinueBtn() {
        await this.continueBtn.waitForDisplayed({ timeout: 10000 });
        await (await this.continueBtn).click();
    }

    async invaildPublicAddress_PopupHandle() {

        await createwalletPage.popupId.waitForDisplayed({ timeout: 5000 });
        await expect(createwalletPage.popupId).toHaveText('Please Enter Valid To Address')
        driver.touchAction([
            { action: 'longPress', x: 525, y: 322 },
            { action: 'moveTo', x: 517, y: 184 },
            'release'
        ]);

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


    async select_mSOL_TokenDropdown() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const mSol = await (await swapPage.mSolText).isDisplayed();

            if (mSol) {
                await (await swapPage.mSolText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async select_SRM_TokenDropdown() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const srm = await (await swapPage.sRMText).isDisplayed();

            if (srm) {
                await (await swapPage.sRMText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
    }

    async select_ORCA_TokenDropdown() {
        await this.selectTokenDropdown.waitForDisplayed({ timeout: 10000 })
        await expect(this.selectTokenDropdown).toBeDisplayed();
        await (await this.selectTokenDropdown).click();

        for (let i = 0; i <= 10; i++) {

            const mSol = await (await swapPage.mSolText).isDisplayed();

            if (mSol) {
                await (await swapPage.mSolText).click();
                return;
            }
            else {
                driver.touchAction([
                    { action: 'longPress', x: 517, y: 1823 },
                    { action: 'moveTo', x: 517, y: 1026 },
                    'release'
                ]);
            }
        }
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

    async clickAmount_Screen_BackBtn() {
        await this.backbtnamountscreen.waitForDisplayed({ timeout: 10000 });
        await this.backbtnamountscreen.click();
    }
    async clickPublicAddress_Screen_BackBtn() {
        await this.backBtn.waitForDisplayed({ timeout: 10000 });
        await this.backBtn.click();
    }





}


module.exports = new SendPage();