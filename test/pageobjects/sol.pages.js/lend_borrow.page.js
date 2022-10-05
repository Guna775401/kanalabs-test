
var fs = require('fs');

class Lend_BorrowPage {

    get lend_borrowBtn() {
        return $('~lendSol');
    }
    get startLendBtn() {
        return $('~startIntro');
    }
    get backBtn() {
        return $('~gobackLend');
    }


    // Tabs 
    get supplyTab() {
        return $('~Supply');
    }
    get borrowTab() {
        return $('~Borrow');
    }
    get withdrawTab() {
        return $('~Withdraw');
    }
    get repayTab() {
        return $('~Repay');
    }

    // EnterAmount
    get supplyEnterAmount() {
        return $('~supplyAmount');
    }
    get borrowEnterAmount() {
        return $('~supplyAmountUSDFlag');
    }
    get withdrawEnterAmount() {
        return $('~sudFlagSupplyAmount');
    }
    get repayEnterAmount() {
        return $('~sudFlagSupplyAmount');
    }

    // Max Buttons

    get supplyMaxBtn() {
        return $('~findSupplyMax');
    }
    get borrowMaxBtn() {
        return $('~findBorrowMax');
    }
    get withdrawMaxBtn() {
        return $('~findWithdrawMax');
    }
    get repayMaxBtn() {
        return $('~findRepayMax');
    }

    // Token Exchange button

    get supplyexchageBtn() {
        return $('~exchangeButton');
    }
    get borrowexchageBtn() {
        return $('~tab1ModalViewClose');
    }
    get withdrawexchageBtn() {
        return $('~exchangeUSDSol');
    }
    get repayexchageBtn() {
        return $('~setUSDFlagSOL');
    }

    // Button Bottom

    get supplybtn() {
        return $('~supplyLend');
    }
    get borrowbtn() {
        return $('~borrowLend');
    }
    get withdrawbtn() {
        return $('~withdrawLend');
    }
    get repaybtn() {
        return $('~repaySOL');
    }


