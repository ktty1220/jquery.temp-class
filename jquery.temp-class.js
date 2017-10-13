/*eslint-env jquery*/
/*eslint no-invalid-this:0*/
(function ($) {
  $.fn.tempClass = function (name, time, complete) {
    if (time instanceof Function) {
      complete = time;
      time = null;
    }

    return $(this).addClass(name)
    .delay(time || 1000)
    .queue(function (next) {
      $(this).removeClass(name);
      if (complete instanceof Function) {
        complete.call(this);
      }
      next();
    });
  };
})(jQuery);
