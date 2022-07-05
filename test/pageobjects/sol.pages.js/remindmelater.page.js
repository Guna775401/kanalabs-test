class RemindMeLaterPage{

    get remindMeLaterBtn(){
        return $('~openReminMeLater');
    }
get skipNowBtn(){
    return $('~skipNow');
}
// Need for element
get checkBox(){
    return $('~');
}
get secureNowBtn(){
    return $('~secureNowCheckBox');
}   


async remindmelater() {
await (await this.remindMeLaterBtn).click();
await (await this.checkBox).click();
await (await this.skipNowBtn).click();
}

open(){
    return super.open('remindmelater');
}


}
module.exports = new RemindMeLaterPage();