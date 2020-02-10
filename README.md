
# React Native


### Material de Apoio
https://developer.android.com/guide
https://www.youtube.com/playlist?list=PLWz5rJ2EKKc8j2B95zGMb8muZvrIy-wcF


### Requisitos

* android studio
* node-v10.18.0-win-x64
  * npm i -g react-native-cli
  * npm i -g yarn
  * react-native init AwesomeProject
  * react-native run-android
  * react-native start



#### Outros componentes
https://react-native-elements.github.io/react-native-elements/docs/avatar.html


#### Menu
    yarn add  react-native-material-menu
https://reactnativeexample.com/material-menu-component-for-react-native/


#### Persistência
##### Storage
    yarn add  @react-native-community/async-storage
    react-native link @react-native-community/async-storage

##### Sqlite
    yarn add  react-native-sqlite-storage
    react-native link react-native-sqlite-storage


#### Navegação
    yarn add  react-native-gesture-handler react-navigation react-navigation-stack
https://facebook.github.io/react-native/docs/navigation


#### Câmera
    yarn add react-native-camera 
https://react-native-community.github.io/react-native-camera/docs/rncamera
https://github.com/react-native-community/react-native-camera

adicionar: app/build.gradle

    defaultConfig {
	    ...
	    missingDimensionStrategy 'react-native-camera', 'general'
    }


#### Lendo diretório
    yarn add react-native-fs 
https://github.com/itinance/react-native-fs


#### Vector Icons
    yarn add react-native-vector-icons 
    react-native link react-native-vector-icons
https://github.com/oblador/react-native-vector-icons#android


    yarn add native-base 
    yarn add react-native-vector-icons 
    yarn add navbar-native 
	
	

#### AppIcon
icon 200px - https://github.com/bamlab/react-native-make

    yarn add -D @bam.tech/react-native-make 
    react-native set-icon --path icon.png



#### SplashScreen
splash 3000px - https://github.com/bamlab/react-native-make/blob/master/docs/set-splash.md
https://github.com/crazycodeboy/react-native-splash-screen

    yarn add react-native-splash-screen 
    react-native link react-native-splash-screen
    react-native set-splash --path splash.png --resize center

    import SplashScreen from 'react-native-splash-screen';
    SplashScreen.hide();




#### Encoding
latin1 -> utf8 - https://www.npmjs.com/package/iconv-lite

    yarn add iconv-lite



    yarn add react-native-cheerio
(tem que entrar no module entities e trocar require("./maps/decode.json") por require("./decode.json") em todos) 
https://www.npmjs.com/package/react-native-cheerio




#### Scrapping
    yarn add buffer css-select dom-serializer entities htmlparser2-without-node-native lodash react-native-parse-html
    yarn add react-native-cheerio htmlparser2 events stream util
https://www.npmjs.com/package/react-native-cheerio


    yarn add jssoup
https://www.npmjs.com/package/jssoup



#### Notifications
    yarn add  react-native-push-notification
    react-native link react-native-push-notification
https://github.com/zo0r/react-native-push-notification

#### Notification_icon
https://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=image&source.space.trim=1&source.space.pad=0&name=ic_stat_notif
botar tudo nas pastas res/mipmap*


#### Build
https://facebook.github.io/react-native/docs/signed-apk-android#adding-signing-config-to-your-app-s-gradle-config

    keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    gradlew bundleRelease
    react-native run-android --variant=release

Quando nao estiver compilando porque nao consegue criar diretorios

    cd android
    gradlew clean
	
##### Logcat
    adb logcat | FIND /I "alertamultas" 
    adb logcat *:S ReactNative:V ReactNativeJS:V BackgroundTask:V


#### Caso não esteja no PATH
    set PATH="%PATH%;d:\node\;"
    PS:
    $env:Path += ";d:\node\;" 
