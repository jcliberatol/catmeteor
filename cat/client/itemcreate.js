
  Template.regitem.helpers({
  items: function() {
    return Items.find({});
  },
  item: function() {
  var t = Session.get("currentItem");
  console.log(t);  
  return Items.findOne(t);    
  },
  
  });

  Template.itemtitle.events({
  "click #delete": function(){
    Meteor.call("deleteitem",this._id);
  },
  "click #text": function(){
    Session.set("currentItem",this._id);
  }
  });

  Template.fullitem.events({
    "submit .new-tag" : function(event){
    var tag = event.target.tag.value;
    Meteor.call("insertTag",this._id,tag);
    event.target.tag.value="";
    return false;
    },
    "click .deletet" : function(event){
    var name=event.target.name;
    var str = String(this);
    console.log(str);
    console.log(name);
    Meteor.call("deletetag",name,str);
    return false;
    },
    "click .delete": function(event){
      var name = event.target.name;
      var str = String(this);
      Meteor.call("deleteoption",name,str);
      return false;
    },
    "click .choice": function(event){
      var item = event.target.name;
      Meteor.call("choiceOption",item,String(this));
      return false;
  
    },
  
    "submit .new-option": function(event){
      var opt = event.target.option.value;
      Meteor.call("addoption",this._id,opt);
      event.target.option.value = "";
      return false;
  },
  });
