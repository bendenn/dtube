Template.users.rendered = function() {
  $('.dropdownusers').dropdown({
    onChange: function(value,text,e) {
      console.log(value,text,e)
    }
  })
}

Template.users.helpers({
  userlist: function() {
    return Users.find()
  },
  mainUser: function() {
    return Users.findOne({username: Session.get('activeUsername')})
  }
});
