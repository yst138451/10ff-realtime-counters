# Unofficial Realtime WPM Counter for 10FF
*A self-contained script for "injecting" additional functionalities on 10FF. It's all about improved typing experience.*

![Screenshot 1](/src/assets/images/scrshot_01.png "Showing WPM counter at top right corner.")

Results might not be in perfect sync since we're calculating the scores client-side while the end result, server-side; but it's usually only a few CPMs off. It should still be reliable in giving you a quick heads-up on your possible achievement during the test.

## 🌟 Features
- Realtime WPM counter (for sure).
- Beer-filling-up progress bar.  
    **Note**: Click on the default countdown timer to show/hide it and type on with this!

## ❓ How to use
### 🔖 [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet)
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

### 🚀 Chrome extension
Coming soon!

### 📜 License
[MIT](/LICENSE)

[10ff]: https://10fastfingers.com/
[bookmark]: https://support.google.com/chrome/answer/188842?co=GENIE.Platform%3DDesktop&hl=en
[script-file]: /dist/10ff-realtime-counters.min.js
