const isMobile = () => {
  const userAgent = window.navigator.userAgent.toString();
  if (userAgent.match(/Android/i)
    || userAgent.match(/webOS/i)
    || userAgent.match(/iPhone/i)
    || userAgent.match(/iPad/i)
    || userAgent.match(/iPod/i)
    || userAgent.match(/BlackBerry/i)
    || userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
};

export default isMobile;
