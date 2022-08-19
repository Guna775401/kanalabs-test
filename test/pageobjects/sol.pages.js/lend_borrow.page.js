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
        return $('~findWithdrawMax');
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
    get secondtPool() {
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




    // Aggreator Percentage Amount Elemants

    get firstBestPriceAmount() {
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]');
    }

    get secondBestPriceAmount() {
        return $('//android.view.ViewGroup[@content-desc="tab1ModalViewClose"]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]');
    }



    get() {
        return $('~');
    } get() {
        return $('~');
    }




    // UI Element

    // get lend_borrowScreen() {
    //     const lend_borrowtext = 'new UiSelector().text("Lend / Borrow").className("android.widget.TextView")'
    //     const lend_borrowtxt = $(`android=${lend_borrowtext}`)
    //     // await lend_borrowtxt.waitForDisplayed({ timeout: 10000 })
    //     // await expect(lend_borrowtxt).toBeDisplayed();
    // }

    // get lend_borrowAggeratorText() {
    //     const lend_borrowAggeratortext = 'new UiSelector().text("Aggregated Lend/Borrow.").className("android.widget.TextView")'
    //     const lend_borrowAggeratortxt = $(`android=${lend_borrowAggeratortext}`)
    //     await lend_borrowAggeratortxt.waitForDisplayed({ timeout: 10000 });
    //     await expect(lend_borrowAggeratortxt).toBeDisplayed();
    // }

    // get lend_borrowDesription() {
    //     const lend_borrowDesriptiontext = 'new UiSelector().text("Now lend/borrow at the best rates from across the entire Solana ecosystem").className("android.widget.TextView")'
    //     const lend_borrowDesriptiontxt = $(`android=${lend_borrowDesriptiontext}`)
    //     await lend_borrowDesriptiontxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowDesriptiontxt).toBeDisplayed();
    // }

    // get lend_borrowPoolOverview() {
    //     const lend_borrowPooloverviewtext = 'new UiSelector().text("Pool overview").className("android.widget.TextView")'
    //     const lend_borrowPooloverviewtxt = $(`android=${lend_borrowPooloverviewtext}`)
    //     await lend_borrowPooloverviewtxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowPooloverviewtxt).toBeDisplayed();
    // }
    // get lend_borrowAllAssets() {
    //     const lend_borrowAllAssetstext = 'new UiSelector().text("All assets").className("android.widget.TextView")'
    //     const lend_borrowAllAssetstxt = $(`android=${lend_borrowAllAssetstext}`)
    //     await lend_borrowAllAssetstxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowAllAssetstxt).toBeDisplayed();
    // }
    // get lend_borrowAsset() {
    //     const lend_borrowAssettext = 'new UiSelector().text("Asset").className("android.widget.TextView")'
    //     const lend_borrowAssettxt = $(`android=${lend_borrowAssettext}`)
    //     await lend_borrowAssettxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowAssettxt).toBeDisplayed();
    // }
    // get lend_borrowTotalSupply() {
    //     const lend_borrowTotaSupplytext = 'new UiSelector().text("Total Supply").className("android.widget.TextView")'
    //     const lend_borrowTotaSupplytxt = $(`android=${lend_borrowTotaSupplytext}`)
    //     await lend_borrowTotaSupplytxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowTotaSupplytxt).toBeDisplayed();
    // }
    // get lend_borrowTotalBorrow() {
    //     const lend_borrowTotaBorrowtext = 'new UiSelector().text("Total Borrow").className("android.widget.TextView")'
    //     const lend_borrowTotaBorrowtxt = $(`android=${lend_borrowTotaBorrowtext}`)
    //     await lend_borrowTotaBorrowtxt.waitForDisplayed({ timeout: 10000 })
    //     await expect(lend_borrowTotaBorrowtxt).toBeDisplayed();
    // }

    // get supplyTabText() {
    //     const supplytab = 'new UiSelector().text("Supply").className("android.widget.TextView")'
    //     const supplytab1 = $(`android=${supplytab}`)
    //     await supplytab1.waitForDisplayed({ timeout: 10000 })
    //     await expect(supplytab1).toBeDisplayed();
    // }

    // get borrowTabText() {
    //     const borrowtab = 'new UiSelector().text("Borrow").className("android.widget.TextView")'
    //     const borrowtab1 = $(`android=${borrowtab}`)
    //     await borrowtab1.waitForDisplayed({ timeout: 10000 })
    //     await expect(borrowtab1).toBeDisplayed();
    // }
    // get withdrawTabText() {
    //     const withdrawtab = 'new UiSelector().text("Withdraw").className("android.widget.TextView")'
    //     const withdrawtab1 = $(`android=${withdrawtab}`)
    //     await withdrawtab1.waitForDisplayed({ timeout: 10000 })
    //     await expect(withdrawtab1).toBeDisplayed();
    // }
    // get repayTabText() {
    //     const repaytab = 'new UiSelector().text("Repay").className("android.widget.TextView")'
    //     const repaytab1 = $(`android=${repaytab}`)
    //     await repaytab1.waitForDisplayed({ timeout: 10000 })
    //     await expect(repaytab1).toBeDisplayed();
    // }
    // get maxText() {
    //     const maxtext = 'new UiSelector().text("Max").className("android.widget.TextView")'
    //     const maxtext1 = $(`android=${maxtext}`)
    //     await maxtext1.waitForDisplayed({ timeout: 10000 })
    //     await expect(maxtext1).toBeDisplayed();
    // }
    // get supplyButtonText() {
    //     const supplyButtontext = 'new UiSelector().text("Supply").className("android.widget.TextView")'
    //     const supplyButtontext1 = $(`android=${supplyButtontext}`)
    //     await supplyButtontext1.waitForDisplayed({ timeout: 10000 })
    //     await expect(supplyButtontext1).toBeDisplayed();
    // }

    // get reserveDepositLimitText() {
    //     const reserveDepositLimittext = 'new UiSelector().text("Reserve deposit limit").className("android.widget.TextView")'
    //     const reserveDepositLimittext1 = $(`android=${reserveDepositLimittext}`)
    //     await reserveDepositLimittext1.waitForDisplayed({ timeout: 10000 })
    //     await expect(reserveDepositLimittext1).toBeDisplayed();
    // }
    // get userBorrowLimitText() {
    //     const userBorrowLimittext = 'new UiSelector().text("User borrow limit").className("android.widget.TextView")'
    //     const userBorrowLimittext1 = $(`android=${userBorrowLimittext}`)
    //     await userBorrowLimittext1.waitForDisplayed({ timeout: 10000 })
    //     await expect(userBorrowLimittext1).toBeDisplayed();
    // }
    // get utilizationText() {
    //     const utilizationtxt = 'new UiSelector().text("Utilization").className("android.widget.TextView")'
    //     const utilizationtxt1 = $(`android=${utilizationtxt}`)
    //     await utilizationtxt1.waitForDisplayed({ timeout: 10000 })
    //     await expect(utilizationtxt1).toBeDisplayed();
    // }
    // get lTVText() {
    //     const lTVtxt = 'new UiSelector().text("LTV").className("android.widget.TextView")'
    //     const lTVtxt1 = $(`android=${lTVtxt}`)
    //     await lTVtxt1.waitForDisplayed({ timeout: 10000 })
    //     await expect(lTVtxt1).toBeDisplayed();
    // }
    // get bestPriceText() {
    //     const bestPricetext = 'new UiSelector().text("Best price").className("android.widget.TextView")'
    //     const bestPricetext1 = $(`android=${bestPricetext}`)
    //     await bestPricetext1.waitForDisplayed({ timeout: 10000 })
    //     await expect(bestPricetext1).toBeDisplayed();
    // }

    // get nAText() {
    //     const nAtext = 'new UiSelector().text("NA").className("android.widget.TextView")'
    //     const nAtext1 = $(`android=${nAtext}`)
    //     // await nAtext1.waitForDisplayed({ timeout: 10000 })
    //     // await expect(nAtext1).toBeDisplayed();
    // }


    async verifyLend_BorrowUIText() {
        await this.startLendBtn.waitForDisplayed({ timeout: 30000 })

        const lend_borrowtext = 'new UiSelector().text("Lend / Borrow").className("android.widget.TextView")'
        const lend_borrowtxt = $(`android=${lend_borrowtext}`)
        await lend_borrowtxt.waitForDisplayed({ timeout: 30000 })
        await expect(lend_borrowtxt).toBeDisplayed();

        await expect(this.backBtn).toBeDisplayed();

        await expect(this.startLendBtn).toBeDisplayed();

        const lend_borrowAggeratortext = 'new UiSelector().text("Aggregated Lend/Borrow.").className("android.widget.TextView")'
        const lend_borrowAggeratortxt = $(`android=${lend_borrowAggeratortext}`)
        await expect(lend_borrowAggeratortxt).toBeDisplayed();

        const lend_borrowDesriptiontext = 'new UiSelector().text("Now lend/borrow at the best rates from across the entire Solana ecosystem").className("android.widget.TextView")'
        const lend_borrowDesriptiontxt = $(`android=${lend_borrowDesriptiontext}`)
        await expect(lend_borrowDesriptiontxt).toBeDisplayed();
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

        const borrowtab = 'new UiSelector().text("Borrow").className("android.widget.TextView")'
        const borrowtab1 = $(`android=${borrowtab}`)
        await (await this.borrowTab).click();
        await expect(this.borrowbtn).toBeDisplayed();
        await expect(borrowtab1).toBeDisplayed();

        const withdrawtab = 'new UiSelector().text("Withdraw").className("android.widget.TextView")'
        const withdrawtab1 = $(`android=${withdrawtab}`)
        await (await this.withdrawTab).click();
        await expect(this.withdrawbtn).toBeDisplayed();
        await expect(withdrawtab1).toBeDisplayed();

        const repaytab = 'new UiSelector().text("Repay").className("android.widget.TextView")'
        const repaytab1 = $(`android=${repaytab}`)
        await (await this.repayTab).click();
        await expect(this.repaybtn).toBeDisplayed();
        await expect(repaytab1).toBeDisplayed();

        const maxtext = 'new UiSelector().text("Max").className("android.widget.TextView")'
        const maxtext1 = $(`android=${maxtext}`)
        await expect(maxtext1).toBeDisplayed();

        const supplyButtontext = 'new UiSelector().text("Supply").className("android.widget.TextView")'
        const supplyButtontext1 = $(`android=${supplyButtontext}`)
        await expect(supplyButtontext1).toBeDisplayed();

        const reserveDepositLimittext = 'new UiSelector().text("Reserve deposit limit").className("android.widget.TextView")'
        const reserveDepositLimittext1 = $(`android=${reserveDepositLimittext}`)
        await expect(reserveDepositLimittext1).toBeDisplayed();

        const userBorrowLimittext = 'new UiSelector().text("User borrow limit").className("android.widget.TextView")'
        const userBorrowLimittext1 = $(`android=${userBorrowLimittext}`)
        await expect(userBorrowLimittext1).toBeDisplayed();

        const utilizationtxt = 'new UiSelector().text("Utilization").className("android.widget.TextView")'
        const utilizationtxt1 = $(`android=${utilizationtxt}`)
        await expect(utilizationtxt1).toBeDisplayed();

        const lTVtxt = 'new UiSelector().text("LTV").className("android.widget.TextView")'
        const lTVtxt1 = $(`android=${lTVtxt}`)
        await expect(lTVtxt1).toBeDisplayed();

        const bestPricetext = 'new UiSelector().text("Best price").className("android.widget.TextView")'
        const bestPricetext1 = $(`android=${bestPricetext}`)
        await expect(bestPricetext1).toBeDisplayed();

    }



    async clickLend_Borrow() {
        await this.lend_borrowBtn.waitForDisplayed({ timeout: 30000 })
        await (await this.lend_borrowBtn).click();
        await this.startLendBtn.waitForDisplayed({ timeout: 30000 })
        const lend_borrowtext = 'new UiSelector().text("Lend / Borrow").className("android.widget.TextView")'
        const lend_borrowtxt = $(`android=${lend_borrowtext}`)
        await expect(lend_borrowtxt).toBeDisplayed();
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
async firstPoolSelect(){
    await this.firstPool.waitForDisplayed({ timeout: 30000 })
    await (await this.firstPool).click();    
}
async secondPoolSelect(){
    await this.secondtPool.waitForDisplayed({ timeout: 30000 })
    await (await this.secondtPool).click();    
}
async thirdPoolSelect(){
    await this.thirdPool.waitForDisplayed({ timeout: 30000 })
    await (await this.thirdPool).click();    
}
async fourthPoolSelect(){
    await this.fourthPool.waitForDisplayed({ timeout: 30000 })
    await (await this.fourthPool).click();    
}

    async selectSOL() {
        const soltext = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const soltext1 = $(`android=${soltext}`)

        await soltext1.waitForDisplayed({ timeout: 10000 })
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

    async selectUSDC() {
        const usdctext = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const usdctext1 = $(`android=${usdctext}`)

        await usdctext1.waitForDisplayed({ timeout: 10000 })
        const res = await expect(usdctext1).toBeDisplayed();
        if (res) {
            await (await usdctext1).click();

        }
        if (res == false) {
            driver.touchAction([
                { action: 'longPress', x: 479, y: 2271 },
                { action: 'moveTo', x: 471, y: 881 },
                'release'
            ]);
            await (await usdctext1).click();
        }
        else {
            driver.touchAction([
                { action: 'longPress', x: 425, y: 1919 },
                { action: 'moveTo', x: 429, y: 904 },
                'release'
            ]);
            await (await usdctext1).click();
        }
    }

    async selectUSDT() {
        const usdttext = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const usdttext1 = $(`android=${usdttext}`)

        await usdttext1.waitForDisplayed({ timeout: 10000 })
        const res = await expect(usdttext1).toBeDisplayed();
        if (res == true) {
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

        await srmtext1.waitForDisplayed({ timeout: 10000 })
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

        await usttext1.waitForDisplayed({ timeout: 10000 })
        const res = await expect(usttext1).toBeDisplayed();
        if (res == true) {
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

    async popupClose() {
        driver.touchAction([
            { action: 'longPress', x: 272, y: 2030 },
            { action: 'moveTo', x: 839, y: 2011 },
            'release'
        ]);
    }

    async verifyClickTokenNameSamePopUpTokenName() {

        await this.firstTokenName.waitForDisplayed({ timeout: 30000 })
        let outsideTokenName = await (await this.firstTokenName).getText();
        await (await this.firstTokenName).click();

        let insideTokenName = await (await this.supplyPoPUpINTokenName).getText();
        outsideTokenName = outsideTokenName.replace(/[^a-z]+/i, '');
        insideTokenName = insideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == insideTokenName);

        await (await this.borrowTab).click();
        let borrowinsideTokenName = await (await this.supplyPoPUpINTokenName).getText();
        borrowinsideTokenName = borrowinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == borrowinsideTokenName);

        await (await this.withdrawTab).click();
        let withdrawinsideTokenName = await (await this.supplyPoPUpINTokenName).getText();
        withdrawinsideTokenName = withdrawinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == withdrawinsideTokenName);

        await (await this.repayTab).click();
        let repayinsideTokenName = await (await this.supplyPoPUpINTokenName).getText();
        repayinsideTokenName = repayinsideTokenName.replace(/[^a-z]+/i, '');
        (outsideTokenName == repayinsideTokenName);

    }


    async verifyAggeratorBestPrice() {

        await this.firstTokenName.waitForDisplayed({ timeout: 30000 })
        await (await this.firstTokenName).click();
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
            (firstTokenPer > sencondTokenPer)
        }
    }

async popupClose(){

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


    async() {
    }
    async() {
    }
    async() {
    }
    async() {
    }


}
module.exports = new Lend_BorrowPage();