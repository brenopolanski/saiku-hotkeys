# Saiku Hotkeys [![Build Status](https://travis-ci.org/brenopolanski/saiku-hotkeys.svg?branch=master)](https://travis-ci.org/brenopolanski/saiku-hotkeys)

### Hotkeys for Saiku UI

> In computing, a keyboard shortcut is a series of one or several keys that invoke a software or operating system operation (in other words, cause an event) when triggered by the user.
>
> – Wikipedia

[Saiku](http://www.meteorite.bi/saiku) is an open source analytics client developed by [Meteorite BI](http://www.meteorite.bi/). A user interface for the analytical tool.

## Usage

1. Include **HotKeys** in plugins folder:

	
  ```
  ├── saiku-ui/
  │   └── js/
  │       └── saiku/
  │           └── plugins/
  │               └── HotKeys/
  │                   └── js/
  │                       └── jquery.hotkeys.js
  │                       └── backbone-hotkeys.js
  │                   └── plugin.js
  ```

2. Edit the file saiku-ui/index.html, insert the code below:

	```html
	<!-- Dependencies -->
	<script type="text/javascript" src="js/saiku/plugins/HotKeys/js/jquery.hotkeys.js" defer></script>
	<script type="text/javascript" src="js/saiku/plugins/HotKeys/js/backbone-hotkeys.js" defer></script>
	<script type="text/javascript" src="js/saiku/plugins/HotKeys/plugin.js" defer></script>
	```
	> look for ***Saiku plugins*** comment in index.html.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request  :)

English is the universal language nowadays, so please don't create or comment on issues using another language.
	
## History

For detailed changelog, check [Releases](https://github.com/brenopolanski/saiku-hotkeys/releases).

## Credits

I gratefully acknowledge the following open source project:

* [Saiku UI](https://github.com/OSBI/saiku-ui) - A user interface for the Saiku analytical tool (Apache license version 2).
* [jQuery.Hotkeys](https://github.com/jeresig/jquery.hotkeys) - jQuery Hotkeys lets you watch for keyboard events anywhere in your code supporting almost any key combination.
* [Backbone-hotkeys](https://github.com/rpocklin/backbone-hotkeys) - Integrates hotkeys.js with backbone for dead-easy keymapping (MIT license).

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
