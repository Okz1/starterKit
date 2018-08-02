const detectBrowser = () => {
  const userAgent = window.navigator.userAgent.toString();
  if (userAgent.toLowerCase().indexOf('safari') !== -1) {
    if (!(userAgent.toLowerCase().indexOf('chrome') > -1)) {
      $('body').addClass('safari');
    }
  } else if (userAgent.toLowerCase().indexOf('firefox') > -1) {
    $('body').addClass('firefox');
  } else if (userAgent.indexOf('MSIE ') > 0) {
    $('body').addClass('ie');
  } else if (userAgent.indexOf('Trident/') > 0) {
    $('body').addClass('ie');
  } else if (userAgent.indexOf('Edge/') > 0) {
    $('body').addClass('edge');
  }
};

export default detectBrowser;
