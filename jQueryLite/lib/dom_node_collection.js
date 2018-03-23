class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(string) {
    if (string !== undefined) {
      this.array[0].innerHTML = string;
    }

    return this.array[0].innerHTML;
  }

  empty() {
    this.array.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(thing) {
    this.array.forEach(el => {
      el.innerHTML += thing;
    });
  }

  attr(attributeName, value) {
    this.array.forEach(el => {
      if (value !== undefined) {
        el.setAttribute(attributeName, value);
      }
    });
    return this.array[0].getAttribute(attributeName);
  }

  addClass(className) {
    this.array.forEach(el => {
      el.classList.add(className);
    });
    return className;
  }

  removeClass(className) {
    this.array.forEach(el => {
      el.classList.remove(className);
    });
    return this.array[0].class;
  }

  children() {
    let childrenArr = [];
    this.array.forEach(el => {
      let arr = Array.from(el.children);
      childrenArr = childrenArr.concat(arr);
    });

    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    this.array.forEach(el => {
      let parent = el.parentNode;
      console.log(parent);
      if (parentArr.indexOf(parent) === -1) {
        parentArr = parentArr.concat(parent);
      }
    });
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let out = [];
    this.array.forEach(el => {
      let found = el.querySelectorAll(selector);
      let foundArr = Array.from(found);
      out = out.concat(foundArr);
    });
    return new DOMNodeCollection(out);
  }

  remove() {
    this.array.forEach(el => {
      el.remove();
    });
    this.array = [];
  }

  on(event, func) {
    this.array.forEach(el => {
      console.log(el);
      el.addEventListener(event, func);
      el.setAttribute("callback", func);
    });
  }

  off(event) {
    this.array.forEach(el => {
      let calledFunction = el.getAttribute("callback");
      console.log(calledFunction);
      el.removeEventListener(event, calledFunction);
      el.removeAttribute("callback");
    });
  }
}

module.exports = DOMNodeCollection;
