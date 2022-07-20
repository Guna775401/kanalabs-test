class NeonDashboardPage {


    // SolWallet in dashboard Neon Wallet logo
    get neonWallet() {
        return $('~goToNeonWallet');
    }

    get neonWalletMenuTab() {
        return $('~setDrawerOpen');
    }
    // incase use this unnecessery  Neon Wallet Dashboard in SOL Logo
    get solWallet() {
        return $('~changeWalletTypeNeon');
    }
    get neonWalletTokenTab() {
        return $('~Tokens');
    }
    get neonHistoryTab() {
        return $('~History');
    }
    get neonCreate_ViewWallet() {
        return $('~createOrViewValletNeon')
    }
    get neonScanQR() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup')
    }

    get neonSendBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup')
    }
    get neonFaucetBtn() {
        return $('~addFaucetNeon')
    }

    get neonCopyClipboard() {
        return $('~copyToClipboardNeon');
    }

    // need to element
    get neonNftBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }
    //dashboard token tab bottom SOL send sol token
    get sendNeonToken() {
        return $('~sendTokenNeon');
    }


    // Display function

    async verifyNeonDash() {
        //await this.solWallet.waitForDisplayed({ timeout: 60000 });
        const walletNeon = 'new UiSelector().text("NEON Wallet").className("android.widget.TextView")'
        const walletNEON = await $(`android=${walletNeon}`)
        await walletNEON.waitForDisplayed({ timeout: 120000 })
        await expect(walletNEON).toBeDisplayed();
    }

    async clickNeonWalletDash() {
        await browser.pause(10000)
        await expect(this.neonWallet).toBeDisplayed();
        await (await this.neonWallet).click();
    }
    async verifyNeonWallet() {
        await expect(this.neonWallet).toBeDisplayed();
    }

    async verifyTokensNeon() {
        await expect(this.neonWalletTokenTab).toBeDisplayed();
    }
    async verifyHistoryNeon() {
        await expect(this.neonHistoryTab).toBeDisplayed();
    }
    async verifyCreate_ViewWallet() {
        await expect(this.neonCreate_ViewWallet).toBeDisplayed();
    }
    async verifySOLWallet() {
        await browser.pause(3000)
        await expect(this.solWallet).toBeDisplayed();
    }

    async verifyNeonWalletMenuOption() {
        await expect(this.neonWalletMenuTab).toBeDisplayed();
    }
    async verifyNeonWalletCopyClipboard() {
        await expect(this.neonCopyClipboard).toBeDisplayed();
    }
    async verifyNeonWalletScanQR() {
        await expect(this.neonScanQR).toBeDisplayed();
    }

    async verifyNeonWalletSendBtn() {
        await expect(this.neonSendBtn).toBeDisplayed();
    }
    async verifyNeonWalletFaucetBtn() {
        await expect(this.neonFaucetBtn).toBeDisplayed();
    }


    async verifyNeonWalletHoldingValueTxt() {
        const holdingValue = 'new UiSelector().text("Holding value").className("android.widget.TextView")'
        const holdingValueTxt = await $(`android=${holdingValue}`)
        await expect(holdingValueTxt).toBeDisplayed();
    }



    // Click function
    async clickNeonWallet() {
        await browser.pause(3000)
        await (this.neonWallet).click();
    }
    async clickNeonWalletMenuOption() {
        await browser.pause(3000)
        await (await this.neonWalletMenuTab).click();
    }







}
module.exports = new NeonDashboardPage();