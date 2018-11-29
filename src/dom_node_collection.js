class DomNodeCollection{
  constructor(elements){
    this.elements = elements;
    
  }
 
}


DomNodeCollection.prototype.html = function(html){
  if (typeof html === "string") {
      this.each((node) => {
        node.innerHTML = html;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
};

DomNodeCollection.prototype.empty = function(){
  this.html('');
};

DomNodeCollection.prototype.on = function(eventName, callback){
  this.each((node) => {
     node.addEventListener(eventName, callback);
     const eventKey = `jqliteEvents-${eventName}`;
     if (typeof node[eventKey] === "undefined") {
       node[eventKey] = [];
     }
     node[eventKey].push(callback);
   });
};
DomNodeCollection.prototype.attr = function(){
  
};
DomNodeCollection.prototype.addClass = function(){
  
};
DomNodeCollection.prototype.removeClass = function(){
  
};






module.exports = DomNodeCollection;
