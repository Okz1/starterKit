import detectBrowser from './utils/detectBrowser';
import isMobile from './utils/isMobile';
import removeHoverOnMobile from './utils/removeHoverOnMobile';

$(document).ready(() => {
  detectBrowser();
  removeHoverOnMobile();

  if (isMobile()) {
    $('body').addClass('mobile');
  }
});
