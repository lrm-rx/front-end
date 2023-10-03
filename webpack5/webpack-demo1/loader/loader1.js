const { stringifyRequest } = require("loader-utils");
function loader(source) {
  // console.log(this.data);
  return source;
}

loader.pitch = function (remainingRequest, previousRequest, data) {
  // console.log(11, remainingRequest, 22, previousRequest, 33, data);
  // data.name = 12;
  const modulePath = stringifyRequest(this, `!!${remainingRequest}`);
  const options = this.getOptions();
  return `
    var element = document.createElement("style");
    var attributes = ${JSON.stringify(options.attributes || {})};
    for(var key in attributes) {
      element.setAttribute(key, attributes[key])
    }
    var content = require(${modulePath})
    content = content.__esModule ? content.default : content;
    element.innerHTML = content;
    var parentEle = document.querySelector("head");
    parentEle.appendChild(element);
  `;
};

module.exports = loader;
