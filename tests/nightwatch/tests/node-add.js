/**
 * @file
 * Tests the ability to acces various node add forms.
 *
 * This was added when it was discovered that trying to access node add forms
 * on Tugboat resulted in an error.
 */

module.exports = {
  '@tags': ['nodes', 'content'],

  beforeEach: function(browser) {
    browser.login();
  },

  'Node Add Forms' : browser => {

    browser

      // Test access to the page node add form.
      .url(browser.launch_url + '/node/add/page')
      .waitForElementPresent('.page-title', 200000)
      .assert.containsText('.page-title', 'Create Page')

    browser.end();
  }
}

