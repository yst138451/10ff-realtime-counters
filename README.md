# Unofficial Realtime WPM Counter for 10FF
*A self-contained script for "injecting" additional functionalities on 10FF. It's all about improved typing experience.*

![Screenshot 1](/src/assets/images/scrshot_01.png "Showing WPM counter at top right corner.")

Results might not be in perfect sync since we're calculating the scores client-side while the final result, server-side; but it's usually only a few CPMs off, thus should still be reliable in giving you a quick heads-up on your potential achievement during the test.

## 💠 Features
- Realtime WPM counter (for sure).
- Beer-filling-up progress bar.  
    **Note**: Click on the countdown timer to turn it on/off and type on, undistracted!

## 🔧 Configurations (optional)
Head over to `src` folder and open up the [`config.json`](/src/config.json) file, make your desired changes and reproduce the target script by running `npm start`.

Default options:
```json
{
  "wpmCounter": {
    "styles": {
      "color": "#de1531",
      "fontSize": "1.3em",
      "fontFamily": "Roboto, monospace"
    }
  },
  "progressBar": {
    "fillColor": "rgba(210, 150, 122, 0.2)"
  }
}
```
The `styles` options are essentially the [common CSS properties][link-css-prop] which let you further customize the counters look.

## ❓ How to use
#### [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) (recommended for regular use)

To create one, do the following:
1. Run `npm start` (non-programming users can ignore this step), then
1. Locate the output file (called "[**10ff-realtime-counters.min.js**][script-file]") inside the [`dist`](/dist/) folder.
1. Copy the whole script text to clipboard.
1. Fire up your favorite browser of choice (e.g. Chrome) and hit <kbd>Ctrl+Shift+B</kbd> or <kbd>Command+Shift+B</kbd> on Mac to [display the bookmark bar][bookmark] (if you haven't already).
1. Add a new bookmark, name it and in the URL field, paste the script you copied earlier prefixed with `javascript:` protocol, like so:

    ```
    javascript:(paste_the_copied_script_here)
    ```

1. At this point, go to the [10FF site][10ff], click on this bookmark and enjoy! :)

#### Console Inject (the simplest, for one-off use)
Bring up the browser console window on 10FF website by pressing <kbd>F12</kbd> for Windows or <kbd>Cmd+Option+J</kbd> for Mac, select the "Console" tab, paste the script into the text field, hit <kbd>Enter</kbd>, and voila!

#### Chrome Extension
Coming soon!

## 📜 License
[MIT](/LICENSE)

[10ff]: https://10fastfingers.com/
[bookmark]: https://support.google.com/chrome/answer/188842?co=GENIE.Platform%3DDesktop&hl=en
[script-file]: /dist/10ff-realtime-counters.min.js
[link-css-prop]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
