function baseRange(_0x1d502d, _0x150240, _0x2f719b, _0x20a665) {
  var _0x7c86bc = -1,
    _0xd7a654 = Math.max(
      Math.ceil((_0x150240 - _0x1d502d) / (_0x2f719b || 1)),
      0
    )
  const _0x38eb2e = new Array(_0xd7a654)
  for (; _0xd7a654--; ) {
    _0x38eb2e[_0x20a665 ? _0xd7a654 : ++_0x7c86bc] = _0x1d502d
    _0x1d502d += _0x2f719b
  }
  return _0x38eb2e
}
function toFinite(_0x3e523c) {
  return _0x3e523c
    ? (_0x3e523c = toNumber(_0x3e523c)) !== 1e400 && _0x3e523c !== -1e400
      ? _0x3e523c == _0x3e523c
        ? _0x3e523c
        : 0
      : 1.7976931348623157e308 * (_0x3e523c < 0 ? -1 : 1)
    : 0 === _0x3e523c
    ? _0x3e523c
    : 0
}
function toNumber(_0x21ec90) {
  const _0x3cfff6 = parseInt
  if ('number' == typeof _0x21ec90) {
    return _0x21ec90
  }
  if (isSymbol(_0x21ec90)) {
    return NaN
  }
  if (
    'string' !=
    typeof (_0x21ec90 = isObject(_0x21ec90)
      ? isObject(
          (_0x2fa0e5 =
            'function' == typeof _0x21ec90.valueOf
              ? _0x21ec90.valueOf()
              : _0x21ec90)
        )
        ? '' + _0x2fa0e5
        : _0x2fa0e5
      : _0x21ec90)
  ) {
    return 0 === _0x21ec90 ? _0x21ec90 : +_0x21ec90
  }
  _0x21ec90 = _0x21ec90.replace(/^\s+|\s+$/g, '')
  var _0x2fa0e5 = /^0b[01]+$/i.test(_0x21ec90)
  return _0x2fa0e5 || /^0o[0-7]+$/i.test(_0x21ec90)
    ? _0x3cfff6(_0x21ec90.slice(2), _0x2fa0e5 ? 2 : 8)
    : /^[-+]0x[0-9a-f]+$/i.test(_0x21ec90)
    ? NaN
    : +_0x21ec90
}
function isObject(_0x48415b) {
  var _0x2237a0 = typeof _0x48415b
  return null != _0x48415b && ('object' == _0x2237a0 || 'function' == _0x2237a0)
}
function isSymbol(_0x321223) {
  var _0x5b165d = typeof _0x321223
  return (
    'symbol' == _0x5b165d ||
    ('object' == _0x5b165d &&
      null != _0x321223 &&
      '[object Symbol]' == getTag(_0x321223))
  )
}
function createRange(_0x316523, _0x13fdc3, _0x15974b) {
  return (
    (_0x316523 = toFinite(_0x316523)),
    void 0 === _0x13fdc3
      ? ((_0x13fdc3 = _0x316523), (_0x316523 = 0))
      : (_0x13fdc3 = toFinite(_0x13fdc3)),
    baseRange(
      _0x316523,
      _0x13fdc3,
      (_0x15974b =
        void 0 === _0x15974b
          ? _0x316523 < _0x13fdc3
            ? 1
            : -1
          : toFinite(_0x15974b)),
      false
    )
  )
}
function getColsInGroup(_0x62a75d) {
  if (1 === _0x62a75d.length) {
    return 1
  }
  for (
    var _0x53021d, _0x1b11cc = 0;
    _0x1b11cc < _0x62a75d.length;
    _0x1b11cc++
  ) {
    if (
      (_0x53021d =
        void 0 === _0x53021d ? _0x62a75d[_0x1b11cc].y : _0x53021d) !==
      _0x62a75d[_0x1b11cc].y
    ) {
      return _0x1b11cc
    }
  }
  return _0x1b11cc
}
function getGroup(_0xef722) {
  const _0x3a0904 = {
    slices: _0xef722.length,
    cols: getColsInGroup(_0xef722),
  }
  return (
    (_0x3a0904.rows = _0xef722.length / _0x3a0904.cols),
    (_0x3a0904.x = _0xef722[0].x),
    (_0x3a0904.y = _0xef722[0].y),
    _0x3a0904
  )
}
function extractSeed(_0x5cb8c0) {
  return !/(number|string)/i.test(
    Object.prototype.toString.call(_0x5cb8c0).match(/^\[object (.*)\]$/)[1]
  ) && isNaN(_0x5cb8c0)
    ? Number(
        String((this.strSeed = _0x5cb8c0))
          .split('')
          .map(function (_0x3eeb84) {
            return _0x3eeb84.charCodeAt(0)
          })
          .join('')
      )
    : _0x5cb8c0
}
function seedRand(_0x40579d, _0x53d4c9, _0x278056) {
  return Math.floor(_0x40579d() * (_0x278056 - _0x53d4c9 + 1)) + _0x53d4c9
}
function unShuffle(_0x40d4ee, _0x3dadbf) {
  if (!Array.isArray(_0x40d4ee)) {
    return null
  }
  Math.seedrandom && (seedrandom = Math.seedrandom)
  _0x3dadbf = extractSeed(_0x3dadbf) || 'none'
  var _0x79d5a3 = _0x40d4ee.length,
    _0x54ebba = seedrandom(_0x3dadbf)
  const _0x40c63f = [],
    _0x4264fa = []
  for (var _0x1ce019 = 0; _0x1ce019 < _0x79d5a3; _0x1ce019++) {
    _0x40c63f.push(null)
    _0x4264fa.push(_0x1ce019)
  }
  for (_0x1ce019 = 0; _0x1ce019 < _0x79d5a3; _0x1ce019++) {
    var _0x205980 = seedRand(_0x54ebba, 0, _0x4264fa.length - 1),
      _0xa98524 = _0x4264fa[_0x205980]
    _0x4264fa.splice(_0x205980, 1)
    _0x40c63f[_0xa98524] = _0x40d4ee[_0x1ce019]
  }
  return _0x40c63f
}
!(function (_0xb4cc48, _0xfe9b7e, _0x45e2bc) {
  var _0x34417a,
    _0x580cda = 'random',
    _0x2074e7 = _0x45e2bc.pow(256, 6),
    _0xf9a1d7 = _0x45e2bc.pow(2, 52),
    _0x5588e1 = 2 * _0xf9a1d7,
    _0x2b5bc3 = 255
  function _0x4b594c(_0x33ee52, _0x23af96, _0x472699) {
    function _0x43ef8f() {
      for (
        var _0x10852a = _0x439c6c.g(6), _0x33a6ee = _0x2074e7, _0x2e4719 = 0;
        _0x10852a < _0xf9a1d7;

      ) {
        _0x10852a = (_0x10852a + _0x2e4719) * 256
        _0x33a6ee *= 256
        _0x2e4719 = _0x439c6c.g(1)
      }
      for (; _0x5588e1 <= _0x10852a; ) {
        _0x10852a /= 2
        _0x33a6ee /= 2
        _0x2e4719 >>>= 1
      }
      return (_0x10852a + _0x2e4719) / _0x33a6ee
    }
    var _0x511c4a = [],
      _0x33ee52 = _0x1a35e8(
        (function _0x49831c(_0x1e36dd, _0x43e24f) {
          var _0x2e2edd,
            _0x45f210 = [],
            _0x266fc8 = typeof _0x1e36dd
          if (_0x43e24f && 'object' == _0x266fc8) {
            for (_0x2e2edd in _0x1e36dd)
              try {
                _0x45f210.push(_0x49831c(_0x1e36dd[_0x2e2edd], _0x43e24f - 1))
              } catch (_0x958891) {}
          }
          return _0x45f210.length
            ? _0x45f210
            : 'string' == _0x266fc8
            ? _0x1e36dd
            : _0x1e36dd + '\0'
        })(
          (_0x23af96 = 1 == _0x23af96 ? { entropy: true } : _0x23af96 || {})
            .entropy
            ? [_0x33ee52, _0x344a7b(_0xfe9b7e)]
            : null == _0x33ee52
            ? (function () {
                try {
                  var _0x34fad6
                  return (
                    _0x34417a && (_0x34fad6 = _0x34417a.randomBytes)
                      ? (_0x34fad6 = _0x34fad6(256))
                      : ((_0x34fad6 = new Uint8Array(256)),
                        (
                          _0xb4cc48.crypto || _0xb4cc48.msCrypto
                        ).getRandomValues(_0x34fad6)),
                    _0x344a7b(_0x34fad6)
                  )
                } catch (_0x5ad67e) {
                  var _0x132ee8 = _0xb4cc48.navigator,
                    _0x132ee8 = _0x132ee8 && _0x132ee8.plugins
                  return [
                    +new Date(),
                    _0xb4cc48,
                    _0x132ee8,
                    _0xb4cc48.screen,
                    _0x344a7b(_0xfe9b7e),
                  ]
                }
              })()
            : _0x33ee52,
          3
        ),
        _0x511c4a
      ),
      _0x439c6c = new _0x29ee70(_0x511c4a)
    return (
      (_0x43ef8f.int32 = function () {
        return 0 | _0x439c6c.g(4)
      }),
      (_0x43ef8f.quick = function () {
        return _0x439c6c.g(4) / 4294967296
      }),
      (_0x43ef8f.double = _0x43ef8f),
      _0x1a35e8(_0x344a7b(_0x439c6c.S), _0xfe9b7e),
      (
        _0x23af96.pass ||
        _0x472699 ||
        function (_0x2b1726, _0xfb02cf, _0x2534bf, _0x30c1e5) {
          return (
            _0x30c1e5 &&
              (_0x30c1e5.S && _0x271b29(_0x30c1e5, _0x439c6c),
              (_0x2b1726.state = function () {
                return _0x271b29(_0x439c6c, {})
              })),
            _0x2534bf
              ? ((_0x45e2bc[_0x580cda] = _0x2b1726), _0xfb02cf)
              : _0x2b1726
          )
        }
      )(
        _0x43ef8f,
        _0x33ee52,
        'global' in _0x23af96 ? _0x23af96.global : this == _0x45e2bc,
        _0x23af96.state
      )
    )
  }
  function _0x29ee70(_0x2e8dbe) {
    var _0x1c4341,
      _0x504532 = _0x2e8dbe.length,
      _0x443fba = this,
      _0x21cd08 = 0,
      _0x29130a = (_0x443fba.i = _0x443fba.j = 0),
      _0x532a8a = (_0x443fba.S = [])
    for (_0x504532 || (_0x2e8dbe = [_0x504532++]); _0x21cd08 < 256; ) {
      _0x532a8a[_0x21cd08] = _0x21cd08++
    }
    for (_0x21cd08 = 0; _0x21cd08 < 256; _0x21cd08++) {
      _0x532a8a[_0x21cd08] =
        _0x532a8a[
          (_0x29130a =
            _0x2b5bc3 &
            (_0x29130a +
              _0x2e8dbe[_0x21cd08 % _0x504532] +
              (_0x1c4341 = _0x532a8a[_0x21cd08])))
        ]
      _0x532a8a[_0x29130a] = _0x1c4341
    }
    ;(_0x443fba.g = function (_0x2122be) {
      for (
        var _0x32d5d0,
          _0x487618 = 0,
          _0x4f5527 = _0x443fba.i,
          _0x5708aa = _0x443fba.j,
          _0x106a6c = _0x443fba.S;
        _0x2122be--;

      ) {
        _0x32d5d0 = _0x106a6c[(_0x4f5527 = _0x2b5bc3 & (_0x4f5527 + 1))]
        _0x487618 =
          _0x487618 * 256 +
          _0x106a6c[
            _0x2b5bc3 &
              ((_0x106a6c[_0x4f5527] =
                _0x106a6c[(_0x5708aa = _0x2b5bc3 & (_0x5708aa + _0x32d5d0))]) +
                (_0x106a6c[_0x5708aa] = _0x32d5d0))
          ]
      }
      return (_0x443fba.i = _0x4f5527), (_0x443fba.j = _0x5708aa), _0x487618
    })(256)
  }
  function _0x271b29(_0x27e3c1, _0x40ffac) {
    return (
      (_0x40ffac.i = _0x27e3c1.i),
      (_0x40ffac.j = _0x27e3c1.j),
      (_0x40ffac.S = _0x27e3c1.S.slice()),
      _0x40ffac
    )
  }
  function _0x1a35e8(_0x234d38, _0x5076b5) {
    for (
      var _0x4b4805, _0x563715 = _0x234d38 + '', _0x40b4de = 0;
      _0x40b4de < _0x563715.length;

    ) {
      _0x5076b5[_0x2b5bc3 & _0x40b4de] =
        _0x2b5bc3 &
        ((_0x4b4805 ^= 19 * _0x5076b5[_0x2b5bc3 & _0x40b4de]) +
          _0x563715.charCodeAt(_0x40b4de++))
    }
    return _0x344a7b(_0x5076b5)
  }
  function _0x344a7b(_0x1d5a51) {
    return String.fromCharCode.apply(0, _0x1d5a51)
  }
  if (
    (_0x1a35e8(_0x45e2bc.random(), _0xfe9b7e),
    'object' == typeof module && module.exports)
  ) {
    module.exports = _0x4b594c
    try {
      _0x34417a = require('crypto')
    } catch (_0x2f651a) {}
  } else {
    'function' == typeof define && define.amd
      ? define(function () {
          return _0x4b594c
        })
      : (_0x45e2bc['seed' + _0x580cda] = _0x4b594c)
  }
})('undefined' != typeof self ? self : this, [], Math)
const parseParams = (_0xafb6f8) => {
  const _0x801c01 = new URLSearchParams(_0xafb6f8)
  var _0xafb6f8 = Object.fromEntries(_0x801c01.entries()),
    _0x50e042 = []
  return (
    Object.keys(_0xafb6f8).forEach((_0x5f1151) => {
      var _0x23866b,
        _0x49c95d = _0x801c01.get(_0x5f1151)
      _0x5f1151.includes('?')
        ? (_0x23866b = _0x5f1151.split('?')[1]) &&
          _0x50e042.push([_0x23866b, _0x49c95d])
        : _0x50e042.push([_0x5f1151, _0x49c95d])
    }),
    _0x50e042
  )
}
function imgReverser(_0x152dfe, _0x8df324 = 200, _0x2dfaff = 'stay') {
  return new Promise((_0x526b3e, _0x1a8c11) => {
    const _0x4ece08 = document.createElement('CANVAS'),
      _0x2d9368 = _0x4ece08.getContext('2d')
    var _0x36a3f1 = 0
    const _0x7e55b5 = new Image()
    _0x7e55b5.crossOrigin = 'Anonymous'
    _0x7e55b5.onload = function () {
      var _0xb1c9b9 =
        Math.ceil(_0x7e55b5.width / _0x8df324) *
        Math.ceil(_0x7e55b5.height / _0x8df324)
      _0x4ece08.width = _0x7e55b5.width
      _0x4ece08.height = _0x7e55b5.height
      var _0xacf76d = Math.ceil(_0x7e55b5.width / _0x8df324)
      const _0x1cf441 = []
      for (var _0x11cc67 = 0; _0x11cc67 < _0xb1c9b9; _0x11cc67++) {
        var _0x55f515 = parseInt(_0x11cc67 / _0xacf76d)
        const _0x25f249 = {
          x: (_0x11cc67 - _0x55f515 * _0xacf76d) * _0x8df324,
          y: _0x55f515 * _0x8df324,
        }
        _0x25f249.width =
          _0x8df324 -
          (_0x25f249.x + _0x8df324 <= _0x7e55b5.width
            ? 0
            : _0x25f249.x + _0x8df324 - _0x7e55b5.width)
        _0x25f249.height =
          _0x8df324 -
          (_0x25f249.y + _0x8df324 <= _0x7e55b5.height
            ? 0
            : _0x25f249.y + _0x8df324 - _0x7e55b5.height)
        _0x1cf441[_0x25f249.width + '-' + _0x25f249.height] ||
          (_0x1cf441[_0x25f249.width + '-' + _0x25f249.height] = [])
        _0x1cf441[_0x25f249.width + '-' + _0x25f249.height].push(_0x25f249)
      }
      for (const _0x22120c in _0x1cf441) {
        var _0x34b8ae,
          _0xa8329e,
          _0x400a07 = unShuffle(
            createRange(0, _0x1cf441[_0x22120c].length),
            _0x2dfaff
          ),
          _0x256716 = getGroup(_0x1cf441[_0x22120c])
        for ([_0x34b8ae, _0xa8329e] of _0x1cf441[_0x22120c].entries()) {
          var _0x513272 = _0x400a07[_0x34b8ae],
            _0x1135bb = parseInt(_0x513272 / _0x256716.cols),
            _0x513272 =
              (_0x513272 - _0x1135bb * _0x256716.cols) * _0xa8329e.width,
            _0x1135bb = _0x1135bb * _0xa8329e.height
          _0x2d9368.drawImage(
            _0x7e55b5,
            _0x256716.x + _0x513272,
            _0x256716.y + _0x1135bb,
            _0xa8329e.width,
            _0xa8329e.height,
            _0xa8329e.x,
            _0xa8329e.y,
            _0xa8329e.width,
            _0xa8329e.height
          )
        }
      }
      return _0x526b3e(_0x4ece08)
    }
    _0x7e55b5.onerror = function () {
      if (!(_0x36a3f1 < 5)) {
        return (_0x7e55b5.onerror = null), _0x526b3e(null)
      }
      var _0xe02232 = _0x152dfe,
        _0x3aed57 = parseParams(_0x152dfe)
      if (_0x3aed57 && 0 < _0x3aed57.length) {
        for (const _0x19b364 of _0x3aed57)
          _0xe02232.includes(_0x19b364[0] + '=' + _0x19b364[1]) ||
            _0x19b364[0].toString().includes('http') ||
            (_0xe02232 =
              '' +
              _0xe02232 +
              (_0xe02232.includes('?') ? '&' : '?') +
              _0x19b364[0] +
              '=' +
              _0x19b364[1])
      }
      _0x7e55b5.src =
        '' +
        _0xe02232 +
        (_0xe02232.includes('?') ? '&' : '?') +
        'v=' +
        _0x3aed57
      _0x36a3f1++
      ;(_0x7e55b5.src =
        '' +
        _0xe02232 +
        (_0xe02232.includes('?') ? '&' : '?') +
        'v=' +
        _0x3aed57),
        _0x36a3f1++
    }
    _0x7e55b5.src = _0x152dfe
  })
}
var settings = {
  readingMode: null,
  readingDirection: 'rtl',
  quality: 'medium',
  hozPageSize: 1,
}
const currentUrl = new URL(window.location.href),
  wWidth = 0 < window.innerWidth ? window.innerWidth : screen.width
