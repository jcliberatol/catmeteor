  Meteor.subscribe('itemspub');
  
  if(Meteor.startup()){
        Session.set("currentItem", Items.findOne({},{item:1}));
  }

