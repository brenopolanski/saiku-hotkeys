/**
 * Saiku UI Hotkeys - v0.1.0
 *
 * Made by Breno Polanski <breno.polanski@gmail.com>
 * Under MIT License
 */

$(function() {
	var HotKeys = Backbone.View.extend({
		events: {
			'keyup[alt+n]': 'new_query',
			'keyup[alt+r]': 'refresh',
			'keyup[alt+o]': 'open_query',
			'keyup[alt+s]': 'save_query'
		},

		initialize: function(args) {
			// Keep track of parent workspace
			this.workspace = args.workspace;
		},

	    new_query: function() {
	        Saiku.tabs.add(new Workspace());
        	return false;
	    },

		refresh: function(e) {
			this.workspace.refresh(e);
	    },

	    open_query: function() {
	        this.workspace.toolbar.open_query();
	    },

	    save_query: function() {
			this.workspace.toolbar.save_query();
	    }
	});

	 /**
	  * Start Plugin
	  */
	Saiku.events.bind('session:new', function() {
		function new_workspace(args) {
			if (typeof args.workspace.hotKeys === 'undefined') {
				args.workspace.hotKeys = new HotKeys({ workspace: args.workspace });
			}
		}

		// Add new tab content
		for (var i = 0, len = Saiku.tabs._tabs.length; i < len; i += 1) {
			var tab = Saiku.tabs._tabs[i];
			new_workspace({
				workspace: tab.content
			});
		}
	});
});