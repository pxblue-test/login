#PX Blue Login component example
This project demonstrates how to build a basic login page with authentication, route blocking, forgot password and registration workflows for web and mobile.

| Framework           | Status       | Live Examples  |
| ---------------- |--------------|------------------|
| Angular | [![CircleCI](https://circleci.com/gh/pxblue/login/tree/angular.svg?style=shield)](https://circleci.com/gh/pxblue/login/tree/angular) | [View on Stackblitz](https://stackblitz.com/edit/pxblue-login-angular)
| React | [![CircleCI](https://circleci.com/gh/pxblue/login/tree/react.svg?style=shield)](https://circleci.com/gh/pxblue/login/tree/react) | [View on Stackblitz](https://stackblitz.com/edit/pxblue-login-react)
| Ionic | [![CircleCI](https://circleci.com/gh/pxblue/login/tree/ionic.svg?style=shield)](https://circleci.com/gh/pxblue/login/tree/ionic) | [View on Stackblitz](https://stackblitz.com/@px-blue)
| React Native | [![CircleCI](https://circleci.com/gh/pxblue/login/tree/reactnative.svg?style=shield)](https://circleci.com/gh/pxblue/login/tree/reactnative) | [View on Snack](https://snack.expo.io/@px-blue/empty-states-reactnative)

# Angular Framework Example
## Running the Angular example locally
To run this example, first clone the repository.
```
git clone https://github.com/pxblue/login -b angular
```
Navigate to the project directory and install the necessary dependencies then run the project:

```
cd login
yarn
yarn start
```

For additional information read our [Angular Guide](https://pxblue.github.io/development/frameworks-web/angular) and our [Environment Setup](https://pxblue.github.io/development/environment)

# React Framework Example
## Running the React example locally
To run this example, first clone the repository.
```
git clone https://github.com/pxblue/login -b react
```
Navigate to the project directory and install the necessary dependencies then run the project:

```
cd login
yarn
yarn start
```

For additional information read our [React Guide](https://pxblue.github.io/development/frameworks-web/react) and our [Environment Setup](https://pxblue.github.io/development/environment)

# Ionic Framework Example
## Running the Ionic example locally
To run this example, first clone the repository.
```
git clone https://github.com/pxblue/login -b ionic
```

Navigate to the project directory and install the necessary dependencies then run the project:

```
cd login
yarn
ionic serve
```
To run on a device, add the platform then build and run the project:
```
ionic cordova platform add android | ios
ionic cordova build android | ios
ionic cordova run android | ios
```
For additional information read our [Ionic Guide](https://pxblue.github.io/development/frameworks-mobile/ionic) and our [Environment Setup](https://pxblue.github.io/development/environment)

> If you are using the latest version of Xcode, you may have to use an additional flag for the iOS app to properly run on the simulator: ```ionic cordova run ios --buildFlag="-UseModernBuildSystem=0"```

> Avoid opening the Android project in Android Studio as it can cause issues with Gradle versions being out of sync with Ionic.

# React Native Example
## Running React Native example locally
To run this example, first clone the repository.

```
git clone https://github.com/pxblue/login -b reactnative
```

Navigate to the project directory and install the necessary dependencies then run the project.

```
cd <project>
yarn
yarn start
```

This will present you with several options for testing the application (such as using a local simulator or connected device). Using a local simulator is the simplest option and avoids the hassle of getting your computer and test device connected to the same network, configuring proxies etc.

For additional information read our [React Native Guide](https://pxblue.github.io/development/frameworks-mobile/react-native) and our [Environment Setup](https://pxblue.github.io/development/environment)

All of our live React Native code examples can be found on [Snack](https://expo.io/snacks/@px-blue)