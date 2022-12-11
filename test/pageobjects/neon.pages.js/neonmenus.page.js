class NeonMenusPage {



// Network

    // need for element
    get neonDevNetwork() {
        return $('~');
    }

    get backBtn() {
        return $('~backButtonNeon');
    }



    // logout

    get neonLogout() {
        return $('~logoutNeon');
    }

    get neonYesLogout() {
        return $('~loginNeon');
    }
    get cancelBtn() {
        return $('~logoutModalShowNeon');
    }








}
module.exports = new NeonMenusPage();