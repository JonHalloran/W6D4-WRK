const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function(selector) {
  let collection = [];
  if (selector instanceof HTMLElement) {
    collection.push(new DOMNodeCollection([selector]));
  }
  let $l = document.querySelectorAll(selector);
  // this.$l = $l;

  return new DOMNodeCollection(document.querySelectorAll(selector));
};
