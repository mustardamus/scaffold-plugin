# Scaffold jQuery Project

This is a little collection of tools that help me to speed up jQuery Plugin Development.


## Features

 * Maintain documentation in one place, this `README.md`
 * Parse the markdown and generate HTML documentation with live demos
 * Create standalone HTML documentation (manage file dependencies) 
 * Pack the standalone HTML documentation for Download Archives
 * Baked in QUnit testing
 * Stylesheet of the HTML documentation written in [LESS](http://lesscss.org/)
 * Watch `README.md` for changes and automatically generate the HTML documentation
 * Commands bundled in a `thorfile`


## Requirements

The latest jQuery Version and QUnit are included in this package. You'll need the following Gems to work with the `thorfile`:

 * [thor](https://github.com/wycats/thor)
 * [rdiscount](https://github.com/rtomayko/rdiscount)
 * [rubyzip](https://github.com/aussiegeek/rubyzip)
 * [hpricot](https://github.com/hpricot/hpricot)
 * [directory_watcher](https://github.com/TwP/directory_watcher/)


## Thor Commands

    ~/scaffold-plugin $ cd tasks/
    ~/scaffold-plugin/tasks $ thor list
    scaffold
    --------
    thor scaffold:init        # Rename filenames and strings in files. Remove Scaffold testing.
    thor scaffold:docs        # Create the HTML Docs from ../README.md in ../docs.
    thor scaffold:watch       # Watch for changes in ../README.rd and generate the docs.
    thor scaffold:standalone  # Build standalone HTML Docs.
    thor scaffold:pack        # Pack the standalone HTML Docs.


## Live Demos

You can have live demos in your HTML documentation. Simply use these H3 (`###` in markdown) headings to indicate code:

 * `Your HTML` - HTML Markup of the demo
 * `Your Javascript` - The actual Javascript. jQuery (`$`) is already loaded. Don't mind about `$(document).ready()`
 * `Your CSS` - The CSS that should be applied to the `<head>`

### Your HTML

    <div id="hi-there"></div>

### Your CSS

    #hi-there { font-family: sans; font-size: 16px; }

### Your Javascript

    $('#hi-there').text('jQuery!');


## Getting Started - A session