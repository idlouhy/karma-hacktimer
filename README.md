karma-hacktimer
====================

Karma plugin integrating [turuslan/HackTimer](https://github.com/turuslan/HackTimer).


## Background
Google Chrome browser throttles the JavaScript timers in inactive tabs - see the [change in Chromium](https://codereview.chromium.org/6577021/patch/1/2). As a result, the minimum effective setTimeout/setInterval range is 1000ms.
This affects the Karma/Jasmine unit test setup run from command line (karma-cli) or IDE (IntelliJ Karma plugin) with the Chrome browser. If the Google Chrome browser window is minimized or the Karma tab is not active, the unit tests run very slowly.

## Installation
The plugin is not yet added to npm, so you need to install it directly:

```sh
$ npm install idlouhy/karma-hacktimer
```

## Usage
You need to enable the plugin in the Karma config frameworks section.

```js
// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: [<plugins>, 'hacktimer']
    })
}
```

The HackTimer plugin needs to be the last plugin in the framework section because this affects the order in which the plugins are loaded. The HackTimer plugin needs to be loaded before any other plugins and frameworks because it redefines the global setTimeout/setInterval functions.

## Information
See [turuslan/HackTimer](https://github.com/turuslan/HackTimer) for more information about HackTimer. Refer to http://karma-runner.github.io/0.13/config/plugins.html for more information about Karma plugins.
