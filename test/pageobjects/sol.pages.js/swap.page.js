const menutabsPage = require("./menutabs.page");

var fs = require('fs');

class SwapPage {

    get swapBtn() {
        return $('~swapSol');
    }
    get startSwappinBtn() {
        return $('~startSwapping');
    }
    get backBtn() {
        return $('~goBackFromSwapToken');
    }
    // Ok Button
    get devToMain_OkButton() {
        return $('~goToNetworkSolana');
    }
    // Cancel Button
    get devToMain_CancelBtn() {
        return $('~showLogoutModalSol1');
    }


    get slidetBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup');
    }
    // get swapNowText() {
    //     const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
    //     const SwapScreen =  $(`android=${swapScreen}`)
    //     return SwapScreen;
    // }

    get balance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[3]');
    }
    get maxBtn() {
        return $('~maxAmountForSwap');
    }

    // New Elements

    get youPaydropdown() {
        return $("~selectedToken1");
    }
    get youPayInputAmount() {
        return $("~tokenAmountForSwap");
    }
    get youReceivedropdown() {
        return $("~searchTextForToken2");
    }
    get youPaydropdownSearch() {
        return $("~swapTokenListViewText");
    }
    get youReceivedropdownSearch() {
        return $("~swapTokenListViewText");
    }
    get successDoneBtn() {
        return $('~goToHomeDone');
    }
    get failedDoneBtn() {
        return $('~goToHomeFromTokenSendFailed');
    }

    get result() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
    }

    // Please check your dashboard for changes 
    get checkYourDashboardChanges() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]');
    }
    // const findindBestRoute = 'new UiSelector().text("Finding you the best route and price").className("android.widget.TextView")'
    // const findindBestRoute1 = $(`android=${findindBestRoute}`)


    // Swap Ui elements

    //await browser.pause(10000);


    get bestPricetxt() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
    }

    // Market places

    get marketPlace1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup');
    }
    get marketPlace2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');
    }

    get marketPlace3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup');
    }
    get marketPlace4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup');
    }
    get marketPlace5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup');
    }

    get marketPlace6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup');
    }

    // Market Place route Name 
    get marketPlaceName1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView[1]')
    }


    // Market Place route token Name 
    get marketPlaceTokenName1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView[2]')
    }


    async verifySwapbtn() {
        await expect(this.swapBtn).toBeDisplayed();
    }

    async firstMarketPlace() {
        await this.marketPlaceName1.waitForDisplayed({ timeout: 60000 })
        const firstMarket = await expect(this.marketPlaceName1).toBeDisplayed();

        if (firstMarket) {

            var marketName1 = await this.marketPlaceName1.getText()
            var marketTokenName1 = await this.marketPlaceTokenName1.getText()

            marketName1 = ('First Market Name = ' + marketName1 + ' ');
            marketTokenName1 = ('First Market Token Name = ' + marketTokenName1 + ' ')

            fs.appendFile('./reports/swap.txt', marketName1 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName1 + '\n', function (err) {
                console.log(err)
            })
        }
        else {
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async secondMarketPlace() {
        await this.marketPlace2.waitForDisplayed({ timeout: 60000 })
        const firstmarketName1 = await this.marketPlaceName1.getText()
        const firstmarketName2 = await this.marketPlaceName2.getText();

        if (firstmarketName1 == firstmarketName2) {
            driver.touchAction([
                { action: 'longPress', x: 502, y: 2037 },
                { action: 'moveTo', x: 494, y: 1601 },
                'release'
            ]);

            var marketName2 = await this.marketPlaceName2.getText();
            var marketTokenName2 = await this.marketPlaceTokenName2.getText();

            marketName2 = ('Market Name = ' + marketName2 + ' ');
            marketTokenName2 = ('Market Token Name = ' + marketTokenName2 + ' ')

            fs.appendFile('./reports/swap.txt', marketName2 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName2 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace2).click();
        }

        else if (firstmarketName1 != firstmarketName2) {
            var marketName2 = await this.marketPlaceName2.getText()
            var marketTokenName2 = await this.marketPlaceTokenName2.getText();


            marketName2 = ('Market Name = ' + marketName2 + ' ');
            marketTokenName2 = ('Market Token Name = ' + marketTokenName2 + ' ')

            fs.appendFile('./reports/swap.txt', marketName2 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName2 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace2).click();
        }

        else {
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async thirdMarketPlace() {
        driver.touchAction([
            { action: 'longPress', x: 551, y: 2026 },
            { action: 'moveTo', x: 563, y: 1658 },
            'release'
        ]);

        await this.marketPlace2.waitForDisplayed({ timeout: 60000 })

        const firstmarketName2 = await this.marketPlaceName1.getText()
        const firstmarketName3 = await this.marketPlaceName2.getText();

        if (firstmarketName2 == firstmarketName3) {
            driver.touchAction([
                { action: 'longPress', x: 502, y: 2037 },
                { action: 'moveTo', x: 494, y: 1601 },
                'release'
            ]);

            var marketName3 = await this.marketPlaceName2.getText();
            var marketTokenName3 = await this.marketPlaceTokenName2.getText();

            marketName3 = ('Market Name = ' + marketName3 + ' ');
            marketTokenName3 = ('Market Token Name = ' + marketTokenName3 + ' ')

            fs.appendFile('./reports/swap.txt', marketName3 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName3 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace1).click();
        }

        else if (firstmarketName2 != firstmarketName3) {

            var marketName3 = await this.marketPlaceName2.getText()
            var marketTokenName3 = await this.marketPlaceTokenName2.getText();

            marketName3 = ('Market Name = ' + marketName3 + ' ');
            marketTokenName3 = ('Market Token Name = ' + marketTokenName3 + ' ')

            fs.appendFile('./reports/swap.txt', marketName3 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName3 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace1).click();
        }
        else {
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async fourthMarketPlace() {

        driver.touchAction([
            { action: 'longPress', x: 551, y: 2026 },
            { action: 'moveTo', x: 563, y: 1658 },
            'release'
        ]);

        await this.marketPlace2.waitForDisplayed({ timeout: 60000 })

        const firstmarketName3 = await this.marketPlaceName1.getText()
        const firstmarketName4 = await this.marketPlaceName2.getText();

        if (firstmarketName3 == firstmarketName4) {

            driver.touchAction([
                { action: 'longPress', x: 502, y: 2037 },
                { action: 'moveTo', x: 494, y: 1601 },
                'release'
            ]);

            var marketName4 = await this.marketPlaceName2.getText();
            var marketTokenName4 = await this.marketPlaceTokenName2.getText();

            marketName4 = ('Market Name = ' + marketName4 + ' ');
            marketTokenName4 = ('Market Token Name = ' + marketTokenName4 + ' ')

            fs.appendFile('./reports/swap.txt', marketName4 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName4 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace2).click();
        }

        else if (firstmarketName3 != firstmarketName4) {

            var marketName4 = await this.marketPlaceName2.getText()
            var marketTokenName4 = await this.marketPlaceTokenName2.getText();

            marketName4 = ('Market Name = ' + marketName4 + ' ');
            marketTokenName4 = ('Market Token Name = ' + marketTokenName4 + ' ')

            fs.appendFile('./reports/swap.txt', marketName4 + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', marketTokenName4 + '\n', function (err) {
                console.log(err)
            })
            await (await this.marketPlace2).click();
        }
        else {
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async getBalance() {
    }


    async getMaxAmount() {
        await this.maxBtn.waitForDisplayed({ timeout: 60000 })
        await (await this.maxBtn).click();
        const maxAmount = await (this.youPayInputAmount).getText();
        const balanceAmount = await (this.balance).getText();
        const res = (maxAmount == balanceAmount);
        console.log(res);
        //console.log(await maxAmount.isEqual(balanceAmount));
        // await (await this.youPayInputAmount).getText();
    }

    async refresh() {

        driver.touchAction([
            { action: 'longPress', x: 486, y: 149 },
            { action: 'moveTo', x: 452, y: 904 },
            'release'
        ]);
        await browser.pause(4000)
    }

    async clickSwapBtn() {
        await (await this.swapBtn).waitForDisplayed({ timeout: 60000 })
        await expect(this.swapBtn).toBeDisplayed();
        await this.swapBtn.click();
    }

    async verifyBeforeStartSwapping() {
        browser.pause(10000);
        //await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        //await expect(this.swapBtn).toBeDisplayed();
        await this.swapBtn.waitForClickable({ reverse: true });
        await (await this.swapBtn).click();

        // await expect(this.backBtn).toBeDisplayed();
        // await expect(this.startSwappinBtn).toBeDisplayed();
        const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        const SwapScreen = await $(`android=${swapScreen}`)
        await SwapScreen.waitForDisplayed({ timeout: 6000 })
        await expect(SwapScreen).toBeDisplayed();
        await (await this.startSwappinBtn).click();
    }

    async verifySwapScreen() {
        //await this.swapBtn.waitForClickable({ reverse: true });
        //await this.swapBtn.waitForDisplayed({ timeout: 20000 })
        // await (await this.swapBtn).click();// Need to delete
        //await (await this.swapBtn).click();
        await this.startSwappinBtn.waitForDisplayed({ timeout: 10000 })
        await (await this.startSwappinBtn).click();
        await expect(this.backBtn).toBeDisplayed();
        const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        const SwapScreen = await $(`android=${swapScreen}`)
        await SwapScreen.waitForDisplayed({ timeout: 30000 })
        await expect(SwapScreen).toBeDisplayed();
    }

    async verifySwapNow() {
        const swapNow = 'new UiSelector().text("Swap now").className("android.widget.TextView")'
        const SwapNow = await $(`android=${swapNow}`)
        await SwapNow.waitForDisplayed({ timeout: 120000 })
        await expect(SwapNow).toBeDisplayed();
    }

    async enterAmtInput(amount) {

        await (await this.youPayInputAmount).click();
        await (await this.youPayInputAmount).setValue(amount);
        driver.hideKeyboard();

        // const findindBestRoute = 'new UiSelector().text("Finding you the best route and price").className("android.widget.TextView")'
        // const findindBestRoute1 = $(`android=${findindBestRoute}`)
        // await (await findindBestRoute1).waitForDisplayed({ timeout: 60000 })
        // await expect(findindBestRoute1).toBeDisplayed();
    }

    get searchForTokenText() {
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        return searchText;
    }
    get uSDTText() {
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        return uSDTtxt;
    }

    get uSDCText() {
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        return uSDCtxt;
    }

    get sOLText() {
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        return sOLtxt;
    }

    get sRMText() {
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        return sRMtxt;
    }

    get uSTText() {
        const usttxt = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uSTtxt = $(`android=${usttxt}`)
        return uSTtxt;
    }
    get oRCAText() {
        const orcatxt = 'new UiSelector().text("ORCA").className("android.widget.TextView")'
        const oRCAtxt = $(`android=${orcatxt}`)
        return oRCAtxt;
    }
    get soSUSHIText() {
        const sosushiItxt = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
        const soSUSHItxt = $(`android=${sosushiItxt}`)
        return soSUSHItxt;

    }
    get mSolText() {
        const msoltxt = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const mSOLTxt = $(`android=${msoltxt}`)
        return mSOLTxt;
    }

    get uSDHText() {
        const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
        const uSDHtxt = $(`android=${usdhtxt}`)
        return uSDHtxt;
    }
    get doneText() {
        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt =  $(`android=${donetxt}`)
        return doneTxt;
    }
    get slideToSwapText() {
        const slideToSwapTxt = 'new UiSelector().text("Slide to swap").className("android.widget.TextView")'
        const slideToSwapTxt1 = $(`android=${slideToSwapTxt}`)
        return slideToSwapTxt1;
    }

    get() {

    }
    get() {

    }
    get() {

    }
    get() {

    }
    get() {

    }

    async uSDTtoUSDC(usdt) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        await this.uSDTText.click();

        await expect(this.uSDCText).toBeDisplayed();
    }

    async uSDCtoUSDT(usdc, usdt) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        await (this.uSDCText).click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        await (this.uSDTText).click();
    }

    // async sOLtoUSDC(sol) {
    //     await (await this.youPaydropdown).click();
    //     const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    //     const searchText = $(`android=${search}`)
    //     await expect(searchText).toBeDisplayed();
    //     await (await this.youPaydropdownSearch).click();
    //     await (await this.youPaydropdownSearch).setValue(sol);
    //     const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
    //     const sOLtxt = $(`android=${soltxt}`)
    //     await sOLtxt.click();

    //     const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
    //     const uSDCtxt = $(`android=${usdctxt}`)
    //     await (await uSDCtxt).waitForDisplayed({ timeout: 60000 })
    //     await expect(uSDCtxt).toBeDisplayed();
    // }

    async uSDCtoSOL(usdc, sol) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        await this.uSDCText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        await this.sOLText.click();
    }

    async sOLtoUSDT(usdt) {

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        await this.uSDTText.click();
    }

    async uSDTtoSOL(usdt, sol) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        await this.sOLText.click();
    }

    async sOLtoSRM(srm) {

        await expect(this.sOLText).toBeDisplayed();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(srm);
        await this.sRMText.click();
    }

    async sRMtoSOL(srm, sol) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        await this.sRMText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        await this.sOLText.click();
    }

    async sRMtoUST(srm, ust) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        await this.sRMText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(ust);
        await this.uSTText.click();
    }

    async uSTtoSRM(ust, srm) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(ust);
        await this.uSTText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(srm);
        await this.sRMText.click();
    }

    async uSDHtoUSDT(usdh, usdt) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdh);
        await this.uSDHText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        await this.uSDTText.click();
    }

    async uSDTtoUSDH(usdt, usdh) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        await this.uSDTText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdh);
        await this.uSDHText.click();
    }

    async sOLtomSOL(mSOL) {
        await expect(this.sOLText).toBeDisplayed();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(mSOL);
        await this.mSolText.click();
    }

    async mSOLtoSOL(mSOL, sol) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(mSOL);
        await this.mSolText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        await this.sOLText.click();
    }

    async soSUSHItoORCA(soSUSHI, orca) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(soSUSHI);
        await this.soSUSHIText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(orca);
        await this.oRCAText.click();
    }


    async oRCAtosoSUSHI(orca, soSUSHI) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(orca);
        await this.oRCAText.click();

        await (await this.youReceivedropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(soSUSHI);
        await this.soSUSHIText.click();
    }

    async selectUSDC(usdc) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        await this.uSDCText.click();
    }

    async selectUST(ust) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(ust);
        await this.uSTText.click();
    }

    async selectUSDT(usdt) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        await this.uSDTText.click();
    }

    async selectSRM(srm) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        await this.sRMText.click();
    }

    async selectmSOL(mSOL) {

        await (await this.youPaydropdown).click();
        await expect(this.searchForTokenText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(mSOL);
        await this.mSolText.click();
    }

    async slidetoSwap() {

        await this.slideToSwapText.waitForDisplayed({ timeout: 60000 })
        await expect(this.slideToSwapText).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 158, y: 2183 },
            { action: 'moveTo', x: 930, y: 2168 },
            'release'
        ])
    }


    async verifyResult_And_DoneBtn() {

        await this.doneText.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = ('Swap Result = ' + result);

        var result1 = await (this.checkYourDashboardChanges).getText();
        result1 = ('Swap Fail Reason = ' + result1);

        // Please check your dashboard for changes 

        if (sucess) {
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1 + '\n', function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1 + '\n', function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.failedDoneBtn).click();
        }
    }

    // async clickDoneBtn() {

    //     const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
    //     const doneTxt = await $(`android=${donetxt}`)
    //     await doneTxt.waitForDisplayed({ timeout: 30000 });

    //     let sucess = await (this.successDoneBtn).isDisplayed();
    //     let fail = await (this.failedDoneBtn).isDisplayed();

    //     var result = await (this.result).getText();
    //     result = (' Swap Result = ' + result + ' ');

    //     if (sucess) {
    //         fs.appendFile('result', result, function (err) {
    //             console.log(err)
    //         })
    //         await (await this.successDoneBtn).click();
    //     }
    //     else if (fail) {
    //         fs.appendFile('result', result, function (err) {
    //             console.log(err)
    //         })

    //         await (await this.failedDoneBtn).click();

    //     }
    //     else {
    //         await browser.saveScreenshot('screenshot.png')
    //     }
    // }

    async verifyUSDTSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        let sucess = await (this.successDoneBtn).isDisplayed();
        let fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        var result1 = await (this.checkYourDashboardChanges).getText();
        result1 = (' Swap Fail Reason = ' + result1 + ' ');

        if (sucess) {
            const usDtSwap = 'new UiSelector().text("USDT swapped!").className("android.widget.TextView")'
            const uSDTSwap = $(`android=${usDtSwap}`)

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.writeFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })

            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(uSDTSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.writeFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifyUSDCSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        let sucess = await (this.successDoneBtn).isDisplayed();
        let fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const uSDcSwap = 'new UiSelector().text("USDC swapped!").className("android.widget.TextView")'
            const uSDCSwap = $(`android=${uSDcSwap}`)
            await (uSDCSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(uSDCSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifySOLSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const solSwap = 'new UiSelector().text("SOL swapped!").className("android.widget.TextView")'
            const sOLSwap = $(`android=${solSwap}`)
            await (sOLSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(sOLSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.failedDoneBtn).click();
        }
    }



    async verifyUSDHSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const usdhSwap = 'new UiSelector().text("USDH swapped!").className("android.widget.TextView")'
            const uSDHSwap = $(`android=${usdhSwap}`)
            await (uSDHSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(uSDHSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }



    async verifySRMSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const srmSwap = 'new UiSelector().text("SRM swapped!").className("android.widget.TextView")'
            const sRMSwap = $(`android=${srmSwap}`)
            await (sRMSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(sRMSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifymSOLSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const msolSwap = 'new UiSelector().text("mSOL swapped!").className("android.widget.TextView")'
            const mSOLSwap = $(`android=${msolSwap}`)
            await (mSOLSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(mSOLSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }
    async verifysoSUSHISwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const sosushiSwap = 'new UiSelector().text("soSUSHI swapped!").className("android.widget.TextView")'
            const soSUSHISwap = $(`android=${sosushiSwap}`)
            await (soSUSHISwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(soSUSHISwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifyUSTSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const ustSwap = 'new UiSelector().text("UST swapped!").className("android.widget.TextView")'
            const uSTSwap = $(`android=${ustSwap}`)
            await (uSTSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(uSTSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifyORCASwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const orcaSwap = 'new UiSelector().text("ORCA swapped!").className("android.widget.TextView")'
            const oRCASwap = $(`android=${orcaSwap}`)
            await (oRCASwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(oRCASwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async verifyETHSwapped() {

        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = await $(`android=${donetxt}`)
        await doneTxt.waitForDisplayed({ timeout: 30000 });

        const sucess = await (this.successDoneBtn).isDisplayed();
        const fail = await (this.failedDoneBtn).isDisplayed();

        var result = await (this.result).getText();
        result = (' Swap Result = ' + result + ' ');

        if (sucess) {
            const ethSwap = 'new UiSelector().text("ETH swapped!").className("android.widget.TextView")'
            const eTHSwap = $(`android=${ethSwap}`)
            await (eTHSwap).waitForDisplayed({ timeout: 10000 })

            const changeRes = 'new UiSelector().text("Please check your dashboard for changes ").className("android.widget.TextView")'
            const changeRes1 = $(`android=${changeRes}`)

            var result1 = await (this.checkYourDashboardChanges).getText();

            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            await expect(changeRes1).toBeDisplayed();
            await expect(eTHSwap).toBeDisplayed();
            await (await this.successDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./reports/swap.txt', result, function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await (await this.failedDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/swap.txt', result1, function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
        }
    }

    async clickDoneBtn() {
        await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    get youPayText() {
        const youPay = 'new UiSelector().text("You pay").className("android.widget.TextView")'
        const youPay1 = $(`android=${youPay}`)
        return youPay1;
    }

    get youReceiveText() {
        const youReceive = 'new UiSelector().text("You receive").className("android.widget.TextView")'
        const youReceive1 = $(`android=${youReceive}`)
        return youReceive1;
    }

    get rateText() {
        const rate = 'new UiSelector().text("Rate").className("android.widget.TextView")'
        const rate1 = $(`android=${rate}`)
        return rate1;
    }
    get bestPriceText() {
        const bestPrice = 'new UiSelector().text("Best price").className("android.widget.TextView")'
        const bestPrice1 = $(`android=${bestPrice}`)
        return bestPrice1;
    }
    get() {

    }
    get() {

    }


    async verifySwapScreenUI() {

        // const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        // const SwapScreen = $(`android=${swapScreen}`)
        // await SwapScreen.waitForDisplayed({ timeout: 10000 })
        // await expect(swapScreen).toBeDisplayed();

        await (this.youPayText).waitForDisplayed({ timeout: 10000 })
        await expect(this.youPayText).toBeDisplayed();

        await expect(this.youReceiveText).toBeDisplayed();

        await (this.rateText).waitForDisplayed({ timeout: 30000 })
        await expect(this.rateText).toBeDisplayed();

        await expect(this.bestPriceText).toBeDisplayed();
    }

    async verifyDevToMainNetWarning() {
        await expect(this.devToMain_OkButton).toBeDisplayed();
        await expect(this.devToMain_CancelBtn).toBeDisplayed();
        const swapWarning = 'new UiSelector().text("Swap Warning").className("android.widget.TextView")'
        const SwapWarning = $(`android=${swapWarning}`)
        await SwapWarning.waitForDisplayed({ timeout: 120000 })
        const changeNetworkAsmain = 'new UiSelector().text("Please change network as mainnet").className("android.widget.TextView")'
        const changeNetworkAsMain = $(`android=${changeNetworkAsmain}`)
        await changeNetworkAsMain.waitForDisplayed({ timeout: 120000 })
        await (await this.devToMain_OkButton).click();
    }

    async okBtnClick() {
        await (await this.devToMain_OkButton).click();
    }

    async changeToDevtoMain() {
        await menutabsPage.mainNetworkTab.click();
        await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        await expect(this.swapBtn).toBeDisplayed();
        await browser.pause(5000);

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
        await browser.pause(4000);
        await this.swapBtn.click();
    }

    async changeToMainToDev() {
        await menutabsPage.mainNetworkTab.click();
        await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        await expect(this.swapBtn).toBeDisplayed();
        await browser.pause(5000);

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);

    }
}
module.exports = new SwapPage(); 