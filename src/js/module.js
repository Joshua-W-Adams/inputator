/*!
 * Input.js
 * JavaScript component for generating input UI elements
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// N/A

/* ================================ Variables =============================== */

// clears input on key up (typing) operations from the stack que
let timeoutVariable;

/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  const element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault() {

}

function _onClickDefault(element) {
  // set default styling
  element.style.backgroundColor = 'rgba(206,230,253,1)';
  element.style.outline = 'none';
}

function _onFocusOutDefault(element) {
  // set default styling
  element.style.backgroundColor = '';
}

function _onKeyUpDefault() {

}

function _containerRenderer() {
  const e = {};
  e.className = 'inputjs-container';
  e.style = {
    position: 'relative',
    boxSizing: 'border-box',
    padding: '0 10px 0 10px'
  };
  return e;
}

function _iconRenderer() {
  const e = {};
  e.className = 'inputjs-container__icon';
  e.style = {
    opacity: '0.5'
  };
  return e;
}

function _inputRenderer() {
  const e = {};
  e.className = 'inputjs-container__input';
  e.name = 'search';
  e.placeholder = 'Input Search Value';
  e.style = {
    width: '100%',
    border: 'solid 1px rgba(51, 51, 51, 0.3)',
    borderRadius: '4px',
    textIndent: '30px',
    padding: '5px'
  };
  return e;
}

function _applyRender(element, properties) {
  const arr = Object.keys(properties);
  for (let i = 0; i < arr.length; i++) {
    const prop = arr[i];
    if (typeof properties[prop] === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }
  return element;
}

function _addInput(container, options) {
  const cnf = {
    renderer: options.renderer || _inputRenderer,
    onClick: options.onClick || _onClickDefault,
    onFocusOut: options.onFocusOut || _onFocusOutDefault,
    onHover: options.onHover || _onHoverDefault,
    onKeyUp: options.onKeyUp || _onKeyUpDefault
  };
  const e = _addElement(container, 'input');
  const render = cnf.renderer(e);
  _applyRender(e, render);
  // add events
  e.onclick = function onclick() {
    return cnf.onClick(e, _onClickDefault);
  };
  e.addEventListener('focusout', function onfocusout() {
    return cnf.onFocusOut(e, _onFocusOutDefault);
  });
  e.onmouseover = function onmouseover() {
    return cnf.onHover(e, _onHoverDefault);
  };
  e.onkeyup = function onkeyup() {
    clearTimeout(timeoutVariable);
    // add to javascript function que to prevent blocking of front end of
    // application
    timeoutVariable = setTimeout(function cb() {
      cnf.onKeyUp(e, _onKeyUpDefault);
    }, 500);
  };
  return e;
}

function _addInputIcon(container, options) {
  const cnf = {
    renderer: options.icon.renderer || _iconRenderer,
    innerHTML: options.icon.innerHTML || '&#x1f50d;'
  };
  const eContainer = _addElement(container, 'div');
  eContainer.style.display = 'inline-block';
  eContainer.style.boxSizing = 'border-box';
  eContainer.style.position = 'absolute';
  eContainer.style.top = '1.5px';
  eContainer.style.left = '15px';
  const e = _addElement(eContainer, 'div');
  e.innerHTML = cnf.innerHTML;
  const render = cnf.renderer(e);
  _applyRender(e, render);
  return e;
}

function _addInputContainer(frag) {
  const e = _addElement(frag, 'div');
  const render = _containerRenderer();
  _applyRender(e, render);
  return e;
}

/* ============================== Public Methods ============================ */

function init(options) {
  // Create DOM fragment
  const frag = document.createDocumentFragment();
  // add input container
  const container = _addInputContainer(frag, options);
  // add input icon
  _addInputIcon(container, options);
  // add input
  _addInput(container, options);
  // Append fragment to DOM
  const div = document.getElementById(options.div);
  div.appendChild(frag);
}

/* =========================== Export Public APIs =========================== */

export default {
  init
};