function initSettings() {
  Cookies.get('mr_settings') || localStorage.getItem('settings')
    ? ((settings =
        Cookies.get('mr_settings') || localStorage.getItem('settings')),
      void 0 === (settings = JSON.parse(settings)).hozPageSize &&
        (settings.hozPageSize = 1))
    : saveSettings()
  processingSettings()
}
function processingSettings() {
  settings.hozPageSize = parseInt(settings.hozPageSize)
  settings.hozPageSize = wWidth <= 860 ? 1 : settings.hozPageSize
}
function saveSettings() {
  settings.hozPageSize = parseInt(settings.hozPageSize)
  $('.read_tool').removeClass('active')
  isLoggedIn &&
    $.post(
      '/ajax/user/settings',
      { settings: settings },
      function (_0x27dcd4) {}
    )
  localStorage.setItem('settings', JSON.stringify(settings))
  Cookies.set('mr_settings', JSON.stringify(settings), {
    path: '/',
    expires: 365,
  })
}
setTimeout(function () {
  Cookies.get('mr_viewed_' + mangaId) ||
    $.post('/ajax/manga/count-view/' + mangaId, function (_0x3341d4) {
      Cookies.set('mr_viewed_' + mangaId, true, {
        expires: new Date(new Date().getTime() + 3600000),
      })
    })
}, 20000)
initSettings()
var hozElImageNext,
  readingBy = $('#wrapper').data('reading-by') || 'chap',
  continueReading = null,
  firstLoad = true,
  currentImageIndex = 0,
  oldImageIndex = 0,
  totalImage = 0,
  numberImagesPreload = 4,
  touchstartX = 0,
  touchstartY = 0,
  touchendX = 0,
  touchendY = 0,
  gesturesZone = document.getElementById('images-content')
function handleGestures() {
  var _0x4c39d6 = touchendX - touchstartX,
    _0x5f4489 = touchendY - touchstartY
  Math.abs(_0x4c39d6) > Math.abs(_0x5f4489)
    ? (0 < _0x4c39d6 ? hozPrevImage : hozNextImage)()
    : Math.abs(_0x4c39d6) < Math.abs(_0x5f4489)
    ? 0 < _0x5f4489
      ? console.log('swipe down')
      : console.log('swipe up')
    : console.log('tap')
}
gesturesZone.addEventListener(
  'touchstart',
  function (_0x3d64b9) {
    touchstartX = _0x3d64b9.touches[0].clientX
    touchstartY = _0x3d64b9.touches[0].clientY
  },
  false
)
gesturesZone.addEventListener(
  'touchend',
  function (_0x27c862) {
    touchendX = _0x27c862.changedTouches[0].clientX
    touchendY = _0x27c862.changedTouches[0].clientY
  },
  false
)
window.addEventListener(
  'contextmenu',
  function (_0x239409) {
    _0x239409.preventDefault()
  },
  false
)
window.addEventListener(
  'dragstart',
  function (_0x57bdbd) {
    _0x57bdbd.preventDefault()
  },
  false
)
wi
