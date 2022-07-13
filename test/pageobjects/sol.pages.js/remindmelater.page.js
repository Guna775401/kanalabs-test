class RemindMeLaterPage{

    get remindMeLaterBtn(){
        return $('~openReminMeLater');
    }
get skipNowBtn(){
    return $('~skipNow');
}
// Need for element
get checkBox(){
    return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup');
}
get secureNowBtn(){
    return $('~secureNowCheckBox');
}   


async remindmelater() {
await (await this.remindMeLaterBtn).waitForDisplayed({timeout:240000});
await (await this.remindMeLaterBtn).click();
await (await this.checkBox).click();
await (await this.skipNowBtn).click();
}

open(){
    return super.open('remindmelater');
}


}
module.exports = new RemindMeLaterPage();