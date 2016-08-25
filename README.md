# Code Coverage of ES Modules

Example showing how to achieve **coverage of ES Modules** using [Babel 6](https://babeljs.io), [Mocha](https://mochajs.org) and [Nyc](https://github.com/istanbuljs/nyc)/[Istanbul](https://istanbul.js.org).
The code can also contain [Flow](https://flowtype.org/) type annotations.


---

## /src/node_modules

Sources are located in `src`, especially in `/src/node_modules`.

Note that the name "**node_modules**" doesn't imply "thirdparty from NPM", it's just [how Node resolves paths](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders) (hence why NPM uses it).

That's why `/src/application.js` and modules in `/src/node_modules` subfolders are able to import other modules using clean paths like `components/hello` instead of fragile paths like `../../../components/hello/hardcoded.js` without the need for aliasing folder hacks in every tool of your stack.


---

## Mocha tests

Tests are located with the module they test, are named `modulename.tests.js`, and are run using `npm test`.

You can change the location of the tests in the root `package.json` settings (if you prefer a centralized `test` folder for example).

You can change the Babel plugins and presets in `mocha-babel-hook.js`.


---

## Coverage

The coverage report is outputted in `/coverage`, and is run using `npm run coverage`.

You can change the output folder and reporters in the root `package.json` settings.

You can change the Babel plugins and presets in `nyc-babel-hook.js`.


---

## Linting

You can run manually **Eslint** on the codebase using `npm run lint`, and **Flow** using `npm run typecheck`.

I'd also recommend integrating them to your favorite IDE, so you get immediate feedback from the linters.
[Sublime Text](http://www.sublimetext.com), for example, has `Sublimelinter-contrib-eslint` and `Sublimelinter-flow` extensions.


---

