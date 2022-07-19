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

    // SolWallet in dashboard Neon Wallet logo

    get neonWallet() {
        return $('~goToNeonWallet');
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
get menuCancelbtn(){
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
        const walletSOL = await $(`android=${walletSol}`)
        await walletSOL.waitForDisplayed({timeout:120000})
        await expect(walletSOL).toBeDisplayed();
    }
    async verifyNeonDash() {
        //await this.solWallet.waitForDisplayed({ timeout: 60000 });
        const walletNeon = 'new UiSelector().text("NEON Wallet").className("android.widget.TextView")'
        const walletNEON = await $(`android=${walletNeon}`)
        await walletNEON.waitForDisplayed({timeout:120000})
        await expect(walletNEON).toBeDisplayed();
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
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await expect(this.menuTab).toBeDisplayed();
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

    // Clickable function
    async verifyCopyclipboardAndQRcode_Clickable(){
        await expect(this.copyClipboard).toBeClickable();
        await expect(this.nftBtn).toBeClickable();
    }
    async verifyNeonWalletClickable() {
        await expect(this.neonWallet).toBeClickable();
    }

    async verifyHistorytabClickable() {
        await expect(this.historyTab).toBeClickable();
    }

    async verifyTokentabClickable() {
        await expect(this.tokensTab).toBeClickable();
    }
    async verifyCreate_ViewwalletClickable() {
        await expect(this.create_Viewwallet).toBeClickable();
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


 async () {

}

   async() {
}




}
module.exports = new DashBoardPage();