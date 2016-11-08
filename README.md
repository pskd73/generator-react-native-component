# generator-react-native-component
A simple generator which creates ReactNative component with basic files and structure

Install it using using npm
```
npm install -g yo generator-react-native-component
```

To create a component
```
yo react-native-component MyComponent
```
It will create a component with following files in the current directory
```
MyComponent
- index.js
- index.android.js
- index.ios.js
- styles.js
```

If you want to create the component under some other folder, use the ```--inside components``` option
```
yo react-native-component MyComponent --inside components
```
It will create the component inside ```components``` folder exists in current directory
