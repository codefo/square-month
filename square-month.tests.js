var chai = require('chai');
var assert = chai.assert;
var SquareMonth = require('./square-month');

describe('SquareMonth', function() {
    it('function should be return list', function () {
        var list = SquareMonth(2015, 8);
        assert.ok(Array.isArray(list), 'it is not list');
    });

    it('function should be return non empty list', function () {
        var list = SquareMonth(2015, 8);
        assert.notEqual(list.length, 0, 'it is empty list');
    });

    it('first day should be a Monday', function () {
        var list = SquareMonth(2015, 8);
        var first = list[0];

        assert.equal(first.getDay(), 1, 'first day in list not a Monday');
    });

    it('last day should be a Sunday', function () {
        var list = SquareMonth(2015, 8);
        var last = list[list.length - 1];

        assert.equal(last.getDay(), 0, 'last day in list not a Sunday');
    });

    it('list for 09/2015 should have 35 items', function () {
        var list = SquareMonth(2015, 8);

        assert.equal(list.length, 35);
    });

    it('list for 05/2015 should have 35 items', function () {
      var list = SquareMonth(2015, 4);

      assert.equal(list.length, 35);
    });

    it('list for 11/2015 should have 35 items', function () {
      var list = SquareMonth(2015, 10);

      assert.equal(list.length, 35);
    });
});
