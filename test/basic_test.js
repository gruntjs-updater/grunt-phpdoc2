'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.phpdoc2 = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  index: function(test) {
    test.expect(1);
    test.ok(grunt.file.read('tmp/basic/index.html'));
    test.done();
  },

  css: function(test) {
    test.expect(1);
    test.ok(grunt.file.read('tmp/basic/default.css'));
    test.done();
  },

  namespace: function(test) {
    test.expect(1);
    test.ok(grunt.file.read('tmp/basic/namespace_Foo.html'));
    test.done();
  },

  class: function(test) {
    test.expect(1);
    test.ok(grunt.file.read('tmp/basic/class_Foo_Bar.html'));
    test.done();
  }

};
