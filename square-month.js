(function () {
    var SquareMonth = function (year, month) {
        var i, j, date,
            result = [],
            first = new Date(year, month),
            last = new Date(year, month + 1);

        // True last
        last.setDate(last.getDate() - 1)

        for (i = 1, j = first.getDay(); i < j; i += 1) {
            date = new Date(first);
            date.setDate(date.getDate() - i);
            result.unshift(date);
        }

        for (i = first.getDate(), j = last.getDate(); i <= j; i += 1) {
            result.push(new Date(year, month, i));
        }

        for (i = 1, j = 7 - last.getDay(); i <= j; i += 1) {
            date = new Date(last);
            date.setDate(date.getDate() + i);
            result.push(date);
        }

        return result;
    };

    if (typeof define == 'function' && define.amd) {
        define('SquareMonth', [], function () {
            return SquareMonth;
        });
    } else if (typeof exports != 'undefined') {
        if (typeof module != 'undefined' && module.exports) {
            exports = module.exports = SquareMonth;
        }
        exports.SquareMonth = SquareMonth;
    } else if (typeof window == 'object') {
        window.SquareMonth = SquareMonth;
    }
}.call(this));
