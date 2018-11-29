
window.$1 = (arg) => {
  if (typeof arg === 'string'){
    return getNodesFromDom(arg);
  } else if (typeof arg === 'function') {
    return registerDocReadyCallback(arg);
  } else if (typeof arg === 'object' && arg instanceof HTMLElement){
      return new DomNodeCollection([arg]);
  }
};