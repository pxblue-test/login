# Angular and React Examples
## Running Angular or React examples
Clone the repository.
```
git clone https://github.com/pxblue/[repository-name] -b [angular or react]
```
Navigate to the project directory and install the necessary dependencies then run the project:

```
cd <project>
yarn
```
```
yarn start
```

All of our code examples can also be found on [Stackblitz](http://www.stackblitz.com/@px-blue), which allows you to make changes to a project and see the updates to the rendered application in real-time.

For additional information read our [Angular Guide](https://pxblue.github.io/development/frameworks-web/angular) or our [React Guide](https://pxblue.github.io/development/frameworks-web/react)

# Ionic Examples
## Running Ionic examples
Clone the repository.
```
git clone https://github.com/pxblue/[repository-name] -b ionic
```

Navigate to the project directory and install the necessary dependencies then run the project:

```
cd <project>
yarn
```
```
ionic serve
```
In order to run the application on a device simulator, first add the platforms:
```
ionic cordova platform add ios
ionic cordova platform add android
```

Then, build the platform code:
```
ionic cordova build ios
ionic cordova build android
```

Once the platform code has been built, you can run the example in the simulator directly from the command line:
```
ionic cordova run ios
ionic cordova run android
```
For additional information read our [Ionic Guide](https://pxblue.github.io/development/frameworks-mobile/ionic)

> If you are using the latest version of Xcode, you may have to use an additional flag for the iOS app to properly run on the simulator: ```ionic cordova run ios --buildFlag="-UseModernBuildSystem=0"```

> Avoid opening the Android project in Android Studio as it can cause issues with Gradle versions being out of sync with Ionic.

# React-Native Examples
## Running React Native Examples
To run this example, first clone the repository. Each of our example projects comes with a branch for each supported framework. You can choose which branch to use when you clone the repository (or you can switch after cloning as well):

```
git clone https://github.com/pxblue/[repository-name] -b reactnative
```

Navigate to the project directory and install the necessary dependencies then run the project.

```
cd <project>
yarn
```
```
yarn start
```

This will present you with several options for testing the application (such as using a local simulator or connected device). Using a local simulator is the simplest option and avoids the hassle of getting your computer and test device connected to the same network, configuring proxies etc.

For additional information read our [React Native Guide](https://pxblue.github.io/development/frameworks-mobile/react-native)

All of our React Native code examples can be found on [Expo-Snack](https://expo.io/snacks/@px-blue)