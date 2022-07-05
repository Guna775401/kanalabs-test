
class SecureNowPage{


get start(){
    return $('~showSecureNow');
}
//Secure your wallet pharse Start

get secureStart(){
    return $('~showPhraseStart');
}

// But not Sure Element 
get eyeIcon(){
    return $('~flastListItems');
}
// Need for all seed pharse elements


get continue(){
    return $('~goToConfirmPhrase');
}

get copySeeds(){
    return $('~copySeedShowPhrase');
}

get backBtn(){
    return $('~goBackFromShowPhrase');
}

//confirm seed continue button
get continueBtn(){
    return $('~confrimSeedContinueBtn');
}

//confirm seed back button
get confirmseeedbackBtn(){
    return $('~confrimSeedBackBtn');
}
get finishBtn(){
    return $('~goToHomeDashboardFromSuccessProtection');
}



}

module.exports = new SecureNowPage();



// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get flashAlert () {
//         return $('#flash');
//     }
// }

// module.exports = new SecurePage();
