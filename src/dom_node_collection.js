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
  
};
DomNodeCollection.prototype.append = function(){
  
};
DomNodeCollection.prototype.attr = function(){
  
};
DomNodeCollection.prototype.addClass = function(){
  
};
DomNodeCollection.prototype.removeClass = function(){
  
};






module.exports = DomNodeCollection;
