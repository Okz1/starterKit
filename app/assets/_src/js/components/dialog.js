import '@fancyapps/fancybox/dist/jquery.fancybox';

export default class Dialog {
  constructor(options) {
    this.modalId = `dialog${Date.now()}`;

    this.title = options.title ? options.title : 'Title';
    this.content = options.content ? options.content : 'Description';
    this.buttons = options.buttons ? options.buttons : [];
    this.modalConfig = options.modalConfig ? options.modalConfig : {};

    const defaultConfig = {
      type: 'html',
      src: this.render(),
    };

    this.config = $.extend({}, defaultConfig, this.modalConfig);
    this.config.afterLoad = this.addButtons();
  }

  render() {
    return `<div class="modal" id="${this.modalId}">
              <div class="modal__title">${this.title}</div>
              <div class="modal__descr"><p>${this.content}</p></div>
              <div class="modal__buttons"></div>
            </div>`;
  }

  addButtons() {
    if (this.buttons.length) {
      this.buttons.forEach((item) => {
        const button = $(`<button class="${item.className}">${item.text}</button>`);
        button.click(item.callback);
        setTimeout(() => {
          button.appendTo($(`#${this.modalId}`).find('.modal__buttons'));
        }, 0);
      });
    }
  }

  open() {
    $.fancybox.open(this.config);
  }
}
