const lend_borrowPage = require("./lend_borrow.page");
const sendPage = require("./send.page");
const stakePage = require("./stake.page");
const swapPage = require("./swap.page");
const turboPage = require("./turbo.page");


class DashBoardPage {

    //SolWallet in dashboard
    get solWallet() {
        return $('~changeWalletTypeNeon');
    }

    // NeonWallet in dashboard
    get neonWallet() {
        return $('~goToNeonWallet');
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
    //dashboard token tab bottom SOL send sol token
    get sendSolToken() {
        return $('~sendSolToken');
    }
    get solLogoDash() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]');
    }
    get sendSolToken() {
        return $('~sendSolToken');
    }
    get create_Viewwallet() {
        return $('~CREATEORVIEWWALLET');
    }
    get holdlingValueText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]');
    }
    get holdlingValueAmount() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[3]');
    }



    //android.view.ViewGroup[@content-desc="CREATEORVIEWWALLET"]/android.widget.TextView
    // Need elements Wallet Name, Holding value , Refresh 

    // get neonWallet() {
    //     return $('~');
    // }

    async verifySolDash() {
        //await this.solWallet.waitForDisplayed({ timeout: 60000 });
        const walletSol = 'new UiSelector().text("Wallet").className("android.widget.TextView")'
        const walletSOL = await (await $(`android=${walletSol}`))
        await expect(walletSOL).toBeDisplayed();
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

    async verifymenuoption() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await expect(this.menuTab).toBeExisting();
    }

    async verifyNeonWallet() {
        await expect(this.neonWallet).toBeDisplayed();
    }
    async verifyCopyclipboardAndQRcode() {
        await expect(this.copyClipboard).toBeDisplayed();
        await expect(this.nftBtn).toBeDisplayed();
    }
    async verifyHoldingTextAndValue() {
        await expect(this.holdlingValueText).toBeDisplayed();
        await expect(this.holdlingValueAmount).toBeDisplayed();
    }








    async() {


    }


}
module.exports = new DashBoardPage();