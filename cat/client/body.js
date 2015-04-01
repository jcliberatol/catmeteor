
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

    tegistering: function () {
    return (Session.get("currentsection")=="tegistering");
  },

    mtesting: function() {
    return (Session.get("currentsection")=="mtesting");
  },
  });



  Template.body.events({
  
  "click #taketest": function(){
    if(Session.get("currentsection")=="mtesting")

      {
      Session.set("currentsection","");
      }
    else
      {
      Session.set("currentsection","mtesting");
      }
  }, 
    
  "click #testregister": function(){
    if(Session.get("currentsection")=="tegistering")
      {
      Session.set("currentsection","");
      }
    else
      {
      Session.set("currentsection","tegistering");
      }
  },

    "submit #new-item": function(event){
  var itemtitle = event.target.itemtitle.value;
    var itemtext = event.target.itemtext.value;
  Meteor.call("additem",itemtitle,itemtext);
  event.target.itemtext.value = "";
  event.target.itemtitle.value = "";
  return false;
  },
  
    "click #itemregister": function(){
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
