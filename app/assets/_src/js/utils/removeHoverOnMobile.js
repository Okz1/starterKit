const removeHoverOnMobile = () => {
  const touch = 'ontouchstart' in document.documentElement
    || navigator.maxTouchPoints > 0
    || navigator.msMaxTouchPoints > 0;

  if (touch) {
    try {
      Object.keys(document.styleSheets).forEach((si) => {
        if ({}.hasOwnProperty.call(document.styleSheets, si)) {
          const styleSheet = document.styleSheets[si];
          if (!styleSheet.rules) return;

          for (let ri = styleSheet.rules.length - 1; ri >= 0; ri -= 1) {
            if (styleSheet.rules[ri].selectorText && styleSheet.rules[ri].selectorText.match(':hover')) {
              styleSheet.deleteRule(ri);
            }
          }
        }
      });
    } catch (ex) {
      throw new Error(ex);
    }
  }
};

export default removeHoverOnMobile;
