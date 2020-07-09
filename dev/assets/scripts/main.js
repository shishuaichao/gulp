"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// TODO: site logics
$(function ($) {
  var $body = $('html, body');
  $('#scroll_top').on('click', function () {
    $body.animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

function timeout(_x) {
  return _timeout.apply(this, arguments);
}

function _timeout() {
  _timeout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve('返回结果');
              }, num);
            });

          case 2:
            res = _context.sent;
            console.log(res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _timeout.apply(this, arguments);
}

timeout(2000);