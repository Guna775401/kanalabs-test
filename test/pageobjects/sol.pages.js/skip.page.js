class SkipPage {

    get skipNowBtn(){
        return $('~skipNow');
    }
    // Need for element
    get checkBox(){
        return $('~');
    }

}
module.exports = new SkipPage();