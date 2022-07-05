class NeonDashboardPage {

    get neonWalletMenuTab() {
        return $('~setDrawerOpen');
    }
    // incase use this unnecessery 
    get solWallet() {
        return $('~changeWalletTypeNeon');
    }
   get neonWalletTokenTab() {
        return $('~Tokens');
    }
    get neonHistoryTab() {
        return $('~history');
    }

    get neonCopyClipboard() {
        return $('~copyToClipboardNeon');
    }

// need to element
    get neonNftBtn() {
        return $('~');
    }
//dashboard token tab bottom SOL send sol token
    get sendNeonToken() {
        return $('~sendTokenNeon');
    }



}
module.exports = new NeonDashboardPage();