// Layout and positioning
const
  $row = $('#speedtest-main > div.row:first').css({
    display: 'flex',
    alignItems: 'center'
  }),

  $targetCol = $row.find('> div[class^="col-"]:last'),

  $container = $('<label class="wpm-container"/>')
    .text(' wpm')
    .css('float', 'right')
    .appendTo($targetCol),

  $wpmCounter = $('<span>0</span>')
    .css(__options.wpmCounter.styles)
    .prependTo($container);


const $progressBar = $('<div/>')
  .css({
    backgroundColor: __options.progressBar.fillColor,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '100%',
    left: 0
  })
  .appendTo($('#words').css('position', 'relative'));

try {
  let
    wpm = 0,
    progress = 0

  const
    duration = 60,

    threshold = {
      /** 
       * Keystrokes per word. 
       * @see https://10fastfingers.com/faq#words-per-minute
       */
      kpw: 5,
      /**
       * If you got this far, you're probably a cheater!
       */
      impossibility: 400
    };

  const
    _countdown = global.count_down,
    _restart = global.restart;

  global.restart = () => {
    $wpmCounter.text('0').parent().fadeIn();
    $progressBar.css('top', '100%');

    _restart();
  };

  global.count_down = () => {
    const
      $words = global.error_keystrokes / threshold.kpw,
      $now = duration - global.countdown;

    wpm = Math.round($words / ($now / duration));
    progress = (100 / duration) * countdown;

    if (wpm > 0 && wpm < threshold.impossibility) {
      $wpmCounter.text(wpm);
      $progressBar.css('top', `${progress}%`);
    }

    _countdown();

    if (global.setval === '') {
      $container.fadeOut();
    }
  }
}
catch (ex) {

}