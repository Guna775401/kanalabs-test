Install Node.js (includes npm) check comment (node -v npm -v)
Java jdk (set path JAVA_HOME) & Environment Variable set
Install Android Studio (set path ANDROID_HOME)
Using Emulator Need to setup emulator in Android studio 
Install Appium inspector 
Install appium (npm install -g appium@next) check comment (appium -v)
Install appium doctor (npm i -g appium-doctor) check comment (appium-doctor --android) incase ADB is not show, Android studio

WebdriverIO Setup
mkdir Filename && cd Filename
create new project run this comment (npm init -y)

Setup configuration
run this comment (npx wdio config)
1. on my local machine
2. mocha
3. No
4. enter
5. spec
6. Service - ** appium **
7. enter

run this comment install ui automator (appium driver install uiautomator2)
Need to install this dependencies  (npm i @wdio/cli)

WebdriverIO configuration
Update capabilities

 platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:platformVersion": "",
    "appium:deviceName": "",
    "appium:appPackage": "com.kanaswapapp",
    "appium:appActivity": "com.kanaswapapp.MainActivity",
    "appium:udid": "",

** Run Command (npx wdio) **