    get firstPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[1]');
    }
    get secondPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[2]');
    }
    get thirdPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[3]');
    }
    get fourthPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[4]');
    }
    get fivthPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[5]');
    }
    get sixthPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[6]');
    }
    get seventhPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[7]');
    }
    get eightPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[8]');
    }
    get ninethPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[9]');
    }
    get tenthPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[10]');
    }
    get leventhPool() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[11]');
    }
    // Token Name

    get firstTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[1]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    }
    get secondTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[2]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get thirdTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[3]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get fourthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[4]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get fivthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[5]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get sixthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[6]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get seventhTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[7]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get eigthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[8]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get ninethTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[9]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get tenthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[10]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    } get leventhTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[11]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    }

    get twelthTokenName() {
        return $('(//android.view.ViewGroup[@content-desc="tableIndexSol"])[1]/android.view.ViewGroup[1]/android.widget.TextView[1]');
    }



    get inPopupTokenName() {
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]');
    }




    // Aggreator Percentage Amount Elements

    get firstBestPriceAmount() {
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]');
    }

    get secondBestPriceAmount() {
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]');
    }

    get successDoneBtn() {
        return $('~goToHomeDone');
    }
    get failDoneBtn() {
        return $('~goToHomeFromTokenSendFailed');
    }

    // SOL Deposit successful! (Result like Sol if try USDC ,  USDC Deposit successful!)
    // Like SOL Withdraw successful!
    get result() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]');
    }

    // Please check your dashboard for changes 
    get checkYourDashboardChanges() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]');
    }

    get insufficientBalanceText() {
        //android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
    }

    async verifyDoneBtn() {
        const doneTxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt1 = $(`android=${doneTxt}`)
        await doneTxt1.waitForDisplayed({ timeout: 120000 })
        await expect(doneTxt1).toBeDisplayed();

        var res = await (await this.result).getText();
        res = ('Result = ' + res);

        var res1 = await (await this.checkYourDashboardChanges).getText();
        res1 = ('Result = ' + res1);

        const sucess = await (this.successDoneBtn).isDisplayed();
        // const fail = await expect(this.failDoneBtn).toBeDisplayed();

        if (sucess) {
            // await this.successDoneBtn.waitForDisplayed({ timeout: 60000 })
            // fs.appendFile('./reports/lend_borrow.txt', res + '\n', function (err) {
            //     console.log(err)
            // })
            // fs.appendFile('./reports/lend_borrow.txt', res1 + '\n', function (err) {
            //     console.log(err)
            // })
            await (await this.successDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/lend_borrow.txt', res + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/lend_borrow.txt', res1 + '\n', function (err) {
                console.log(err)
            })
            await (await this.failDoneBtn).click();
        }
    }

    get() {
        return $('~');
    }
    get() {
        return $('~');
    }
    get() {
        return $('~');
    }

    // UI Element

    get lend_borrowText() {
        const lend_borrowtext = 'new UiSelector().text("Lend / Borrow").className("android.widget.TextView")'
        const lend_borrowtxt = $(`android=${lend_borrowtext}`)
        return lend_borrowtxt;
    }
    get lend_borrowAggeratorText() {
        const lend_borrowAggeratortext = 'new UiSelector().text("Aggregated Lend/Borrow.").className("android.widget.TextView")'
        const lend_borrowAggeratortxt = $(`android=${lend_borrowAggeratortext}`)
        return lend_borrowAggeratortxt;
    }
    get lend_borrowDesriptionText() {
        const lend_borrowDesriptiontext = 'new UiSelector().text("Now lend/borrow at the best rates from across the entire Solana ecosystem").className("android.widget.TextView")'
        const lend_borrowDesriptiontxt = $(`android=${lend_borrowDesriptiontext}`)
        return lend_borrowDesriptiontxt;
    }
    get() {
        return;
    }
    get() {
        return;
    }
    get() {
        return;
    }
    get() {
        return;
    }
    get() {
        return;
    } get() {
        return;
    } get() {
        return;
    } get() {
        return;
    }



    async verifyLend_BorrowUIText() {
        await this.startLendBtn.waitForDisplayed({ timeout: 10000 })
        await this.lend_borrowText.waitForDisplayed({ timeout: 10000 })
        await expect(this.lend_borrowText).toBeDisplayed();
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.startLendBtn).toBeDisplayed();
        await expect(this.lend_borrowAggeratorText).toBeDisplayed();
        await expect(this.lend_borrowDesriptionText).toBeDisplayed();
    }


    async verifyLend_BorrowScreenUI() {
        const lend_borrowtext = 'new UiSelector().text("Lend / Borrow").className("android.widget.TextView")'
        const lend_borrowtxt = $(`android=${lend_borrowtext}`)
        await lend_borrowtxt.waitForDisplayed({ timeout: 30000 })
        await expect(lend_borrowtxt).toBeDisplayed();

        const lend_borrowPooloverviewtext = 'new UiSelector().text("Pool overview").className("android.widget.TextView")'
        const lend_borrowPooloverviewtxt = $(`android=${lend_borrowPooloverviewtext}`)
        await lend_borrowPooloverviewtxt.waitForDisplayed({ timeout: 10000 })
        await expect(lend_borrowPooloverviewtxt).toBeDisplayed();

        const lend_borrowAllAssetstext = 'new UiSelector().text("All assets").className("android.widget.TextView")'
        const lend_borrowAllAssetstxt = $(`android=${lend_borrowAllAssetstext}`)
        await expect(lend_borrowAllAssetstxt).toBeDisplayed();

        const lend_borrowAssettext = 'new UiSelector().text("Asset").className("android.widget.TextView")'
        const lend_borrowAssettxt = $(`android=${lend_borrowAssettext}`)
        await expect(lend_borrowAssettxt).toBeDisplayed();

        const lend_borrowTotaSupplytext = 'new UiSelector().text("Total Supply").className("android.widget.TextView")'
        const lend_borrowTotaSupplytxt = $(`android=${lend_borrowTotaSupplytext}`)
        await expect(lend_borrowTotaSupplytxt).toBeDisplayed();

        const lend_borrowTotaBorrowtext = 'new UiSelector().text("Total Borrow").className("android.widget.TextView")'
        const lend_borrowTotaBorrowtxt = $(`android=${lend_borrowTotaBorrowtext}`)
        await expect(lend_borrowTotaBorrowtxt).toBeDisplayed();

    }
    async verifyLend_BorrowPOPUPUIText() {

        const supplytab = 'new UiSelector().text("Supply").className("android.widget.TextView")'
        const supplytab1 = $(`android=${supplytab}`)
        await supplytab1.waitForDisplayed({ timeout: 10000 })
        await expect(this.supplybtn).toBeDisplayed();
        await expect(supplytab1).toBeDisplayed();

        const maxtext = 'new UiSelector().text("Max").className("android.widget.TextView")'
        const maxtext1 = $(`android=${maxtext}`)

        const reserveDepositLimittext = 'new UiSelector().text("Reserve deposit limit").className("android.widget.TextView")'
        const reserveDepositLimittext1 = $(`android=${reserveDepositLimittext}`)

        const userBorrowLimittext = 'new UiSelector().text("User borrow limit").className("android.widget.TextView")'
        const userBorrowLimittext1 = $(`android=${userBorrowLimittext}`)

        const utilizationtxt = 'new UiSelector().text("Utilization").className("android.widget.TextView")'
        const utilizationtxt1 = $(`android=${utilizationtxt}`)

        const lTVtxt = 'new UiSelector().text("LTV").className("android.widget.TextView")'
        const lTVtxt1 = $(`android=${lTVtxt}`)

        const bestPricetext = 'new UiSelector().text("Best price").className("android.widget.TextView")'
        const bestPricetext1 = $(`android=${bestPricetext}`)

        await expect(maxtext1).toBeDisplayed();
        await expect(reserveDepositLimittext1).toBeDisplayed();
        await expect(userBorrowLimittext1).toBeDisplayed();
        await expect(utilizationtxt1).toBeDisplayed();
        await expect(lTVtxt1).toBeDisplayed();
        await expect(bestPricetext1).toBeDisplayed();

        const borrowtab = 'new UiSelector().text("Borrow").className("android.widget.TextView")'
        const borrowtab1 = $(`android=${borrowtab}`)
        await (await this.borrowTab).click();
        await expect(borrowtab1).toBeDisplayed();
        await expect(maxtext1).toBeDisplayed();
        await expect(reserveDepositLimittext1).toBeDisplayed();
        await expect(userBorrowLimittext1).toBeDisplayed();
        await expect(utilizationtxt1).toBeDisplayed();
        await expect(lTVtxt1).toBeDisplayed();
        await expect(bestPricetext1).toBeDisplayed();
        await expect(maxtext1).toBeDisplayed();

        const withdrawtab = 'new UiSelector().text("Withdraw").className("android.widget.TextView")'
        const withdrawtab1 = $(`android=${withdrawtab}`)
        await (await this.withdrawTab).click();
        await expect(withdrawtab1).toBeDisplayed();
        await expect(maxtext1).toBeDisplayed();
        await expect(reserveDepositLimittext1).toBeDisplayed();
        await expect(userBorrowLimittext1).toBeDisplayed();
        await expect(utilizationtxt1).toBeDisplayed();
        await expect(lTVtxt1).toBeDisplayed();
        // await expect(bestPricetext1).toBeDisplayed();
        await expect(this.withdrawbtn).toBeDisplayed();

        const repaytab = 'new UiSelector().text("Repay").className("android.widget.TextView")'
        const repaytab1 = $(`android=${repaytab}`)
        await (await this.repayTab).click();
        await expect(repaytab1).toBeDisplayed();
        await expect(maxtext1).toBeDisplayed();
        await expect(reserveDepositLimittext1).toBeDisplayed();
        await expect(userBorrowLimittext1).toBeDisplayed();
        await expect(utilizationtxt1).toBeDisplayed();
        await expect(lTVtxt1).toBeDisplayed();
        //  await expect(bestPricetext1).toBeDisplayed();
        await expect(this.repaybtn).toBeDisplayed();
    }

    async verifylend_borrowBtn() {
        await this.lend_borrowBtn.waitForDisplayed({ timeout: 5000 })
        await expect(this.lend_borrowBtn).toBeDisplayed();
    }


    async clickLend_Borrow() {
        await this.lend_borrowBtn.waitForDisplayed({ timeout: 30000 })
        await (await this.lend_borrowBtn).click();
        await this.startLendBtn.waitForDisplayed({ timeout: 30000 })
        await expect(this.lend_borrowText).toBeDisplayed();
        await expect(this.lend_borrowAggeratorText).toBeDisplayed();
        await (await this.startLendBtn).click();

    }

    async clickLend_BorrowBtn() {
        await this.lend_borrowBtn.waitForDisplayed({ timeout: 30000 })
        await (await this.lend_borrowBtn).click();
    }

    async clickStartLendBtn() {
        await this.startLendBtn.waitForDisplayed({ timeout: 30000 })
        await expect(this.startLendBtn).toBeDisplayed();
        await (await this.startLendBtn).click();
    }
    async firstPoolSelect() {
        await this.firstPool.waitForDisplayed({ timeout: 30000 })
        await (await this.firstPool).click();
    }
    async secondPoolSelect() {
        await this.secondPool.waitForDisplayed({ timeout: 30000 })
        await (await this.secondPool).click();
    }
    async thirdPoolSelect() {
        await this.thirdPool.waitForDisplayed({ timeout: 30000 })
        await (await this.thirdPool).click();
    }
    async fourthPoolSelect() {
        await this.fourthPool.waitForDisplayed({ timeout: 30000 })
        await (await this.fourthPool).click();
    }

    async selectSOL() {
        const soltext = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const soltext1 = $(`android=${soltext}`)

        const res = await (soltext1).isDisplayed();
        if (res) {
            await (await soltext1).click();

        }
        else if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await soltext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await soltext1).click();
        }
    }

    async selectmSOL() {
        const msoltext = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const msoltext1 = $(`android=${msoltext}`)

        const res = await (msoltext1).isDisplayed();
        if (res) {
            await (await msoltext1).click();

        }
        else if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await msoltext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await msoltext1).click();
        }
    }

    async selectUSDC() {
        const usdctext = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const usdctext1 = $(`android=${usdctext}`)

        const res = await expect(usdctext1).toBeDisplayed();
        if (res) {
            await (await usdctext1).click();
        }
        // else if (res == false) {
        //     driver.touchAction([
        //         { action: 'longPress', x: 479, y: 2271 },
        //         { action: 'moveTo', x: 471, y: 881 },
        //         'release'
        //     ]);
        //     await (await usdctext1).click();
        // }
        else {
            // driver.touchAction([
            //     { action: 'longPress', x: 425, y: 1919 },
            //     { action: 'moveTo', x: 429, y: 904 },
            //     'release'
            // ]);
            await (await usdctext1).click();
        }
    }

    async selectUSDT() {
        const usdttext = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const usdttext1 = $(`android=${usdttext}`)

        const res = await expect(usdttext1).toBeDisplayed();
        if (res) {
            await (await usdttext1).click();

        }
        if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await usdttext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await usdttext1).click();
        }
    }

    async selectSRM() {
        const srmtext = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const srmtext1 = $(`android=${srmtext}`)

        const res = await expect(srmtext1).toBeDisplayed();
        if (res) {
            await (await srmtext1).click();

        }
        if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await srmtext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await srmtext1).click();
        }
    }
    async selectUST() {
        const usttext = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const usttext1 = $(`android=${usttext}`)

        const res = await expect(usttext1).toBeDisplayed();
        if (res) {
            await (await usttext1).click();

        }
        if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await usttext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await usttext1).click();
        }
    }



    async selectORCA() {
        const orcatext = 'new UiSelector().text("ORCA").className("android.widget.TextView")'
        const orcatext1 = $(`android=${orcatext}`)

        const res = await expect(orcatext1).toBeDisplayed();
        if (res) {
            await (await orcatext1).click();

        }
        if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await orcatext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await orcatext1).click();
        }
    }

    async selectSolend() {

        const solend = 'new UiSelector().text("solend").className("android.widget.TextView")'
        const solend1 = $(`android=${solend}`)
        await solend1.waitForDisplayed({ timeout: 15000 })
        const res = await expect(solend1).toBeDisplayed();

        if (res) {
            await (await solend1).click();
        }

        else {
            await browser.saveScreenshot('screenshot.png')
        }

    }
    async selectApricot() {
        const apricot = 'new UiSelector().text("apricot").className("android.widget.TextView")'
        const apricot1 = $(`android=${apricot}`)
        const res = await expect(apricot1).toBeDisplayed();

        if (res) {
            await (await apricot1).click();
        }

        else {
            await browser.saveScreenshot('screenshot.png')
        }
    }



    async verify_First_TokenNameSamePopUpTokenName() {

        await this.firstTokenName.waitForDisplayed({ timeout: 30000 })
        let outsideTokenName = await (await this.firstTokenName).getText();
        await (await this.firstTokenName).click();

        let insideTokenName = await (await this.inPopupTokenName).getText();
        outsideTokenName = outsideTokenName.replace(/[^a-z]+/i, '');
        insideTokenName = insideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == insideTokenName);

        await (await this.borrowTab).click();
        let borrowinsideTokenName = await (await this.inPopupTokenName).getText();
        borrowinsideTokenName = borrowinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == borrowinsideTokenName);

        await (await this.withdrawTab).click();
        let withdrawinsideTokenName = await (await this.inPopupTokenName).getText();
        withdrawinsideTokenName = withdrawinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == withdrawinsideTokenName);

        await (await this.repayTab).click();
        let repayinsideTokenName = await (await this.inPopupTokenName).getText();
        repayinsideTokenName = repayinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == repayinsideTokenName);
    }

    async verify_Second_TokenNameSamePopUpTokenName() {

        await this.secondTokenName.waitForDisplayed({ timeout: 30000 })
        let outsideTokenName = await (await this.secondTokenName).getText();
        await (await this.secondPool).click();

        let insideTokenName = await (await this.inPopupTokenName).getText();
        outsideTokenName = outsideTokenName.replace(/[^a-z]+/i, '');
        insideTokenName = insideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == insideTokenName);

        await (await this.borrowTab).click();
        let borrowinsideTokenName = await (await this.inPopupTokenName).getText();
        borrowinsideTokenName = borrowinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == borrowinsideTokenName);

        await (await this.withdrawTab).click();
        let withdrawinsideTokenName = await (await this.inPopupTokenName).getText();
        withdrawinsideTokenName = withdrawinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == withdrawinsideTokenName);

        await (await this.repayTab).click();
        let repayinsideTokenName = await (await this.inPopupTokenName).getText();
        repayinsideTokenName = repayinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == repayinsideTokenName);

    }

    async verify_Third_TokenNameSamePopUpTokenName() {

        await this.secondTokenName.waitForDisplayed({ timeout: 30000 })
        let outsideTokenName = await (await this.thirdTokenName).getText();
        await (await this.thirdPool).click();

        let insideTokenName = await (await this.inPopupTokenName).getText();
        outsideTokenName = outsideTokenName.replace(/[^a-z]+/i, '');
        insideTokenName = insideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == insideTokenName);

        await (await this.borrowTab).click();
        let borrowinsideTokenName = await (await this.inPopupTokenName).getText();
        borrowinsideTokenName = borrowinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == borrowinsideTokenName);

        await (await this.withdrawTab).click();
        let withdrawinsideTokenName = await (await this.inPopupTokenName).getText();
        withdrawinsideTokenName = withdrawinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == withdrawinsideTokenName);

        await (await this.repayTab).click();
        let repayinsideTokenName = await (await this.inPopupTokenName).getText();
        repayinsideTokenName = repayinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == repayinsideTokenName);

    }
    async verify_Fourth_TokenNameSamePopUpTokenName() {

        await this.secondTokenName.waitForDisplayed({ timeout: 30000 })
        let outsideTokenName = await (await this.firstTokenName).getText();
        await (await this.fourthTokenName).click();

        let insideTokenName = await (await this.inPopupTokenName).getText();
        outsideTokenName = outsideTokenName.replace(/[^a-z]+/i, '');
        insideTokenName = insideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == insideTokenName);

        await (await this.borrowTab).click();
        let borrowinsideTokenName = await (await this.inPopupTokenName).getText();
        borrowinsideTokenName = borrowinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == borrowinsideTokenName);

        await (await this.withdrawTab).click();
        let withdrawinsideTokenName = await (await this.inPopupTokenName).getText();
        withdrawinsideTokenName = withdrawinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == withdrawinsideTokenName);

        await (await this.repayTab).click();
        let repayinsideTokenName = await (await this.inPopupTokenName).getText();
        repayinsideTokenName = repayinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == repayinsideTokenName);

    }

    async verifyAggeratorBestPrice() {

        await this.firstTokenName.waitForDisplayed({ timeout: 30000 })
        await (await this.firstPool).click();
        await this.firstBestPriceAmount.waitForDisplayed({ timeout: 30000 })

        let firstTokenPer = await (await this.firstBestPriceAmount).getText();
        firstTokenPer = firstTokenPer.replace(/[^0-9,^.]+/i, '');

        let sencondTokenPer = await (await this.secondBestPriceAmount).getText();
        sencondTokenPer = sencondTokenPer.replace(/[^0-9,^.]+/i, '');

        await expect(this.supplybtn).toBeDisplayed();

        const firstResult = await expect(this.secondBestPriceAmount).toBeDisplayed();
        const secondResult = await expect(this.secondBestPriceAmount).toBeDisplayed();

        if (secondResult && firstResult) {
            (firstTokenPer > sencondTokenPer)
        }
        else {
            // Pop up close
            driver.touchAction([
                { action: 'longPress', x: 272, y: 2030 },
                { action: 'moveTo', x: 839, y: 2011 },
                'release'
            ]);
            await (await this.backBtn).click();
            await (await this.backBtn).click();
            // Refresh
            driver.touchAction([
                { action: 'longPress', x: 486, y: 149 },
                { action: 'moveTo', x: 452, y: 904 },
                'release'
            ]);
            await this.lend_borrowBtn.waitForDisplayed({ timeout: 10000 })
            await (await this.lend_borrowBtn).click();
            await this.startLendBtn.waitForDisplayed({ timeout: 30000 })
            await expect(this.startLendBtn).toBeDisplayed();
            await (await this.startLendBtn).click();

            await (await this.firstPool).click();

            let firstTokenPer = await (await this.firstBestPriceAmount).getText();
            firstTokenPer = firstTokenPer.replace(/[^0-9,^.]+/i, '');

            let sencondTokenPer = await (await this.secondBestPriceAmount).getText();
            sencondTokenPer = sencondTokenPer.replace(/[^0-9,^.]+/i, '');

            await expect(this.supplybtn).toBeDisplayed();

            (firstTokenPer > sencondTokenPer)
        }
    }

    async popupClose() {
        driver.touchAction([
            { action: 'longPress', x: 272, y: 2030 },
            { action: 'moveTo', x: 839, y: 2011 },
            'release'
        ]);
    }

    async verifySolPool_InputTokenName() {
        await this.inPopupTokenName.waitForDisplayed({ timeout: 10000 })
        await expect(this.inPopupTokenName).toBeDisplayed();
        await expect(this.supplybtn).toBeDisplayed();
        const supplyTokenName = await this.inPopupTokenName.getText();
        (supplyTokenName == 'SOL')

        await (await this.borrowTab).click();
        await expect(this.borrowbtn).toBeDisplayed();
        const borrowTokenName = await this.inPopupTokenName.getText();
        (borrowTokenName == 'SOL')

        await (await this.withdrawTab).click();
        await expect(this.withdrawbtn).toBeDisplayed();
        const withdrawTokenName = await this.inPopupTokenName.getText();
        (withdrawTokenName == 'SOL')

        await (await this.repayTab).click();
        await expect(this.repaybtn).toBeDisplayed();
        const repayTokenName = await this.inPopupTokenName.getText();
        (repayTokenName == 'SOL')
    }

    async verifyMaxOption_ChangeTokenBtn() {
        await this.supplybtn.waitForDisplayed({ timeout: 10000 })
        await expect(this.supplyMaxBtn).toBeDisplayed();
        await expect(this.supplyexchageBtn).toBeDisplayed();

        await (await this.borrowTab).click();
        await expect(this.borrowMaxBtn).toBeDisplayed();
        await expect(this.borrowexchageBtn).toBeDisplayed();

        await (await this.withdrawTab).click();
        await expect(this.withdrawMaxBtn).toBeDisplayed();
        await expect(this.withdrawexchageBtn).toBeDisplayed();

        await (await this.repayTab).click();
        await expect(this.repayMaxBtn).toBeDisplayed();
        await expect(this.repayexchageBtn).toBeDisplayed();
    }

    async clickSupplyTab() {
        await this.supplybtn.waitForDisplayed({ timeout: 15000 })
        await (await this.supplyTab).click();
    }
    async clickBorrowTab() {
        await this.borrowTab.waitForDisplayed({ timeout: 15000 })
        await (await this.borrowTab).click();
    }
    async clickWithdrawTab() {
        await this.withdrawTab.waitForDisplayed({ timeout: 15000 })
        await (await this.withdrawTab).click();
    }
    async clickRepayTab() {
        await this.repayTab.waitForDisplayed({ timeout: 15000 })
        await (await this.repayTab).click();
    }

    async enterSupplyAmount(supplyAmt) {
        await this.supplybtn.waitForDisplayed({ timeout: 30000 })
        await (await this.supplyEnterAmount).click();
        await (await this.supplyEnterAmount).clearValue();
        await (await this.supplyEnterAmount).setValue(supplyAmt);
        driver.hideKeyboard();
    }
    async enterBorrowAmount(borrowAmt) {
        await (await this.borrowTab).click();
        await this.borrowbtn.waitForDisplayed({ timeout: 15000 })
        await (await this.borrowEnterAmount).click();
        await (await this.borrowEnterAmount).clearValue();
        await (await this.borrowEnterAmount).setValue(borrowAmt);
        driver.hideKeyboard();
    }
    async enterRepayAmount(repayAmt) {
        await (await this.repayTab).click();
        await this.repaybtn.waitForDisplayed({ timeout: 15000 })
        await (await this.repayEnterAmount).click();
        await (await this.repayEnterAmount).clearValue();
        await (await this.repayEnterAmount).setValue(repayAmt);
        driver.hideKeyboard();
    }
    async enterWithdrawAmount(withdrawAmt) {
        await (await this.withdrawTab).click();
        await this.withdrawbtn.waitForDisplayed({ timeout: 15000 })
        await (await this.withdrawEnterAmount).click();
        await (await this.withdrawEnterAmount).clearValue();
        await (await this.withdrawEnterAmount).setValue(withdrawAmt);
        driver.hideKeyboard();
    }

    async clickSupplyBtn() {
        await this.supplybtn.waitForDisplayed({ timeout: 5000 })
        await (await this.supplybtn).click();
    }
    async clickBorrowBtn() {
        await this.borrowbtn.waitForDisplayed({ timeout: 5000 })
        await (await this.borrowbtn).click();
    }
    async clickWithdrawBtn() {
        await this.withdrawbtn.waitForDisplayed({ timeout: 5000 })
        await (await this.withdrawbtn).click();
    }
    async clickRepayBtn() {
        await this.repaybtn.waitForDisplayed({ timeout: 5000 })
        await (await this.repaybtn).click();

    }
    async getSupplyAmount() {
        var supplyAmount = await (await this.supplyEnterAmount).getText();
        supplyAmount = ('SupplyAmount :  ' + supplyAmount)

        fs.appendFile('./reports/lend_borrow.txt', supplyAmount + '\n', function (err) {
            console.log(err)
        })
    }

    async getBorrowAmount() {
        var borrowAmount = await (await this.borrowEnterAmount).getText();
        borrowAmount = ('BorrowAmount : ' + borrowAmount)

        fs.appendFile('./reports/lend_borrow.txt', borrowAmount + '\n', function (err) {
            console.log(err)
        })
    }

    async getWithdrawAmount() {
        var withdrawAmount = await (await this.withdrawEnterAmount).getText();
        withdrawAmount = ('WithdrawAmount : ' + withdrawAmount)

        fs.appendFile('./reports/lend_borrow.txt', withdrawAmount + '\n', function (err) {
            console.log(err)
        })
    }

    async getRepayAmount() {
        var repayAmount = await (await this.repayEnterAmount).getText();
        repayAmount = ('RepayAmount : ' + repayAmount)

        fs.appendFile('./reports/lend_borrow.txt', repayAmount + '\n', function (err) {
            console.log(err)
        })
    }



    // Click MAX button
    async clickSupplyMaxBtn() {
        await this.supplyMaxBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.supplyMaxBtn).click();
    }
    async clickBorrowMaxBtn() {
        await this.borrowMaxBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.borrowMaxBtn).click();
    }
    async clickWithdrawMaxBtn() {
        await this.withdrawMaxBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.withdrawTab).click();
        await (await this.withdrawMaxBtn).click();
    }
    async clickRepayMaxBtn() {
        await this.repayMaxBtn.waitForDisplayed({ timeout: 5000 })
        await (await this.repayMaxBtn).click();
    }

    async enterGreaterThanMaxBalanceSupply(maxGreaterAmt) {
        await this.supplybtn.waitForDisplayed({ timeout: 10000 })
        await (await this.supplyEnterAmount).click();
        await (await this.supplyEnterAmount).setValue(maxGreaterAmt);
        driver.hideKeyboard();
    }
    async enterGreaterThanMaxBalanceBorrow(maxGreaterAmt) {
        await this.borrowbtn.waitForDisplayed({ timeout: 10000 })
        await (await this.borrowEnterAmount).click();
        await (await this.borrowEnterAmount).setValue(maxGreaterAmt);
        driver.hideKeyboard();
    }
    async enterGreaterThanMaxBalanceWithdraw(maxGreaterAmt) {
        await this.withdrawbtn.waitForDisplayed({ timeout: 10000 })
        await (await this.withdrawEnterAmount).click();
        await (await this.withdrawEnterAmount).setValue(maxGreaterAmt);
        driver.hideKeyboard();
    }
    async enterGreaterThanMaxBalanceRepay(maxGreaterAmt) {
        await this.repaybtn.waitForDisplayed({ timeout: 10000 })
        await (await this.repayEnterAmount).click();
        await (await this.repayEnterAmount).setValue(maxGreaterAmt);
        driver.hideKeyboard();
    }

    async verifyInsufficientBalanceText(insufficient) {
        //await this.insufficientBalanceText.waitForDisplayed({ timeout: 5000 })
        var insufficientText = await (await this.insufficientBalanceText).getText();
        if (insufficientText == insufficient) {
            console.log('Verified Insufficient Balance')
        }
        else {
            console.log(insufficientText)
        }
    }

    async verifyBeforeSupply_BorrowPoPUP() {
        await this.borrowbtn.waitForDisplayed({ timeout: 5000 })
        const borrowpopup = 'new UiSelector().text("You need to deposit first before you can borrow").className("android.widget.TextView")'
        const borrowpopup1 = $(`android=${borrowpopup}`)
        await expect(borrowpopup1).toBeDisplayed();
    }

    async() {
    } async() {
    } async() {
    } async() {
    } async() {
    }
    async() { }
    async() { }
    async() { }

}
module.exports = new Lend_BorrowPage();