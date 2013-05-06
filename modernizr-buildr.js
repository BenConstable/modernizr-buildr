/*global phantom*/

var page = require('webpage').create(),
    args = require('system').args,
    optionsArg = '--tests=',
    options = '';

// Parse command line options
for (var i = 0; i < args.length; i++) {
    if (args[i].indexOf(optionsArg) === 0) {
        var o = args[i].substr(optionsArg.length);
        options = o.indexOf('-') === 0 ? o.substr(1) : o;
    }
}

page.open('http://modernizr.com/download/#-generate' + options, function () {
    console.log(page.evaluate(function () {
        return document.getElementById('generatedSource').value;
    }));
    
    phantom.exit();
});
