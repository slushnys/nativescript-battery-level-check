# Battery monitoring on Android and iOS

This is a code repository based on the comparison between flutter and nativescript implementation of cross-platform code to reach the desired result of battery level monitoring.

This is a NativeScript code repository, to check out the flutter one, please check: [https://github.com/slushnys/flutter/tree/master/examples/platform_channel_swift](https://github.com/slushnys/flutter/tree/master/examples/platform_channel_swift)

## Requirements

You need to install NativeScript which is pretty simple

```
npm install -g nativescript
```

There are more dependencies to it, for reference you can take a look at [https://docs.nativescript.org/start/quick-setup](https://docs.nativescript.org/start/quick-setup)

PS. If you have flutter, you already have most of the required packages for your system to work with NativeScript as well, this is vice versa to flutter.

## Run the app

To run android emulator execute

`tns run android`

iOS devices don't have a battery percentage checker or manipulator, therefore you would need to install the iOS app on your device.
