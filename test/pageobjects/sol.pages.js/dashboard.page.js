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
        return $('~setDrawerOpen');
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

    get nftBtn() {
        return $('~receiveNFTbtn');
    }
//dashboard token tab bottom SOL send sol token
    get sendSolToken() {
        return $('~sendSolToken');
    }
// Need elements Wallet Name, Holding value , Refresh  create wallet/view wallet



    // get neonWallet() {
    //     return $('~');
    // }














}
module.exports = new DashBoardPage();