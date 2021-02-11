# Nightwatch tests

*[← Back](../../README.md)*

## Background

[Nightwatch.js](https://nightwatchjs.org/guide) is used to run functional tests
with headless Chrome on Tugboat.

## Requirements
To run the tests locally, the following software is required:

* [Node.js](https://nodejs.org/)
* [yarn](https://yarnpkg.com/)
* [Chrome](https://www.google.com/chrome/) (v88 or higher) or [Chromium](https://www.chromium.org/)

## Installation
To configure your local development for running nightwatch, run the following
commands from the `/tests/nightwatch` directory:

```
npm install
cp example.nightwatch.json nightwatch.json
```

Change the `launch_url` in `nightwatch.json` to match your local environment
(changing `your-local-url.site` to the appropriate URL):

```
sed -i "s/example.local/your-local-url.site/" "nightwatch.json"
```

NOTE: The tests assume that the admin user has the password admin. If that is
different on your local development environment you would either need to
change it in your local environment or (temporarily) alter the tests.


## Run the tests

To run the tests execute the following command from the `/tests/nightwatch`
directory:

```
npm test
```

## Writing Tests

Consult the [developer documentation](https://nightwatchjs.org/guide/) and
[API documentation](https://nightwatchjs.org/api/) to learn about how to write
Nightwatch.js tests. Tests are located in the `/tests/nightwatch/tests`
directory. Custom commands are located in the
`/tests/nightwatch/custom_commands` directory.


## Debug the tests

To debug Nightwatch tests, it may be helpful to use the following command,
because `debugger;` alone won't work with Node (because it is asynchronous):

```
browser.perform(() => { debugger; })
```

For more on debugging, check out this
[10 minute video](https://www.youtube.com/watch?v=SVOC_c_vOTs).

*[← Back](../../README.md)*
