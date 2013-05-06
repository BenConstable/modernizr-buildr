# Modernizr Buildr

Create custom Modernizr builds from the command line.

## Description

`modernizr-buildr` is a simple tool that allows you to create custom 
Modernizr builds from the command line. It's a very basic
[PhantomJS](http://phantomjs.org/) wrapper that browses to the
[Modernizr download page](http://modernizr.com/download/) and generates a build
with optional tests.

It's not meant to be used in any sort of production environment, and has been
created as a convenience tool born out of sheer laziness. I wanted a quick way
of adding a couple of extra options to an existing Modernizr build without
having to visit the site and check checkboxes.

## Installation

```
git clone git@github.com:BenConstable/modernizr-buildr.git
cd modernizr-buildr
npm install -g
```

### Using without npm

If you've already got PhantomJS installed and you don't want to install it again
[through npm](https://npmjs.org/package/phantomjs), you can skip `npm install`
and just call the 
[modernizr-buildr.js](https://github.com/BenConstable/modernizr-buildr/blob/master/modernizr-buildr.js) 
script with PhantomJS directly:

```
phantomjs modernizr-buildr.js [--tests shiv-...]
```

However, this is not recommended, purely for ease of use.

## Usage

See:

```
modernizr-buildr -h
```

`modernizr-buildr` accepts a dash-separated list of build options as `--tests`.
This makes it easy to copy and paste an existing set of options from an existing
Modernizr build.

## Related

- Modernizr: http://modernizr.com/
- PhantomJS: http://phantomjs.org/
