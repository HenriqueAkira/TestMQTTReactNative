# TestMQTTReactNative
Test repository to integrate React Native with MQTT protocol, using ioticos.org broker

in node_modules/sp-react-native-mqtt/index.d.ts, in "declare namespace mqtt", add "auth?: boolean, user?: string, pass?: string" params if your broker needs an authentication.
