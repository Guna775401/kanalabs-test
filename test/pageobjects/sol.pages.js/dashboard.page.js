const lend_borrowPage = require("./lend_borrow.page");
const menutabsPage = require("./menutabs.page");
const sendPage = require("./send.page");
const stakePage = require("./stake.page");
const swapPage = require("./swap.page");


class DashBoardPage {

    //SolWallet in dashboard
    get solWallet() {
        return $('~changeWalletTypeNeon');
    }

    // NeonWallet in dashboard Sol Wallet logo

    get solWallet() {
        return $('~');
    }

    get menuTab() {
        return $('~solHomeDashboardBackIcon');
    }

    get tokensTab() {
        return $('~Tokens');
    }

    get historyTab() {
        return $('~History');
    }

    get copyClipboard() {
        return $('~copySolToClipboard');
    }
    // Scan QR code
    get nftBtn() {
        return $('~receiveNFTbtn');
    }
    get menuCancelbtn() {
        return $('~SolDrawerClose')
        //android.view.ViewGroup[@content-desc="SolDrawerClose"]/android.view.ViewGroup
    }

    //dashboard token tab bottom SOL send sol token
    get sendSolToken() {
        return $('~sendSolToken');
    }
    get solLogoDash() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }

    get walletName() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]')
    }

    get holdlingValueText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]');
    }

    get holdlingValueAmount() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[3]');
    }
    get() {
        return $('');
    }
    

    get sendSolToken() {
        return $('~sendSolToken');
    }
    get create_Viewwallet() {
        return $('~CREATEORVIEWWALLET');
    }

    get devnetDash() {
        const devDash = 'new UiSelector().text("Solana - Devnet").className("android.widget.TextView")'
        const devDash1 = $(`android=${devDash}`)
        return devDash1;
    }
    get mainnetDash() {
        const mainDash = 'new UiSelector().text("Solana - Mainnet").className("android.widget.TextView")'
        const mainDash1 = $(`android=${mainDash}`)
        return mainDash1;
    }

    //android.view.ViewGroup[@content-desc="CREATEORVIEWWALLET"]/android.widget.TextView
    // Need elements Wallet Name, Holding value , Refresh 

    // get neonWallet() {
    //     return $('~');
    // }


    // Create view wallet in wallets
    get firstWallet() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[1]/android.widget.TextView[1]');
    }
    get secondWallet() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[2]/android.widget.TextView[1]');
    }
    get thirdWallet() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[3]/android.widget.TextView[1]');
    }
    get fourthWallet() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[4]/android.widget.TextView[1]');
    }

    // Wallet widget

    get firstWalletwidget() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[1]/android.view.View');
    }
    get secondWalletwidget() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[2]/android.view.View');
    }
    get thirdWalletwidget() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[3]/android.view.View');
    }
    get fourthWalletwidget() {
        return $('(//android.view.ViewGroup[@content-desc="changeActiveAccount"])[4]/android.view.View');
    }


// Creat wallet In Create/View Wallet

get ceate_WalletBtn() {
    return $('//android.view.ViewGroup[@content-desc="createSolWallet"]/android.widget.TextView');
}


    
    async verifySolDash() {
        await this.devnetDash.waitForDisplayed({ timeout: 120000 })
        await expect(this.devnetDash).toBeDisplayed();
    }

    async verifySolDashMainNet() {
        await this.mainnetDash.waitForDisplayed({ timeout: 120000 })
        await expect(this.mainnetDash).toBeDisplayed();
    }

    async verifyHistorytab() {
        await expect(this.historyTab).toBeDisplayed();
    }

    async verifyTokentab() {
        await expect(this.tokensTab).toBeDisplayed();
    }
    async verifyCreate_Viewwallet() {
        await expect(this.create_Viewwallet).toBeDisplayed();
    }

    // Display function
    async verifymenuoption() {
        await (await this.menuTab).waitForDisplayed({ timeout: 5000 });
        await expect(this.menuTab).toBeDisplayed();
    }
    async verifyWalletName_SolLogo() {
        await expect(this.walletName).toBeDisplayed();
        await expect(this.solLogoDash).toBeDisplayed();
    }
    async verifyCopyclipboardAndQRcode() {
        await expect(this.copyClipboard).toBeDisplayed();
        await expect(this.nftBtn).toBeDisplayed();
    }
    async verifyHoldingTextAndValue() {
        await expect(this.holdlingValueText).toBeDisplayed();
        await expect(this.holdlingValueAmount).toBeDisplayed();
    }


    // Click function
    async clickMenuoption() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await expect(this.menuTab).toBeDisplayed();
        await (await this.menuTab).click();
    }
    async clickMenuCancelBtn() {
        await (await this.menuCancelbtn).waitForDisplayed({ timeout: 60000 });
        await expect(this.menuCancelbtn).toBeDisplayed();
        await (await this.menuCancelbtn).click();
    }

    async devNetworkChange() {
        await (this.menuTab).waitForDisplayed({ timeout: 60000 });
        await this.menuTab.click();
        await menutabsPage.dashboardNetworkTab.click();
        await menutabsPage.devNetworkTab.click();
        await menutabsPage.menuCancelButton.click();
        await browser.pause(5000)

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
    }
    async mainNetworkChange() {
        await (this.menuTab).waitForDisplayed({ timeout: 60000 });
        await this.menuTab.click();
        await menutabsPage.dashboardNetworkTab.click();
        await menutabsPage.mainNetworkTab.click();
        await menutabsPage.menuCancelButton.click();
        await browser.pause(5000)

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
    }


    async clickCreate_View_Wallet() {
        await (this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });
        await this.create_Viewwallet.click();
    }

    async clickFirst_Wallet() {
        await (this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });
        await this.create_Viewwallet.click();
        await this.firstWallet.click();
    }
    async clickSecond_Wallet() {
        await (this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });
        await this.create_Viewwallet.click();
        await this.secondWallet.click();
    }
    async clickThird_Wallet() {
        await (this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });
        await this.create_Viewwallet.click();
        await this.thirdWallet.click();
    }
    async clickFourth_Wallet() {
        await (this.create_Viewwallet).waitForDisplayed({ timeout: 10000 });
        await this.create_Viewwallet.click();
        await this.fourthWallet.click();
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
module.exports = new DashBoardPage();