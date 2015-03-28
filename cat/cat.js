Items = new Mongo.Collection("items");

if (Meteor.isClient) {
  if(Meteor.startup()){
        Session.set("currentItem", Items.findOne({},{item:1}));
  }
  Template.body.helpers({
  items: function() {
    return Items.find({});
  },
  item: function() {
  var t = Session.get("currentItem");
  console.log(t);  
  return Items.findOne(t);    
  },
    registering: function () {
    return (Session.get("currentsection")=="registering");
  },  
  });
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
  Template.body.events({
  "submit .new-item": function(event){
  var itemtitle = event.target.itemtitle.value;
    var itemtext = event.target.itemtext.value;
  Meteor.call("additem",itemtitle,itemtext);
  event.target.itemtext.value = "";
  event.target.itemtitle.value = "";
  return false;
  },
  
    "submit .new-option": function(event){
      var opt = event.target.option.value;
      Meteor.call("addoption",this._id,opt);
      event.target.option.value = "";
      return false;
  },
    "click .itemregister": function(){
    if(Session.get("currentsection")=="registering")
      {
      Session.set("currentsection","");
      }
    else
      {
      Session.set("currentsection","registering");
      }
  },
  });

  Template.itemtitle.events({
  "click .delete": function(){
    Meteor.call("deleteitem",this._id);
  },
  "click .text": function(){
    Session.set("currentItem",this._id);
  }
  });

  Template.fullitem.events({
    "click .delete": function(event){
      var name = event.target.name;
      var str = String(this);
      Meteor.call("deleteoption",name,str);
    }
  });
}

Meteor.methods({
  additem: function(title,text){
    Items.insert({
      itemtitle : title,    
      itemtext : text,
      options : []
   });
  },
  deleteitem: function(id){
    Items.remove(id);
  },
  addoption: function(id,option){
    console.log("option added");
    Items.update({_id:id},{$push: {options : option}});
  },
  deleteoption: function(item_id,option){
      Items.update({_id:item_id},{$pull:{options:option}});
  },
});

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
