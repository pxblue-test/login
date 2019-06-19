# Login Example

[![CircleCI](https://circleci.com/gh/pxblue/login/tree/ionic.svg?style=shield)](https://circleci.com/gh/pxblue/login/tree/ionic)

This is a sample application showing how to build a basic login page with authentication and route blocking.

## Running the example
To run this example, first clone the repository. Each of our example projects comes with a branch for each supported framework. You can choose which branch to use when you clone the repository (or you can switch after cloning as well):

```
git clone https://github.com/pxblue/login -b ionic
```

Navigate to the project directory and install the necessary dependencies (note: our projects are set up to be run with yarn):

```
cd login
yarn
```

You can then run the example using a web browser using the command:
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

Then you can open the resulting project folder in Xcode or Android Studio to run the applciation on the simulator.
