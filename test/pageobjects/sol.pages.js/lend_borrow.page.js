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
    get () {
        return $('~lendSol');
    }
    get sendSolToken() {
        return $('~lendSol');
    }
// Need some elements 
async verifyLend_Borrowbtn () {
    await expect(this.lend_borrowBtn).toBeDisplayed();
}

}
module.exports = new Lend_BorrowPage();