Meteor.methods({
  insertTag : function(item,tag){
    Items.update({_id:item},{$push: {itemtags : tag}});
  },
  choiceOption : function(item,option){
  Items.update({
    _id:item
    },
    {
    $set: {
      chosenitem:option
    }
  });
  },

  additem: function(title,text){
    Items.insert({
      itemtitle : title,    
      itemtext : text,
      options : [],
      chosenitem : "",
      itemstate : "creado",
      itemtags : []
   });
  },
  deleteitem: function(id){
    Items.remove(id);
  },
  addoption: function(id,option){
    console.log("option added");
    Items.update({_id:id},{$push: {options : option}});
  },
  deletetag: function(item_id,tag){
    console.log("callin cats to delete dtis")
      Items.update({_id:item_id},{$pull:{itemtags:tag}});
  },
  deleteoption: function(item_id,option){
      Items.update({_id:item_id},{$pull:{options:option}});
  },
});

