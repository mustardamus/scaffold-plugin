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
 * Rename filenames and strings in files for initialization
 * Commands bundled in a `thorfile`


## Requirements

The latest jQuery Version and QUnit are included in this package. You'll need the following Gems to work with the `thorfile`:

 * [thor](https://github.com/wycats/thor)
 * [rdiscount](https://github.com/rtomayko/rdiscount)
 * [rubyzip](https://github.com/aussiegeek/rubyzip)
 * [hpricot](https://github.com/hpricot/hpricot)
 * [directory_watcher](https://github.com/TwP/directory_watcher/)


## Thor Commands

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
 * `Your CSS` - The CSS that should be applied to the `<head>`
 * `Your Javascript` - The actual Javascript. jQuery (`$`) is already loaded. Don't mind about `$(document).ready()`

### Your HTML

    <div id="hi-there"></div>

### Your CSS

    #hi-there { font-family: sans; font-size: 16px; }

### Your Javascript

    $('#hi-there').text('jQuery!');


## Getting Started - A Session

    ~ $ j
    ~/Code/jQuery $ git clone git@github.com:mustardamus/scaffold-plugin.git testy-plugin
    Cloning into testy-plugin...
    remote: Counting objects: 25, done.
    remote: Compressing objects: 100% (21/21), done.
    remote: Total 25 (delta 1), reused 0 (delta 0)
    Receiving objects: 100% (25/25), 43.94 KiB, done.
    Resolving deltas: 100% (1/1), done.
    ~/Code/jQuery $ cd testy-plugin/
    ~/Code/jQuery/testy-plugin $ rm -rf .git #erase remote repo link and all commits at once
    ~/Code/jQuery/testy-plugin $ cd tasks/
    ~/Code/jQuery/testy-plugin/tasks $ thor scaffold:init
    How do you want to name your new Plugin? Lowercase, one word and something kewl please:
    > testy
    Renamed 'scaffold' to 'testy' in ../jquery.scaffold.js.
    Renamed 'jquery.scaffold.js' to 'jquery.testy.js' in ../docs/index.html.
    Renamed 'Scaffold' to 'Testy' in ../docs/index.html.
    Renamed 'jquery.scaffold.js' to 'jquery.testy.js' in ../tests/index.html.
    Renamed 'Scaffold' to 'Testy' in ../tests/index.html.
    Renamed '<script type="text/javascript" src="scaffold.js"></script>' to '' in ../tests/index.html.
    Renamed '<script type="text/javascript" src="../docs/js/scaffold.js"></script>' to '' in ../tests/index.html.
    Renamed 'scaffold()' to 'testy()' in ../tests/plugin.js.
    Renamed the Plugin File '../jquery.scaffold.js' to '../jquery.testy.js'.
    Deleted the Scaffold Tests.
    Done.
    ~/Code/jQuery/testy-plugin/tasks $ thor scaffold:docs
    Done.
    ~/Code/jQuery/testy-plugin/tasks $ thor scaffold:standalone
    ../docs/../assets/js/jquery.js 		 >> ../tmp/docs/js/jquery.js
    ../docs/../jquery.testy.js 		 >> ../tmp/docs/js/jquery.testy.js
    Done. Check tmp/docs/ path.
    ~/Code/jQuery/testy-plugin/tasks $ thor scaffold:pack
    Name of the archive (*.zip): testy.0.0.1
    Creating: ../tmp/testy.0.0.1.zip
    Packing: ../tmp/docs/css
    Packing: ../tmp/docs/css/main.css
    Packing: ../tmp/docs/css/main.less
    Packing: ../tmp/docs/css/reset.css
    Packing: ../tmp/docs/index.html
    Packing: ../tmp/docs/js
    Packing: ../tmp/docs/js/jquery.js
    Packing: ../tmp/docs/js/jquery.testy.js
    Packing: ../tmp/docs/js/scaffold.js
    Done.
    ~/Code/jQuery/testy-plugin/tasks $ ..
    ~/Code/jQuery/testy-plugin $ git init
    Initialized empty Git repository in /Users/mustardamus/Code/jQuery/testy-plugin/.git/
    ~/Code/jQuery/testy-plugin $ git add .
    ~/Code/jQuery/testy-plugin $ git commit -m "initial commit"
    [master (root-commit) fafa27f] initial commit
     14 files changed, 1888 insertions(+), 0 deletions(-)
     create mode 100644 .gitignore
     create mode 100644 README.md
     create mode 100644 assets/css/qunit.css
     create mode 100644 assets/js/jquery.js
     create mode 100644 assets/js/qunit.js
     create mode 100644 docs/css/main.css
     create mode 100644 docs/css/main.less
     create mode 100644 docs/css/reset.css
     create mode 100644 docs/index.html
     create mode 100644 docs/js/scaffold.js
     create mode 100644 jquery.testy.js
     create mode 100644 tasks/thorfile
     create mode 100644 tests/index.html
     create mode 100644 tests/plugin.js
    ~/Code/jQuery/testy-plugin $ git remote add origin git@github.com:mustardamus/testy-plugin.git
    ~/Code/jQuery/testy-plugin $ git push origin master
    Counting objects: 24, done.
    Delta compression using up to 2 threads.
    Compressing objects: 100% (19/19), done.
    Writing objects: 100% (24/24), 41.88 KiB, done.
    Total 24 (delta 1), reused 0 (delta 0)
    To git@github.com:mustardamus/testy-plugin.git
     * [new branch]      master -> master

Just in case you find yourserlf on MacOSX and you open multiple tabs everytime you start to work on your project
(watch `*.less`, watch `README.md`, etc.) try [Terminitor](https://github.com/achiu/terminitor).


## License

[WTFPL](http://sam.zoy.org/wtfpl/COPYING). Really, this is just a quick toolbox I had to create to DRY out the
annoying steps to finally get into developing. Feel free to add/change/remove tools. If you think I could also
benefit from your changes I'd like a pull request.