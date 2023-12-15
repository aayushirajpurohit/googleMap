## PLACE Mortgage Calculator

I'll give you an introduction on how to build this project and distribute using CodePush. Use videos below to accompany this written guide.

### iOS

[1. Cloning and building for the ios project](https://www.loom.com/share/76c4c5542e244c768044ffb67c616b56)

[2. Distributing](https://www.loom.com/share/f4e7f67b8ead4669a17f484b83aa87b5)

[3. Push updates using CodePush(GitLab)](https://www.loom.com/share/d0254fb91b584d869664378f969e802e)

[4. Push updates using CodePush(Manual)](https://www.loom.com/share/1f818cab04c84368b959b441b5a4ff67)

### Android

Coming soon...

### Running Locally

We will guide you through the following steps to run iOS/Android apps locally.

#### Requirements

- Node v16.0.0
- Android SDK
- Yarn (npm i -g yarn)
- Cocoapods

#### Quick start

Get up and running with our apps: 

**1. Clone the repo**

```shell
$ git clone git@gitlab.rmcloud.com:bkco/bkmortgage-react-native.git
```

**2. Switch Branch**

Switch to the current workspace branch

```shell
$ cd bkmortgage-react-native
$ git switch android-republish-place
```


**3. Install dependencies**

```shell
$ yarn install
```

```shell
$ cd ios && pod install
```

**4. Running in emulator**

iOS

```shell
$ react-native run-ios
```

Android

```shell
$ react-native run-android
```

#### Troubleshooting

Here are some commands to run if builds are crashing.

**iOS**

in Xcode
```
Menu Bar → Product → Clean
```

**Android**

```shell
$ cd android && ./gradlew clean
```

#### Congratulations! You now have both iOS and Android apps running!




### Build and Distribute

We integrated AppCenter to our project so you can build and distribute both iOS and Android apps using it.

**iOS**

You can build iOS project [here](https://appcenter.ms/orgs/BKCO-Mortgage/apps/Place/build/branches/android-republish-place)

**Android**

You can build Android project [here](https://appcenter.ms/orgs/BKCO-Mortgage/apps/Place-1/build/branches/android-republish-place)

![image](/uploads/ec012aab0c42774c7cb5d103431169f7/image.png)

After building projects successfully, you can see the Distribute button on the built page.

![image](/uploads/51815d7c7a32872f37be8e8fd3f0dc80/image.png)

You can distribute apps using that button. It should be easy for you.

### Update apps using CodePush (Gitlab ci)

You can push your codes with a tag and then the Gitlab runner will update your apps automatically.

### Update apps using CodePush (Manual)

We integrated react-native-code-push to the project. So you can update apps without re-pushing them to stores.  
Make sure you have read [Getting Started](https://docs.microsoft.com/en-us/appcenter/cli/) and log in to AppCenter  

**iOS**

```shell
$ cd appCenter && sh update-ios.sh
```

**Android**

```shell
$ cd appCenter && sh update-android.sh
```

