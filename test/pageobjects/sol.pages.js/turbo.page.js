class TurboPage{

    get turboBtn() {
        return $('~turboSol');
    }
    get startTurboBtn() {
        return $('~startTurboButton');
    }
    get backBtn() {
        return $('~goBackTurboIntro');
    }
    // need to some token so after try
    get sendSolToken() {
        return $('~lendSol');
    }
}
module.exports = new TurboPage();