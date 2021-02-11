exports.command = function(username="admin", password="admin") {

  console.log(`Logging in as ${username}.`);

  this
    .url(this.launch_url + '/user/login')
    .waitForElementVisible('#edit-pass--description')
    .setValue('input[id=edit-name]', username)
    .setValue('input[id=edit-pass]', password)
    .click('input[id=edit-submit]')
    .waitForElementVisible('body.user-logged-in')

  return this;
};
