Meteor.publish('itemspub', function(){
      // code goes here
      return Items.find({});
});

Meteor.startup(function () {});
