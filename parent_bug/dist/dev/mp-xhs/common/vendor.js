(global["webpackChunkuni_app_xhs"] = global["webpackChunkuni_app_xhs"] || []).push([["common/vendor"],{

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : 0
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : 0;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"","VUE_APP_PLATFORM":"mp-xhs","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"","VUE_APP_PLATFORM":"mp-xhs","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"","VUE_APP_PLATFORM":"mp-xhs","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"","VUE_APP_PLATFORM":"mp-xhs","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);


/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/pages.json":
/*!************************!*\
  !*** ./src/pages.json ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formatter: function() { return /* binding */ BaseFormatter; },
/* harmony export */   I18n: function() { return /* binding */ I18n; },
/* harmony export */   LOCALE_EN: function() { return /* binding */ LOCALE_EN; },
/* harmony export */   LOCALE_ES: function() { return /* binding */ LOCALE_ES; },
/* harmony export */   LOCALE_FR: function() { return /* binding */ LOCALE_FR; },
/* harmony export */   LOCALE_ZH_HANS: function() { return /* binding */ LOCALE_ZH_HANS; },
/* harmony export */   LOCALE_ZH_HANT: function() { return /* binding */ LOCALE_ZH_HANT; },
/* harmony export */   compileI18nJsonStr: function() { return /* binding */ compileI18nJsonStr; },
/* harmony export */   hasI18nJson: function() { return /* binding */ hasI18nJson; },
/* harmony export */   initVueI18n: function() { return /* binding */ initVueI18n; },
/* harmony export */   isI18nStr: function() { return /* binding */ isI18nStr; },
/* harmony export */   isString: function() { return /* binding */ isString; },
/* harmony export */   normalizeLocale: function() { return /* binding */ normalizeLocale; },
/* harmony export */   parseI18nJson: function() { return /* binding */ parseI18nJson; },
/* harmony export */   resolveLocale: function() { return /* binding */ resolveLocale; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* provided dependency */ var uni = __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-xhs/dist/index.js */ "./node_modules/@dcloudio/uni-mp-xhs/dist/index.js")["default"];




var isObject = function isObject(val) {
  return val !== null && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
}();
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
}();
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.getLocale) {
    return __webpack_require__.g.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}


/***/ }),

/***/ "./node_modules/@dcloudio/uni-mp-xhs/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-xhs/dist/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApp: function() { return /* binding */ createApp; },
/* harmony export */   createComponent: function() { return /* binding */ createComponent; },
/* harmony export */   createPage: function() { return /* binding */ createPage; },
/* harmony export */   createPlugin: function() { return /* binding */ createPlugin; },
/* harmony export */   createSubpackageApp: function() { return /* binding */ createSubpackageApp; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _dcloudio_uni_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dcloudio/uni-i18n */ "./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js");







function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = xhs.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _xhs$getSystemInfoSyn = xhs.getSystemInfoSync(),
    platform = _xhs$getSystemInfoSyn.platform,
    pixelRatio = _xhs$getSystemInfoSyn.pixelRatio,
    windowWidth = _xhs$getSystemInfoSyn.windowWidth; // uni=>xhs runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(xhs.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0,_dcloudio_uni_i18n__WEBPACK_IMPORTED_MODULE_8__.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(xhs.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof __webpack_require__.g !== 'undefined') {
  __webpack_require__.g.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || xhs.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    xhs.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-xhs".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "",
    appName: "",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.24",
    uniRuntimeVersion: "4.24",
    uniPlatform:  false || "mp-xhs",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = "mp-xhs".split('-')[1];
  var _hostName = result.hostName || _platform; // mp-jd

  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};

// import navigateTo from 'uni-helpers/navigate-to'
// import getUserProfile from '../../../mp-weixin/helpers/get-user-profile'

// 需要做转换的 API 列表
var protocols = {
  // navigateTo,
  // redirectTo,
  // previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo
  // getUserProfile
};

// 不支持的 API 列表
// TODO: 补充
var todos = ['getSelectedTextRange'];

// 存在兼容性的 API 列表
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5C0F\u7EA2\u4E66\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5C0F\u7EA2\u4E66\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = xhs[methodName].apply(xhs, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['xhs'],
  share: ['xhs'],
  payment: ['xhs'],
  push: ['xhs']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new vue__WEBPACK_IMPORTED_MODULE_7__["default"]();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0,_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__["default"])(Set, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, SKIP, true)
    });
  }
  return obj;
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (vue__WEBPACK_IMPORTED_MODULE_7__["default"].options && Array.isArray(vue__WEBPACK_IMPORTED_MODULE_7__["default"].options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"","VUE_APP_PLATFORM":"mp-xhs","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}
function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "xhs".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {
    var _this3 = this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this3.on(name, events[name]);
      });
    }
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventChannel, [{
    key: "emit",
    value: function emit(eventName) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {
        return opt.type !== 'once';
      });
    }
  }, {
    key: "on",
    value: function on(eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    }
  }, {
    key: "once",
    value: function once(eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    }
  }, {
    key: "off",
    value: function off(eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    }
  }, {
    key: "_clearCache",
    value: function _clearCache(eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    }
  }, {
    key: "_addListener",
    value: function _addListener(eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type
      });
    }
  }]);
}();
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.__call_hook;
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.$store = vm.$options.store;
  }
  uniIdMixin(vue__WEBPACK_IMPORTED_MODULE_7__["default"]);
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype.mpHost = "mp-xhs";
  vue__WEBPACK_IMPORTED_MODULE_7__["default"].mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(vue__WEBPACK_IMPORTED_MODULE_7__["default"], vm, normalizeLocale(xhs.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function parseApp$1(vm) {
  return parseApp(vm);
}
function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
var isComponent2 = xhs.canIUse('component2');
function initSpecialMethods(mpInstance) {
  if (!mpInstance.$vm) {
    return;
  }
  var path = mpInstance.is || mpInstance.route;
  if (!path) {
    return;
  }
  if (path.indexOf('/') === 0) {
    path = path.substr(1);
  }
  var specialMethods = xhs.specialMethods && xhs.specialMethods[path];
  if (specialMethods) {
    specialMethods.forEach(function (method) {
      if (isFn(mpInstance.$vm[method])) {
        mpInstance[method] = function (event) {
          if (hasOwn(event, 'markerId')) {
            event.detail = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(event.detail) === 'object' ? event.detail : {};
            event.detail.markerId = event.markerId;
          }
          // TODO normalizeEvent
          mpInstance.$vm[method](event);
        };
      }
    });
  }
}
var handleWrap = function handleWrap(mp, destory) {
  var _this4 = this;
  var vueId = mp.props.vueId;
  var list = (mp.props['data-event-list'] || '').split(',');
  list.forEach(function (eventName) {
    var key = "".concat(eventName).concat(vueId);
    if (destory) {
      delete _this4[key];
    } else {
      // TODO remove handleRef
      _this4[key] = function () {
        mp.props[eventName].apply(this, arguments);
      };
    }
  });
};
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parsePage(vuePageOptions) {
  var _initVueComponent = initVueComponent(vue__WEBPACK_IMPORTED_MODULE_7__["default"], vuePageOptions),
    _initVueComponent2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var pageOptions = {
    mixins: initBehaviors(vueOptions, initBehavior),
    data: initData(vueOptions, vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype),
    onLoad: function onLoad(query) {
      var properties = this.props;
      this.__query = query;
      this.__options = {
        mpType: 'page',
        mpInstance: this,
        propsData: properties
      };
    },
    onReady: function onReady() {
      var _this5 = this;
      // initChildVues(this)
      // 初始化 vue 实例
      this.$vm = new VueComponent(this.__options);

      // 触发首次 setData
      this.$vm.$mount();
      initSpecialMethods(this);
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');

      // mounted => onLoad
      this.options = this.__query;
      this.$vm.$mp.query = this.__query; // 兼容 mpvue
      var copyQuery = Object.assign({}, this.__query);
      delete copyQuery.__id__;
      this.$page = {
        fullPath: '/' + this.route + stringifyQuery(copyQuery)
      };
      this.$vm.__call_hook('onLoad', this.__query);
      this.$vm.__call_hook('onShow');
      setTimeout(function () {
        _this5.$vm.__call_hook('onReady');
      });
    },
    onUnload: function onUnload() {
      this.$vm.__call_hook('onUnload');
      this.$vm.$destroy();
    },
    // __r: handleRef,
    __e: handleEvent,
    __l: handleLink,
    __w: handleWrap,
    triggerEvent: function noop() {}
  };
  initHooks(pageOptions, hooks$1, vueOptions);
  initUnknownHooks(pageOptions, vueOptions, ['onReady']);
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      pageOptions[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  return pageOptions;
}
function createPage(vuePageOptions) {
  {
    return Page(parsePage(vuePageOptions));
  }
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent3 = initVueComponent(vue__WEBPACK_IMPORTED_MODULE_7__["default"], vueComponentOptions),
    _initVueComponent4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_initVueComponent3, 2),
    VueComponent = _initVueComponent4[0],
    vueOptions = _initVueComponent4[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  var componentOptions = {
    options: options,
    data: initData(vueOptions, vue__WEBPACK_IMPORTED_MODULE_7__["default"].prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}

/**
 * 用于延迟调用 setData
 * 在 setData 真实调用的时机需执行 fixSetDataEnd
 * @param {*} mpInstance
 */
function fixSetDataStart(mpInstance) {
  var setData = mpInstance.setData;
  var setDataArgs = [];
  mpInstance.setData = function () {
    setDataArgs.push(arguments);
  };
  mpInstance.__fixInitData = function () {
    var _this6 = this;
    this.setData = setData;
    var fn = function fn() {
      setDataArgs.forEach(function (args) {
        setData.apply(_this6, args);
      });
    };
    if (setDataArgs.length) {
      if (this.groupSetData) {
        this.groupSetData(fn);
      } else {
        fn();
      }
    }
  };
}
/**
 * 恢复真实的 setData 方法
 * @param {*} mpInstance
 */
function fixSetDataEnd(mpInstance) {
  if (mpInstance.__fixInitData) {
    mpInstance.__fixInitData();
    delete mpInstance.__fixInitData;
  }
}

// import parseBaseComponent from '../../../mp-weixin/runtime/wrapper/component-parser'

function parseComponent$1(vueComponentOptions, needVueOptions) {
  var _parseComponent = parseComponent(vueComponentOptions, true),
    _parseComponent2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_parseComponent, 2),
    componentOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  var oldAttached = componentOptions.lifetimes.attached;
  componentOptions.lifetimes.attached = function attached() {
    var _this7 = this;
    // 暂不区分版本
    if (isPage.call(this)) {
      fixSetDataStart(this);
      setTimeout(function () {
        fixSetDataEnd(_this7);
      }, 0);
    }
    oldAttached.call(this);
  };
  return needVueOptions ? [componentOptions, vueOptions] : componentOptions;
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp$1(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && xhs.onAppShow) {
    xhs.onAppShow(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && xhs.onAppHide) {
    xhs.onAppHide(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = xhs.getLaunchOptionsSync && xhs.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp$1(vm);
  if (isFn(appOptions.onShow) && xhs.onAppShow) {
    xhs.onAppShow(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && xhs.onAppHide) {
    xhs.onAppHide(function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = xhs.getLaunchOptionsSync && xhs.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!xhs.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-xhs" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, xhs[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(xhs).forEach(function (name) {
    if (hasOwn(xhs, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, xhs[name]));
    }
  });
}
xhs.createApp = createApp;
xhs.createPage = createPage;
xhs.createComponent = createComponent;
xhs.createSubpackageApp = createSubpackageApp;
xhs.createPlugin = createPlugin;
var uni$1 = uni;
/* harmony default export */ __webpack_exports__["default"] = (uni$1);


/***/ }),

/***/ "./src/uni.promisify.adaptor.js":
/*!**************************************!*\
  !*** ./src/uni.promisify.adaptor.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var uni = __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-xhs/dist/index.js */ "./node_modules/@dcloudio/uni-mp-xhs/dist/index.js")["default"];
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
uni.addInterceptor({
  returnValue: function returnValue(res) {
    if (!(!!res && (_typeof(res) === "object" || typeof res === "function") && typeof res.then === "function")) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        return res[0] ? reject(res[0]) : resolve(res[1]);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFNBQVM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxrQ0FBa0M7QUFDbEM7QUFDQSxtQkFBbUI7QUFDbkIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQW9CO0FBQ3RDO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsUUFBUSxTQUFTLElBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsSUFBSSxTQUFTLElBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QyxnQ0FBZ0M7QUFDaEM7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUIsWUFBWTtBQUNaO0FBQ0EsSUFBSSxTQUFTLElBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHFDQUFxQztBQUNyQztBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBRVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMv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QUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNGQUFzRjtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQyxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0oscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQiwwQkFBMEI7QUFDMUI7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxLQUFLLEVBR047QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUssNENBQTRDLCtCQUErQjs7QUFFaEY7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFxQztBQUNyRDtBQUNBLG9CQUFvQixDQUFJO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7O0FBRTNCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FB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Q047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLEtBQUssRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSwrQkFBK0I7QUFDL0IsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLE1BQU0sS0FBSyxFQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyw0QkFBNEI7QUFDdkUsS0FBSztBQUNMO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNpRSxRQUFRLENBQUN4RyxJQUFJLENBQUNndUIsQ0FBQyxDQUFDLENBQUNwb0IsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxPQUFPLFFBQVEsS0FBS3JELENBQUMsSUFBSXlyQixDQUFDLENBQUN2aEIsV0FBVyxLQUFLbEssQ0FBQyxHQUFHeXJCLENBQUMsQ0FBQ3ZoQixXQUFXLENBQUNySSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUs3QixDQUFDLElBQUksS0FBSyxLQUFLQSxDQUFDLEdBQUd6RCxLQUFLLENBQUNxd0IsSUFBSSxDQUFDbkIsQ0FBQyxDQUFDLEdBQUcsV0FBVyxLQUFLenJCLENBQUMsSUFBSSwwQ0FBMEMsQ0FBQzdELElBQUksQ0FBQzZELENBQUMsQ0FBQyxHQUFHNnJCLGdFQUFnQixDQUFDSixDQUFDLEVBQUVDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUM1TjtBQUNGIiwic291cmNlcyI6WyJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL21wLXZ1ZS9kaXN0L21wLnJ1bnRpbWUuZXNtLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLWkxOG4vZGlzdC91bmktaTE4bi5lcy5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby91bmktbXAteGhzL2Rpc3QvaW5kZXguanMiLCJ1bmktYXBwOi8vL3NyYy91bmkucHJvbWlzaWZ5LmFkYXB0b3IuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jb25zdHJ1Y3QuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsInVuaS1hcHA6Ly8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ1bmktYXBwOi8vL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwidW5pLWFwcDovLy9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBWdWUuanMgdjIuNi4xMVxuICogKGMpIDIwMTQtMjAyMyBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5pZiAoaW5Ccm93c2VyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG9wdHMgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0cywgJ3Bhc3NpdmUnLCAoe1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgfVxuICAgIH0pKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4NVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0LXBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxuLy8gdGhpcyBuZWVkcyB0byBiZSBsYXp5LWV2YWxlZCBiZWNhdXNlIHZ1ZSBtYXkgYmUgcmVxdWlyZWQgYmVmb3JlXG4vLyB2dWUtc2VydmVyLXJlbmRlcmVyIGNhbiBzZXQgVlVFX0VOVlxudmFyIF9pc1NlcnZlcjtcbnZhciBpc1NlcnZlclJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKF9pc1NlcnZlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFpbkJyb3dzZXIgJiYgIWluV2VleCAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZGV0ZWN0IHByZXNlbmNlIG9mIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgYW5kIGF2b2lkXG4gICAgICAvLyBXZWJwYWNrIHNoaW1taW5nIHRoZSBwcm9jZXNzXG4gICAgICBfaXNTZXJ2ZXIgPSBnbG9iYWxbJ3Byb2Nlc3MnXSAmJiBnbG9iYWxbJ3Byb2Nlc3MnXS5lbnYuVlVFX0VOViA9PT0gJ3NlcnZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pc1NlcnZlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2lzU2VydmVyXG59O1xuXG4vLyBkZXRlY3QgZGV2dG9vbHNcbnZhciBkZXZ0b29scyA9IGluQnJvd3NlciAmJiB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGlzTmF0aXZlIChDdG9yKSB7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoQ3Rvci50b1N0cmluZygpKVxufVxuXG52YXIgaGFzU3ltYm9sID1cbiAgdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU3ltYm9sKSAmJlxuICB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUmVmbGVjdC5vd25LZXlzKTtcblxudmFyIF9TZXQ7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi8gLy8gJGZsb3ctZGlzYWJsZS1saW5lXG5pZiAodHlwZW9mIFNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoU2V0KSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldDtcbn0gZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNldCAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFtrZXldID09PSB0cnVlXG4gICAgfTtcbiAgICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoa2V5KSB7XG4gICAgICB0aGlzLnNldFtrZXldID0gdHJ1ZTtcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTZXQ7XG4gIH0oKSk7XG59XG5cbi8qICAqL1xuXG52YXIgd2FybiA9IG5vb3A7XG52YXIgdGlwID0gbm9vcDtcbnZhciBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gKG5vb3ApOyAvLyB3b3JrIGFyb3VuZCBmbG93IGNoZWNrXG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IChub29wKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXSkoXFx3KS9nO1xuICB2YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHJcbiAgICAucmVwbGFjZShjbGFzc2lmeVJFLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KVxuICAgIC5yZXBsYWNlKC9bLV9dL2csICcnKTsgfTtcblxuICB3YXJuID0gZnVuY3Rpb24gKG1zZywgdm0pIHtcbiAgICB2YXIgdHJhY2UgPSB2bSA/IGdlbmVyYXRlQ29tcG9uZW50VHJhY2Uodm0pIDogJyc7XG5cbiAgICBpZiAoY29uZmlnLndhcm5IYW5kbGVyKSB7XG4gICAgICBjb25maWcud2FybkhhbmRsZXIuY2FsbChudWxsLCBtc2csIHZtLCB0cmFjZSk7XG4gICAgfSBlbHNlIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW1Z1ZSB3YXJuXTogXCIgKyBtc2cgKyB0cmFjZSkpO1xuICAgIH1cbiAgfTtcblxuICB0aXAgPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIltWdWUgdGlwXTogXCIgKyBtc2cgKyAoXG4gICAgICAgIHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJ1xuICAgICAgKSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm1hdENvbXBvbmVudE5hbWUgPSBmdW5jdGlvbiAodm0sIGluY2x1ZGVGaWxlKSB7XG4gICAgaWYgKHZtLiRyb290ID09PSB2bSkge1xuICAgICAgaWYgKHZtLiRvcHRpb25zICYmIHZtLiRvcHRpb25zLl9fZmlsZSkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgcmV0dXJuICgnJykgKyB2bS4kb3B0aW9ucy5fX2ZpbGVcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPFJvb3Q+J1xuICAgIH1cbiAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiB2bSA9PT0gJ2Z1bmN0aW9uJyAmJiB2bS5jaWQgIT0gbnVsbFxuICAgICAgPyB2bS5vcHRpb25zXG4gICAgICA6IHZtLl9pc1Z1ZVxuICAgICAgICA/IHZtLiRvcHRpb25zIHx8IHZtLmNvbnN0cnVjdG9yLm9wdGlvbnNcbiAgICAgICAgOiB2bTtcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBvcHRpb25zLl9jb21wb25lbnRUYWc7XG4gICAgdmFyIGZpbGUgPSBvcHRpb25zLl9fZmlsZTtcbiAgICBpZiAoIW5hbWUgJiYgZmlsZSkge1xuICAgICAgdmFyIG1hdGNoID0gZmlsZS5tYXRjaCgvKFteL1xcXFxdKylcXC52dWUkLyk7XG4gICAgICBuYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIChuYW1lID8gKFwiPFwiICsgKGNsYXNzaWZ5KG5hbWUpKSArIFwiPlwiKSA6IFwiPEFub255bW91cz5cIikgK1xuICAgICAgKGZpbGUgJiYgaW5jbHVkZUZpbGUgIT09IGZhbHNlID8gKFwiIGF0IFwiICsgZmlsZSkgOiAnJylcbiAgICApXG4gIH07XG5cbiAgdmFyIHJlcGVhdCA9IGZ1bmN0aW9uIChzdHIsIG4pIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgd2hpbGUgKG4pIHtcbiAgICAgIGlmIChuICUgMiA9PT0gMSkgeyByZXMgKz0gc3RyOyB9XG4gICAgICBpZiAobiA+IDEpIHsgc3RyICs9IHN0cjsgfVxuICAgICAgbiA+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9O1xuXG4gIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSBmdW5jdGlvbiAodm0pIHtcbiAgICBpZiAodm0uX2lzVnVlICYmIHZtLiRwYXJlbnQpIHtcbiAgICAgIHZhciB0cmVlID0gW107XG4gICAgICB2YXIgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgIHdoaWxlICh2bSAmJiB2bS4kb3B0aW9ucy5uYW1lICE9PSAnUGFnZUJvZHknKSB7XG4gICAgICAgIGlmICh0cmVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbGFzdCA9IHRyZWVbdHJlZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGFzdC5jb25zdHJ1Y3RvciA9PT0gdm0uY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSsrO1xuICAgICAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA+IDApIHtcbiAgICAgICAgICAgIHRyZWVbdHJlZS5sZW5ndGggLSAxXSA9IFtsYXN0LCBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2VdO1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgIXZtLiRvcHRpb25zLmlzUmVzZXJ2ZWQgJiYgdHJlZS5wdXNoKHZtKTtcbiAgICAgICAgdm0gPSB2bS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuICdcXG5cXG5mb3VuZCBpblxcblxcbicgKyB0cmVlXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZtLCBpKSB7IHJldHVybiAoXCJcIiArIChpID09PSAwID8gJy0tLT4gJyA6IHJlcGVhdCgnICcsIDUgKyBpICogMikpICsgKEFycmF5LmlzQXJyYXkodm0pXG4gICAgICAgICAgICA/ICgoZm9ybWF0Q29tcG9uZW50TmFtZSh2bVswXSkpICsgXCIuLi4gKFwiICsgKHZtWzFdKSArIFwiIHJlY3Vyc2l2ZSBjYWxscylcIilcbiAgICAgICAgICAgIDogZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXCJcXG5cXG4oZm91bmQgaW4gXCIgKyAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIpXCIpXG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCA9IDA7XG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICovXG52YXIgRGVwID0gZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrO1xuICB0aGlzLnN1YnMgPSBbXTtcbn07XG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gYWRkU3ViIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gcmVtb3ZlU3ViIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKTtcbn07XG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gZGVwZW5kICgpIHtcbiAgaWYgKERlcC5TaGFyZWRPYmplY3QudGFyZ2V0KSB7XG4gICAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG4vLyBmaXhlZCBieSB4eHh4eHggKG52dWUgc2hhcmVkIHZ1ZXgpXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuRGVwLlNoYXJlZE9iamVjdCA9IHt9O1xuRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSBudWxsO1xuRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0ICh0YXJnZXQpIHtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5wdXNoKHRhcmdldCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gdGFyZ2V0O1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnBvcCgpO1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2tbRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFjay5sZW5ndGggLSAxXTtcbiAgRGVwLnRhcmdldCA9IERlcC5TaGFyZWRPYmplY3QudGFyZ2V0O1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgey8vIGZpeGVkIGJ5IHh4eHh4eCDlvq7kv6HlsI/nqIvluo/kvb/nlKggcGx1Z2lucyDkuYvlkI7vvIzmlbDnu4Tmlrnms5Xooqvnm7TmjqXmjILovb3liLDkuobmlbDnu4Tlr7nosaHkuIrvvIzpnIDopoHmiafooYwgY29weUF1Z21lbnQg6YC76L6RXG4gICAgICAgIGlmKHZhbHVlLnB1c2ggIT09IHZhbHVlLl9fcHJvdG9fXy5wdXNoKXtcbiAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZSAmJlxuICAgICF2YWx1ZS5fX3ZfaXNNUENvbXBvbmVudFxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSAoZm4pIHtcbiAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UgKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlc1swXTtcbiAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgdmFyIHJlY2VpdmVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJlxuICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICB9XG4gIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgaWYgKGlzRXhwbGljYWJsZShyZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSAnYm9vbGVhbic7IH0pXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgaWYgKHZtKSB7XG4gICAgICB2YXIgY3VyID0gdm07XG4gICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICBoYW5kbGVyLFxuICBjb250ZXh0LFxuICBhcmdzLFxuICB2bSxcbiAgaW5mb1xuKSB7XG4gIHZhciByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG4gICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICBpZiAoZSAhPT0gZXJyKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvcGllc1tpXSgpO1xuICB9XG59XG5cbi8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbi8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4vLyBIb3dldmVyLCBpdCBoYXMgc3VidGxlIHByb2JsZW1zIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCByaWdodCBiZWZvcmUgcmVwYWludFxuLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbi8vIHRoYXQgY2Fubm90IGJlIGNpcmN1bXZlbnRlZCAoZS5nLiAjNzEwOSwgIzcxNTMsICM3NTQ2LCAjNzgzNCwgIzgxMDkpLlxuLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4vLyB3aGVyZSBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbi8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxudmFyIHRpbWVyRnVuYztcblxuLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbi8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4vLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAvLyBJbiBwcm9ibGVtYXRpYyBVSVdlYlZpZXdzLCBQcm9taXNlLnRoZW4gZG9lc24ndCBjb21wbGV0ZWx5IGJyZWFrLCBidXRcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgIC8vIG5lZWRzIHRvIGRvIHNvbWUgb3RoZXIgd29yaywgZS5nLiBoYW5kbGUgYSB0aW1lci4gVGhlcmVmb3JlIHdlIGNhblxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gIH07XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgfVxuICB9O1xuXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm94eSBoYW5kbGVyIHRvIHVzZVxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgPyBnZXRIYW5kbGVyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gIHNlZW5PYmplY3RzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbC5fX29iX18pIHtcbiAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xuICB9XG4gIGlmIChpc0EpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgfVxufVxuXG52YXIgbWFyaztcbnZhciBtZWFzdXJlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcGVyZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgcGVyZiAmJlxuICAgIHBlcmYubWFyayAmJlxuICAgIHBlcmYubWVhc3VyZSAmJlxuICAgIHBlcmYuY2xlYXJNYXJrcyAmJlxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICApIHtcbiAgICBtYXJrID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcGVyZi5tYXJrKHRhZyk7IH07XG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICBwZXJmLm1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgdmFyIGNsb25lZCA9IGZucy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIilcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNUcnVlKGV2ZW50Lm9uY2UpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobXAgcHJvcGVydGllcylcclxuZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dCkge1xyXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMgJiYgQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5wcm9wZXJ0aWVzO1xyXG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gIH1cbiAgdmFyIGV4dGVybmFsQ2xhc3NlcyA9IEN0b3Iub3B0aW9ucy5tcE9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xyXG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XHJcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xyXG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgICAgLy8gZXh0ZXJuYWxDbGFzc1xuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgcmVzW2tleV0gJiZcbiAgICAgICAgZXh0ZXJuYWxDbGFzc2VzLmluZGV4T2YoYWx0S2V5KSAhPT0gLTEgJiZcbiAgICAgICAgY29udGV4dFtjYW1lbGl6ZShyZXNba2V5XSldXG4gICAgICApIHtcbiAgICAgICAgLy8g6LWL5YC8IGV4dGVybmFsQ2xhc3Mg55yf5q2j55qE5YC8KOaooeadv+mHjCBleHRlcm5hbENsYXNzIOeahOWAvOWPr+iDveaYr+Wtl+espuS4silcbiAgICAgICAgcmVzW2tleV0gPSBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV07XG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnLFxuICBjb250ZXh0Ly8gZml4ZWQgYnkgeHh4eHh4XG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3Rvciwge30sIGNvbnRleHQpXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eFxuICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHJlcywgY29udGV4dClcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXhlZCBieSB4eHh4eHgg5Li05pe2IGhhY2sg5o6JIHVuaS1hcHAg5Lit55qE5byC5q2lIG5hbWUgc2xvdCBwYWdlXG4gICAgICBpZihjaGlsZC5hc3luY01ldGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEgJiYgY2hpbGQuYXN5bmNNZXRhLmRhdGEuc2xvdCA9PT0gJ3BhZ2UnKXtcbiAgICAgICAgKHNsb3RzWydwYWdlJ10gfHwgKHNsb3RzWydwYWdlJ10gPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIChzbG90cy5kZWZhdWx0IHx8IChzbG90cy5kZWZhdWx0ID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gaWdub3JlIHNsb3RzIHRoYXQgY29udGFpbnMgb25seSB3aGl0ZXNwYWNlXG4gIGZvciAodmFyIG5hbWUkMSBpbiBzbG90cykge1xuICAgIGlmIChzbG90c1tuYW1lJDFdLmV2ZXJ5KGlzV2hpdGVzcGFjZSkpIHtcbiAgICAgIGRlbGV0ZSBzbG90c1tuYW1lJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2xvdHNcbn1cblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChub2RlKSB7XG4gIHJldHVybiAobm9kZS5pc0NvbW1lbnQgJiYgIW5vZGUuYXN5bmNGYWN0b3J5KSB8fCBub2RlLnRleHQgPT09ICcgJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdHMgKFxuICBzbG90cyxcbiAgbm9ybWFsU2xvdHMsXG4gIHByZXZTbG90c1xuKSB7XG4gIHZhciByZXM7XG4gIHZhciBoYXNOb3JtYWxTbG90cyA9IE9iamVjdC5rZXlzKG5vcm1hbFNsb3RzKS5sZW5ndGggPiAwO1xuICB2YXIgaXNTdGFibGUgPSBzbG90cyA/ICEhc2xvdHMuJHN0YWJsZSA6ICFoYXNOb3JtYWxTbG90cztcbiAgdmFyIGtleSA9IHNsb3RzICYmIHNsb3RzLiRrZXk7XG4gIGlmICghc2xvdHMpIHtcbiAgICByZXMgPSB7fTtcbiAgfSBlbHNlIGlmIChzbG90cy5fbm9ybWFsaXplZCkge1xuICAgIC8vIGZhc3QgcGF0aCAxOiBjaGlsZCBjb21wb25lbnQgcmUtcmVuZGVyIG9ubHksIHBhcmVudCBkaWQgbm90IGNoYW5nZVxuICAgIHJldHVybiBzbG90cy5fbm9ybWFsaXplZFxuICB9IGVsc2UgaWYgKFxuICAgIGlzU3RhYmxlICYmXG4gICAgcHJldlNsb3RzICYmXG4gICAgcHJldlNsb3RzICE9PSBlbXB0eU9iamVjdCAmJlxuICAgIGtleSA9PT0gcHJldlNsb3RzLiRrZXkgJiZcbiAgICAhaGFzTm9ybWFsU2xvdHMgJiZcbiAgICAhcHJldlNsb3RzLiRoYXNOb3JtYWxcbiAgKSB7XG4gICAgLy8gZmFzdCBwYXRoIDI6IHN0YWJsZSBzY29wZWQgc2xvdHMgdy8gbm8gbm9ybWFsIHNsb3RzIHRvIHByb3h5LFxuICAgIC8vIG9ubHkgbmVlZCB0byBub3JtYWxpemUgb25jZVxuICAgIHJldHVybiBwcmV2U2xvdHNcbiAgfSBlbHNlIHtcbiAgICByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkkMSBpbiBzbG90cykge1xuICAgICAgaWYgKHNsb3RzW2tleSQxXSAmJiBrZXkkMVswXSAhPT0gJyQnKSB7XG4gICAgICAgIHJlc1trZXkkMV0gPSBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXkkMSwgc2xvdHNba2V5JDFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhwb3NlIG5vcm1hbCBzbG90cyBvbiBzY29wZWRTbG90c1xuICBmb3IgKHZhciBrZXkkMiBpbiBub3JtYWxTbG90cykge1xuICAgIGlmICghKGtleSQyIGluIHJlcykpIHtcbiAgICAgIHJlc1trZXkkMl0gPSBwcm94eU5vcm1hbFNsb3Qobm9ybWFsU2xvdHMsIGtleSQyKTtcbiAgICB9XG4gIH1cbiAgLy8gYXZvcmlheiBzZWVtcyB0byBtb2NrIGEgbm9uLWV4dGVuc2libGUgJHNjb3BlZFNsb3RzIG9iamVjdFxuICAvLyBhbmQgd2hlbiB0aGF0IGlzIHBhc3NlZCBkb3duIHRoaXMgd291bGQgY2F1c2UgYW4gZXJyb3JcbiAgaWYgKHNsb3RzICYmIE9iamVjdC5pc0V4dGVuc2libGUoc2xvdHMpKSB7XG4gICAgKHNsb3RzKS5fbm9ybWFsaXplZCA9IHJlcztcbiAgfVxuICBkZWYocmVzLCAnJHN0YWJsZScsIGlzU3RhYmxlKTtcbiAgZGVmKHJlcywgJyRrZXknLCBrZXkpO1xuICBkZWYocmVzLCAnJGhhc05vcm1hbCcsIGhhc05vcm1hbFNsb3RzKTtcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90KG5vcm1hbFNsb3RzLCBrZXksIGZuKSB7XG4gIHZhciBub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHMubGVuZ3RoID8gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGZuKHt9KTtcbiAgICByZXMgPSByZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzKVxuICAgICAgPyBbcmVzXSAvLyBzaW5nbGUgdm5vZGVcbiAgICAgIDogbm9ybWFsaXplQ2hpbGRyZW4ocmVzKTtcbiAgICByZXR1cm4gcmVzICYmIChcbiAgICAgIHJlcy5sZW5ndGggPT09IDAgfHxcbiAgICAgIChyZXMubGVuZ3RoID09PSAxICYmIHJlc1swXS5pc0NvbW1lbnQpIC8vICM5NjU4XG4gICAgKSA/IHVuZGVmaW5lZFxuICAgICAgOiByZXNcbiAgfTtcbiAgLy8gdGhpcyBpcyBhIHNsb3QgdXNpbmcgdGhlIG5ldyB2LXNsb3Qgc3ludGF4IHdpdGhvdXQgc2NvcGUuIGFsdGhvdWdoIGl0IGlzXG4gIC8vIGNvbXBpbGVkIGFzIGEgc2NvcGVkIHNsb3QsIHJlbmRlciBmbiB1c2VycyB3b3VsZCBleHBlY3QgaXQgdG8gYmUgcHJlc2VudFxuICAvLyBvbiB0aGlzLiRzbG90cyBiZWNhdXNlIHRoZSB1c2FnZSBpcyBzZW1hbnRpY2FsbHkgYSBub3JtYWwgc2xvdC5cbiAgaWYgKGZuLnByb3h5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbFNsb3RzLCBrZXksIHtcbiAgICAgIGdldDogbm9ybWFsaXplZCxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG5mdW5jdGlvbiBwcm94eU5vcm1hbFNsb3Qoc2xvdHMsIGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2xvdHNba2V5XTsgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHYtZm9yIGxpc3RzLlxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0IChcbiAgdmFsLFxuICByZW5kZXJcbikge1xuICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsLmxlbmd0aCk7XG4gICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxbaV0sIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCwgaSwgaSsrKSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSwgaSk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIWlzRGVmKHJldCkpIHtcbiAgICByZXQgPSBbXTtcbiAgfVxuICAocmV0KS5faXNWTGlzdCA9IHRydWU7XG4gIHJldHVybiByZXRcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyA8c2xvdD5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU2xvdCAoXG4gIG5hbWUsXG4gIGZhbGxiYWNrLFxuICBwcm9wcyxcbiAgYmluZE9iamVjdFxuKSB7XG4gIHZhciBzY29wZWRTbG90Rm4gPSB0aGlzLiRzY29wZWRTbG90c1tuYW1lXTtcbiAgdmFyIG5vZGVzO1xuICBpZiAoc2NvcGVkU2xvdEZuKSB7IC8vIHNjb3BlZCBzbG90XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBpZiAoYmluZE9iamVjdCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzT2JqZWN0KGJpbmRPYmplY3QpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ3Nsb3Qgdi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QnLFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHByb3BzID0gZXh0ZW5kKGV4dGVuZCh7fSwgYmluZE9iamVjdCksIHByb3BzKTtcbiAgICB9XG4gICAgLy8gZml4ZWQgYnkgeHh4eHh4IGFwcC1wbHVzIHNjb3BlZFNsb3RcbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcywgdGhpcywgcHJvcHMuX2kpIHx8IGZhbGxiYWNrO1xuICB9IGVsc2Uge1xuICAgIG5vZGVzID0gdGhpcy4kc2xvdHNbbmFtZV0gfHwgZmFsbGJhY2s7XG4gIH1cblxuICB2YXIgdGFyZ2V0ID0gcHJvcHMgJiYgcHJvcHMuc2xvdDtcbiAgaWYgKHRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScsIHsgc2xvdDogdGFyZ2V0IH0sIG5vZGVzKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBub2Rlc1xuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgZmlsdGVyc1xuICovXG5mdW5jdGlvbiByZXNvbHZlRmlsdGVyIChpZCkge1xuICByZXR1cm4gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgaWQsIHRydWUpIHx8IGlkZW50aXR5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0tleU5vdE1hdGNoIChleHBlY3QsIGFjdHVhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShleHBlY3QpKSB7XG4gICAgcmV0dXJuIGV4cGVjdC5pbmRleE9mKGFjdHVhbCkgPT09IC0xXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4cGVjdCAhPT0gYWN0dWFsXG4gIH1cbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgY2hlY2tpbmcga2V5Q29kZXMgZnJvbSBjb25maWcuXG4gKiBleHBvc2VkIGFzIFZ1ZS5wcm90b3R5cGUuX2tcbiAqIHBhc3NpbmcgaW4gZXZlbnRLZXlOYW1lIGFzIGxhc3QgYXJndW1lbnQgc2VwYXJhdGVseSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICovXG5mdW5jdGlvbiBjaGVja0tleUNvZGVzIChcbiAgZXZlbnRLZXlDb2RlLFxuICBrZXksXG4gIGJ1aWx0SW5LZXlDb2RlLFxuICBldmVudEtleU5hbWUsXG4gIGJ1aWx0SW5LZXlOYW1lXG4pIHtcbiAgdmFyIG1hcHBlZEtleUNvZGUgPSBjb25maWcua2V5Q29kZXNba2V5XSB8fCBidWlsdEluS2V5Q29kZTtcbiAgaWYgKGJ1aWx0SW5LZXlOYW1lICYmIGV2ZW50S2V5TmFtZSAmJiAhY29uZmlnLmtleUNvZGVzW2tleV0pIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChidWlsdEluS2V5TmFtZSwgZXZlbnRLZXlOYW1lKVxuICB9IGVsc2UgaWYgKG1hcHBlZEtleUNvZGUpIHtcbiAgICByZXR1cm4gaXNLZXlOb3RNYXRjaChtYXBwZWRLZXlDb2RlLCBldmVudEtleUNvZGUpXG4gIH0gZWxzZSBpZiAoZXZlbnRLZXlOYW1lKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShldmVudEtleU5hbWUpICE9PSBrZXlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgbWVyZ2luZyB2LWJpbmQ9XCJvYmplY3RcIiBpbnRvIGEgVk5vZGUncyBkYXRhLlxuICovXG5mdW5jdGlvbiBiaW5kT2JqZWN0UHJvcHMgKFxuICBkYXRhLFxuICB0YWcsXG4gIHZhbHVlLFxuICBhc1Byb3AsXG4gIGlzU3luY1xuKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCBvciBBcnJheSB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHRvT2JqZWN0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoO1xuICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGtleSA9PT0gJ2NsYXNzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ3N0eWxlJyB8fFxuICAgICAgICAgIGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoa2V5KVxuICAgICAgICApIHtcbiAgICAgICAgICBoYXNoID0gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHlwZSA9IGRhdGEuYXR0cnMgJiYgZGF0YS5hdHRycy50eXBlO1xuICAgICAgICAgIGhhc2ggPSBhc1Byb3AgfHwgY29uZmlnLm11c3RVc2VQcm9wKHRhZywgdHlwZSwga2V5KVxuICAgICAgICAgICAgPyBkYXRhLmRvbVByb3BzIHx8IChkYXRhLmRvbVByb3BzID0ge30pXG4gICAgICAgICAgICA6IGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbWVsaXplZEtleSA9IGNhbWVsaXplKGtleSk7XG4gICAgICAgIHZhciBoeXBoZW5hdGVkS2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgIGlmICghKGNhbWVsaXplZEtleSBpbiBoYXNoKSAmJiAhKGh5cGhlbmF0ZWRLZXkgaW4gaGFzaCkpIHtcbiAgICAgICAgICBoYXNoW2tleV0gPSB2YWx1ZVtrZXldO1xuXG4gICAgICAgICAgaWYgKGlzU3luYykge1xuICAgICAgICAgICAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgICAgICAgICAgIG9uWyhcInVwZGF0ZTpcIiArIGtleSldID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICB2YWx1ZVtrZXldID0gJGV2ZW50O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgbG9vcCgga2V5ICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgc3RhdGljIHRyZWVzLlxuICovXG5mdW5jdGlvbiByZW5kZXJTdGF0aWMgKFxuICBpbmRleCxcbiAgaXNJbkZvclxuKSB7XG4gIHZhciBjYWNoZWQgPSB0aGlzLl9zdGF0aWNUcmVlcyB8fCAodGhpcy5fc3RhdGljVHJlZXMgPSBbXSk7XG4gIHZhciB0cmVlID0gY2FjaGVkW2luZGV4XTtcbiAgLy8gaWYgaGFzIGFscmVhZHktcmVuZGVyZWQgc3RhdGljIHRyZWUgYW5kIG5vdCBpbnNpZGUgdi1mb3IsXG4gIC8vIHdlIGNhbiByZXVzZSB0aGUgc2FtZSB0cmVlLlxuICBpZiAodHJlZSAmJiAhaXNJbkZvcikge1xuICAgIHJldHVybiB0cmVlXG4gIH1cbiAgLy8gb3RoZXJ3aXNlLCByZW5kZXIgYSBmcmVzaCB0cmVlLlxuICB0cmVlID0gY2FjaGVkW2luZGV4XSA9IHRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2luZGV4XS5jYWxsKFxuICAgIHRoaXMuX3JlbmRlclByb3h5LFxuICAgIG51bGwsXG4gICAgdGhpcyAvLyBmb3IgcmVuZGVyIGZucyBnZW5lcmF0ZWQgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRlbXBsYXRlc1xuICApO1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fc3RhdGljX19cIiArIGluZGV4KSwgZmFsc2UpO1xuICByZXR1cm4gdHJlZVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciB2LW9uY2UuXG4gKiBFZmZlY3RpdmVseSBpdCBtZWFucyBtYXJraW5nIHRoZSBub2RlIGFzIHN0YXRpYyB3aXRoIGEgdW5pcXVlIGtleS5cbiAqL1xuZnVuY3Rpb24gbWFya09uY2UgKFxuICB0cmVlLFxuICBpbmRleCxcbiAga2V5XG4pIHtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX29uY2VfX1wiICsgaW5kZXggKyAoa2V5ID8gKFwiX1wiICsga2V5KSA6IFwiXCIpKSwgdHJ1ZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWMgKFxuICB0cmVlLFxuICBrZXksXG4gIGlzT25jZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRyZWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJlZVtpXSAmJiB0eXBlb2YgdHJlZVtpXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWFya1N0YXRpY05vZGUodHJlZVtpXSwgKGtleSArIFwiX1wiICsgaSksIGlzT25jZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1hcmtTdGF0aWNOb2RlKHRyZWUsIGtleSwgaXNPbmNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljTm9kZSAobm9kZSwga2V5LCBpc09uY2UpIHtcbiAgbm9kZS5pc1N0YXRpYyA9IHRydWU7XG4gIG5vZGUua2V5ID0ga2V5O1xuICBub2RlLmlzT25jZSA9IGlzT25jZTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmRPYmplY3RMaXN0ZW5lcnMgKGRhdGEsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3Ytb24gd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCB2YWx1ZScsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvbiA9IGRhdGEub24gPSBkYXRhLm9uID8gZXh0ZW5kKHt9LCBkYXRhLm9uKSA6IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgIHZhciBleGlzdGluZyA9IG9uW2tleV07XG4gICAgICAgIHZhciBvdXJzID0gdmFsdWVba2V5XTtcbiAgICAgICAgb25ba2V5XSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBvdXJzKSA6IG91cnM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlU2NvcGVkU2xvdHMgKFxuICBmbnMsIC8vIHNlZSBmbG93L3Zub2RlXG4gIHJlcyxcbiAgLy8gdGhlIGZvbGxvd2luZyBhcmUgYWRkZWQgaW4gMi42XG4gIGhhc0R5bmFtaWNLZXlzLFxuICBjb250ZW50SGFzaEtleVxuKSB7XG4gIHJlcyA9IHJlcyB8fCB7ICRzdGFibGU6ICFoYXNEeW5hbWljS2V5cyB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzbG90ID0gZm5zW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsb3QpKSB7XG4gICAgICByZXNvbHZlU2NvcGVkU2xvdHMoc2xvdCwgcmVzLCBoYXNEeW5hbWljS2V5cyk7XG4gICAgfSBlbHNlIGlmIChzbG90KSB7XG4gICAgICAvLyBtYXJrZXIgZm9yIHJldmVyc2UgcHJveHlpbmcgdi1zbG90IHdpdGhvdXQgc2NvcGUgb24gdGhpcy4kc2xvdHNcbiAgICAgIGlmIChzbG90LnByb3h5KSB7XG4gICAgICAgIHNsb3QuZm4ucHJveHkgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVzW3Nsb3Qua2V5XSA9IHNsb3QuZm47XG4gICAgfVxuICB9XG4gIGlmIChjb250ZW50SGFzaEtleSkge1xuICAgIChyZXMpLiRrZXkgPSBjb250ZW50SGFzaEtleTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kRHluYW1pY0tleXMgKGJhc2VPYmosIHZhbHVlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHZhciBrZXkgPSB2YWx1ZXNbaV07XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleSkge1xuICAgICAgYmFzZU9ialt2YWx1ZXNbaV1dID0gdmFsdWVzW2kgKyAxXTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYga2V5ICE9PSAnJyAmJiBrZXkgIT09IG51bGwpIHtcbiAgICAgIC8vIG51bGwgaXMgYSBzcGVjaWFsIHZhbHVlIGZvciBleHBsaWNpdGx5IHJlbW92aW5nIGEgYmluZGluZ1xuICAgICAgd2FybihcbiAgICAgICAgKFwiSW52YWxpZCB2YWx1ZSBmb3IgZHluYW1pYyBkaXJlY3RpdmUgYXJndW1lbnQgKGV4cGVjdGVkIHN0cmluZyBvciBudWxsKTogXCIgKyBrZXkpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYmFzZU9ialxufVxuXG4vLyBoZWxwZXIgdG8gZHluYW1pY2FsbHkgYXBwZW5kIG1vZGlmaWVyIHJ1bnRpbWUgbWFya2VycyB0byBldmVudCBuYW1lcy5cbi8vIGVuc3VyZSBvbmx5IGFwcGVuZCB3aGVuIHZhbHVlIGlzIGFscmVhZHkgc3RyaW5nLCBvdGhlcndpc2UgaXQgd2lsbCBiZSBjYXN0XG4vLyB0byBzdHJpbmcgYW5kIGNhdXNlIHRoZSB0eXBlIGNoZWNrIHRvIG1pc3MuXG5mdW5jdGlvbiBwcmVwZW5kTW9kaWZpZXIgKHZhbHVlLCBzeW1ib2wpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBzeW1ib2wgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsUmVuZGVySGVscGVycyAodGFyZ2V0KSB7XG4gIHRhcmdldC5fbyA9IG1hcmtPbmNlO1xuICB0YXJnZXQuX24gPSB0b051bWJlcjtcbiAgdGFyZ2V0Ll9zID0gdG9TdHJpbmc7XG4gIHRhcmdldC5fbCA9IHJlbmRlckxpc3Q7XG4gIHRhcmdldC5fdCA9IHJlbmRlclNsb3Q7XG4gIHRhcmdldC5fcSA9IGxvb3NlRXF1YWw7XG4gIHRhcmdldC5faSA9IGxvb3NlSW5kZXhPZjtcbiAgdGFyZ2V0Ll9tID0gcmVuZGVyU3RhdGljO1xuICB0YXJnZXQuX2YgPSByZXNvbHZlRmlsdGVyO1xuICB0YXJnZXQuX2sgPSBjaGVja0tleUNvZGVzO1xuICB0YXJnZXQuX2IgPSBiaW5kT2JqZWN0UHJvcHM7XG4gIHRhcmdldC5fdiA9IGNyZWF0ZVRleHRWTm9kZTtcbiAgdGFyZ2V0Ll9lID0gY3JlYXRlRW1wdHlWTm9kZTtcbiAgdGFyZ2V0Ll91ID0gcmVzb2x2ZVNjb3BlZFNsb3RzO1xuICB0YXJnZXQuX2cgPSBiaW5kT2JqZWN0TGlzdGVuZXJzO1xuICB0YXJnZXQuX2QgPSBiaW5kRHluYW1pY0tleXM7XG4gIHRhcmdldC5fcCA9IHByZXBlbmRNb2RpZmllcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IChcbiAgZGF0YSxcbiAgcHJvcHMsXG4gIGNoaWxkcmVuLFxuICBwYXJlbnQsXG4gIEN0b3Jcbikge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgLy8gZW5zdXJlIHRoZSBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGluIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICAvLyBnZXRzIGEgdW5pcXVlIGNvbnRleHQgLSB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgY29ycmVjdCBuYW1lZCBzbG90IGNoZWNrXG4gIHZhciBjb250ZXh0Vm07XG4gIGlmIChoYXNPd24ocGFyZW50LCAnX3VpZCcpKSB7XG4gICAgY29udGV4dFZtID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQpO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGNvbnRleHRWbS5fb3JpZ2luYWwgPSBwYXJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNvbnRleHQgdm0gcGFzc2VkIGluIGlzIGEgZnVuY3Rpb25hbCBjb250ZXh0IGFzIHdlbGwuXG4gICAgLy8gaW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGFyZSBhYmxlIHRvIGdldCBhIGhvbGQgdG8gdGhlXG4gICAgLy8gcmVhbCBjb250ZXh0IGluc3RhbmNlLlxuICAgIGNvbnRleHRWbSA9IHBhcmVudDtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBwYXJlbnQgPSBwYXJlbnQuX29yaWdpbmFsO1xuICB9XG4gIHZhciBpc0NvbXBpbGVkID0gaXNUcnVlKG9wdGlvbnMuX2NvbXBpbGVkKTtcbiAgdmFyIG5lZWROb3JtYWxpemF0aW9uID0gIWlzQ29tcGlsZWQ7XG5cbiAgdGhpcy5kYXRhID0gZGF0YTtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmxpc3RlbmVycyA9IGRhdGEub24gfHwgZW1wdHlPYmplY3Q7XG4gIHRoaXMuaW5qZWN0aW9ucyA9IHJlc29sdmVJbmplY3Qob3B0aW9ucy5pbmplY3QsIHBhcmVudCk7XG4gIHRoaXMuc2xvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzJDEuJHNsb3RzKSB7XG4gICAgICBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdGhpcyQxLiRzbG90cyA9IHJlc29sdmVTbG90cyhjaGlsZHJlbiwgcGFyZW50KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMkMS4kc2xvdHNcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3Njb3BlZFNsb3RzJywgKHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLnNsb3RzKCkpXG4gICAgfVxuICB9KSk7XG5cbiAgLy8gc3VwcG9ydCBmb3IgY29tcGlsZWQgZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoaXNDb21waWxlZCkge1xuICAgIC8vIGV4cG9zaW5nICRvcHRpb25zIGZvciByZW5kZXJTdGF0aWMoKVxuICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIHByZS1yZXNvbHZlIHNsb3RzIGZvciByZW5kZXJTbG90KClcbiAgICB0aGlzLiRzbG90cyA9IHRoaXMuc2xvdHMoKTtcbiAgICB0aGlzLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuJHNsb3RzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLl9zY29wZUlkKSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pO1xuICAgICAgaWYgKHZub2RlICYmICFBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB2bm9kZS5mblNjb3BlSWQgPSBvcHRpb25zLl9zY29wZUlkO1xuICAgICAgICB2bm9kZS5mbkNvbnRleHQgPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm5vZGVcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTsgfTtcbiAgfVxufVxuXG5pbnN0YWxsUmVuZGVySGVscGVycyhGdW5jdGlvbmFsUmVuZGVyQ29udGV4dC5wcm90b3R5cGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgcHJvcHNEYXRhLFxuICBkYXRhLFxuICBjb250ZXh0Vm0sXG4gIGNoaWxkcmVuXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgcHJvcE9wdGlvbnMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoaXNEZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSB8fCBlbXB0eU9iamVjdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpc0RlZihkYXRhLmF0dHJzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLmF0dHJzKTsgfVxuICAgIGlmIChpc0RlZihkYXRhLnByb3BzKSkgeyBtZXJnZVByb3BzKHByb3BzLCBkYXRhLnByb3BzKTsgfVxuICB9XG5cbiAgdmFyIHJlbmRlckNvbnRleHQgPSBuZXcgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQoXG4gICAgZGF0YSxcbiAgICBwcm9wcyxcbiAgICBjaGlsZHJlbixcbiAgICBjb250ZXh0Vm0sXG4gICAgQ3RvclxuICApO1xuXG4gIHZhciB2bm9kZSA9IG9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCwgcmVuZGVyQ29udGV4dC5fYywgcmVuZGVyQ29udGV4dCk7XG5cbiAgaWYgKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm4gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICB2YXIgdm5vZGVzID0gbm9ybWFsaXplQ2hpbGRyZW4odm5vZGUpIHx8IFtdO1xuICAgIHZhciByZXMgPSBuZXcgQXJyYXkodm5vZGVzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc1tpXSA9IGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGVzW2ldLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0ICh2bm9kZSwgZGF0YSwgY29udGV4dFZtLCBvcHRpb25zLCByZW5kZXJDb250ZXh0KSB7XG4gIC8vICM3ODE3IGNsb25lIG5vZGUgYmVmb3JlIHNldHRpbmcgZm5Db250ZXh0LCBvdGhlcndpc2UgaWYgdGhlIG5vZGUgaXMgcmV1c2VkXG4gIC8vIChlLmcuIGl0IHdhcyBmcm9tIGEgY2FjaGVkIG5vcm1hbCBzbG90KSB0aGUgZm5Db250ZXh0IGNhdXNlcyBuYW1lZCBzbG90c1xuICAvLyB0aGF0IHNob3VsZCBub3QgYmUgbWF0Y2hlZCB0byBtYXRjaC5cbiAgdmFyIGNsb25lID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gIGNsb25lLmZuQ29udGV4dCA9IGNvbnRleHRWbTtcbiAgY2xvbmUuZm5PcHRpb25zID0gb3B0aW9ucztcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAoY2xvbmUuZGV2dG9vbHNNZXRhID0gY2xvbmUuZGV2dG9vbHNNZXRhIHx8IHt9KS5yZW5kZXJDb250ZXh0ID0gcmVuZGVyQ29udGV4dDtcbiAgfVxuICBpZiAoZGF0YS5zbG90KSB7XG4gICAgKGNsb25lLmRhdGEgfHwgKGNsb25lLmRhdGEgPSB7fSkpLnNsb3QgPSBkYXRhLnNsb3Q7XG4gIH1cbiAgcmV0dXJuIGNsb25lXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG4gICAgdG9bY2FtZWxpemUoa2V5KV0gPSBmcm9tW2tleV07XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGlubGluZSBob29rcyB0byBiZSBpbnZva2VkIG9uIGNvbXBvbmVudCBWTm9kZXMgZHVyaW5nIHBhdGNoXG52YXIgY29tcG9uZW50Vk5vZGVIb29rcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIGlmIChcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlICYmXG4gICAgICAhdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkICYmXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZVxuICAgICkge1xuICAgICAgLy8ga2VwdC1hbGl2ZSBjb21wb25lbnRzLCB0cmVhdCBhcyBhIHBhdGNoXG4gICAgICB2YXIgbW91bnRlZE5vZGUgPSB2bm9kZTsgLy8gd29yayBhcm91bmQgZmxvd1xuICAgICAgY29tcG9uZW50Vk5vZGVIb29rcy5wcmVwYXRjaChtb3VudGVkTm9kZSwgbW91bnRlZE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUoXG4gICAgICAgIHZub2RlLFxuICAgICAgICBhY3RpdmVJbnN0YW5jZVxuICAgICAgKTtcbiAgICAgIGNoaWxkLiRtb3VudChoeWRyYXRpbmcgPyB2bm9kZS5lbG0gOiB1bmRlZmluZWQsIGh5ZHJhdGluZyk7XG4gICAgfVxuICB9LFxuXG4gIHByZXBhdGNoOiBmdW5jdGlvbiBwcmVwYXRjaCAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdXBkYXRlQ2hpbGRDb21wb25lbnQoXG4gICAgICBjaGlsZCxcbiAgICAgIG9wdGlvbnMucHJvcHNEYXRhLCAvLyB1cGRhdGVkIHByb3BzXG4gICAgICBvcHRpb25zLmxpc3RlbmVycywgLy8gdXBkYXRlZCBsaXN0ZW5lcnNcbiAgICAgIHZub2RlLCAvLyBuZXcgcGFyZW50IHZub2RlXG4gICAgICBvcHRpb25zLmNoaWxkcmVuIC8vIG5ldyBjaGlsZHJlblxuICAgICk7XG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQgKHZub2RlKSB7XG4gICAgdmFyIGNvbnRleHQgPSB2bm9kZS5jb250ZXh0O1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCkge1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VDcmVhdGVkJyk7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ29uU2VydmljZUF0dGFjaGVkJyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZywgY29udGV4dCk7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuXG4gIC8vIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmZ1bmN0aW9uYWwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQoQ3RvciwgcHJvcHNEYXRhLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbilcbiAgfVxuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzLCBzaW5jZSB0aGVzZSBuZWVkcyB0byBiZSB0cmVhdGVkIGFzXG4gIC8vIGNoaWxkIGNvbXBvbmVudCBsaXN0ZW5lcnMgaW5zdGVhZCBvZiBET00gbGlzdGVuZXJzXG4gIHZhciBsaXN0ZW5lcnMgPSBkYXRhLm9uO1xuICAvLyByZXBsYWNlIHdpdGggbGlzdGVuZXJzIHdpdGggLm5hdGl2ZSBtb2RpZmllclxuICAvLyBzbyBpdCBnZXRzIHByb2Nlc3NlZCBkdXJpbmcgcGFyZW50IGNvbXBvbmVudCBwYXRjaC5cbiAgZGF0YS5vbiA9IGRhdGEubmF0aXZlT247XG5cbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuYWJzdHJhY3QpKSB7XG4gICAgLy8gYWJzdHJhY3QgY29tcG9uZW50cyBkbyBub3Qga2VlcCBhbnl0aGluZ1xuICAgIC8vIG90aGVyIHRoYW4gcHJvcHMgJiBsaXN0ZW5lcnMgJiBzbG90XG5cbiAgICAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgdmFyIHNsb3QgPSBkYXRhLnNsb3Q7XG4gICAgZGF0YSA9IHt9O1xuICAgIGlmIChzbG90KSB7XG4gICAgICBkYXRhLnNsb3QgPSBzbG90O1xuICAgIH1cbiAgfVxuXG4gIC8vIGluc3RhbGwgY29tcG9uZW50IG1hbmFnZW1lbnQgaG9va3Mgb250byB0aGUgcGxhY2Vob2xkZXIgbm9kZVxuICBpbnN0YWxsQ29tcG9uZW50SG9va3MoZGF0YSk7XG5cbiAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgdm5vZGVcbiAgdmFyIG5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCB0YWc7XG4gIHZhciB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAoXCJ2dWUtY29tcG9uZW50LVwiICsgKEN0b3IuY2lkKSArIChuYW1lID8gKFwiLVwiICsgbmFtZSkgOiAnJykpLFxuICAgIGRhdGEsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHQsXG4gICAgeyBDdG9yOiBDdG9yLCBwcm9wc0RhdGE6IHByb3BzRGF0YSwgbGlzdGVuZXJzOiBsaXN0ZW5lcnMsIHRhZzogdGFnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSxcbiAgICBhc3luY0ZhY3RvcnlcbiAgKTtcblxuICByZXR1cm4gdm5vZGVcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSAoXG4gIHZub2RlLCAvLyB3ZSBrbm93IGl0J3MgTW91bnRlZENvbXBvbmVudFZOb2RlIGJ1dCBmbG93IGRvZXNuJ3RcbiAgcGFyZW50IC8vIGFjdGl2ZUluc3RhbmNlIGluIGxpZmVjeWNsZSBzdGF0ZVxuKSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIF9pc0NvbXBvbmVudDogdHJ1ZSxcbiAgICBfcGFyZW50Vm5vZGU6IHZub2RlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH07XG4gIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZSByZW5kZXIgZnVuY3Rpb25zXG4gIHZhciBpbmxpbmVUZW1wbGF0ZSA9IHZub2RlLmRhdGEuaW5saW5lVGVtcGxhdGU7XG4gIGlmIChpc0RlZihpbmxpbmVUZW1wbGF0ZSkpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGlubGluZVRlbXBsYXRlLnJlbmRlcjtcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGlubGluZVRlbXBsYXRlLnN0YXRpY1JlbmRlckZucztcbiAgfVxuICByZXR1cm4gbmV3IHZub2RlLmNvbXBvbmVudE9wdGlvbnMuQ3RvcihvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsQ29tcG9uZW50SG9va3MgKGRhdGEpIHtcbiAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3NUb01lcmdlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGhvb2tzVG9NZXJnZVtpXTtcbiAgICB2YXIgZXhpc3RpbmcgPSBob29rc1trZXldO1xuICAgIHZhciB0b01lcmdlID0gY29tcG9uZW50Vk5vZGVIb29rc1trZXldO1xuICAgIGlmIChleGlzdGluZyAhPT0gdG9NZXJnZSAmJiAhKGV4aXN0aW5nICYmIGV4aXN0aW5nLl9tZXJnZWQpKSB7XG4gICAgICBob29rc1trZXldID0gZXhpc3RpbmcgPyBtZXJnZUhvb2skMSh0b01lcmdlLCBleGlzdGluZykgOiB0b01lcmdlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUhvb2skMSAoZjEsIGYyKSB7XG4gIHZhciBtZXJnZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vIGZsb3cgY29tcGxhaW5zIGFib3V0IGV4dHJhIGFyZ3Mgd2hpY2ggaXMgd2h5IHdlIHVzZSBhbnlcbiAgICBmMShhLCBiKTtcbiAgICBmMihhLCBiKTtcbiAgfTtcbiAgbWVyZ2VkLl9tZXJnZWQgPSB0cnVlO1xuICByZXR1cm4gbWVyZ2VkXG59XG5cbi8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBpbmZvICh2YWx1ZSBhbmQgY2FsbGJhY2spIGludG9cbi8vIHByb3AgYW5kIGV2ZW50IGhhbmRsZXIgcmVzcGVjdGl2ZWx5LlxuZnVuY3Rpb24gdHJhbnNmb3JtTW9kZWwgKG9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHByb3AgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLnByb3ApIHx8ICd2YWx1ZSc7XG4gIHZhciBldmVudCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwuZXZlbnQpIHx8ICdpbnB1dCdcbiAgOyhkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pKVtwcm9wXSA9IGRhdGEubW9kZWwudmFsdWU7XG4gIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gIHZhciBleGlzdGluZyA9IG9uW2V2ZW50XTtcbiAgdmFyIGNhbGxiYWNrID0gZGF0YS5tb2RlbC5jYWxsYmFjaztcbiAgaWYgKGlzRGVmKGV4aXN0aW5nKSkge1xuICAgIGlmIChcbiAgICAgIEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICAgID8gZXhpc3RpbmcuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xXG4gICAgICAgIDogZXhpc3RpbmcgIT09IGNhbGxiYWNrXG4gICAgKSB7XG4gICAgICBvbltldmVudF0gPSBbY2FsbGJhY2tdLmNvbmNhdChleGlzdGluZyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uW2V2ZW50XSA9IGNhbGxiYWNrO1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgU0lNUExFX05PUk1BTElaRSA9IDE7XG52YXIgQUxXQVlTX05PUk1BTElaRSA9IDI7XG5cbi8vIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHByb3ZpZGluZyBhIG1vcmUgZmxleGlibGUgaW50ZXJmYWNlXG4vLyB3aXRob3V0IGdldHRpbmcgeWVsbGVkIGF0IGJ5IGZsb3dcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZSxcbiAgYWx3YXlzTm9ybWFsaXplXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNQcmltaXRpdmUoZGF0YSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IGNoaWxkcmVuO1xuICAgIGNoaWxkcmVuID0gZGF0YTtcbiAgICBkYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChpc1RydWUoYWx3YXlzTm9ybWFsaXplKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gQUxXQVlTX05PUk1BTElaRTtcbiAgfVxuICByZXR1cm4gX2NyZWF0ZUVsZW1lbnQoY29udGV4dCwgdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGVcbikge1xuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoKGRhdGEpLl9fb2JfXykpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIkF2b2lkIHVzaW5nIG9ic2VydmVkIGRhdGEgb2JqZWN0IGFzIHZub2RlIGRhdGE6IFwiICsgKEpTT04uc3RyaW5naWZ5KGRhdGEpKSArIFwiXFxuXCIgK1xuICAgICAgJ0Fsd2F5cyBjcmVhdGUgZnJlc2ggdm5vZGUgZGF0YSBvYmplY3RzIGluIGVhY2ggcmVuZGVyIScsXG4gICAgICBjb250ZXh0XG4gICAgKTtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gb2JqZWN0IHN5bnRheCBpbiB2LWJpbmRcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEuaXMpKSB7XG4gICAgdGFnID0gZGF0YS5pcztcbiAgfVxuICBpZiAoIXRhZykge1xuICAgIC8vIGluIGNhc2Ugb2YgY29tcG9uZW50IDppcyBzZXQgdG8gZmFsc3kgdmFsdWVcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1wcmltaXRpdmUga2V5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5rZXkpICYmICFpc1ByaW1pdGl2ZShkYXRhLmtleSlcbiAgKSB7XG4gICAge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHVzaW5nIG5vbi1wcmltaXRpdmUgdmFsdWUgYXMga2V5LCAnICtcbiAgICAgICAgJ3VzZSBzdHJpbmcvbnVtYmVyIHZhbHVlIGluc3RlYWQuJyxcbiAgICAgICAgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gc3VwcG9ydCBzaW5nbGUgZnVuY3Rpb24gY2hpbGRyZW4gYXMgZGVmYXVsdCBzY29wZWQgc2xvdFxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICB0eXBlb2YgY2hpbGRyZW5bMF0gPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgZGF0YSA9IGRhdGEgfHwge307XG4gICAgZGF0YS5zY29wZWRTbG90cyA9IHsgZGVmYXVsdDogY2hpbGRyZW5bMF0gfTtcbiAgICBjaGlsZHJlbi5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gQUxXQVlTX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBTSU1QTEVfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH1cbiAgdmFyIHZub2RlLCBucztcbiAgaWYgKHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIEN0b3I7XG4gICAgbnMgPSAoY29udGV4dC4kdm5vZGUgJiYgY29udGV4dC4kdm5vZGUubnMpIHx8IGNvbmZpZy5nZXRUYWdOYW1lc3BhY2UodGFnKTtcbiAgICBpZiAoY29uZmlnLmlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgICAgLy8gcGxhdGZvcm0gYnVpbHQtaW4gZWxlbWVudHNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEubmF0aXZlT24pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiVGhlIC5uYXRpdmUgbW9kaWZpZXIgZm9yIHYtb24gaXMgb25seSB2YWxpZCBvbiBjb21wb25lbnRzIGJ1dCBpdCB3YXMgdXNlZCBvbiA8XCIgKyB0YWcgKyBcIj4uXCIpLFxuICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICBjb25maWcucGFyc2VQbGF0Zm9ybVRhZ05hbWUodGFnKSwgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKCFkYXRhIHx8ICFkYXRhLnByZSkgJiYgaXNEZWYoQ3RvciA9IHJlc29sdmVBc3NldChjb250ZXh0LiRvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KEN0b3IsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuLCB0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bmtub3duIG9yIHVubGlzdGVkIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAgICAgIC8vIGNoZWNrIGF0IHJ1bnRpbWUgYmVjYXVzZSBpdCBtYXkgZ2V0IGFzc2lnbmVkIGEgbmFtZXNwYWNlIHdoZW4gaXRzXG4gICAgICAvLyBwYXJlbnQgbm9ybWFsaXplcyBjaGlsZHJlblxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIHRhZywgZGF0YSwgY2hpbGRyZW4sXG4gICAgICAgIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBkaXJlY3QgY29tcG9uZW50IG9wdGlvbnMgLyBjb25zdHJ1Y3RvclxuICAgIHZub2RlID0gY3JlYXRlQ29tcG9uZW50KHRhZywgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2UgaWYgKGlzRGVmKHZub2RlKSkge1xuICAgIGlmIChpc0RlZihucykpIHsgYXBwbHlOUyh2bm9kZSwgbnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7IHJlZ2lzdGVyRGVlcEJpbmRpbmdzKGRhdGEpOyB9XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5TlMgKHZub2RlLCBucywgZm9yY2UpIHtcbiAgdm5vZGUubnMgPSBucztcbiAgaWYgKHZub2RlLnRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gdXNlIGRlZmF1bHQgbmFtZXNwYWNlIGluc2lkZSBmb3JlaWduT2JqZWN0XG4gICAgbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2UgPSB0cnVlO1xuICB9XG4gIGlmIChpc0RlZih2bm9kZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoY2hpbGQudGFnKSAmJiAoXG4gICAgICAgIGlzVW5kZWYoY2hpbGQubnMpIHx8IChpc1RydWUoZm9yY2UpICYmIGNoaWxkLnRhZyAhPT0gJ3N2ZycpKSkge1xuICAgICAgICBhcHBseU5TKGNoaWxkLCBucywgZm9yY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyByZWYgIzUzMThcbi8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgcGFyZW50IHJlLXJlbmRlciB3aGVuIGRlZXAgYmluZGluZ3MgbGlrZSA6c3R5bGUgYW5kXG4vLyA6Y2xhc3MgYXJlIHVzZWQgb24gc2xvdCBub2Rlc1xuZnVuY3Rpb24gcmVnaXN0ZXJEZWVwQmluZGluZ3MgKGRhdGEpIHtcbiAgaWYgKGlzT2JqZWN0KGRhdGEuc3R5bGUpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5zdHlsZSk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KGRhdGEuY2xhc3MpKSB7XG4gICAgdHJhdmVyc2UoZGF0YS5jbGFzcyk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRSZW5kZXIgKHZtKSB7XG4gIHZtLl92bm9kZSA9IG51bGw7IC8vIHRoZSByb290IG9mIHRoZSBjaGlsZCB0cmVlXG4gIHZtLl9zdGF0aWNUcmVlcyA9IG51bGw7IC8vIHYtb25jZSBjYWNoZWQgdHJlZXNcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgdmFyIHBhcmVudFZub2RlID0gdm0uJHZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7IC8vIHRoZSBwbGFjZWhvbGRlciBub2RlIGluIHBhcmVudCB0cmVlXG4gIHZhciByZW5kZXJDb250ZXh0ID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuY29udGV4dDtcbiAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLCByZW5kZXJDb250ZXh0KTtcbiAgdm0uJHNjb3BlZFNsb3RzID0gZW1wdHlPYmplY3Q7XG4gIC8vIGJpbmQgdGhlIGNyZWF0ZUVsZW1lbnQgZm4gdG8gdGhpcyBpbnN0YW5jZVxuICAvLyBzbyB0aGF0IHdlIGdldCBwcm9wZXIgcmVuZGVyIGNvbnRleHQgaW5zaWRlIGl0LlxuICAvLyBhcmdzIG9yZGVyOiB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSwgYWx3YXlzTm9ybWFsaXplXG4gIC8vIGludGVybmFsIHZlcnNpb24gaXMgdXNlZCBieSByZW5kZXIgZnVuY3Rpb25zIGNvbXBpbGVkIGZyb20gdGVtcGxhdGVzXG4gIHZtLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIGZhbHNlKTsgfTtcbiAgLy8gbm9ybWFsaXphdGlvbiBpcyBhbHdheXMgYXBwbGllZCBmb3IgdGhlIHB1YmxpYyB2ZXJzaW9uLCB1c2VkIGluXG4gIC8vIHVzZXItd3JpdHRlbiByZW5kZXIgZnVuY3Rpb25zLlxuICB2bS4kY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCB0cnVlKTsgfTtcblxuICAvLyAkYXR0cnMgJiAkbGlzdGVuZXJzIGFyZSBleHBvc2VkIGZvciBlYXNpZXIgSE9DIGNyZWF0aW9uLlxuICAvLyB0aGV5IG5lZWQgdG8gYmUgcmVhY3RpdmUgc28gdGhhdCBIT0NzIHVzaW5nIHRoZW0gYXJlIGFsd2F5cyB1cGRhdGVkXG4gIHZhciBwYXJlbnREYXRhID0gcGFyZW50Vm5vZGUgJiYgcGFyZW50Vm5vZGUuZGF0YTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkYXR0cnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRsaXN0ZW5lcnMgaXMgcmVhZG9ubHkuXCIsIHZtKTtcbiAgICB9LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyTWl4aW4gKFZ1ZSkge1xuICAvLyBpbnN0YWxsIHJ1bnRpbWUgY29udmVuaWVuY2UgaGVscGVyc1xuICBpbnN0YWxsUmVuZGVySGVscGVycyhWdWUucHJvdG90eXBlKTtcblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBuZXh0VGljayhmbiwgdGhpcylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcmVmID0gdm0uJG9wdGlvbnM7XG4gICAgdmFyIHJlbmRlciA9IHJlZi5yZW5kZXI7XG4gICAgdmFyIF9wYXJlbnRWbm9kZSA9IHJlZi5fcGFyZW50Vm5vZGU7XG5cbiAgICBpZiAoX3BhcmVudFZub2RlKSB7XG4gICAgICB2bS4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhcbiAgICAgICAgX3BhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHZtLiRzbG90cyxcbiAgICAgICAgdm0uJHNjb3BlZFNsb3RzXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNldCBwYXJlbnQgdm5vZGUuIHRoaXMgYWxsb3dzIHJlbmRlciBmdW5jdGlvbnMgdG8gaGF2ZSBhY2Nlc3NcbiAgICAvLyB0byB0aGUgZGF0YSBvbiB0aGUgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICB2bS4kdm5vZGUgPSBfcGFyZW50Vm5vZGU7XG4gICAgLy8gcmVuZGVyIHNlbGZcbiAgICB2YXIgdm5vZGU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYWludGFpbiBhIHN0YWNrIGJlY2F1c2UgYWxsIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gc2VwYXJhdGVseSBmcm9tIG9uZSBhbm90aGVyLiBOZXN0ZWQgY29tcG9uZW50J3MgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyB3aGVuIHBhcmVudCBjb21wb25lbnQgaXMgcGF0Y2hlZC5cbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IHZtO1xuICAgICAgdm5vZGUgPSByZW5kZXIuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJcIik7XG4gICAgICAvLyByZXR1cm4gZXJyb3IgcmVuZGVyIHJlc3VsdCxcbiAgICAgIC8vIG9yIHByZXZpb3VzIHZub2RlIHRvIHByZXZlbnQgcmVuZGVyIGVycm9yIGNhdXNpbmcgYmxhbmsgY29tcG9uZW50XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2bm9kZSA9IHZtLiRvcHRpb25zLnJlbmRlckVycm9yLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCwgZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJyZW5kZXJFcnJvclwiKTtcbiAgICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGlmIHRoZSByZXR1cm5lZCBhcnJheSBjb250YWlucyBvbmx5IGEgc2luZ2xlIG5vZGUsIGFsbG93IGl0XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpICYmIHZub2RlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdm5vZGUgPSB2bm9kZVswXTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGVtcHR5IHZub2RlIGluIGNhc2UgdGhlIHJlbmRlciBmdW5jdGlvbiBlcnJvcmVkIG91dFxuICAgIGlmICghKHZub2RlIGluc3RhbmNlb2YgVk5vZGUpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdNdWx0aXBsZSByb290IG5vZGVzIHJldHVybmVkIGZyb20gcmVuZGVyIGZ1bmN0aW9uLiBSZW5kZXIgZnVuY3Rpb24gJyArXG4gICAgICAgICAgJ3Nob3VsZCByZXR1cm4gYSBzaW5nbGUgcm9vdCBub2RlLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICAgIH1cbiAgICAvLyBzZXQgcGFyZW50XG4gICAgdm5vZGUucGFyZW50ID0gX3BhcmVudFZub2RlO1xuICAgIHJldHVybiB2bm9kZVxuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW5zdXJlQ3RvciAoY29tcCwgYmFzZSkge1xuICBpZiAoXG4gICAgY29tcC5fX2VzTW9kdWxlIHx8XG4gICAgKGhhc1N5bWJvbCAmJiBjb21wW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09ICdNb2R1bGUnKVxuICApIHtcbiAgICBjb21wID0gY29tcC5kZWZhdWx0O1xuICB9XG4gIHJldHVybiBpc09iamVjdChjb21wKVxuICAgID8gYmFzZS5leHRlbmQoY29tcClcbiAgICA6IGNvbXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXN5bmNQbGFjZWhvbGRlciAoXG4gIGZhY3RvcnksXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICB2YXIgbm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgbm9kZS5hc3luY0ZhY3RvcnkgPSBmYWN0b3J5O1xuICBub2RlLmFzeW5jTWV0YSA9IHsgZGF0YTogZGF0YSwgY29udGV4dDogY29udGV4dCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0YWc6IHRhZyB9O1xuICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQgKFxuICBmYWN0b3J5LFxuICBiYXNlQ3RvclxuKSB7XG4gIGlmIChpc1RydWUoZmFjdG9yeS5lcnJvcikgJiYgaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkuZXJyb3JDb21wXG4gIH1cblxuICBpZiAoaXNEZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5yZXNvbHZlZFxuICB9XG5cbiAgdmFyIG93bmVyID0gY3VycmVudFJlbmRlcmluZ0luc3RhbmNlO1xuICBpZiAob3duZXIgJiYgaXNEZWYoZmFjdG9yeS5vd25lcnMpICYmIGZhY3Rvcnkub3duZXJzLmluZGV4T2Yob3duZXIpID09PSAtMSkge1xuICAgIC8vIGFscmVhZHkgcGVuZGluZ1xuICAgIGZhY3Rvcnkub3duZXJzLnB1c2gob3duZXIpO1xuICB9XG5cbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmxvYWRpbmcpICYmIGlzRGVmKGZhY3RvcnkubG9hZGluZ0NvbXApKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgfVxuXG4gIGlmIChvd25lciAmJiAhaXNEZWYoZmFjdG9yeS5vd25lcnMpKSB7XG4gICAgdmFyIG93bmVycyA9IGZhY3Rvcnkub3duZXJzID0gW293bmVyXTtcbiAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgdmFyIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgdmFyIHRpbWVyVGltZW91dCA9IG51bGxcblxuICAgIDsob3duZXIpLiRvbignaG9vazpkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmUob3duZXJzLCBvd25lcik7IH0pO1xuXG4gICAgdmFyIGZvcmNlUmVuZGVyID0gZnVuY3Rpb24gKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvd25lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIChvd25lcnNbaV0pLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgICBpZiAodGltZXJMb2FkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyTG9hZGluZyk7XG4gICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXJUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyVGltZW91dCk7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlcykge1xuICAgICAgLy8gY2FjaGUgcmVzb2x2ZWRcbiAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSBlbnN1cmVDdG9yKHJlcywgYmFzZUN0b3IpO1xuICAgICAgLy8gaW52b2tlIGNhbGxiYWNrcyBvbmx5IGlmIHRoaXMgaXMgbm90IGEgc3luY2hyb25vdXMgcmVzb2x2ZVxuICAgICAgLy8gKGFzeW5jIHJlc29sdmVzIGFyZSBzaGltbWVkIGFzIHN5bmNocm9ub3VzIGR1cmluZyBTU1IpXG4gICAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6IFwiICsgKFN0cmluZyhmYWN0b3J5KSkgK1xuICAgICAgICAocmVhc29uID8gKFwiXFxuUmVhc29uOiBcIiArIHJlYXNvbikgOiAnJylcbiAgICAgICk7XG4gICAgICBpZiAoaXNEZWYoZmFjdG9yeS5lcnJvckNvbXApKSB7XG4gICAgICAgIGZhY3RvcnkuZXJyb3IgPSB0cnVlO1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciByZXMgPSBmYWN0b3J5KHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICBpZiAoaXNPYmplY3QocmVzKSkge1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vICgpID0+IFByb21pc2VcbiAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMuY29tcG9uZW50KSkge1xuICAgICAgICByZXMuY29tcG9uZW50LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICBpZiAoaXNEZWYocmVzLmVycm9yKSkge1xuICAgICAgICAgIGZhY3RvcnkuZXJyb3JDb21wID0gZW5zdXJlQ3RvcihyZXMuZXJyb3IsIGJhc2VDdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMubG9hZGluZykpIHtcbiAgICAgICAgICBmYWN0b3J5LmxvYWRpbmdDb21wID0gZW5zdXJlQ3RvcihyZXMubG9hZGluZywgYmFzZUN0b3IpO1xuICAgICAgICAgIGlmIChyZXMuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSAmJiBpc1VuZGVmKGZhY3RvcnkuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcihmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlcy5kZWxheSB8fCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0RlZihyZXMudGltZW91dCkpIHtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgPyAoXCJ0aW1lb3V0IChcIiArIChyZXMudGltZW91dCkgKyBcIm1zKVwiKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgcmVzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3luYyA9IGZhbHNlO1xuICAgIC8vIHJldHVybiBpbiBjYXNlIHJlc29sdmVkIHN5bmNocm9ub3VzbHlcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nXG4gICAgICA/IGZhY3RvcnkubG9hZGluZ0NvbXBcbiAgICAgIDogZmFjdG9yeS5yZXNvbHZlZFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpc0FzeW5jUGxhY2Vob2xkZXIgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuaXNDb21tZW50ICYmIG5vZGUuYXN5bmNGYWN0b3J5XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZXRGaXJzdENvbXBvbmVudENoaWxkIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGMpICYmIChpc0RlZihjLmNvbXBvbmVudE9wdGlvbnMpIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKSkpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXZlbnRzICh2bSkge1xuICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdm0uX2hhc0hvb2tFdmVudCA9IGZhbHNlO1xuICAvLyBpbml0IHBhcmVudCBhdHRhY2hlZCBldmVudHNcbiAgdmFyIGxpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIGlmIChsaXN0ZW5lcnMpIHtcbiAgICB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnModm0sIGxpc3RlbmVycyk7XG4gIH1cbn1cblxudmFyIHRhcmdldDtcblxuZnVuY3Rpb24gYWRkIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvbihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMSAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb2ZmKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyIChldmVudCwgZm4pIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQ7XG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgX3RhcmdldC4kb2ZmKGV2ZW50LCBvbmNlSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyAoXG4gIHZtLFxuICBsaXN0ZW5lcnMsXG4gIG9sZExpc3RlbmVyc1xuKSB7XG4gIHRhcmdldCA9IHZtO1xuICB1cGRhdGVMaXN0ZW5lcnMobGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMgfHwge30sIGFkZCwgcmVtb3ZlJDEsIGNyZWF0ZU9uY2VIYW5kbGVyLCB2bSk7XG4gIHRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzTWl4aW4gKFZ1ZSkge1xuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIFZ1ZS5wcm90b3R5cGUuJG9uID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2bS4kb24oZXZlbnRbaV0sIGZuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgICAvLyBvcHRpbWl6ZSBob29rOmV2ZW50IGNvc3QgYnkgdXNpbmcgYSBib29sZWFuIGZsYWcgbWFya2VkIGF0IHJlZ2lzdHJhdGlvblxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGhhc2ggbG9va3VwXG4gICAgICBpZiAoaG9va1JFLnRlc3QoZXZlbnQpKSB7XG4gICAgICAgIHZtLl9oYXNIb29rRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvbmNlID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24gKCkge1xuICAgICAgdm0uJG9mZihldmVudCwgb24pO1xuICAgICAgZm4uYXBwbHkodm0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdm0uJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBhcnJheSBvZiBldmVudHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkkMSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkkMSA8IGw7IGkkMSsrKSB7XG4gICAgICAgIHZtLiRvZmYoZXZlbnRbaSQxXSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmICghY2JzKSB7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgaWYgKCFmbikge1xuICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgICB2YXIgY2I7XG4gICAgdmFyIGkgPSBjYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZW1pdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBsb3dlckNhc2VFdmVudCA9IGV2ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAobG93ZXJDYXNlRXZlbnQgIT09IGV2ZW50ICYmIHZtLl9ldmVudHNbbG93ZXJDYXNlRXZlbnRdKSB7XG4gICAgICAgIHRpcChcbiAgICAgICAgICBcIkV2ZW50IFxcXCJcIiArIGxvd2VyQ2FzZUV2ZW50ICsgXCJcXFwiIGlzIGVtaXR0ZWQgaW4gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAoZm9ybWF0Q29tcG9uZW50TmFtZSh2bSkpICsgXCIgYnV0IHRoZSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWQgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCB5b3UgY2Fubm90IHVzZSBcIiArXG4gICAgICAgICAgXCJ2LW9uIHRvIGxpc3RlbiB0byBjYW1lbENhc2UgZXZlbnRzIHdoZW4gdXNpbmcgaW4tRE9NIHRlbXBsYXRlcy4gXCIgK1xuICAgICAgICAgIFwiWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgKGh5cGhlbmF0ZShldmVudCkpICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgaW5mbyA9IFwiZXZlbnQgaGFuZGxlciBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjYnNbaV0sIHZtLCBhcmdzLCB2bSwgaW5mbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIGFjdGl2ZUluc3RhbmNlID0gbnVsbDtcbnZhciBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlSW5zdGFuY2Uodm0pIHtcbiAgdmFyIHByZXZBY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlO1xuICBhY3RpdmVJbnN0YW5jZSA9IHZtO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGFjdGl2ZUluc3RhbmNlID0gcHJldkFjdGl2ZUluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRMaWZlY3ljbGUgKHZtKSB7XG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG5cbiAgLy8gbG9jYXRlIGZpcnN0IG5vbi1hYnN0cmFjdCBwYXJlbnRcbiAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBpZiAocGFyZW50ICYmICFvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgd2hpbGUgKHBhcmVudC4kb3B0aW9ucy5hYnN0cmFjdCAmJiBwYXJlbnQuJHBhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudC4kY2hpbGRyZW4ucHVzaCh2bSk7XG4gIH1cblxuICB2bS4kcGFyZW50ID0gcGFyZW50O1xuICB2bS4kcm9vdCA9IHBhcmVudCA/IHBhcmVudC4kcm9vdCA6IHZtO1xuXG4gIHZtLiRjaGlsZHJlbiA9IFtdO1xuICB2bS4kcmVmcyA9IHt9O1xuXG4gIHZtLl93YXRjaGVyID0gbnVsbDtcbiAgdm0uX2luYWN0aXZlID0gbnVsbDtcbiAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gIHZtLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgdm0uX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBwcmV2RWwgPSB2bS4kZWw7XG4gICAgdmFyIHByZXZWbm9kZSA9IHZtLl92bm9kZTtcbiAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2Uodm0pO1xuICAgIHZtLl92bm9kZSA9IHZub2RlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fIGlzIGluamVjdGVkIGluIGVudHJ5IHBvaW50c1xuICAgIC8vIGJhc2VkIG9uIHRoZSByZW5kZXJpbmcgYmFja2VuZCB1c2VkLlxuICAgIGlmICghcHJldlZub2RlKSB7XG4gICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHZtLiRlbCwgdm5vZGUsIGh5ZHJhdGluZywgZmFsc2UgLyogcmVtb3ZlT25seSAqLyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZXNcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyhwcmV2Vm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmVzdG9yZUFjdGl2ZUluc3RhbmNlKCk7XG4gICAgLy8gdXBkYXRlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IHZtO1xuICAgIH1cbiAgICAvLyBpZiBwYXJlbnQgaXMgYW4gSE9DLCB1cGRhdGUgaXRzICRlbCBhcyB3ZWxsXG4gICAgaWYgKHZtLiR2bm9kZSAmJiB2bS4kcGFyZW50ICYmIHZtLiR2bm9kZSA9PT0gdm0uJHBhcmVudC5fdm5vZGUpIHtcbiAgICAgIHZtLiRwYXJlbnQuJGVsID0gdm0uJGVsO1xuICAgIH1cbiAgICAvLyB1cGRhdGVkIGhvb2sgaXMgY2FsbGVkIGJ5IHRoZSBzY2hlZHVsZXIgdG8gZW5zdXJlIHRoYXQgY2hpbGRyZW4gYXJlXG4gICAgLy8gdXBkYXRlZCBpbiBhIHBhcmVudCdzIHVwZGF0ZWQgaG9vay5cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnRcbiAgICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXZtLiRvcHRpb25zLmFic3RyYWN0KSB7XG4gICAgICByZW1vdmUocGFyZW50LiRjaGlsZHJlbiwgdm0pO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biB3YXRjaGVyc1xuICAgIGlmICh2bS5fd2F0Y2hlcikge1xuICAgICAgdm0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gICAgdmFyIGkgPSB2bS5fd2F0Y2hlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZtLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAgIC8vIGZyb3plbiBvYmplY3QgbWF5IG5vdCBoYXZlIG9ic2VydmVyLlxuICAgIGlmICh2bS5fZGF0YS5fX29iX18pIHtcbiAgICAgIHZtLl9kYXRhLl9fb2JfXy52bUNvdW50LS07XG4gICAgfVxuICAgIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICAgIHZtLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgLy8gaW52b2tlIGRlc3Ryb3kgaG9va3Mgb24gY3VycmVudCByZW5kZXJlZCB0cmVlXG4gICAgdm0uX19wYXRjaF9fKHZtLl92bm9kZSwgbnVsbCk7XG4gICAgLy8gZmlyZSBkZXN0cm95ZWQgaG9va1xuICAgIGNhbGxIb29rKHZtLCAnZGVzdHJveWVkJyk7XG4gICAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgICB2bS4kb2ZmKCk7XG4gICAgLy8gcmVtb3ZlIF9fdnVlX18gcmVmZXJlbmNlXG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSBudWxsO1xuICAgIH1cbiAgICAvLyByZWxlYXNlIGNpcmN1bGFyIHJlZmVyZW5jZSAoIzY3NTkpXG4gICAgaWYgKHZtLiR2bm9kZSkge1xuICAgICAgdm0uJHZub2RlLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cbiAgXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCB1cGRhdGUgcHJvcGVydGllcyhtcCBydW50aW1lKVxuICB2bS5fJHVwZGF0ZVByb3BlcnRpZXMgJiYgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzKHZtKTtcbiAgXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZih2bS5tcEhvc3QgPT09ICdtcC1iYWlkdScgfHwgdm0ubXBIb3N0ID09PSAnbXAta3VhaXNob3UnIHx8IHZtLm1wSG9zdCA9PT0gJ21wLXhocycpey8v55m+5bqm44CB5b+r5omL44CB5bCP57qi5LmmIG9ic2VydmVyIOWcqCBzZXREYXRhIGNhbGxiYWNrIOS5i+WQjuinpuWPke+8jOebtOaOpeW/veeVpeivpSB3YXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZpeGVkIGJ5IHh4eHh4eCBfX25leHRfdGlja19wZW5kaW5nLHVuaTovL2Zvcm0tZmllbGQg5pe25LiN5ZGK6K2mXG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2YWx1ZScgJiYgXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgICAgICAgICAgICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2bS5fZ2V0Rm9ybURhdGEpe1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAkcGFyZW50ID0gdm0uJHBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlKCRwYXJlbnQpe1xuICAgICAgICAgICAgICBpZigkcGFyZW50Ll9fbmV4dF90aWNrX3BlbmRpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJHBhcmVudCA9ICRwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgey8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlR2V0dGVySW52b2tlcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIHRoaXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1ldGhvZHMgKHZtLCBtZXRob2RzKSB7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgdHlwZSBcXFwiXCIgKyAodHlwZW9mIG1ldGhvZHNba2V5XSkgKyBcIlxcXCIgaW4gdGhlIGNvbXBvbmVudCBkZWZpbml0aW9uLiBcIiArXG4gICAgICAgICAgXCJEaWQgeW91IHJlZmVyZW5jZSB0aGUgZnVuY3Rpb24gY29ycmVjdGx5P1wiLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBwcm9wLlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgaW4gdm0pICYmIGlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBjb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBWdWUgaW5zdGFuY2UgbWV0aG9kLiBcIiArXG4gICAgICAgICAgXCJBdm9pZCBkZWZpbmluZyBjb21wb25lbnQgbWV0aG9kcyB0aGF0IHN0YXJ0IHdpdGggXyBvciAkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZtW2tleV0gPSB0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nID8gbm9vcCA6IGJpbmQobWV0aG9kc1trZXldLCB2bSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdhdGNoICh2bSwgd2F0Y2gpIHtcbiAgZm9yICh2YXIga2V5IGluIHdhdGNoKSB7XG4gICAgdmFyIGhhbmRsZXIgPSB3YXRjaFtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlV2F0Y2hlcih2bSwga2V5LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2F0Y2hlciAoXG4gIHZtLFxuICBleHBPckZuLFxuICBoYW5kbGVyLFxuICBvcHRpb25zXG4pIHtcbiAgaWYgKGlzUGxhaW5PYmplY3QoaGFuZGxlcikpIHtcbiAgICBvcHRpb25zID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVyO1xuICB9XG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBoYW5kbGVyID0gdm1baGFuZGxlcl07XG4gIH1cbiAgcmV0dXJuIHZtLiR3YXRjaChleHBPckZuLCBoYW5kbGVyLCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLy8gZmxvdyBzb21laG93IGhhcyBwcm9ibGVtcyB3aXRoIGRpcmVjdGx5IGRlY2xhcmVkIGRlZmluaXRpb24gb2JqZWN0XG4gIC8vIHdoZW4gdXNpbmcgT2JqZWN0LmRlZmluZVByb3BlcnR5LCBzbyB3ZSBoYXZlIHRvIHByb2NlZHVyYWxseSBidWlsZCB1cFxuICAvLyB0aGUgb2JqZWN0IGhlcmUuXG4gIHZhciBkYXRhRGVmID0ge307XG4gIGRhdGFEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9O1xuICB2YXIgcHJvcHNEZWYgPSB7fTtcbiAgcHJvcHNEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcHJvcHMgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkYXRhRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCByZXBsYWNpbmcgaW5zdGFuY2Ugcm9vdCAkZGF0YS4gJyArXG4gICAgICAgICdVc2UgbmVzdGVkIGRhdGEgcHJvcGVydGllcyBpbnN0ZWFkLicsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgICBwcm9wc0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFwiJHByb3BzIGlzIHJlYWRvbmx5LlwiLCB0aGlzKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCBkYXRhRGVmKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcHJvcHMnLCBwcm9wc0RlZik7XG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gc2V0O1xuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBkZWw7XG5cbiAgVnVlLnByb3RvdHlwZS4kd2F0Y2ggPSBmdW5jdGlvbiAoXG4gICAgZXhwT3JGbixcbiAgICBjYixcbiAgICBvcHRpb25zXG4gICkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoY2IpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMudXNlciA9IHRydWU7XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpO1xuICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBoYW5kbGVFcnJvcihlcnJvciwgdm0sIChcImNhbGxiYWNrIGZvciBpbW1lZGlhdGUgd2F0Y2hlciBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4gKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciB1aWQkMyA9IDA7XG5cbmZ1bmN0aW9uIGluaXRNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gYSB1aWRcbiAgICB2bS5fdWlkID0gdWlkJDMrKztcblxuICAgIHZhciBzdGFydFRhZywgZW5kVGFnO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArICh2bS5fdWlkKTtcbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgIH1cblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdm0uX2lzVnVlID0gdHJ1ZTtcbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5faXNDb21wb25lbnQpIHtcbiAgICAgIC8vIG9wdGltaXplIGludGVybmFsIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uXG4gICAgICAvLyBzaW5jZSBkeW5hbWljIG9wdGlvbnMgbWVyZ2luZyBpcyBwcmV0dHkgc2xvdywgYW5kIG5vbmUgb2YgdGhlXG4gICAgICAvLyBpbnRlcm5hbCBjb21wb25lbnQgb3B0aW9ucyBuZWVkcyBzcGVjaWFsIHRyZWF0bWVudC5cbiAgICAgIGluaXRJbnRlcm5hbENvbXBvbmVudCh2bSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKHZtLmNvbnN0cnVjdG9yKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGluaXRQcm94eSh2bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcmVhbCBzZWxmXG4gICAgdm0uX3NlbGYgPSB2bTtcbiAgICBpbml0TGlmZWN5Y2xlKHZtKTtcbiAgICBpbml0RXZlbnRzKHZtKTtcbiAgICBpbml0UmVuZGVyKHZtKTtcbiAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZUNyZWF0ZScpO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRJbmplY3Rpb25zKHZtKTsgLy8gcmVzb2x2ZSBpbmplY3Rpb25zIGJlZm9yZSBkYXRhL3Byb3BzICBcbiAgICBpbml0U3RhdGUodm0pO1xuICAgICF2bS5fJGZhbGxiYWNrICYmIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTsgICAgICBcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjExJztcblxuLyoqXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vVGVuY2VudC93ZXN0b3JlL21hc3Rlci9wYWNrYWdlcy93ZXN0b3JlL3V0aWxzL2RpZmYuanNcbiAqL1xudmFyIEFSUkFZVFlQRSA9ICdbb2JqZWN0IEFycmF5XSc7XG52YXIgT0JKRUNUVFlQRSA9ICdbb2JqZWN0IE9iamVjdF0nO1xudmFyIE5VTExUWVBFID0gJ1tvYmplY3QgTnVsbF0nO1xudmFyIFVOREVGSU5FRFRZUEUgPSAnW29iamVjdCBVbmRlZmluZWRdJztcbi8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuZnVuY3Rpb24gZGlmZihjdXJyZW50LCBwcmUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc3luY0tleXMoY3VycmVudCwgcHJlKTtcbiAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc3luY0tleXMoY3VycmVudCwgcHJlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPj0gT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFZhbHVlLCBwcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFICYmIHJvb3RQcmVUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPj0gcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFtpbmRleF0sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG51bGxPclVuZGVmaW5lZChjdXJyZW50VHlwZSwgcHJlVHlwZSkge1xuICAgIGlmKFxuICAgICAgICAoY3VycmVudFR5cGUgPT09IE5VTExUWVBFIHx8IGN1cnJlbnRUeXBlID09PSBVTkRFRklORURUWVBFKSAmJiBcbiAgICAgICAgKHByZVR5cGUgPT09IE5VTExUWVBFIHx8IHByZVR5cGUgPT09IFVOREVGSU5FRFRZUEUpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBfZGlmZihjdXJyZW50LCBwcmUsIHBhdGgsIHJlc3VsdCkge1xuICAgIGlmIChjdXJyZW50ID09PSBwcmUpIHsgcmV0dXJuIH1cbiAgICB2YXIgcm9vdEN1cnJlbnRUeXBlID0gdHlwZShjdXJyZW50KTtcbiAgICB2YXIgcm9vdFByZVR5cGUgPSB0eXBlKHByZSk7XG4gICAgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBPQkpFQ1RUWVBFIHx8IE9iamVjdC5rZXlzKGN1cnJlbnQpLmxlbmd0aCA8IE9iamVjdC5rZXlzKHByZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVmFsdWUgPSBwcmVba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZVR5cGUgPSB0eXBlKHByZVZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFR5cGUgIT0gQVJSQVlUWVBFICYmIGN1cnJlbnRUeXBlICE9IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gcHJlW2tleV0gJiYgbnVsbE9yVW5kZWZpbmVkKGN1cnJlbnRUeXBlLCBwcmVUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPCBwcmVWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVZhbHVlW2luZGV4XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlVHlwZSAhPSBPQkpFQ1RUWVBFIHx8IE9iamVjdC5rZXlzKGN1cnJlbnRWYWx1ZSkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdWJLZXkgaW4gY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoY3VycmVudFZhbHVlW3N1YktleV0sIHByZVZhbHVlW3N1YktleV0sIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5ICsgJy4nICsgc3ViS2V5LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnQpIGxvb3AoIGtleSApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgIGlmIChyb290UHJlVHlwZSAhPSBBUlJBWVRZUEUpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoIDwgcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kaWZmKGl0ZW0sIHByZVtpbmRleF0sIHBhdGggKyAnWycgKyBpbmRleCArICddJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVzdWx0KHJlc3VsdCwgaywgdikge1xuICAgIC8vIGlmICh0eXBlKHYpICE9IEZVTkNUSU9OVFlQRSkge1xuICAgICAgICByZXN1bHRba10gPSB2O1xuICAgIC8vIH1cbn1cblxuZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iailcbn1cblxuLyogICovXHJcblxyXG5mdW5jdGlvbiBmbHVzaENhbGxiYWNrcyQxKHZtKSB7XHJcbiAgICBpZiAodm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzICYmIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5sZW5ndGgpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xyXG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSA9IHZtLiRzY29wZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXHJcbiAgICAgICAgICAgICAgICAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb3BpZXMgPSB2bS5fX25leHRfdGlja19jYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29waWVzW2ldKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNSZW5kZXJXYXRjaGVyKHZtKSB7XHJcbiAgICByZXR1cm4gcXVldWUuZmluZChmdW5jdGlvbiAod2F0Y2hlcikgeyByZXR1cm4gdm0uX3dhdGNoZXIgPT09IHdhdGNoZXI7IH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRUaWNrJDEodm0sIGNiKSB7XHJcbiAgICAvLzEubmV4dFRpY2sg5LmL5YmNIOW3siBzZXREYXRhIOS4lCBzZXREYXRhIOi/mOacquWbnuiwg+WujOaIkFxyXG4gICAgLy8yLm5leHRUaWNrIOS5i+WJjeWtmOWcqCByZW5kZXIgd2F0Y2hlclxyXG4gICAgaWYgKCF2bS5fX25leHRfdGlja19wZW5kaW5nICYmICFoYXNSZW5kZXJXYXRjaGVyKHZtKSkge1xuICAgICAgICBpZihwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKXtcbiAgICAgICAgICAgIHZhciBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdm0uX3VpZCArXG4gICAgICAgICAgICAgICAgJ106bmV4dFZ1ZVRpY2snKTtcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0VGljayhjYiwgdm0pXHJcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRyl7XG4gICAgICAgICAgICB2YXIgbXBJbnN0YW5jZSQxID0gdm0uJHNjb3BlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UkMS5pcyB8fCBtcEluc3RhbmNlJDEucm91dGUpICsgJ11bJyArIHZtLl91aWQgK1xuICAgICAgICAgICAgICAgICddOm5leHRNUFRpY2snKTtcbiAgICAgICAgfVxuICAgIH1cclxuICAgIHZhciBfcmVzb2x2ZTtcclxuICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzID0gW107XHJcbiAgICB9XHJcbiAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYi5jYWxsKHZtKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sICduZXh0VGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBfcmVzb2x2ZSh2bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcclxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cbi8qICAqL1xyXG5cclxuZnVuY3Rpb24gY2xlYXJJbnN0YW5jZShrZXksIHZhbHVlKSB7XHJcbiAgLy8g566A5piT5Y676ZmkIFZ1ZSDlkozlsI/nqIvluo/nu4Tku7blrp7kvotcclxuICBpZiAodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5faXNWdWUgfHwgdmFsdWUuX192X2lzTVBDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZVdpdGhEYXRhKHZtKSB7XHJcbiAgLy8g56Gu5L+d5b2T5YmNIHZtIOaJgOacieaVsOaNruiiq+WQjOatpVxyXG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIHZhciBkYXRhS2V5cyA9IFtdLmNvbmNhdChcclxuICAgIE9iamVjdC5rZXlzKHZtLl9kYXRhIHx8IHt9KSxcclxuICAgIE9iamVjdC5rZXlzKHZtLl9jb21wdXRlZFdhdGNoZXJzIHx8IHt9KSk7XHJcblxyXG4gIGRhdGFLZXlzLnJlZHVjZShmdW5jdGlvbihyZXQsIGtleSkge1xyXG4gICAgcmV0W2tleV0gPSB2bVtrZXldO1xyXG4gICAgcmV0dXJuIHJldFxyXG4gIH0sIHJldCk7XHJcblxyXG4gIC8vIHZ1ZS1jb21wb3NpdGlvbi1hcGlcclxuICB2YXIgY29tcG9zaXRpb25BcGlTdGF0ZSA9IHZtLl9fY29tcG9zaXRpb25fYXBpX3N0YXRlX18gfHwgdm0uX19zZWNyZXRfdmZhX3N0YXRlX187XHJcbiAgdmFyIHJhd0JpbmRpbmdzID0gY29tcG9zaXRpb25BcGlTdGF0ZSAmJiBjb21wb3NpdGlvbkFwaVN0YXRlLnJhd0JpbmRpbmdzO1xyXG4gIGlmIChyYXdCaW5kaW5ncykge1xyXG4gICAgT2JqZWN0LmtleXMocmF3QmluZGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICByZXRba2V5XSA9IHZtW2tleV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vVE9ETyDpnIDopoHmiorml6DnlKjmlbDmja7lpITnkIbmjonvvIzmr5TlpoIgbGlzdD0+bDAg5YiZIGxpc3Qg6ZyA6KaB56e76Zmk77yM5ZCm5YiZ5aSa5Lyg6L6T5LiA5Lu95pWw5o2uXHJcbiAgT2JqZWN0LmFzc2lnbihyZXQsIHZtLiRtcC5kYXRhIHx8IHt9KTtcclxuICBpZiAoXHJcbiAgICBBcnJheS5pc0FycmF5KHZtLiRvcHRpb25zLmJlaGF2aW9ycykgJiZcclxuICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXHJcbiAgKSB7IC8vZm9ybS1maWVsZFxyXG4gICAgcmV0WyduYW1lJ10gPSB2bS5uYW1lO1xyXG4gICAgcmV0Wyd2YWx1ZSddID0gdm0udmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXQsIGNsZWFySW5zdGFuY2UpKVxyXG59XHJcblxyXG52YXIgcGF0Y2ggPSBmdW5jdGlvbihvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cclxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XHJcbiAgICB2YXIgbXBJbnN0YW5jZSA9IHRoaXMuJHNjb3BlO1xyXG4gICAgdmFyIGRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGNsb25lV2l0aERhdGEodGhpcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gICAgZGF0YS5fX3dlYnZpZXdJZF9fID0gbXBJbnN0YW5jZS5kYXRhLl9fd2Vidmlld0lkX187XHJcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAvL+S7heWQjOatpSBkYXRhIOS4reacieeahOaVsOaNrlxyXG4gICAgICBtcERhdGFba2V5XSA9IG1wSW5zdGFuY2UuZGF0YVtrZXldO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZGlmZkRhdGEgPSB0aGlzLiRzaG91bGREaWZmRGF0YSA9PT0gZmFsc2UgPyBkYXRhIDogZGlmZihkYXRhLCBtcERhdGEpO1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRpZmZEYXRhKS5sZW5ndGgpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB0aGlzLl91aWQgK1xyXG4gICAgICAgICAgJ13lt67ph4/mm7TmlrAnLFxyXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbmV4dF90aWNrX3BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzJDEuX19uZXh0X3RpY2tfcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyQxKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmbHVzaENhbGxiYWNrcyQxKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5UmVuZGVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50JDEoXG4gIHZtLFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgaWYgKCF2bS5tcFR5cGUpIHsvL21haW4uanMg5Lit55qEIG5ldyBWdWVcbiAgICByZXR1cm4gdm1cbiAgfVxuICBpZiAodm0ubXBUeXBlID09PSAnYXBwJykge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5UmVuZGVyO1xuICB9XG4gIGlmICghdm0uJG9wdGlvbnMucmVuZGVyKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gICF2bS5fJGZhbGxiYWNrICYmIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICB9O1xuXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCdzIG1vdW50ZWQgaG9vayksIHdoaWNoIHJlbGllcyBvbiB2bS5fd2F0Y2hlciBiZWluZyBhbHJlYWR5IGRlZmluZWRcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwge1xuICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlKCkge1xuICAgICAgaWYgKHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICBjYWxsSG9vayh2bSwgJ2JlZm9yZVVwZGF0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSAvKiBpc1JlbmRlcldhdGNoZXIgKi8pO1xuICBoeWRyYXRpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIHZtXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKiAgKi9cclxuXHJcbnZhciBNUF9NRVRIT0RTID0gWydjcmVhdGVTZWxlY3RvclF1ZXJ5JywgJ2NyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyJywgJ3NlbGVjdEFsbENvbXBvbmVudHMnLCAnc2VsZWN0Q29tcG9uZW50J107XHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XHJcbiAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gIHZhciBrZXkgPSBwYXJ0c1swXTtcclxuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxyXG4gICAga2V5ID0gcGFyc2VJbnQoa2V5LnJlcGxhY2UoJ19fJG4nLCAnJykpO1xyXG4gIH1cclxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gb2JqW2tleV1cclxuICB9XHJcbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xyXG5cclxuICBWdWUuY29uZmlnLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKGVyciwgdm0sIGluZm8pIHtcclxuICAgIFZ1ZS51dGlsLndhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICB2YXIgYXBwID0gdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRBcHAoKTtcclxuICAgIGlmIChhcHAgJiYgYXBwLm9uRXJyb3IpIHtcclxuICAgICAgYXBwLm9uRXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb2xkRW1pdCA9IFZ1ZS5wcm90b3R5cGUuJGVtaXQ7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIGV2ZW50KSB7XHJcbiAgICAgIHZhciB0cmlnZ2VyRXZlbnQgPSB0aGlzLiRzY29wZVsnX3RyaWdnZXJFdmVudCddIHx8IHRoaXMuJHNjb3BlWyd0cmlnZ2VyRXZlbnQnXTtcclxuICAgICAgaWYgKHRyaWdnZXJFdmVudCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQuY2FsbCh0aGlzLiRzY29wZSwgZXZlbnQsIHtcclxuICAgICAgICAgICAgX19hcmdzX186IHRvQXJyYXkoYXJndW1lbnRzLCAxKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2xkRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbihmbikge1xyXG4gICAgcmV0dXJuIG5leHRUaWNrJDEodGhpcywgZm4pXHJcbiAgfTtcclxuXHJcbiAgTVBfTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgIFZ1ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlW21ldGhvZF0pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGVbbWV0aG9kXShhcmdzKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG1wLWFsaXBheVxyXG4gICAgICBpZiAodHlwZW9mIG15ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZXRob2QgPT09ICdjcmVhdGVTZWxlY3RvclF1ZXJ5Jykge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZVNlbGVjdG9yUXVlcnkoYXJncylcclxuICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgIHJldHVybiBteS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihhcmdzKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFRPRE8gbXAtYWxpcGF5IOaaguS4jeaUr+aMgSBzZWxlY3RBbGxDb21wb25lbnRzLHNlbGVjdENvbXBvbmVudFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfcHJvdmlkZSA9IGluaXRQcm92aWRlO1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9faW5pdF9pbmplY3Rpb25zID0gaW5pdEluamVjdGlvbnM7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbihob29rLCBhcmdzKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xyXG4gICAgcHVzaFRhcmdldCgpO1xyXG4gICAgdmFyIGhhbmRsZXJzID0gdm0uJG9wdGlvbnNbaG9va107XHJcbiAgICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XHJcbiAgICB2YXIgcmV0O1xyXG4gICAgaWYgKGhhbmRsZXJzKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgcmV0ID0gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBhcmdzID8gW2FyZ3NdIDogbnVsbCwgdm0sIGluZm8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xyXG4gICAgICB2bS4kZW1pdCgnaG9vazonICsgaG9vaywgYXJncyk7XHJcbiAgICB9XHJcbiAgICBwb3BUYXJnZXQoKTtcclxuICAgIHJldHVybiByZXRcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fc2V0X21vZGVsID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlLCBtb2RpZmllcnMpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcclxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCd0cmltJykgIT09IC0xKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1vZGlmaWVycy5pbmRleE9mKCdudW1iZXInKSAhPT0gLTEpIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuX24odmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICB0YXJnZXQgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgLy8g6Kej5Yaz5Yqo5oCB5bGe5oCn5re75YqgXHJcbiAgICBWdWUuc2V0KHRhcmdldCwga2V5LCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX3NldF9zeW5jID0gZnVuY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICB0YXJnZXQgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgLy8g6Kej5Yaz5Yqo5oCB5bGe5oCn5re75YqgXHJcbiAgICBWdWUuc2V0KHRhcmdldCwga2V5LCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX2dldF9vcmlnID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3QoaXRlbSkpIHtcclxuICAgICAgcmV0dXJuIGl0ZW1bJyRvcmlnJ10gfHwgaXRlbVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3ZhbHVlID0gZnVuY3Rpb24oZGF0YVBhdGgsIHRhcmdldCkge1xyXG4gICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpXHJcbiAgfTtcclxuXHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfY2xhc3MgPSBmdW5jdGlvbihkeW5hbWljQ2xhc3MsIHN0YXRpY0NsYXNzKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyQ2xhc3Moc3RhdGljQ2xhc3MsIGR5bmFtaWNDbGFzcylcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLl9fZ2V0X3N0eWxlID0gZnVuY3Rpb24oZHluYW1pY1N0eWxlLCBzdGF0aWNTdHlsZSkge1xyXG4gICAgaWYgKCFkeW5hbWljU3R5bGUgJiYgIXN0YXRpY1N0eWxlKSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG4gICAgdmFyIGR5bmFtaWNTdHlsZU9iaiA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkeW5hbWljU3R5bGUpO1xyXG4gICAgdmFyIHN0eWxlT2JqID0gc3RhdGljU3R5bGUgPyBleHRlbmQoc3RhdGljU3R5bGUsIGR5bmFtaWNTdHlsZU9iaikgOiBkeW5hbWljU3R5bGVPYmo7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVPYmopLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKChoeXBoZW5hdGUobmFtZSkpICsgXCI6XCIgKyAoc3R5bGVPYmpbbmFtZV0pKTsgfSkuam9pbignOycpXHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS5fX21hcCA9IGZ1bmN0aW9uKHZhbCwgaXRlcmF0ZWUpIHtcclxuICAgIC8vVE9ETyDmmoLkuI3ogIPomZEgc3RyaW5nXHJcbiAgICB2YXIgcmV0LCBpLCBsLCBrZXlzLCBrZXk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcclxuICAgICAgZm9yIChpID0gMCwgbCA9IHZhbC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICByZXRbaV0gPSBpdGVyYXRlZSh2YWxbaV0sIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXRcclxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xyXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcclxuICAgICAgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcclxuICAgICAgICByZXRba2V5XSA9IGl0ZXJhdGVlKHZhbFtrZXldLCBrZXksIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXRcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XHJcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWw7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAvLyDnrKzkuIDkuKrlj4LmlbDmmoLml7bku43lkozlsI/nqIvluo/kuIDoh7RcclxuICAgICAgICByZXRbaV0gPSBpdGVyYXRlZShpLCBpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmV0XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW11cclxuICB9O1xyXG5cclxufVxuXG4vKiAgKi9cclxuXHJcbnZhciBMSUZFQ1lDTEVfSE9PS1MkMSA9IFtcclxuICAgIC8vQXBwXHJcbiAgICAnb25MYXVuY2gnLFxyXG4gICAgJ29uU2hvdycsXHJcbiAgICAnb25IaWRlJyxcclxuICAgICdvblVuaU5WaWV3TWVzc2FnZScsXHJcbiAgICAnb25QYWdlTm90Rm91bmQnLFxyXG4gICAgJ29uVGhlbWVDaGFuZ2UnLFxyXG4gICAgJ29uRXJyb3InLFxyXG4gICAgJ29uVW5oYW5kbGVkUmVqZWN0aW9uJyxcclxuICAgIC8vUGFnZVxyXG4gICAgJ29uSW5pdCcsXHJcbiAgICAnb25Mb2FkJyxcclxuICAgIC8vICdvblNob3cnLFxyXG4gICAgJ29uUmVhZHknLFxyXG4gICAgLy8gJ29uSGlkZScsXHJcbiAgICAnb25VbmxvYWQnLFxyXG4gICAgJ29uUHVsbERvd25SZWZyZXNoJyxcclxuICAgICdvblJlYWNoQm90dG9tJyxcclxuICAgICdvblRhYkl0ZW1UYXAnLFxyXG4gICAgJ29uQWRkVG9GYXZvcml0ZXMnLFxyXG4gICAgJ29uU2hhcmVUaW1lbGluZScsXHJcbiAgICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICAgJ29uUmVzaXplJyxcclxuICAgICdvblBhZ2VTY3JvbGwnLFxyXG4gICAgJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcsXHJcbiAgICAnb25CYWNrUHJlc3MnLFxyXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcsXHJcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnLFxyXG4gICAgJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcsXHJcbiAgICAnb25VcGxvYWREb3V5aW5WaWRlbycsXHJcbiAgICAnb25ORkNSZWFkTWVzc2FnZScsXHJcbiAgICAvL0NvbXBvbmVudFxyXG4gICAgLy8gJ29uUmVhZHknLCAvLyDlhbzlrrnml6fniYjmnKzvvIzlupTor6Xnp7vpmaTor6Xkuovku7ZcclxuICAgICdvblBhZ2VTaG93JyxcclxuICAgICdvblBhZ2VIaWRlJyxcclxuICAgICdvblBhZ2VSZXNpemUnXHJcbl07XHJcbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluJDEoVnVlKSB7XHJcblxyXG4gICAgLy9maXhlZCB2dWUtY2xhc3MtY29tcG9uZW50XHJcbiAgICB2YXIgb2xkRXh0ZW5kID0gVnVlLmV4dGVuZDtcclxuICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbihleHRlbmRPcHRpb25zKSB7XHJcbiAgICAgICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XHJcblxyXG4gICAgICAgIHZhciBtZXRob2RzID0gZXh0ZW5kT3B0aW9ucy5tZXRob2RzO1xyXG4gICAgICAgIGlmIChtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChMSUZFQ1lDTEVfSE9PS1MkMS5pbmRleE9mKG1ldGhvZE5hbWUpIT09LTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbmRPcHRpb25zW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2xkRXh0ZW5kLmNhbGwodGhpcywgZXh0ZW5kT3B0aW9ucylcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmF0ZWdpZXMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcclxuICAgIHZhciBtZXJnZUhvb2sgPSBzdHJhdGVnaWVzLmNyZWF0ZWQ7XHJcbiAgICBMSUZFQ1lDTEVfSE9PS1MkMS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XHJcbiAgICAgICAgc3RyYXRlZ2llc1tob29rXSA9IG1lcmdlSG9vaztcclxuICAgIH0pO1xyXG5cclxuICAgIFZ1ZS5wcm90b3R5cGUuX19saWZlY3ljbGVfaG9va3NfXyA9IExJRkVDWUNMRV9IT09LUyQxO1xyXG59XG5cbi8qICAqL1xyXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cclxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBwYXRjaDtcclxuXHJcbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcclxuVnVlLnByb3RvdHlwZS4kbW91bnQgPSBmdW5jdGlvbihcclxuICAgIGVsICxcclxuICAgIGh5ZHJhdGluZyBcclxuKSB7XHJcbiAgICByZXR1cm4gbW91bnRDb21wb25lbnQkMSh0aGlzLCBlbCwgaHlkcmF0aW5nKVxyXG59O1xyXG5cclxubGlmZWN5Y2xlTWl4aW4kMShWdWUpO1xyXG5pbnRlcm5hbE1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWU7XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgaWYodHlwZW9mIHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbcmVuZGVyanMuYmVmb3JlQ3JlYXRlXVxuXHRcdH1cbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJjb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcbmNvbnN0IGRlZmF1bHREZWxpbWl0ZXJzID0gWyd7JywgJ30nXTtcbmNsYXNzIEJhc2VGb3JtYXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jYWNoZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBpbnRlcnBvbGF0ZShtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMgPSBkZWZhdWx0RGVsaW1pdGVycykge1xuICAgICAgICBpZiAoIXZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIFttZXNzYWdlXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5fY2FjaGVzW21lc3NhZ2VdO1xuICAgICAgICBpZiAoIXRva2Vucykge1xuICAgICAgICAgICAgdG9rZW5zID0gcGFyc2UobWVzc2FnZSwgZGVsaW1pdGVycyk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZXNbbWVzc2FnZV0gPSB0b2tlbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBpbGUodG9rZW5zLCB2YWx1ZXMpO1xuICAgIH1cbn1cbmNvbnN0IFJFX1RPS0VOX0xJU1RfVkFMVUUgPSAvXig/OlxcZCkrLztcbmNvbnN0IFJFX1RPS0VOX05BTUVEX1ZBTFVFID0gL14oPzpcXHcpKy87XG5mdW5jdGlvbiBwYXJzZShmb3JtYXQsIFtzdGFydERlbGltaXRlciwgZW5kRGVsaW1pdGVyXSkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgbGV0IHRleHQgPSAnJztcbiAgICB3aGlsZSAocG9zaXRpb24gPCBmb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFyID0gZm9ybWF0W3Bvc2l0aW9uKytdO1xuICAgICAgICBpZiAoY2hhciA9PT0gc3RhcnREZWxpbWl0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0ZXh0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dCA9ICcnO1xuICAgICAgICAgICAgbGV0IHN1YiA9ICcnO1xuICAgICAgICAgICAgY2hhciA9IGZvcm1hdFtwb3NpdGlvbisrXTtcbiAgICAgICAgICAgIHdoaWxlIChjaGFyICE9PSB1bmRlZmluZWQgJiYgY2hhciAhPT0gZW5kRGVsaW1pdGVyKSB7XG4gICAgICAgICAgICAgICAgc3ViICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgY2hhciA9IGZvcm1hdFtwb3NpdGlvbisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gY2hhciA9PT0gZW5kRGVsaW1pdGVyO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IFJFX1RPS0VOX0xJU1RfVkFMVUUudGVzdChzdWIpXG4gICAgICAgICAgICAgICAgPyAnbGlzdCdcbiAgICAgICAgICAgICAgICA6IGlzQ2xvc2VkICYmIFJFX1RPS0VOX05BTUVEX1ZBTFVFLnRlc3Qoc3ViKVxuICAgICAgICAgICAgICAgICAgICA/ICduYW1lZCdcbiAgICAgICAgICAgICAgICAgICAgOiAndW5rbm93bic7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHZhbHVlOiBzdWIsIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGVsc2UgaWYgKGNoYXIgPT09ICclJykge1xuICAgICAgICAvLyAgIC8vIHdoZW4gZm91bmQgcmFpbHMgaTE4biBzeW50YXgsIHNraXAgdGV4dCBjYXB0dXJlXG4gICAgICAgIC8vICAgaWYgKGZvcm1hdFtwb3NpdGlvbl0gIT09ICd7Jykge1xuICAgICAgICAvLyAgICAgdGV4dCArPSBjaGFyXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGV4dCArPSBjaGFyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRleHQgJiYgdG9rZW5zLnB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiB0ZXh0IH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBjb21waWxlKHRva2VucywgdmFsdWVzKSB7XG4gICAgY29uc3QgY29tcGlsZWQgPSBbXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IG1vZGUgPSBBcnJheS5pc0FycmF5KHZhbHVlcylcbiAgICAgICAgPyAnbGlzdCdcbiAgICAgICAgOiBpc09iamVjdCh2YWx1ZXMpXG4gICAgICAgICAgICA/ICduYW1lZCdcbiAgICAgICAgICAgIDogJ3Vua25vd24nO1xuICAgIGlmIChtb2RlID09PSAndW5rbm93bicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBpbGVkO1xuICAgIH1cbiAgICB3aGlsZSAoaW5kZXggPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2luZGV4XTtcbiAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICBjb21waWxlZC5wdXNoKHRva2VuLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgICAgIGNvbXBpbGVkLnB1c2godmFsdWVzW3BhcnNlSW50KHRva2VuLnZhbHVlLCAxMCldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25hbWVkJzpcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ25hbWVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21waWxlZC5wdXNoKHZhbHVlc1t0b2tlbi52YWx1ZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVHlwZSBvZiB0b2tlbiAnJHt0b2tlbi50eXBlfScgYW5kIGZvcm1hdCBvZiB2YWx1ZSAnJHttb2RlfScgZG9uJ3QgbWF0Y2ghYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1bmtub3duJzpcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYERldGVjdCAndW5rbm93bicgdHlwZSBvZiB0b2tlbiFgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVkO1xufVxuXG5jb25zdCBMT0NBTEVfWkhfSEFOUyA9ICd6aC1IYW5zJztcbmNvbnN0IExPQ0FMRV9aSF9IQU5UID0gJ3poLUhhbnQnO1xuY29uc3QgTE9DQUxFX0VOID0gJ2VuJztcbmNvbnN0IExPQ0FMRV9GUiA9ICdmcic7XG5jb25zdCBMT0NBTEVfRVMgPSAnZXMnO1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xuZnVuY3Rpb24gaW5jbHVkZShzdHIsIHBhcnRzKSB7XG4gICAgcmV0dXJuICEhcGFydHMuZmluZCgocGFydCkgPT4gc3RyLmluZGV4T2YocGFydCkgIT09IC0xKTtcbn1cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyLCBwYXJ0cykge1xuICAgIHJldHVybiBwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSA9PT0gMCk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUobG9jYWxlLCBtZXNzYWdlcykge1xuICAgIGlmICghbG9jYWxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9jYWxlID0gbG9jYWxlLnRyaW0oKS5yZXBsYWNlKC9fL2csICctJyk7XG4gICAgaWYgKG1lc3NhZ2VzICYmIG1lc3NhZ2VzW2xvY2FsZV0pIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICB9XG4gICAgbG9jYWxlID0gbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvY2FsZSA9PT0gJ2NoaW5lc2UnKSB7XG4gICAgICAgIC8vIOaUr+S7mOWunVxuICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlM7XG4gICAgfVxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignemgnKSA9PT0gMCkge1xuICAgICAgICBpZiAobG9jYWxlLmluZGV4T2YoJy1oYW5zJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUuaW5kZXhPZignLWhhbnQnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY2x1ZGUobG9jYWxlLCBbJy10dycsICctaGsnLCAnLW1vJywgJy1jaHQnXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOVDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlM7XG4gICAgfVxuICAgIGxldCBsb2NhbGVzID0gW0xPQ0FMRV9FTiwgTE9DQUxFX0ZSLCBMT0NBTEVfRVNdO1xuICAgIGlmIChtZXNzYWdlcyAmJiBPYmplY3Qua2V5cyhtZXNzYWdlcykubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbGVzID0gT2JqZWN0LmtleXMobWVzc2FnZXMpO1xuICAgIH1cbiAgICBjb25zdCBsYW5nID0gc3RhcnRzV2l0aChsb2NhbGUsIGxvY2FsZXMpO1xuICAgIGlmIChsYW5nKSB7XG4gICAgICAgIHJldHVybiBsYW5nO1xuICAgIH1cbn1cbmNsYXNzIEkxOG4ge1xuICAgIGNvbnN0cnVjdG9yKHsgbG9jYWxlLCBmYWxsYmFja0xvY2FsZSwgbWVzc2FnZXMsIHdhdGNoZXIsIGZvcm1hdGVyLCB9KSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gTE9DQUxFX0VOO1xuICAgICAgICB0aGlzLmZhbGxiYWNrTG9jYWxlID0gTE9DQUxFX0VOO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB7fTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xuICAgICAgICB0aGlzLndhdGNoZXJzID0gW107XG4gICAgICAgIGlmIChmYWxsYmFja0xvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybWF0ZXIgPSBmb3JtYXRlciB8fCBkZWZhdWx0Rm9ybWF0dGVyO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXMgfHwge307XG4gICAgICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCBMT0NBTEVfRU4pO1xuICAgICAgICBpZiAod2F0Y2hlcikge1xuICAgICAgICAgICAgdGhpcy53YXRjaExvY2FsZSh3YXRjaGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIGNvbnN0IG9sZExvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICB0aGlzLmxvY2FsZSA9IG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUsIHRoaXMubWVzc2FnZXMpIHx8IHRoaXMuZmFsbGJhY2tMb2NhbGU7XG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1t0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgIC8vIOWPr+iDveWIneWni+WMluaXtuS4jeWtmOWcqFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1t0aGlzLmxvY2FsZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzW3RoaXMubG9jYWxlXTtcbiAgICAgICAgLy8g5LuF5Y+R55Sf5Y+Y5YyW5pe277yM6YCa55+lXG4gICAgICAgIGlmIChvbGRMb2NhbGUgIT09IHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goKHdhdGNoZXIpID0+IHtcbiAgICAgICAgICAgICAgICB3YXRjaGVyKHRoaXMubG9jYWxlLCBvbGRMb2NhbGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGU7XG4gICAgfVxuICAgIHdhdGNoTG9jYWxlKGZuKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy53YXRjaGVycy5wdXNoKGZuKSAtIDE7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFkZChsb2NhbGUsIG1lc3NhZ2UsIG92ZXJyaWRlID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJNZXNzYWdlcyA9IHRoaXMubWVzc2FnZXNbbG9jYWxlXTtcbiAgICAgICAgaWYgKGN1ck1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN1ck1lc3NhZ2VzLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc093bihjdXJNZXNzYWdlcywga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyTWVzc2FnZXNba2V5XSA9IG1lc3NhZ2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tsb2NhbGVdID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRlci5pbnRlcnBvbGF0ZShtZXNzYWdlLCB2YWx1ZXMsIGRlbGltaXRlcnMpLmpvaW4oJycpO1xuICAgIH1cbiAgICB0KGtleSwgbG9jYWxlLCB2YWx1ZXMpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbG9jYWxlID0gbm9ybWFsaXplTG9jYWxlKGxvY2FsZSwgdGhpcy5tZXNzYWdlcyk7XG4gICAgICAgICAgICBsb2NhbGUgJiYgKG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzW2xvY2FsZV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFzT3duKG1lc3NhZ2UsIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IHRyYW5zbGF0ZSB0aGUgdmFsdWUgb2Yga2V5cGF0aCAke2tleX0uIFVzZSB0aGUgdmFsdWUgb2Yga2V5cGF0aCBhcyBkZWZhdWx0LmApO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRlci5pbnRlcnBvbGF0ZShtZXNzYWdlW2tleV0sIHZhbHVlcykuam9pbignJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3YXRjaEFwcExvY2FsZShhcHBWbSwgaTE4bikge1xuICAgIC8vIOmcgOimgeS/neivgSB3YXRjaCDnmoTop6blj5HlnKjnu4Tku7bmuLLmn5PkuYvliY1cbiAgICBpZiAoYXBwVm0uJHdhdGNoTG9jYWxlKSB7XG4gICAgICAgIC8vIHZ1ZTJcbiAgICAgICAgYXBwVm0uJHdhdGNoTG9jYWxlKChuZXdMb2NhbGUpID0+IHtcbiAgICAgICAgICAgIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXBwVm0uJHdhdGNoKCgpID0+IGFwcFZtLiRsb2NhbGUsIChuZXdMb2NhbGUpID0+IHtcbiAgICAgICAgICAgIGkxOG4uc2V0TG9jYWxlKG5ld0xvY2FsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XG4gICAgaWYgKHR5cGVvZiB1bmkgIT09ICd1bmRlZmluZWQnICYmIHVuaS5nZXRMb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIHVuaS5nZXRMb2NhbGUoKTtcbiAgICB9XG4gICAgLy8g5bCP56iL5bqP5bmz5Y+w77yMdW5pIOWSjCB1bmktaTE4biDkupLnm7jlvJXnlKjvvIzlr7zoh7Torr/pl67kuI3liLAgdW5p77yM5pWF5ZyoIGdsb2JhbCDkuIrmjILkuoYgZ2V0TG9jYWxlXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nZXRMb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5nZXRMb2NhbGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIExPQ0FMRV9FTjtcbn1cbmZ1bmN0aW9uIGluaXRWdWVJMThuKGxvY2FsZSwgbWVzc2FnZXMgPSB7fSwgZmFsbGJhY2tMb2NhbGUsIHdhdGNoZXIpIHtcbiAgICAvLyDlhbzlrrnml6fniYjmnKzlhaXlj4JcbiAgICBpZiAodHlwZW9mIGxvY2FsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgW2xvY2FsZSwgbWVzc2FnZXNdID0gW1xuICAgICAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbG9jYWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAvLyDlm6DkuLrlsI/nqIvluo/lubPlj7DvvIx1bmktaTE4biDlkowgdW5pIOS6kuebuOW8leeUqO+8jOWvvOiHtOatpOaXtuiuv+mXriB1bmkg5pe277yM5Li6IHVuZGVmaW5lZFxuICAgICAgICBsb2NhbGUgPSBnZXREZWZhdWx0TG9jYWxlKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmFsbGJhY2tMb2NhbGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZhbGxiYWNrTG9jYWxlID1cbiAgICAgICAgICAgICh0eXBlb2YgX191bmlDb25maWcgIT09ICd1bmRlZmluZWQnICYmIF9fdW5pQ29uZmlnLmZhbGxiYWNrTG9jYWxlKSB8fFxuICAgICAgICAgICAgICAgIExPQ0FMRV9FTjtcbiAgICB9XG4gICAgY29uc3QgaTE4biA9IG5ldyBJMThuKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHdhdGNoZXIsXG4gICAgfSk7XG4gICAgbGV0IHQgPSAoa2V5LCB2YWx1ZXMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRBcHAgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGFwcCB2aWV3XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1mdW5jLWFzc2lnbiAqL1xuICAgICAgICAgICAgdCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpMThuLnQoa2V5LCB2YWx1ZXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpc1dhdGNoZWRBcHBMb2NhbGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBWbSA9IGdldEFwcCgpLiR2bTtcbiAgICAgICAgICAgICAgICAvLyDlj6/og70kdm3ov5jkuI3lrZjlnKjvvIzmr5TlpoLlnKjmlK/ku5jlrp3lsI/nqIvluo/kuK3vvIznu4Tku7blrprkuYnovoPml6nvvIzlnKhwcm9wc+eahGRlZmF1bHTph4zkvb/nlKjkuoZ0KCnlh73mlbDvvIjlpoJ1bmktZ29vZHMtbmF277yJ77yM5q2k5pe2YXBw6L+Y5pyq5Yid5aeL5YyWXG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIC8vIFx0dHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgLy8gXHRkZWZhdWx0ICgpIHtcbiAgICAgICAgICAgICAgICAvLyBcdFx0cmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgLy8gXHRcdFx0aWNvbjogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIC8vIFx0XHRcdHRleHQ6IHQoXCJ1bmktZ29vZHMtbmF2Lm9wdGlvbnMuc2hvcFwiKSxcbiAgICAgICAgICAgICAgICAvLyBcdFx0fSwge1xuICAgICAgICAgICAgICAgIC8vIFx0XHRcdGljb246ICdjYXJ0JyxcbiAgICAgICAgICAgICAgICAvLyBcdFx0XHR0ZXh0OiB0KFwidW5pLWdvb2RzLW5hdi5vcHRpb25zLmNhcnRcIilcbiAgICAgICAgICAgICAgICAvLyBcdFx0fV1cbiAgICAgICAgICAgICAgICAvLyBcdH1cbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIGlmIChhcHBWbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDop6blj5Hlk43lupTlvI9cbiAgICAgICAgICAgICAgICAgICAgYXBwVm0uJGxvY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoZWRBcHBMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzV2F0Y2hlZEFwcExvY2FsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXRjaEFwcExvY2FsZShhcHBWbSwgaTE4bik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkxOG4udChrZXksIHZhbHVlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGkxOG4sXG4gICAgICAgIGYobWVzc2FnZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gaTE4bi5mKG1lc3NhZ2UsIHZhbHVlcywgZGVsaW1pdGVycyk7XG4gICAgICAgIH0sXG4gICAgICAgIHQoa2V5LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkKGxvY2FsZSwgbWVzc2FnZSwgb3ZlcnJpZGUgPSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gaTE4bi5hZGQobG9jYWxlLCBtZXNzYWdlLCBvdmVycmlkZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gaTE4bi53YXRjaExvY2FsZShmbik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBpMThuLmdldExvY2FsZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRMb2NhbGUobmV3TG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gaTE4bi5zZXRMb2NhbGUobmV3TG9jYWxlKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5jb25zdCBpc1N0cmluZyA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xubGV0IGZvcm1hdGVyO1xuZnVuY3Rpb24gaGFzSTE4bkpzb24oanNvbk9iaiwgZGVsaW1pdGVycykge1xuICAgIGlmICghZm9ybWF0ZXIpIHtcbiAgICAgICAgZm9ybWF0ZXIgPSBuZXcgQmFzZUZvcm1hdHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gd2Fsa0pzb25PYmooanNvbk9iaiwgKGpzb25PYmosIGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGpzb25PYmpba2V5XTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGlzSTE4blN0cih2YWx1ZSwgZGVsaW1pdGVycykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNJMThuSnNvbih2YWx1ZSwgZGVsaW1pdGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlSTE4bkpzb24oanNvbk9iaiwgdmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgaWYgKCFmb3JtYXRlcikge1xuICAgICAgICBmb3JtYXRlciA9IG5ldyBCYXNlRm9ybWF0dGVyKCk7XG4gICAgfVxuICAgIHdhbGtKc29uT2JqKGpzb25PYmosIChqc29uT2JqLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBqc29uT2JqW2tleV07XG4gICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XG4gICAgICAgICAgICAgICAganNvbk9ialtrZXldID0gY29tcGlsZVN0cih2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlSTE4bkpzb24odmFsdWUsIHZhbHVlcywgZGVsaW1pdGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ganNvbk9iajtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVJMThuSnNvblN0cihqc29uU3RyLCB7IGxvY2FsZSwgbG9jYWxlcywgZGVsaW1pdGVycywgfSkge1xuICAgIGlmICghaXNJMThuU3RyKGpzb25TdHIsIGRlbGltaXRlcnMpKSB7XG4gICAgICAgIHJldHVybiBqc29uU3RyO1xuICAgIH1cbiAgICBpZiAoIWZvcm1hdGVyKSB7XG4gICAgICAgIGZvcm1hdGVyID0gbmV3IEJhc2VGb3JtYXR0ZXIoKTtcbiAgICB9XG4gICAgY29uc3QgbG9jYWxlVmFsdWVzID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxlcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSAhPT0gbG9jYWxlKSB7XG4gICAgICAgICAgICBsb2NhbGVWYWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlczogbG9jYWxlc1tuYW1lXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxlVmFsdWVzLnVuc2hpZnQoeyBsb2NhbGUsIHZhbHVlczogbG9jYWxlc1tsb2NhbGVdIH0pO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb21waWxlSnNvbk9iaihKU09OLnBhcnNlKGpzb25TdHIpLCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpLCBudWxsLCAyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHsgfVxuICAgIHJldHVybiBqc29uU3RyO1xufVxuZnVuY3Rpb24gaXNJMThuU3RyKHZhbHVlLCBkZWxpbWl0ZXJzKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZGVsaW1pdGVyc1swXSkgPiAtMTtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVTdHIodmFsdWUsIHZhbHVlcywgZGVsaW1pdGVycykge1xuICAgIHJldHVybiBmb3JtYXRlci5pbnRlcnBvbGF0ZSh2YWx1ZSwgdmFsdWVzLCBkZWxpbWl0ZXJzKS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVWYWx1ZShqc29uT2JqLCBrZXksIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycykge1xuICAgIGNvbnN0IHZhbHVlID0ganNvbk9ialtrZXldO1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgLy8g5a2Y5Zyo5Zu96ZmF5YyWXG4gICAgICAgIGlmIChpc0kxOG5TdHIodmFsdWUsIGRlbGltaXRlcnMpKSB7XG4gICAgICAgICAgICBqc29uT2JqW2tleV0gPSBjb21waWxlU3RyKHZhbHVlLCBsb2NhbGVWYWx1ZXNbMF0udmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIOagvOW8j+WMluWbvemZheWMluivreiogFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTG9jYWxlcyA9IChqc29uT2JqW2tleSArICdMb2NhbGVzJ10gPSB7fSk7XG4gICAgICAgICAgICAgICAgbG9jYWxlVmFsdWVzLmZvckVhY2goKGxvY2FsVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVMb2NhbGVzW2xvY2FsVmFsdWUubG9jYWxlXSA9IGNvbXBpbGVTdHIodmFsdWUsIGxvY2FsVmFsdWUudmFsdWVzLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcGlsZUpzb25PYmoodmFsdWUsIGxvY2FsZVZhbHVlcywgZGVsaW1pdGVycyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29tcGlsZUpzb25PYmooanNvbk9iaiwgbG9jYWxlVmFsdWVzLCBkZWxpbWl0ZXJzKSB7XG4gICAgd2Fsa0pzb25PYmooanNvbk9iaiwgKGpzb25PYmosIGtleSkgPT4ge1xuICAgICAgICBjb21waWxlVmFsdWUoanNvbk9iaiwga2V5LCBsb2NhbGVWYWx1ZXMsIGRlbGltaXRlcnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBqc29uT2JqO1xufVxuZnVuY3Rpb24gd2Fsa0pzb25PYmooanNvbk9iaiwgd2Fsaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmopKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbk9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHdhbGsoanNvbk9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChqc29uT2JqKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uT2JqKSB7XG4gICAgICAgICAgICBpZiAod2Fsayhqc29uT2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTG9jYWxlKGxvY2FsZXMpIHtcbiAgICByZXR1cm4gKGxvY2FsZSkgPT4ge1xuICAgICAgICBpZiAoIWxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbGUgPSBub3JtYWxpemVMb2NhbGUobG9jYWxlKSB8fCBsb2NhbGU7XG4gICAgICAgIHJldHVybiByZXNvbHZlTG9jYWxlQ2hhaW4obG9jYWxlKS5maW5kKChsb2NhbGUpID0+IGxvY2FsZXMuaW5kZXhPZihsb2NhbGUpID4gLTEpO1xuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlTG9jYWxlQ2hhaW4obG9jYWxlKSB7XG4gICAgY29uc3QgY2hhaW4gPSBbXTtcbiAgICBjb25zdCB0b2tlbnMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBjaGFpbi5wdXNoKHRva2Vucy5qb2luKCctJykpO1xuICAgICAgICB0b2tlbnMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBjaGFpbjtcbn1cblxuZXhwb3J0IHsgQmFzZUZvcm1hdHRlciBhcyBGb3JtYXR0ZXIsIEkxOG4sIExPQ0FMRV9FTiwgTE9DQUxFX0VTLCBMT0NBTEVfRlIsIExPQ0FMRV9aSF9IQU5TLCBMT0NBTEVfWkhfSEFOVCwgY29tcGlsZUkxOG5Kc29uU3RyLCBoYXNJMThuSnNvbiwgaW5pdFZ1ZUkxOG4sIGlzSTE4blN0ciwgaXNTdHJpbmcsIG5vcm1hbGl6ZUxvY2FsZSwgcGFyc2VJMThuSnNvbiwgcmVzb2x2ZUxvY2FsZSB9O1xuIiwiaW1wb3J0IHsgaW5pdFZ1ZUkxOG4gfSBmcm9tICdAZGNsb3VkaW8vdW5pLWkxOG4nO1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5sZXQgcmVhbEF0b2I7XHJcblxyXG5jb25zdCBiNjQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG5jb25zdCBiNjRyZSA9IC9eKD86W0EtWmEtelxcZCsvXXs0fSkqPyg/OltBLVphLXpcXGQrL117Mn0oPzo9PSk/fFtBLVphLXpcXGQrL117M309Pyk/JC87XHJcblxyXG5pZiAodHlwZW9mIGF0b2IgIT09ICdmdW5jdGlvbicpIHtcclxuICByZWFsQXRvYiA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHN0ciA9IFN0cmluZyhzdHIpLnJlcGxhY2UoL1tcXHRcXG5cXGZcXHIgXSsvZywgJycpO1xyXG4gICAgaWYgKCFiNjRyZS50ZXN0KHN0cikpIHsgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2F0b2InIG9uICdXaW5kb3cnOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKSB9XHJcblxyXG4gICAgLy8gQWRkaW5nIHRoZSBwYWRkaW5nIGlmIG1pc3NpbmcsIGZvciBzZW1wbGljaXR5XHJcbiAgICBzdHIgKz0gJz09Jy5zbGljZSgyIC0gKHN0ci5sZW5ndGggJiAzKSk7XHJcbiAgICB2YXIgYml0bWFwOyB2YXIgcmVzdWx0ID0gJyc7IHZhciByMTsgdmFyIHIyOyB2YXIgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7KSB7XHJcbiAgICAgIGJpdG1hcCA9IGI2NC5pbmRleE9mKHN0ci5jaGFyQXQoaSsrKSkgPDwgMTggfCBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpIDw8IDEyIHxcclxuICAgICAgICAgICAgICAgICAgICAocjEgPSBiNjQuaW5kZXhPZihzdHIuY2hhckF0KGkrKykpKSA8PCA2IHwgKHIyID0gYjY0LmluZGV4T2Yoc3RyLmNoYXJBdChpKyspKSk7XHJcblxyXG4gICAgICByZXN1bHQgKz0gcjEgPT09IDY0ID8gU3RyaW5nLmZyb21DaGFyQ29kZShiaXRtYXAgPj4gMTYgJiAyNTUpXHJcbiAgICAgICAgOiByMiA9PT0gNjQgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdG1hcCA+PiAxNiAmIDI1NSwgYml0bWFwID4+IDggJiAyNTUpXHJcbiAgICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoYml0bWFwID4+IDE2ICYgMjU1LCBiaXRtYXAgPj4gOCAmIDI1NSwgYml0bWFwICYgMjU1KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9O1xyXG59IGVsc2Uge1xyXG4gIC8vIOazqOaEj2F0b2Llj6rog73lnKjlhajlsYDlr7nosaHkuIrosIPnlKjvvIzkvovlpoLvvJpgY29uc3QgQmFzZTY0ID0ge2F0b2J9O0Jhc2U2NC5hdG9iKCd4eHh4Jylg5piv6ZSZ6K+v55qE55So5rOVXHJcbiAgcmVhbEF0b2IgPSBhdG9iO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiNjREZWNvZGVVbmljb2RlIChzdHIpIHtcclxuICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlYWxBdG9iKHN0cikuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xyXG4gICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpXHJcbiAgfSkuam9pbignJykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRVc2VySW5mbyAoKSB7XHJcbiAgY29uc3QgdG9rZW4gPSAoIHhocykuZ2V0U3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbicpIHx8ICcnO1xyXG4gIGNvbnN0IHRva2VuQXJyID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICBpZiAoIXRva2VuIHx8IHRva2VuQXJyLmxlbmd0aCAhPT0gMykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdWlkOiBudWxsLFxyXG4gICAgICByb2xlOiBbXSxcclxuICAgICAgcGVybWlzc2lvbjogW10sXHJcbiAgICAgIHRva2VuRXhwaXJlZDogMFxyXG4gICAgfVxyXG4gIH1cclxuICBsZXQgdXNlckluZm87XHJcbiAgdHJ5IHtcclxuICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZShiNjREZWNvZGVVbmljb2RlKHRva2VuQXJyWzFdKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcign6I635Y+W5b2T5YmN55So5oi35L+h5oGv5Ye66ZSZ77yM6K+m57uG6ZSZ6K+v5L+h5oGv5Li677yaJyArIGVycm9yLm1lc3NhZ2UpXHJcbiAgfVxyXG4gIHVzZXJJbmZvLnRva2VuRXhwaXJlZCA9IHVzZXJJbmZvLmV4cCAqIDEwMDA7XHJcbiAgZGVsZXRlIHVzZXJJbmZvLmV4cDtcclxuICBkZWxldGUgdXNlckluZm8uaWF0O1xyXG4gIHJldHVybiB1c2VySW5mb1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmlJZE1peGluIChWdWUpIHtcclxuICBWdWUucHJvdG90eXBlLnVuaUlESGFzUm9sZSA9IGZ1bmN0aW9uIChyb2xlSWQpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcm9sZVxyXG4gICAgfSA9IGdldEN1cnJlbnRVc2VySW5mbygpO1xyXG4gICAgcmV0dXJuIHJvbGUuaW5kZXhPZihyb2xlSWQpID4gLTFcclxuICB9O1xyXG4gIFZ1ZS5wcm90b3R5cGUudW5pSURIYXNQZXJtaXNzaW9uID0gZnVuY3Rpb24gKHBlcm1pc3Npb25JZCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBwZXJtaXNzaW9uXHJcbiAgICB9ID0gZ2V0Q3VycmVudFVzZXJJbmZvKCk7XHJcbiAgICByZXR1cm4gdGhpcy51bmlJREhhc1JvbGUoJ2FkbWluJykgfHwgcGVybWlzc2lvbi5pbmRleE9mKHBlcm1pc3Npb25JZCkgPiAtMVxyXG4gIH07XHJcbiAgVnVlLnByb3RvdHlwZS51bmlJRFRva2VuVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRva2VuRXhwaXJlZFxyXG4gICAgfSA9IGdldEN1cnJlbnRVc2VySW5mbygpO1xyXG4gICAgcmV0dXJuIHRva2VuRXhwaXJlZCA+IERhdGUubm93KClcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblxyXG5mdW5jdGlvbiBpc0ZuIChmbikge1xyXG4gIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHIgKHN0cikge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcclxuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xyXG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBub29wICgpIHt9XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FjaGVkIChmbikge1xyXG4gIGNvbnN0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xyXG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXTtcclxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xyXG5jb25zdCBjYW1lbGl6ZSA9IGNhY2hlZCgoc3RyKSA9PiB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIChfLCBjKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpXHJcbn0pO1xyXG5cclxuY29uc3QgSE9PS1MgPSBbXHJcbiAgJ2ludm9rZScsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdmYWlsJyxcclxuICAnY29tcGxldGUnLFxyXG4gICdyZXR1cm5WYWx1ZSdcclxuXTtcclxuXHJcbmNvbnN0IGdsb2JhbEludGVyY2VwdG9ycyA9IHt9O1xyXG5jb25zdCBzY29wZWRJbnRlcmNlcHRvcnMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIG1lcmdlSG9vayAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xyXG4gIGNvbnN0IHJlcyA9IGNoaWxkVmFsXHJcbiAgICA/IHBhcmVudFZhbFxyXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXHJcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcclxuICAgICAgICA/IGNoaWxkVmFsIDogW2NoaWxkVmFsXVxyXG4gICAgOiBwYXJlbnRWYWw7XHJcbiAgcmV0dXJuIHJlc1xyXG4gICAgPyBkZWR1cGVIb29rcyhyZXMpXHJcbiAgICA6IHJlc1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcclxuICBjb25zdCByZXMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xyXG4gICAgICByZXMucHVzaChob29rc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSG9vayAoaG9va3MsIGhvb2spIHtcclxuICBjb25zdCBpbmRleCA9IGhvb2tzLmluZGV4T2YoaG9vayk7XHJcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgaG9va3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IG1lcmdlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJjZXB0b3JIb29rIChpbnRlcmNlcHRvciwgb3B0aW9uKSB7XHJcbiAgaWYgKCFpbnRlcmNlcHRvciB8fCAhb3B0aW9uKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgT2JqZWN0LmtleXMob3B0aW9uKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKEhPT0tTLmluZGV4T2YoaG9vaykgIT09IC0xICYmIGlzRm4ob3B0aW9uW2hvb2tdKSkge1xyXG4gICAgICByZW1vdmVIb29rKGludGVyY2VwdG9yW2hvb2tdLCBvcHRpb25baG9va10pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycgJiYgaXNQbGFpbk9iamVjdChvcHRpb24pKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXSB8fCAoc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gPSB7fSksIG9wdGlvbik7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIG1lcmdlSW50ZXJjZXB0b3JIb29rKGdsb2JhbEludGVyY2VwdG9ycywgbWV0aG9kKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9yIChtZXRob2QsIG9wdGlvbikge1xyXG4gIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0sIG9wdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KG1ldGhvZCkpIHtcclxuICAgIHJlbW92ZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVySG9vayAoaG9vaywgcGFyYW1zKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXR1cm4gaG9vayhkYXRhLCBwYXJhbXMpIHx8IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XHJcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhLCBwYXJhbXMpIHtcclxuICBsZXQgcHJvbWlzZSA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGhvb2sgPSBob29rc1tpXTtcclxuICAgIGlmIChwcm9taXNlKSB7XHJcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUod3JhcHBlckhvb2soaG9vaywgcGFyYW1zKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCByZXMgPSBob29rKGRhdGEsIHBhcmFtcyk7XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aGVuICgpIHsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcHJvbWlzZSB8fCB7XHJcbiAgICB0aGVuIChjYWxsYmFjaykge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJPcHRpb25zIChpbnRlcmNlcHRvciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgWydzdWNjZXNzJywgJ2ZhaWwnLCAnY29tcGxldGUnXS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3JbbmFtZV0pKSB7XHJcbiAgICAgIGNvbnN0IG9sZENhbGxiYWNrID0gb3B0aW9uc1tuYW1lXTtcclxuICAgICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uIGNhbGxiYWNrSW50ZXJjZXB0b3IgKHJlcykge1xyXG4gICAgICAgIHF1ZXVlKGludGVyY2VwdG9yW25hbWVdLCByZXMsIG9wdGlvbnMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXHJcbiAgICAgICAgICByZXR1cm4gaXNGbihvbGRDYWxsYmFjaykgJiYgb2xkQ2FsbGJhY2socmVzKSB8fCByZXNcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gb3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyUmV0dXJuVmFsdWUgKG1ldGhvZCwgcmV0dXJuVmFsdWUpIHtcclxuICBjb25zdCByZXR1cm5WYWx1ZUhvb2tzID0gW107XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKSkge1xyXG4gICAgcmV0dXJuVmFsdWVIb29rcy5wdXNoKC4uLmdsb2JhbEludGVyY2VwdG9ycy5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uaW50ZXJjZXB0b3IucmV0dXJuVmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm5WYWx1ZUhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICByZXR1cm5WYWx1ZSA9IGhvb2socmV0dXJuVmFsdWUpIHx8IHJldHVyblZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiByZXR1cm5WYWx1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcGlJbnRlcmNlcHRvckhvb2tzIChtZXRob2QpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgT2JqZWN0LmtleXMoZ2xvYmFsSW50ZXJjZXB0b3JzKS5mb3JFYWNoKGhvb2sgPT4ge1xyXG4gICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBnbG9iYWxJbnRlcmNlcHRvcnNbaG9va10uc2xpY2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBzY29wZWRJbnRlcmNlcHRvciA9IHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gIGlmIChzY29wZWRJbnRlcmNlcHRvcikge1xyXG4gICAgT2JqZWN0LmtleXMoc2NvcGVkSW50ZXJjZXB0b3IpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICAgIGlmIChob29rICE9PSAncmV0dXJuVmFsdWUnKSB7XHJcbiAgICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSAoaW50ZXJjZXB0b3JbaG9va10gfHwgW10pLmNvbmNhdChzY29wZWRJbnRlcmNlcHRvcltob29rXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gaW50ZXJjZXB0b3JcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlQXBpIChtZXRob2QsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSB7XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBnZXRBcGlJbnRlcmNlcHRvckhvb2tzKG1ldGhvZCk7XHJcbiAgaWYgKGludGVyY2VwdG9yICYmIE9iamVjdC5rZXlzKGludGVyY2VwdG9yKS5sZW5ndGgpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGludGVyY2VwdG9yLmludm9rZSkpIHtcclxuICAgICAgY29uc3QgcmVzID0gcXVldWUoaW50ZXJjZXB0b3IuaW52b2tlLCBvcHRpb25zKTtcclxuICAgICAgcmV0dXJuIHJlcy50aGVuKChvcHRpb25zKSA9PiB7XHJcbiAgICAgICAgLy8g6YeN5paw6K6/6ZeuIGdldEFwaUludGVyY2VwdG9ySG9va3MsIOWFgeiuuCBpbnZva2Ug5Lit5YaN5qyh6LCD55SoIGFkZEludGVyY2VwdG9yLHJlbW92ZUludGVyY2VwdG9yXHJcbiAgICAgICAgcmV0dXJuIGFwaShcclxuICAgICAgICAgIHdyYXBwZXJPcHRpb25zKGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKSwgb3B0aW9ucyksXHJcbiAgICAgICAgICAuLi5wYXJhbXNcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXBpKG9wdGlvbnMsIC4uLnBhcmFtcylcclxufVxyXG5cclxuY29uc3QgcHJvbWlzZUludGVyY2VwdG9yID0ge1xyXG4gIHJldHVyblZhbHVlIChyZXMpIHtcclxuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzWzBdKSB7XHJcbiAgICAgICAgICByZWplY3QocmVzWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNZTkNfQVBJX1JFID1cclxuICAvXlxcJHxXaW5kb3ckfFdpbmRvd1N0eWxlJHxzZW5kSG9zdEV2ZW50fHNlbmROYXRpdmVFdmVudHxyZXN0b3JlR2xvYmFsfHJlcXVpcmVHbG9iYWx8Z2V0Q3VycmVudFN1Yk5WdWV8Z2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdHxecmVwb3J0fGludGVyY2VwdG9yc3xJbnRlcmNlcHRvciR8Z2V0U3ViTlZ1ZUJ5SWR8cmVxdWlyZU5hdGl2ZVBsdWdpbnx1cHgycHh8aGlkZUtleWJvYXJkfGNhbklVc2V8XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxiYXNlNjRUb0FycmF5QnVmZmVyfGFycmF5QnVmZmVyVG9CYXNlNjR8Z2V0TG9jYWxlfHNldExvY2FsZXxpbnZva2VQdXNoQ2FsbGJhY2t8Z2V0V2luZG93SW5mb3xnZXREZXZpY2VJbmZvfGdldEFwcEJhc2VJbmZvfGdldFN5c3RlbVNldHRpbmd8Z2V0QXBwQXV0aG9yaXplU2V0dGluZ3xpbml0VVRTfHJlcXVpcmVVVFN8cmVnaXN0ZXJVVFMvO1xyXG5cclxuY29uc3QgQ09OVEVYVF9BUElfUkUgPSAvXmNyZWF0ZXxNYW5hZ2VyJC87XHJcblxyXG4vLyBDb250ZXh05L6L5aSW5oOF5Ya1XHJcbmNvbnN0IENPTlRFWFRfQVBJX1JFX0VYQyA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbiddO1xyXG5cclxuLy8g5ZCM5q2l5L6L5aSW5oOF5Ya1XHJcbmNvbnN0IEFTWU5DX0FQSSA9IFsnY3JlYXRlQkxFQ29ubmVjdGlvbicsICdjcmVhdGVQdXNoTWVzc2FnZSddO1xyXG5cclxuY29uc3QgQ0FMTEJBQ0tfQVBJX1JFID0gL15vbnxeb2ZmLztcclxuXHJcbmZ1bmN0aW9uIGlzQ29udGV4dEFwaSAobmFtZSkge1xyXG4gIHJldHVybiBDT05URVhUX0FQSV9SRS50ZXN0KG5hbWUpICYmIENPTlRFWFRfQVBJX1JFX0VYQy5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcbmZ1bmN0aW9uIGlzU3luY0FwaSAobmFtZSkge1xyXG4gIHJldHVybiBTWU5DX0FQSV9SRS50ZXN0KG5hbWUpICYmIEFTWU5DX0FQSS5pbmRleE9mKG5hbWUpID09PSAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NhbGxiYWNrQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENBTExCQUNLX0FQSV9SRS50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdvblB1c2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb21pc2UgKHByb21pc2UpIHtcclxuICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIFtudWxsLCBkYXRhXVxyXG4gIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IFtlcnJdKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG91bGRQcm9taXNlIChuYW1lKSB7XHJcbiAgaWYgKFxyXG4gICAgaXNDb250ZXh0QXBpKG5hbWUpIHx8XHJcbiAgICBpc1N5bmNBcGkobmFtZSkgfHxcclxuICAgIGlzQ2FsbGJhY2tBcGkobmFtZSlcclxuICApIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbmlmICghUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xyXG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIHRoaXMudGhlbihcclxuICAgICAgdmFsdWUgPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4gdmFsdWUpLFxyXG4gICAgICByZWFzb24gPT4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRocm93IHJlYXNvblxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb21pc2lmeSAobmFtZSwgYXBpKSB7XHJcbiAgaWYgKCFzaG91bGRQcm9taXNlKG5hbWUpIHx8ICFpc0ZuKGFwaSkpIHtcclxuICAgIHJldHVybiBhcGlcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VBcGkgKG9wdGlvbnMgPSB7fSwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaW52b2tlQXBpKG5hbWUsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSlcclxuICAgIH1cclxuICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGludm9rZUFwaShuYW1lLCBhcGksIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KSwgLi4ucGFyYW1zKTtcclxuICAgIH0pKSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEVQUyA9IDFlLTQ7XHJcbmNvbnN0IEJBU0VfREVWSUNFX1dJRFRIID0gNzUwO1xyXG5sZXQgaXNJT1MgPSBmYWxzZTtcclxubGV0IGRldmljZVdpZHRoID0gMDtcclxubGV0IGRldmljZURQUiA9IDA7XHJcblxyXG5mdW5jdGlvbiBjaGVja0RldmljZVdpZHRoICgpIHtcclxuICBjb25zdCB7XHJcbiAgICBwbGF0Zm9ybSxcclxuICAgIHBpeGVsUmF0aW8sXHJcbiAgICB3aW5kb3dXaWR0aFxyXG4gIH0gPSB4aHMuZ2V0U3lzdGVtSW5mb1N5bmMoKTsgLy8gdW5pPT54aHMgcnVudGltZSDnvJbor5Hnm67moIfmmK8gdW5pIOWvueixoe+8jOWGhemDqOS4jeWFgeiuuOebtOaOpeS9v+eUqCB1bmlcclxuXHJcbiAgZGV2aWNlV2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICBkZXZpY2VEUFIgPSBwaXhlbFJhdGlvO1xyXG4gIGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHgycHggKG51bWJlciwgbmV3RGV2aWNlV2lkdGgpIHtcclxuICBpZiAoZGV2aWNlV2lkdGggPT09IDApIHtcclxuICAgIGNoZWNrRGV2aWNlV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xyXG4gIGlmIChudW1iZXIgPT09IDApIHtcclxuICAgIHJldHVybiAwXHJcbiAgfVxyXG4gIGxldCByZXN1bHQgPSAobnVtYmVyIC8gQkFTRV9ERVZJQ0VfV0lEVEgpICogKG5ld0RldmljZVdpZHRoIHx8IGRldmljZVdpZHRoKTtcclxuICBpZiAocmVzdWx0IDwgMCkge1xyXG4gICAgcmVzdWx0ID0gLXJlc3VsdDtcclxuICB9XHJcbiAgcmVzdWx0ID0gTWF0aC5mbG9vcihyZXN1bHQgKyBFUFMpO1xyXG4gIGlmIChyZXN1bHQgPT09IDApIHtcclxuICAgIGlmIChkZXZpY2VEUFIgPT09IDEgfHwgIWlzSU9TKSB7XHJcbiAgICAgIHJlc3VsdCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQgPSAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudW1iZXIgPCAwID8gLXJlc3VsdCA6IHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBMT0NBTEVfWkhfSEFOUyA9ICd6aC1IYW5zJztcclxuY29uc3QgTE9DQUxFX1pIX0hBTlQgPSAnemgtSGFudCc7XHJcbmNvbnN0IExPQ0FMRV9FTiA9ICdlbic7XHJcbmNvbnN0IExPQ0FMRV9GUiA9ICdmcic7XHJcbmNvbnN0IExPQ0FMRV9FUyA9ICdlcyc7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IHt9O1xyXG5cclxubGV0IGxvY2FsZTtcclxuXHJcbntcclxuICBsb2NhbGUgPSBub3JtYWxpemVMb2NhbGUoeGhzLmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2UpIHx8IExPQ0FMRV9FTjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEkxOG5NZXNzYWdlcyAoKSB7XHJcbiAgaWYgKCFpc0VuYWJsZUxvY2FsZSgpKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgY29uc3QgbG9jYWxlS2V5cyA9IE9iamVjdC5rZXlzKF9fdW5pQ29uZmlnLmxvY2FsZXMpO1xyXG4gIGlmIChsb2NhbGVLZXlzLmxlbmd0aCkge1xyXG4gICAgbG9jYWxlS2V5cy5mb3JFYWNoKChsb2NhbGUpID0+IHtcclxuICAgICAgY29uc3QgY3VyTWVzc2FnZXMgPSBtZXNzYWdlc1tsb2NhbGVdO1xyXG4gICAgICBjb25zdCB1c2VyTWVzc2FnZXMgPSBfX3VuaUNvbmZpZy5sb2NhbGVzW2xvY2FsZV07XHJcbiAgICAgIGlmIChjdXJNZXNzYWdlcykge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oY3VyTWVzc2FnZXMsIHVzZXJNZXNzYWdlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZXNbbG9jYWxlXSA9IHVzZXJNZXNzYWdlcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5pbml0STE4bk1lc3NhZ2VzKCk7XHJcblxyXG5jb25zdCBpMThuID0gaW5pdFZ1ZUkxOG4oXHJcbiAgbG9jYWxlLFxyXG4gICB7fVxyXG4pO1xyXG5jb25zdCB0ID0gaTE4bi50O1xyXG5jb25zdCBpMThuTWl4aW4gPSAoaTE4bi5taXhpbiA9IHtcclxuICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgY29uc3QgdW53YXRjaCA9IGkxOG4uaTE4bi53YXRjaExvY2FsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdW53YXRjaCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAkJHQgKGtleSwgdmFsdWVzKSB7XHJcbiAgICAgIHJldHVybiB0KGtleSwgdmFsdWVzKVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbmNvbnN0IHNldExvY2FsZSA9IGkxOG4uc2V0TG9jYWxlO1xyXG5jb25zdCBnZXRMb2NhbGUgPSBpMThuLmdldExvY2FsZTtcclxuXHJcbmZ1bmN0aW9uIGluaXRBcHBMb2NhbGUgKFZ1ZSwgYXBwVm0sIGxvY2FsZSkge1xyXG4gIGNvbnN0IHN0YXRlID0gVnVlLm9ic2VydmFibGUoe1xyXG4gICAgbG9jYWxlOiBsb2NhbGUgfHwgaTE4bi5nZXRMb2NhbGUoKVxyXG4gIH0pO1xyXG4gIGNvbnN0IGxvY2FsZVdhdGNoZXJzID0gW107XHJcbiAgYXBwVm0uJHdhdGNoTG9jYWxlID0gZm4gPT4ge1xyXG4gICAgbG9jYWxlV2F0Y2hlcnMucHVzaChmbik7XHJcbiAgfTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXBwVm0sICckbG9jYWxlJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsZVxyXG4gICAgfSxcclxuICAgIHNldCAodikge1xyXG4gICAgICBzdGF0ZS5sb2NhbGUgPSB2O1xyXG4gICAgICBsb2NhbGVXYXRjaGVycy5mb3JFYWNoKHdhdGNoID0+IHdhdGNoKHYpKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbmFibGVMb2NhbGUgKCkge1xyXG4gIHJldHVybiB0eXBlb2YgX191bmlDb25maWcgIT09ICd1bmRlZmluZWQnICYmIF9fdW5pQ29uZmlnLmxvY2FsZXMgJiYgISFPYmplY3Qua2V5cyhfX3VuaUNvbmZpZy5sb2NhbGVzKS5sZW5ndGhcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jbHVkZSAoc3RyLCBwYXJ0cykge1xyXG4gIHJldHVybiAhIXBhcnRzLmZpbmQoKHBhcnQpID0+IHN0ci5pbmRleE9mKHBhcnQpICE9PSAtMSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRzV2l0aCAoc3RyLCBwYXJ0cykge1xyXG4gIHJldHVybiBwYXJ0cy5maW5kKChwYXJ0KSA9PiBzdHIuaW5kZXhPZihwYXJ0KSA9PT0gMClcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlIChsb2NhbGUsIG1lc3NhZ2VzKSB7XHJcbiAgaWYgKCFsb2NhbGUpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBsb2NhbGUgPSBsb2NhbGUudHJpbSgpLnJlcGxhY2UoL18vZywgJy0nKTtcclxuICBpZiAobWVzc2FnZXMgJiYgbWVzc2FnZXNbbG9jYWxlXSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZVxyXG4gIH1cclxuICBsb2NhbGUgPSBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICBpZiAobG9jYWxlID09PSAnY2hpbmVzZScpIHtcclxuICAgIC8vIOaUr+S7mOWunVxyXG4gICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgfVxyXG4gIGlmIChsb2NhbGUuaW5kZXhPZignemgnKSA9PT0gMCkge1xyXG4gICAgaWYgKGxvY2FsZS5pbmRleE9mKCctaGFucycpID4gLTEpIHtcclxuICAgICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxlLmluZGV4T2YoJy1oYW50JykgPiAtMSkge1xyXG4gICAgICByZXR1cm4gTE9DQUxFX1pIX0hBTlRcclxuICAgIH1cclxuICAgIGlmIChpbmNsdWRlKGxvY2FsZSwgWyctdHcnLCAnLWhrJywgJy1tbycsICctY2h0J10pKSB7XHJcbiAgICAgIHJldHVybiBMT0NBTEVfWkhfSEFOVFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIExPQ0FMRV9aSF9IQU5TXHJcbiAgfVxyXG4gIGNvbnN0IGxhbmcgPSBzdGFydHNXaXRoKGxvY2FsZSwgW0xPQ0FMRV9FTiwgTE9DQUxFX0ZSLCBMT0NBTEVfRVNdKTtcclxuICBpZiAobGFuZykge1xyXG4gICAgcmV0dXJuIGxhbmdcclxuICB9XHJcbn1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGluaXRJMThuKCkge1xyXG4vLyAgIGNvbnN0IGxvY2FsZUtleXMgPSBPYmplY3Qua2V5cyhfX3VuaUNvbmZpZy5sb2NhbGVzIHx8IHt9KVxyXG4vLyAgIGlmIChsb2NhbGVLZXlzLmxlbmd0aCkge1xyXG4vLyAgICAgbG9jYWxlS2V5cy5mb3JFYWNoKChsb2NhbGUpID0+XHJcbi8vICAgICAgIGkxOG4uYWRkKGxvY2FsZSwgX191bmlDb25maWcubG9jYWxlc1tsb2NhbGVdKVxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxlJDEgKCkge1xyXG4gIC8vIOS8mOWFiOS9v+eUqCAkbG9jYWxlXHJcbiAgaWYgKGlzRm4oZ2V0QXBwKSkge1xyXG4gICAgY29uc3QgYXBwID0gZ2V0QXBwKHtcclxuICAgICAgYWxsb3dEZWZhdWx0OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGlmIChhcHAgJiYgYXBwLiR2bSkge1xyXG4gICAgICByZXR1cm4gYXBwLiR2bS4kbG9jYWxlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxpemVMb2NhbGUoeGhzLmdldFN5c3RlbUluZm9TeW5jKCkubGFuZ3VhZ2UpIHx8IExPQ0FMRV9FTlxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb2NhbGUkMSAobG9jYWxlKSB7XHJcbiAgY29uc3QgYXBwID0gaXNGbihnZXRBcHApID8gZ2V0QXBwKCkgOiBmYWxzZTtcclxuICBpZiAoIWFwcCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGNvbnN0IG9sZExvY2FsZSA9IGFwcC4kdm0uJGxvY2FsZTtcclxuICBpZiAob2xkTG9jYWxlICE9PSBsb2NhbGUpIHtcclxuICAgIGFwcC4kdm0uJGxvY2FsZSA9IGxvY2FsZTtcclxuICAgIG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goKGZuKSA9PiBmbih7XHJcbiAgICAgIGxvY2FsZVxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzID0gW107XHJcbmZ1bmN0aW9uIG9uTG9jYWxlQ2hhbmdlIChmbikge1xyXG4gIGlmIChvbkxvY2FsZUNoYW5nZUNhbGxiYWNrcy5pbmRleE9mKGZuKSA9PT0gLTEpIHtcclxuICAgIG9uTG9jYWxlQ2hhbmdlQ2FsbGJhY2tzLnB1c2goZm4pO1xyXG4gIH1cclxufVxyXG5cclxuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgZ2xvYmFsLmdldExvY2FsZSA9IGdldExvY2FsZSQxO1xyXG59XHJcblxyXG5jb25zdCBpbnRlcmNlcHRvcnMgPSB7XHJcbiAgcHJvbWlzZUludGVyY2VwdG9yXHJcbn07XHJcblxyXG52YXIgYmFzZUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgdXB4MnB4OiB1cHgycHgsXHJcbiAgZ2V0TG9jYWxlOiBnZXRMb2NhbGUkMSxcclxuICBzZXRMb2NhbGU6IHNldExvY2FsZSQxLFxyXG4gIG9uTG9jYWxlQ2hhbmdlOiBvbkxvY2FsZUNoYW5nZSxcclxuICBhZGRJbnRlcmNlcHRvcjogYWRkSW50ZXJjZXB0b3IsXHJcbiAgcmVtb3ZlSW50ZXJjZXB0b3I6IHJlbW92ZUludGVyY2VwdG9yLFxyXG4gIGludGVyY2VwdG9yczogaW50ZXJjZXB0b3JzXHJcbn0pO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5sZXQgZGV2aWNlSWQ7XHJcbmZ1bmN0aW9uIHVzZURldmljZUlkIChyZXN1bHQpIHtcclxuICBkZXZpY2VJZCA9IGRldmljZUlkIHx8IHhocy5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgaWYgKCFkZXZpY2VJZCkge1xyXG4gICAgZGV2aWNlSWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgeGhzLnNldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6IFVVSURfS0VZLFxyXG4gICAgICBkYXRhOiBkZXZpY2VJZFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlc3VsdC5kZXZpY2VJZCA9IGRldmljZUlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTYWZlQXJlYUluc2V0cyAocmVzdWx0KSB7XHJcbiAgaWYgKHJlc3VsdC5zYWZlQXJlYSkge1xyXG4gICAgY29uc3Qgc2FmZUFyZWEgPSByZXN1bHQuc2FmZUFyZWE7XHJcbiAgICByZXN1bHQuc2FmZUFyZWFJbnNldHMgPSB7XHJcbiAgICAgIHRvcDogc2FmZUFyZWEudG9wLFxyXG4gICAgICBsZWZ0OiBzYWZlQXJlYS5sZWZ0LFxyXG4gICAgICByaWdodDogcmVzdWx0LndpbmRvd1dpZHRoIC0gc2FmZUFyZWEucmlnaHQsXHJcbiAgICAgIGJvdHRvbTogcmVzdWx0LnNjcmVlbkhlaWdodCAtIHNhZmVBcmVhLmJvdHRvbVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlUGFyYW1ldGVycyAocmVzdWx0KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgYnJhbmQgPSAnJywgbW9kZWwgPSAnJywgc3lzdGVtID0gJycsXHJcbiAgICBsYW5ndWFnZSA9ICcnLCB0aGVtZSwgdmVyc2lvbixcclxuICAgIHBsYXRmb3JtLCBmb250U2l6ZVNldHRpbmcsXHJcbiAgICBTREtWZXJzaW9uLCBwaXhlbFJhdGlvLCBkZXZpY2VPcmllbnRhdGlvblxyXG4gIH0gPSByZXN1bHQ7XHJcbiAgLy8gY29uc3QgaXNRdWlja0FwcCA9IFwibXAteGhzXCIuaW5kZXhPZigncXVpY2thcHAtd2VidmlldycpICE9PSAtMVxyXG5cclxuICBjb25zdCBleHRyYVBhcmFtID0ge307XHJcblxyXG4gIC8vIG9zTmFtZSBvc1ZlcnNpb25cclxuICBsZXQgb3NOYW1lID0gJyc7XHJcbiAgbGV0IG9zVmVyc2lvbiA9ICcnO1xyXG4gIHtcclxuICAgIG9zTmFtZSA9IHN5c3RlbS5zcGxpdCgnICcpWzBdIHx8ICcnO1xyXG4gICAgb3NWZXJzaW9uID0gc3lzdGVtLnNwbGl0KCcgJylbMV0gfHwgJyc7XHJcbiAgfVxyXG4gIGxldCBob3N0VmVyc2lvbiA9IHZlcnNpb247XHJcblxyXG4gIC8vIGRldmljZVR5cGVcclxuICBjb25zdCBkZXZpY2VUeXBlID0gZ2V0R2V0RGV2aWNlVHlwZShyZXN1bHQsIG1vZGVsKTtcclxuXHJcbiAgLy8gZGV2aWNlTW9kZWxcclxuICBjb25zdCBkZXZpY2VCcmFuZCA9IGdldERldmljZUJyYW5kKGJyYW5kKTtcclxuXHJcbiAgLy8gaG9zdE5hbWVcclxuICBjb25zdCBfaG9zdE5hbWUgPSBnZXRIb3N0TmFtZShyZXN1bHQpO1xyXG5cclxuICAvLyBkZXZpY2VPcmllbnRhdGlvblxyXG4gIGxldCBfZGV2aWNlT3JpZW50YXRpb24gPSBkZXZpY2VPcmllbnRhdGlvbjsgLy8g5LuFIOW+ruS/oSDnmb7luqYg5pSv5oyBXHJcblxyXG4gIC8vIGRldmljZVBpeGVsUmF0aW9cclxuICBsZXQgX2RldmljZVBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xyXG5cclxuICAvLyBTREtWZXJzaW9uXHJcbiAgbGV0IF9TREtWZXJzaW9uID0gU0RLVmVyc2lvbjtcclxuXHJcbiAgLy8gaG9zdExhbmd1YWdlXHJcbiAgY29uc3QgaG9zdExhbmd1YWdlID0gbGFuZ3VhZ2UucmVwbGFjZSgvXy9nLCAnLScpO1xyXG5cclxuICAvLyB3eC5nZXRBY2NvdW50SW5mb1N5bmNcclxuXHJcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcclxuICAgIGFwcElkOiBwcm9jZXNzLmVudi5VTklfQVBQX0lELFxyXG4gICAgYXBwTmFtZTogcHJvY2Vzcy5lbnYuVU5JX0FQUF9OQU1FLFxyXG4gICAgYXBwVmVyc2lvbjogcHJvY2Vzcy5lbnYuVU5JX0FQUF9WRVJTSU9OX05BTUUsXHJcbiAgICBhcHBWZXJzaW9uQ29kZTogcHJvY2Vzcy5lbnYuVU5JX0FQUF9WRVJTSU9OX0NPREUsXHJcbiAgICBhcHBMYW5ndWFnZTogZ2V0QXBwTGFuZ3VhZ2UoaG9zdExhbmd1YWdlKSxcclxuICAgIHVuaUNvbXBpbGVWZXJzaW9uOiBwcm9jZXNzLmVudi5VTklfQ09NUElMRVJfVkVSU0lPTixcclxuICAgIHVuaVJ1bnRpbWVWZXJzaW9uOiBwcm9jZXNzLmVudi5VTklfQ09NUElMRVJfVkVSU0lPTixcclxuICAgIHVuaVBsYXRmb3JtOiBwcm9jZXNzLmVudi5VTklfU1VCX1BMQVRGT1JNIHx8IHByb2Nlc3MuZW52LlVOSV9QTEFURk9STSxcclxuICAgIGRldmljZUJyYW5kLFxyXG4gICAgZGV2aWNlTW9kZWw6IG1vZGVsLFxyXG4gICAgZGV2aWNlVHlwZSxcclxuICAgIGRldmljZVBpeGVsUmF0aW86IF9kZXZpY2VQaXhlbFJhdGlvLFxyXG4gICAgZGV2aWNlT3JpZW50YXRpb246IF9kZXZpY2VPcmllbnRhdGlvbixcclxuICAgIG9zTmFtZTogb3NOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCksXHJcbiAgICBvc1ZlcnNpb24sXHJcbiAgICBob3N0VGhlbWU6IHRoZW1lLFxyXG4gICAgaG9zdFZlcnNpb24sXHJcbiAgICBob3N0TGFuZ3VhZ2UsXHJcbiAgICBob3N0TmFtZTogX2hvc3ROYW1lLFxyXG4gICAgaG9zdFNES1ZlcnNpb246IF9TREtWZXJzaW9uLFxyXG4gICAgaG9zdEZvbnRTaXplU2V0dGluZzogZm9udFNpemVTZXR0aW5nLFxyXG4gICAgd2luZG93VG9wOiAwLFxyXG4gICAgd2luZG93Qm90dG9tOiAwLFxyXG4gICAgLy8gVE9ET1xyXG4gICAgb3NMYW5ndWFnZTogdW5kZWZpbmVkLFxyXG4gICAgb3NUaGVtZTogdW5kZWZpbmVkLFxyXG4gICAgdWE6IHVuZGVmaW5lZCxcclxuICAgIGhvc3RQYWNrYWdlTmFtZTogdW5kZWZpbmVkLFxyXG4gICAgYnJvd3Nlck5hbWU6IHVuZGVmaW5lZCxcclxuICAgIGJyb3dzZXJWZXJzaW9uOiB1bmRlZmluZWRcclxuICB9O1xyXG5cclxuICBPYmplY3QuYXNzaWduKHJlc3VsdCwgcGFyYW1ldGVycywgZXh0cmFQYXJhbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdldERldmljZVR5cGUgKHJlc3VsdCwgbW9kZWwpIHtcclxuICBsZXQgZGV2aWNlVHlwZSA9IHJlc3VsdC5kZXZpY2VUeXBlIHx8ICdwaG9uZSc7XHJcbiAge1xyXG4gICAgY29uc3QgZGV2aWNlVHlwZU1hcHMgPSB7XHJcbiAgICAgIGlwYWQ6ICdwYWQnLFxyXG4gICAgICB3aW5kb3dzOiAncGMnLFxyXG4gICAgICBtYWM6ICdwYydcclxuICAgIH07XHJcbiAgICBjb25zdCBkZXZpY2VUeXBlTWFwc0tleXMgPSBPYmplY3Qua2V5cyhkZXZpY2VUeXBlTWFwcyk7XHJcbiAgICBjb25zdCBfbW9kZWwgPSBtb2RlbC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRldmljZVR5cGVNYXBzS2V5cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgX20gPSBkZXZpY2VUeXBlTWFwc0tleXNbaW5kZXhdO1xyXG4gICAgICBpZiAoX21vZGVsLmluZGV4T2YoX20pICE9PSAtMSkge1xyXG4gICAgICAgIGRldmljZVR5cGUgPSBkZXZpY2VUeXBlTWFwc1tfbV07XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGV2aWNlVHlwZVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXZpY2VCcmFuZCAoYnJhbmQpIHtcclxuICBsZXQgZGV2aWNlQnJhbmQgPSBicmFuZDtcclxuICBpZiAoZGV2aWNlQnJhbmQpIHtcclxuICAgIGRldmljZUJyYW5kID0gYnJhbmQudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIGRldmljZUJyYW5kXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcExhbmd1YWdlIChkZWZhdWx0TGFuZ3VhZ2UpIHtcclxuICByZXR1cm4gZ2V0TG9jYWxlJDFcclxuICAgID8gZ2V0TG9jYWxlJDEoKVxyXG4gICAgOiBkZWZhdWx0TGFuZ3VhZ2VcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG9zdE5hbWUgKHJlc3VsdCkge1xyXG4gIGNvbnN0IF9wbGF0Zm9ybSA9ICBcIm1wLXhoc1wiLnNwbGl0KCctJylbMV07XHJcbiAgbGV0IF9ob3N0TmFtZSA9IHJlc3VsdC5ob3N0TmFtZSB8fCBfcGxhdGZvcm07IC8vIG1wLWpkXHJcblxyXG4gIHJldHVybiBfaG9zdE5hbWVcclxufVxyXG5cclxudmFyIGdldFN5c3RlbUluZm8gPSB7XHJcbiAgcmV0dXJuVmFsdWU6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHVzZURldmljZUlkKHJlc3VsdCk7XHJcbiAgICBhZGRTYWZlQXJlYUluc2V0cyhyZXN1bHQpO1xyXG4gICAgcG9wdWxhdGVQYXJhbWV0ZXJzKHJlc3VsdCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gaW1wb3J0IG5hdmlnYXRlVG8gZnJvbSAndW5pLWhlbHBlcnMvbmF2aWdhdGUtdG8nXHJcbi8vIGltcG9ydCBnZXRVc2VyUHJvZmlsZSBmcm9tICcuLi8uLi8uLi9tcC13ZWl4aW4vaGVscGVycy9nZXQtdXNlci1wcm9maWxlJ1xyXG5cclxuLy8g6ZyA6KaB5YGa6L2s5o2i55qEIEFQSSDliJfooahcclxuY29uc3QgcHJvdG9jb2xzID0ge1xyXG4gIC8vIG5hdmlnYXRlVG8sXHJcbiAgLy8gcmVkaXJlY3RUbyxcclxuICAvLyBwcmV2aWV3SW1hZ2UsXHJcbiAgZ2V0U3lzdGVtSW5mbyxcclxuICBnZXRTeXN0ZW1JbmZvU3luYzogZ2V0U3lzdGVtSW5mb1xyXG4gIC8vIGdldFVzZXJQcm9maWxlXHJcbn07XHJcblxyXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxyXG4vLyBUT0RPOiDooaXlhYVcclxuY29uc3QgdG9kb3MgPSBbXHJcbiAgJ2dldFNlbGVjdGVkVGV4dFJhbmdlJ1xyXG5dO1xyXG5cclxuLy8g5a2Y5Zyo5YW85a655oCn55qEIEFQSSDliJfooahcclxuY29uc3QgY2FuSVVzZXMgPSBbXTtcclxuXHJcbmNvbnN0IENBTExCQUNLUyA9IFsnc3VjY2VzcycsICdmYWlsJywgJ2NhbmNlbCcsICdjb21wbGV0ZSddO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrIChtZXRob2ROYW1lLCBtZXRob2QsIHJldHVyblZhbHVlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIHJldHVybiBtZXRob2QocHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUpKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0FyZ3MgKG1ldGhvZE5hbWUsIGZyb21BcmdzLCBhcmdzT3B0aW9uID0ge30sIHJldHVyblZhbHVlID0ge30sIGtlZXBGcm9tQXJncyA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZnJvbUFyZ3MpKSB7IC8vIOS4gOiIrCBhcGkg55qE5Y+C5pWw6Kej5p6QXHJcbiAgICBjb25zdCB0b0FyZ3MgPSBrZWVwRnJvbUFyZ3MgPT09IHRydWUgPyBmcm9tQXJncyA6IHt9OyAvLyByZXR1cm5WYWx1ZSDkuLogZmFsc2Ug5pe277yM6K+05piO5piv5qC85byP5YyW6L+U5Zue5YC877yM55u05o6l5Zyo6L+U5Zue5YC85a+56LGh5LiK5L+u5pS56LWL5YC8XHJcbiAgICBpZiAoaXNGbihhcmdzT3B0aW9uKSkge1xyXG4gICAgICBhcmdzT3B0aW9uID0gYXJnc09wdGlvbihmcm9tQXJncywgdG9BcmdzKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZyb21BcmdzKSB7XHJcbiAgICAgIGlmIChoYXNPd24oYXJnc09wdGlvbiwga2V5KSkge1xyXG4gICAgICAgIGxldCBrZXlPcHRpb24gPSBhcmdzT3B0aW9uW2tleV07XHJcbiAgICAgICAgaWYgKGlzRm4oa2V5T3B0aW9uKSkge1xyXG4gICAgICAgICAga2V5T3B0aW9uID0ga2V5T3B0aW9uKGZyb21BcmdzW2tleV0sIGZyb21BcmdzLCB0b0FyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWtleU9wdGlvbikgeyAvLyDkuI3mlK/mjIHnmoTlj4LmlbBcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlICcke21ldGhvZE5hbWV9JyBtZXRob2Qgb2YgcGxhdGZvcm0gJ+Wwj+e6ouS5puWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCBvcHRpb24gJyR7a2V5fSdgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3RyKGtleU9wdGlvbikpIHsgLy8g6YeN5YaZ5Y+C5pWwIGtleVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbl0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChrZXlPcHRpb24pKSB7IC8vIHtuYW1lOm5ld05hbWUsdmFsdWU6dmFsdWV95Y+v6YeN5paw5oyH5a6a5Y+C5pWwIGtleTp2YWx1ZVxyXG4gICAgICAgICAgdG9BcmdzW2tleU9wdGlvbi5uYW1lID8ga2V5T3B0aW9uLm5hbWUgOiBrZXldID0ga2V5T3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChDQUxMQkFDS1MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgIGlmIChpc0ZuKGZyb21BcmdzW2tleV0pKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IHByb2Nlc3NDYWxsYmFjayhtZXRob2ROYW1lLCBmcm9tQXJnc1trZXldLCByZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICgha2VlcEZyb21BcmdzKSB7XHJcbiAgICAgICAgICB0b0FyZ3Nba2V5XSA9IGZyb21BcmdzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9BcmdzXHJcbiAgfSBlbHNlIGlmIChpc0ZuKGZyb21BcmdzKSkge1xyXG4gICAgZnJvbUFyZ3MgPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3MsIHJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyb21BcmdzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZXR1cm5WYWx1ZSAobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwga2VlcFJldHVyblZhbHVlID0gZmFsc2UpIHtcclxuICBpZiAoaXNGbihwcm90b2NvbHMucmV0dXJuVmFsdWUpKSB7IC8vIOWkhOeQhumAmueUqCByZXR1cm5WYWx1ZVxyXG4gICAgcmVzID0gcHJvdG9jb2xzLnJldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlLCB7fSwga2VlcFJldHVyblZhbHVlKVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyIChtZXRob2ROYW1lLCBtZXRob2QpIHtcclxuICBpZiAoaGFzT3duKHByb3RvY29scywgbWV0aG9kTmFtZSkpIHtcclxuICAgIGNvbnN0IHByb3RvY29sID0gcHJvdG9jb2xzW21ldGhvZE5hbWVdO1xyXG4gICAgaWYgKCFwcm90b2NvbCkgeyAvLyDmmoLkuI3mlK/mjIHnmoQgYXBpXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgUGxhdGZvcm0gJ+Wwj+e6ouS5puWwj+eoi+W6jycgZG9lcyBub3Qgc3VwcG9ydCAnJHttZXRob2ROYW1lfScuYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGbihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcclxuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHhoc1ttZXRob2ROYW1lXS5hcHBseSh4aHMsIGFyZ3MpO1xyXG4gICAgICBpZiAoaXNTeW5jQXBpKG1ldGhvZE5hbWUpKSB7IC8vIOWQjOatpSBhcGlcclxuICAgICAgICByZXR1cm4gcHJvY2Vzc1JldHVyblZhbHVlKG1ldGhvZE5hbWUsIHJldHVyblZhbHVlLCBvcHRpb25zLnJldHVyblZhbHVlLCBpc0NvbnRleHRBcGkobWV0aG9kTmFtZSkpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtZXRob2RcclxufVxyXG5cclxuY29uc3QgdG9kb0FwaXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5cclxuY29uc3QgVE9ET1MgPSBbXHJcbiAgJ29uVGFiQmFyTWlkQnV0dG9uVGFwJyxcclxuICAnc3Vic2NyaWJlUHVzaCcsXHJcbiAgJ3Vuc3Vic2NyaWJlUHVzaCcsXHJcbiAgJ29uUHVzaCcsXHJcbiAgJ29mZlB1c2gnLFxyXG4gICdzaGFyZSdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9BcGkgKG5hbWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gdG9kb0FwaSAoe1xyXG4gICAgZmFpbCxcclxuICAgIGNvbXBsZXRlXHJcbiAgfSkge1xyXG4gICAgY29uc3QgcmVzID0ge1xyXG4gICAgICBlcnJNc2c6IGAke25hbWV9OmZhaWwgbWV0aG9kICcke25hbWV9JyBub3Qgc3VwcG9ydGVkYFxyXG4gICAgfTtcclxuICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICB9XHJcbn1cclxuXHJcblRPRE9TLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICB0b2RvQXBpc1tuYW1lXSA9IGNyZWF0ZVRvZG9BcGkobmFtZSk7XHJcbn0pO1xyXG5cclxudmFyIHByb3ZpZGVycyA9IHtcclxuICBvYXV0aDogWyd4aHMnXSxcclxuICBzaGFyZTogWyd4aHMnXSxcclxuICBwYXltZW50OiBbJ3hocyddLFxyXG4gIHB1c2g6IFsneGhzJ11cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByb3ZpZGVyICh7XHJcbiAgc2VydmljZSxcclxuICBzdWNjZXNzLFxyXG4gIGZhaWwsXHJcbiAgY29tcGxldGVcclxufSkge1xyXG4gIGxldCByZXMgPSBmYWxzZTtcclxuICBpZiAocHJvdmlkZXJzW3NlcnZpY2VdKSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOm9rJyxcclxuICAgICAgc2VydmljZSxcclxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyc1tzZXJ2aWNlXVxyXG4gICAgfTtcclxuICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMgPSB7XHJcbiAgICAgIGVyck1zZzogJ2dldFByb3ZpZGVyOmZhaWwgc2VydmljZSBub3QgZm91bmQnXHJcbiAgICB9O1xyXG4gICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgfVxyXG4gIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbn1cclxuXHJcbnZhciBleHRyYUFwaSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcclxuICBfX3Byb3RvX186IG51bGwsXHJcbiAgZ2V0UHJvdmlkZXI6IGdldFByb3ZpZGVyXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0RW1pdHRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IEVtaXR0ZXI7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIgKCkge1xyXG4gICAgaWYgKCFFbWl0dGVyKSB7XHJcbiAgICAgIEVtaXR0ZXIgPSBuZXcgVnVlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRW1pdHRlclxyXG4gIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uICRvbiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRvZmYgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9uY2UgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcbmZ1bmN0aW9uICRlbWl0ICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5cclxudmFyIGV2ZW50QXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICAkb246ICRvbixcclxuICAkb2ZmOiAkb2ZmLFxyXG4gICRvbmNlOiAkb25jZSxcclxuICAkZW1pdDogJGVtaXRcclxufSk7XHJcblxyXG4vKipcclxuICog5qGG5p625YaFIHRyeS1jYXRjaFxyXG4gKi9cclxuLyoqXHJcbiAqIOW8gOWPkeiAhSB0cnktY2F0Y2hcclxuICovXHJcbmZ1bmN0aW9uIHRyeUNhdGNoIChmbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZm4uYXBwbHkoZm4sIGFyZ3VtZW50cylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gVE9ET1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBpQ2FsbGJhY2tzIChwYXJhbXMpIHtcclxuICBjb25zdCBhcGlDYWxsYmFja3MgPSB7fTtcclxuICBmb3IgKGNvbnN0IG5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJhbSA9IHBhcmFtc1tuYW1lXTtcclxuICAgIGlmIChpc0ZuKHBhcmFtKSkge1xyXG4gICAgICBhcGlDYWxsYmFja3NbbmFtZV0gPSB0cnlDYXRjaChwYXJhbSk7XHJcbiAgICAgIGRlbGV0ZSBwYXJhbXNbbmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhcGlDYWxsYmFja3NcclxufVxyXG5cclxubGV0IGNpZDtcclxubGV0IGNpZEVyck1zZztcclxubGV0IGVuYWJsZWQ7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQdXNoTWVzc2FnZSAobWVzc2FnZSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShtZXNzYWdlKVxyXG4gIH0gY2F0Y2ggKGUpIHt9XHJcbiAgcmV0dXJuIG1lc3NhZ2VcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlUHVzaENhbGxiYWNrIChcclxuICBhcmdzXHJcbikge1xyXG4gIGlmIChhcmdzLnR5cGUgPT09ICdlbmFibGVkJykge1xyXG4gICAgZW5hYmxlZCA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhcmdzLnR5cGUgPT09ICdjbGllbnRJZCcpIHtcclxuICAgIGNpZCA9IGFyZ3MuY2lkO1xyXG4gICAgY2lkRXJyTXNnID0gYXJncy5lcnJNc2c7XHJcbiAgICBpbnZva2VHZXRQdXNoQ2lkQ2FsbGJhY2tzKGNpZCwgYXJncy5lcnJNc2cpO1xyXG4gIH0gZWxzZSBpZiAoYXJncy50eXBlID09PSAncHVzaE1zZycpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgIHR5cGU6ICdyZWNlaXZlJyxcclxuICAgICAgZGF0YTogbm9ybWFsaXplUHVzaE1lc3NhZ2UoYXJncy5tZXNzYWdlKVxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb25QdXNoTWVzc2FnZUNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYWxsYmFjayA9IG9uUHVzaE1lc3NhZ2VDYWxsYmFja3NbaV07XHJcbiAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpO1xyXG4gICAgICAvLyDor6Xmtojmga/lt7LooqvpmLvmraJcclxuICAgICAgaWYgKG1lc3NhZ2Uuc3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGFyZ3MudHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgb25QdXNoTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgdHlwZTogJ2NsaWNrJyxcclxuICAgICAgICBkYXRhOiBub3JtYWxpemVQdXNoTWVzc2FnZShhcmdzLm1lc3NhZ2UpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRQdXNoQ2lkQ2FsbGJhY2tzID0gW107XHJcblxyXG5mdW5jdGlvbiBpbnZva2VHZXRQdXNoQ2lkQ2FsbGJhY2tzIChjaWQsIGVyck1zZykge1xyXG4gIGdldFB1c2hDaWRDYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgIGNhbGxiYWNrKGNpZCwgZXJyTXNnKTtcclxuICB9KTtcclxuICBnZXRQdXNoQ2lkQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFB1c2hDbGllbnRJZCAoYXJncykge1xyXG4gIGlmICghaXNQbGFpbk9iamVjdChhcmdzKSkge1xyXG4gICAgYXJncyA9IHt9O1xyXG4gIH1cclxuICBjb25zdCB7XHJcbiAgICBzdWNjZXNzLFxyXG4gICAgZmFpbCxcclxuICAgIGNvbXBsZXRlXHJcbiAgfSA9IGdldEFwaUNhbGxiYWNrcyhhcmdzKTtcclxuICBjb25zdCBoYXNTdWNjZXNzID0gaXNGbihzdWNjZXNzKTtcclxuICBjb25zdCBoYXNGYWlsID0gaXNGbihmYWlsKTtcclxuICBjb25zdCBoYXNDb21wbGV0ZSA9IGlzRm4oY29tcGxldGUpO1xyXG5cclxuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZW5hYmxlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBjaWQgPSAnJztcclxuICAgICAgY2lkRXJyTXNnID0gJ3VuaVB1c2ggaXMgbm90IGVuYWJsZWQnO1xyXG4gICAgfVxyXG4gICAgZ2V0UHVzaENpZENhbGxiYWNrcy5wdXNoKChjaWQsIGVyck1zZykgPT4ge1xyXG4gICAgICBsZXQgcmVzO1xyXG4gICAgICBpZiAoY2lkKSB7XHJcbiAgICAgICAgcmVzID0ge1xyXG4gICAgICAgICAgZXJyTXNnOiAnZ2V0UHVzaENsaWVudElkOm9rJyxcclxuICAgICAgICAgIGNpZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaGFzU3VjY2VzcyAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0ge1xyXG4gICAgICAgICAgZXJyTXNnOiAnZ2V0UHVzaENsaWVudElkOmZhaWwnICsgKGVyck1zZyA/ICcgJyArIGVyck1zZyA6ICcnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaGFzRmFpbCAmJiBmYWlsKHJlcyk7XHJcbiAgICAgIH1cclxuICAgICAgaGFzQ29tcGxldGUgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGVvZiBjaWQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGludm9rZUdldFB1c2hDaWRDYWxsYmFja3MoY2lkLCBjaWRFcnJNc2cpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBvblB1c2hNZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcbi8vIOS4jeS9v+eUqCBkZWZpbmVPbkFwaSDlrp7njrDvvIzmmK/lm6DkuLogZGVmaW5lT25BcGkg5L6d6LWWIFVuaVNlcnZpY2VKU0JyaWRnZSDvvIzor6Xlr7nosaHnm67liY3lnKjlsI/nqIvluo/kuIrmnKrmj5DkvpvvvIzmlYXnroDljZXlrp7njrBcclxuY29uc3Qgb25QdXNoTWVzc2FnZSA9IChmbikgPT4ge1xyXG4gIGlmIChvblB1c2hNZXNzYWdlQ2FsbGJhY2tzLmluZGV4T2YoZm4pID09PSAtMSkge1xyXG4gICAgb25QdXNoTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGZuKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBvZmZQdXNoTWVzc2FnZSA9IChmbikgPT4ge1xyXG4gIGlmICghZm4pIHtcclxuICAgIG9uUHVzaE1lc3NhZ2VDYWxsYmFja3MubGVuZ3RoID0gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaW5kZXggPSBvblB1c2hNZXNzYWdlQ2FsbGJhY2tzLmluZGV4T2YoZm4pO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgb25QdXNoTWVzc2FnZUNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnZhciBhcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIGdldFB1c2hDbGllbnRJZDogZ2V0UHVzaENsaWVudElkLFxyXG4gIG9uUHVzaE1lc3NhZ2U6IG9uUHVzaE1lc3NhZ2UsXHJcbiAgb2ZmUHVzaE1lc3NhZ2U6IG9mZlB1c2hNZXNzYWdlLFxyXG4gIGludm9rZVB1c2hDYWxsYmFjazogaW52b2tlUHVzaENhbGxiYWNrXHJcbn0pO1xyXG5cclxuY29uc3QgbW9ja3MgPSBbJ19fcm91dGVfXycsICdfX3d4RXhwYXJzZXJOb2RlSWRfXycsICdfX3d4V2Vidmlld0lkX18nXTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRWbUJ5VnVlSWQgKHZtLCB2dWVQaWQpIHtcclxuICBjb25zdCAkY2hpbGRyZW4gPSB2bS4kY2hpbGRyZW47XHJcbiAgLy8g5LyY5YWI5p+l5om+55u05bGeKOWPjeWQkeafpeaJvjpodHRwczovL2dpdGh1Yi5jb20vZGNsb3VkaW8vdW5pLWFwcC9pc3N1ZXMvMTIwMClcclxuICBmb3IgKGxldCBpID0gJGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBjaGlsZFZtID0gJGNoaWxkcmVuW2ldO1xyXG4gICAgaWYgKGNoaWxkVm0uJHNjb3BlLl8kdnVlSWQgPT09IHZ1ZVBpZCkge1xyXG4gICAgICByZXR1cm4gY2hpbGRWbVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyDlj43lkJHpgJLlvZLmn6Xmib5cclxuICBsZXQgcGFyZW50Vm07XHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKCRjaGlsZHJlbltpXSwgdnVlUGlkKTtcclxuICAgIGlmIChwYXJlbnRWbSkge1xyXG4gICAgICByZXR1cm4gcGFyZW50Vm1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRCZWhhdmlvciAob3B0aW9ucykge1xyXG4gIHJldHVybiBCZWhhdmlvcihvcHRpb25zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BhZ2UgKCkge1xyXG4gIHJldHVybiAhIXRoaXMucm91dGVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFJlbGF0aW9uIChkZXRhaWwpIHtcclxuICB0aGlzLnRyaWdnZXJFdmVudCgnX19sJywgZGV0YWlsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0QWxsQ29tcG9uZW50cyAobXBJbnN0YW5jZSwgc2VsZWN0b3IsICRyZWZzKSB7XHJcbiAgY29uc3QgY29tcG9uZW50cyA9IG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cyhzZWxlY3RvcikgfHwgW107XHJcbiAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICBjb25zdCByZWYgPSBjb21wb25lbnQuZGF0YXNldC5yZWY7XHJcbiAgICAkcmVmc1tyZWZdID0gY29tcG9uZW50LiR2bSB8fCB0b1NraXAoY29tcG9uZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3luY1JlZnMgKHJlZnMsIG5ld1JlZnMpIHtcclxuICBjb25zdCBvbGRLZXlzID0gbmV3IFNldCguLi5PYmplY3Qua2V5cyhyZWZzKSk7XHJcbiAgY29uc3QgbmV3S2V5cyA9IE9iamVjdC5rZXlzKG5ld1JlZnMpO1xyXG4gIG5ld0tleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgY29uc3Qgb2xkVmFsdWUgPSByZWZzW2tleV07XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld1JlZnNba2V5XTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSAmJiBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSAmJiBvbGRWYWx1ZS5sZW5ndGggPT09IG5ld1ZhbHVlLmxlbmd0aCAmJiBuZXdWYWx1ZS5ldmVyeSh2YWx1ZSA9PiBvbGRWYWx1ZS5pbmNsdWRlcyh2YWx1ZSkpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgcmVmc1trZXldID0gbmV3VmFsdWU7XHJcbiAgICBvbGRLZXlzLmRlbGV0ZShrZXkpO1xyXG4gIH0pO1xyXG4gIG9sZEtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgZGVsZXRlIHJlZnNba2V5XTtcclxuICB9KTtcclxuICByZXR1cm4gcmVmc1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UmVmcyAodm0pIHtcclxuICBjb25zdCBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xyXG4gIGNvbnN0IHJlZnMgPSB7fTtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sICckcmVmcycsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgIGNvbnN0ICRyZWZzID0ge307XHJcbiAgICAgIHNlbGVjdEFsbENvbXBvbmVudHMobXBJbnN0YW5jZSwgJy52dWUtcmVmJywgJHJlZnMpO1xyXG4gICAgICAvLyBUT0RPIOaaguS4jeiAg+iZkSBmb3Ig5Lit55qEIHNjb3BlZFxyXG4gICAgICBjb25zdCBmb3JDb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZi1pbi1mb3InKSB8fCBbXTtcclxuICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIGlmICghJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgJHJlZnNbcmVmXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCB0b1NraXAoY29tcG9uZW50KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3luY1JlZnMocmVmcywgJHJlZnMpXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUxpbmsgKGV2ZW50KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdnVlUGlkLFxyXG4gICAgdnVlT3B0aW9uc1xyXG4gIH0gPSBldmVudC5kZXRhaWwgfHwgZXZlbnQudmFsdWU7IC8vIGRldGFpbCDmmK/lvq7kv6EsdmFsdWUg5piv55m+5bqmKGRpcGF0Y2gpXHJcblxyXG4gIGxldCBwYXJlbnRWbTtcclxuXHJcbiAgaWYgKHZ1ZVBpZCkge1xyXG4gICAgcGFyZW50Vm0gPSBmaW5kVm1CeVZ1ZUlkKHRoaXMuJHZtLCB2dWVQaWQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwYXJlbnRWbSkge1xyXG4gICAgcGFyZW50Vm0gPSB0aGlzLiR2bTtcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMucGFyZW50ID0gcGFyZW50Vm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcmtNUENvbXBvbmVudCAoY29tcG9uZW50KSB7XHJcbiAgLy8g5ZyoIFZ1ZSDkuK3moIforrDkuLrlsI/nqIvluo/nu4Tku7ZcclxuICBjb25zdCBJU19NUCA9ICdfX3ZfaXNNUENvbXBvbmVudCc7XHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbXBvbmVudCwgSVNfTVAsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgdmFsdWU6IHRydWVcclxuICB9KTtcclxuICByZXR1cm4gY29tcG9uZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvU2tpcCAob2JqKSB7XHJcbiAgY29uc3QgT0IgPSAnX19vYl9fJztcclxuICBjb25zdCBTS0lQID0gJ19fdl9za2lwJztcclxuICBpZiAoaXNPYmplY3Qob2JqKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKG9iaikpIHtcclxuICAgIC8vIOmBv+WFjeiiqyBAdnVlL2NvbXBvc2l0aW9uLWFwaSDop4LmtYtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIE9CLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgW1NLSVBdOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gb2JqXHJcbn1cclxuXHJcbmNvbnN0IE1QUGFnZSA9IFBhZ2U7XHJcbmNvbnN0IE1QQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5cclxuY29uc3QgY3VzdG9taXplUkUgPSAvOi9nO1xyXG5cclxuY29uc3QgY3VzdG9taXplID0gY2FjaGVkKChzdHIpID0+IHtcclxuICByZXR1cm4gY2FtZWxpemUoc3RyLnJlcGxhY2UoY3VzdG9taXplUkUsICctJykpXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdFRyaWdnZXJFdmVudCAobXBJbnN0YW5jZSkge1xyXG4gIGNvbnN0IG9sZFRyaWdnZXJFdmVudCA9IG1wSW5zdGFuY2UudHJpZ2dlckV2ZW50O1xyXG4gIGNvbnN0IG5ld1RyaWdnZXJFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgLi4uYXJncykge1xyXG4gICAgLy8g5LqL5Lu25ZCN57uf5LiA6L2s6am85bOw5qC85byP77yM5LuF5aSE55CG77ya5b2T5YmN57uE5Lu25Li6IHZ1ZSDnu4Tku7bjgIHlvZPliY3nu4Tku7bkuLogdnVlIOe7hOS7tuWtkOe7hOS7tlxyXG4gICAgaWYgKHRoaXMuJHZtIHx8ICh0aGlzLmRhdGFzZXQgJiYgdGhpcy5kYXRhc2V0LmNvbVR5cGUpKSB7XHJcbiAgICAgIGV2ZW50ID0gY3VzdG9taXplKGV2ZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvbGRUcmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgW2V2ZW50LCAuLi5hcmdzXSlcclxuICB9O1xyXG4gIHRyeSB7XHJcbiAgICAvLyDkuqzkuJzlsI/nqIvluo8gdHJpZ2dlckV2ZW50IOS4uuWPquivu1xyXG4gICAgbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQgPSBuZXdUcmlnZ2VyRXZlbnQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIG1wSW5zdGFuY2UuX3RyaWdnZXJFdmVudCA9IG5ld1RyaWdnZXJFdmVudDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rIChuYW1lLCBvcHRpb25zLCBpc0NvbXBvbmVudCkge1xyXG4gIGNvbnN0IG9sZEhvb2sgPSBvcHRpb25zW25hbWVdO1xyXG4gIG9wdGlvbnNbbmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgbWFya01QQ29tcG9uZW50KHRoaXMpO1xyXG4gICAgaW5pdFRyaWdnZXJFdmVudCh0aGlzKTtcclxuICAgIGlmIChvbGRIb29rKSB7XHJcbiAgICAgIHJldHVybiBvbGRIb29rLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5pZiAoIU1QUGFnZS5fXyR3cmFwcGVyZWQpIHtcclxuICBNUFBhZ2UuX18kd3JhcHBlcmVkID0gdHJ1ZTtcclxuICBQYWdlID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaW5pdEhvb2soJ29uTG9hZCcsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIE1QUGFnZShvcHRpb25zKVxyXG4gIH07XHJcbiAgUGFnZS5hZnRlciA9IE1QUGFnZS5hZnRlcjtcclxuXHJcbiAgQ29tcG9uZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgaW5pdEhvb2soJ2NyZWF0ZWQnLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBNUENvbXBvbmVudChvcHRpb25zKVxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IFBBR0VfRVZFTlRfSE9PS1MgPSBbXHJcbiAgJ29uUHVsbERvd25SZWZyZXNoJyxcclxuICAnb25SZWFjaEJvdHRvbScsXHJcbiAgJ29uQWRkVG9GYXZvcml0ZXMnLFxyXG4gICdvblNoYXJlVGltZWxpbmUnLFxyXG4gICdvblNoYXJlQXBwTWVzc2FnZScsXHJcbiAgJ29uUGFnZVNjcm9sbCcsXHJcbiAgJ29uUmVzaXplJyxcclxuICAnb25UYWJJdGVtVGFwJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gaW5pdE1vY2tzICh2bSwgbW9ja3MpIHtcclxuICBjb25zdCBtcEluc3RhbmNlID0gdm0uJG1wW3ZtLm1wVHlwZV07XHJcbiAgbW9ja3MuZm9yRWFjaChtb2NrID0+IHtcclxuICAgIGlmIChoYXNPd24obXBJbnN0YW5jZSwgbW9jaykpIHtcclxuICAgICAgdm1bbW9ja10gPSBtcEluc3RhbmNlW21vY2tdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNIb29rIChob29rLCB2dWVPcHRpb25zKSB7XHJcbiAgaWYgKCF2dWVPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKFZ1ZS5vcHRpb25zICYmIEFycmF5LmlzQXJyYXkoVnVlLm9wdGlvbnNbaG9va10pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgdnVlT3B0aW9ucyA9IHZ1ZU9wdGlvbnMuZGVmYXVsdCB8fCB2dWVPcHRpb25zO1xyXG5cclxuICBpZiAoaXNGbih2dWVPcHRpb25zKSkge1xyXG4gICAgaWYgKGlzRm4odnVlT3B0aW9ucy5leHRlbmRPcHRpb25zW2hvb2tdKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYgKHZ1ZU9wdGlvbnMuc3VwZXIgJiZcclxuICAgICAgdnVlT3B0aW9ucy5zdXBlci5vcHRpb25zICYmXHJcbiAgICAgIEFycmF5LmlzQXJyYXkodnVlT3B0aW9ucy5zdXBlci5vcHRpb25zW2hvb2tdKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNGbih2dWVPcHRpb25zW2hvb2tdKSB8fCBBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnNbaG9va10pKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBjb25zdCBtaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuICBpZiAoQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XHJcbiAgICByZXR1cm4gISFtaXhpbnMuZmluZChtaXhpbiA9PiBoYXNIb29rKGhvb2ssIG1peGluKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rcyAobXBPcHRpb25zLCBob29rcywgdnVlT3B0aW9ucykge1xyXG4gIGhvb2tzLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaGFzSG9vayhob29rLCB2dWVPcHRpb25zKSkge1xyXG4gICAgICBtcE9wdGlvbnNbaG9va10gPSBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vayhob29rLCBhcmdzKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VW5rbm93bkhvb2tzIChtcE9wdGlvbnMsIHZ1ZU9wdGlvbnMsIGV4Y2x1ZGVzID0gW10pIHtcclxuICBmaW5kSG9va3ModnVlT3B0aW9ucykuZm9yRWFjaCgoaG9vaykgPT4gaW5pdEhvb2skMShtcE9wdGlvbnMsIGhvb2ssIGV4Y2x1ZGVzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRIb29rcyAodnVlT3B0aW9ucywgaG9va3MgPSBbXSkge1xyXG4gIGlmICh2dWVPcHRpb25zKSB7XHJcbiAgICBPYmplY3Qua2V5cyh2dWVPcHRpb25zKS5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgIGlmIChuYW1lLmluZGV4T2YoJ29uJykgPT09IDAgJiYgaXNGbih2dWVPcHRpb25zW25hbWVdKSkge1xyXG4gICAgICAgIGhvb2tzLnB1c2gobmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gaG9va3NcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2skMSAobXBPcHRpb25zLCBob29rLCBleGNsdWRlcykge1xyXG4gIGlmIChleGNsdWRlcy5pbmRleE9mKGhvb2spID09PSAtMSAmJiAhaGFzT3duKG1wT3B0aW9ucywgaG9vaykpIHtcclxuICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vayhob29rLCBhcmdzKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVDb21wb25lbnQgKFZ1ZSwgdnVlT3B0aW9ucykge1xyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuICBsZXQgVnVlQ29tcG9uZW50O1xyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHZ1ZU9wdGlvbnMpO1xyXG4gIH1cclxuICB2dWVPcHRpb25zID0gVnVlQ29tcG9uZW50Lm9wdGlvbnM7XHJcbiAgcmV0dXJuIFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTbG90cyAodm0sIHZ1ZVNsb3RzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZ1ZVNsb3RzLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gdm0uJHNsb3RzID0gJHNsb3RzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XHJcbiAgdnVlSWRzID0gKHZ1ZUlkcyB8fCAnJykuc3BsaXQoJywnKTtcclxuICBjb25zdCBsZW4gPSB2dWVJZHMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuID09PSAxKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVQaWQgPSB2dWVJZHNbMV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xyXG4gIGxldCBkYXRhID0gdnVlT3B0aW9ucy5kYXRhIHx8IHt9O1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB2dWVPcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDlr7kgZGF0YSDmoLzlvI/ljJZcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcclxuICAgIGRhdGEgPSB7fTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XHJcbiAgICBpZiAoY29udGV4dC5fX2xpZmVjeWNsZV9ob29rc19fLmluZGV4T2YobWV0aG9kTmFtZSkgPT09IC0xICYmICFoYXNPd24oZGF0YSwgbWV0aG9kTmFtZSkpIHtcclxuICAgICAgZGF0YVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmNvbnN0IFBST1BfVFlQRVMgPSBbU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIE9iamVjdCwgQXJyYXksIG51bGxdO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIgKG5hbWUpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gb2JzZXJ2ZXIgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICBpZiAodGhpcy4kdm0pIHtcclxuICAgICAgdGhpcy4kdm1bbmFtZV0gPSBuZXdWYWw7IC8vIOS4uuS6huinpuWPkeWFtuS7lumdniByZW5kZXIgd2F0Y2hlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEJlaGF2aW9ycyAodnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSB7XHJcbiAgY29uc3QgdnVlQmVoYXZpb3JzID0gdnVlT3B0aW9ucy5iZWhhdmlvcnM7XHJcbiAgY29uc3QgdnVlRXh0ZW5kcyA9IHZ1ZU9wdGlvbnMuZXh0ZW5kcztcclxuICBjb25zdCB2dWVNaXhpbnMgPSB2dWVPcHRpb25zLm1peGlucztcclxuXHJcbiAgbGV0IHZ1ZVByb3BzID0gdnVlT3B0aW9ucy5wcm9wcztcclxuXHJcbiAgaWYgKCF2dWVQcm9wcykge1xyXG4gICAgdnVlT3B0aW9ucy5wcm9wcyA9IHZ1ZVByb3BzID0gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCBiZWhhdmlvcnMgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVCZWhhdmlvcnMpKSB7XHJcbiAgICB2dWVCZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiB7XHJcbiAgICAgIGJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yLnJlcGxhY2UoJ3VuaTovLycsIGAke1wieGhzXCJ9Oi8vYCkpO1xyXG4gICAgICBpZiAoYmVoYXZpb3IgPT09ICd1bmk6Ly9mb3JtLWZpZWxkJykge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZ1ZVByb3BzKSkge1xyXG4gICAgICAgICAgdnVlUHJvcHMucHVzaCgnbmFtZScpO1xyXG4gICAgICAgICAgdnVlUHJvcHMucHVzaCgndmFsdWUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdnVlUHJvcHMubmFtZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHZ1ZVByb3BzLnZhbHVlID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXIsIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIERhdGVdLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNQbGFpbk9iamVjdCh2dWVFeHRlbmRzKSAmJiB2dWVFeHRlbmRzLnByb3BzKSB7XHJcbiAgICBiZWhhdmlvcnMucHVzaChcclxuICAgICAgaW5pdEJlaGF2aW9yKHtcclxuICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVFeHRlbmRzLnByb3BzLCB0cnVlKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlTWl4aW5zKSkge1xyXG4gICAgdnVlTWl4aW5zLmZvckVhY2godnVlTWl4aW4gPT4ge1xyXG4gICAgICBpZiAoaXNQbGFpbk9iamVjdCh2dWVNaXhpbikgJiYgdnVlTWl4aW4ucHJvcHMpIHtcclxuICAgICAgICBiZWhhdmlvcnMucHVzaChcclxuICAgICAgICAgIGluaXRCZWhhdmlvcih7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU1peGluLnByb3BzLCB0cnVlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGJlaGF2aW9yc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVByb3BUeXBlIChrZXksIHR5cGUsIGRlZmF1bHRWYWx1ZSwgZmlsZSkge1xyXG4gIC8vIFtTdHJpbmddPT5TdHJpbmdcclxuICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSAmJiB0eXBlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIHR5cGVbMF1cclxuICB9XHJcbiAgcmV0dXJuIHR5cGVcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFByb3BlcnRpZXMgKHByb3BzLCBpc0JlaGF2aW9yID0gZmFsc2UsIGZpbGUgPSAnJywgb3B0aW9ucykge1xyXG4gIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcclxuICBpZiAoIWlzQmVoYXZpb3IpIHtcclxuICAgIHByb3BlcnRpZXMudnVlSWQgPSB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gICAgLy8gc2NvcGVkU2xvdHNDb21waWxlciBhdXRvXHJcbiAgICBwcm9wZXJ0aWVzLnNjb3BlZFNsb3RzQ29tcGlsZXIgPSB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9O1xyXG4gICAgcHJvcGVydGllcy52dWVTbG90cyA9IHsgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogW10sXHJcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBjb25zdCAkc2xvdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIG5ld1ZhbC5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAkc2xvdHNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7IC8vIFsndGl0bGUnXVxyXG4gICAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkgeyAvLyB7dGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9LGNvbnRlbnQ6U3RyaW5nfVxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3Qgb3B0cyA9IHByb3BzW2tleV07XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7IC8vIHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdHMuZGVmYXVsdDtcclxuICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdHMudHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzLnR5cGUpO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7IC8vIGNvbnRlbnQ6U3RyaW5nXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2YodHlwZSkgIT09IC0xID8gdHlwZSA6IG51bGwsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcHJvcGVydGllc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyJDEgKGV2ZW50KSB7XHJcbiAgLy8gVE9ETyDlj4jlvpflhbzlrrkgbXB2dWUg55qEIG1wIOWvueixoVxyXG4gIHRyeSB7XHJcbiAgICBldmVudC5tcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcclxuICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gbm9vcDtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IG5vb3A7XHJcblxyXG4gIGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCB7fTtcclxuXHJcbiAgaWYgKCFoYXNPd24oZXZlbnQsICdkZXRhaWwnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xyXG4gICAgZXZlbnQuZGV0YWlsID0gdHlwZW9mIGV2ZW50LmRldGFpbCA9PT0gJ29iamVjdCcgPyBldmVudC5kZXRhaWwgOiB7fTtcclxuICAgIGV2ZW50LmRldGFpbC5tYXJrZXJJZCA9IGV2ZW50Lm1hcmtlcklkO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUGxhaW5PYmplY3QoZXZlbnQuZGV0YWlsKSkge1xyXG4gICAgZXZlbnQudGFyZ2V0ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQudGFyZ2V0LCBldmVudC5kZXRhaWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV2ZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV4dHJhVmFsdWUgKHZtLCBkYXRhUGF0aHNBcnJheSkge1xyXG4gIGxldCBjb250ZXh0ID0gdm07XHJcbiAgZGF0YVBhdGhzQXJyYXkuZm9yRWFjaChkYXRhUGF0aEFycmF5ID0+IHtcclxuICAgIGNvbnN0IGRhdGFQYXRoID0gZGF0YVBhdGhBcnJheVswXTtcclxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVBhdGhBcnJheVsyXTtcclxuICAgIGlmIChkYXRhUGF0aCB8fCB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7IC8vIFsnJywnJyxpbmRleCwnZGlzYWJsZSddXHJcbiAgICAgIGNvbnN0IHByb3BQYXRoID0gZGF0YVBhdGhBcnJheVsxXTtcclxuICAgICAgY29uc3QgdmFsdWVQYXRoID0gZGF0YVBhdGhBcnJheVszXTtcclxuXHJcbiAgICAgIGxldCB2Rm9yO1xyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihkYXRhUGF0aCkpIHtcclxuICAgICAgICB2Rm9yID0gZGF0YVBhdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWRhdGFQYXRoKSB7XHJcbiAgICAgICAgdkZvciA9IGNvbnRleHQ7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGFQYXRoID09PSAnc3RyaW5nJyAmJiBkYXRhUGF0aCkge1xyXG4gICAgICAgIGlmIChkYXRhUGF0aC5pbmRleE9mKCcjcyMnKSA9PT0gMCkge1xyXG4gICAgICAgICAgdkZvciA9IGRhdGFQYXRoLnN1YnN0cigzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdkZvciA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLCBjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZGb3IpKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCFwcm9wUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2Rm9yW3ZhbHVlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2Rm9yKSkge1xyXG4gICAgICAgICAgY29udGV4dCA9IHZGb3IuZmluZCh2Rm9ySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5fX2dldF92YWx1ZShwcm9wUGF0aCwgdkZvckl0ZW0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gT2JqZWN0LmtleXModkZvcikuZmluZCh2Rm9yS2V5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9yW3ZGb3JLZXldKSA9PT0gdmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCd2LWZvciDmmoLkuI3mlK/mjIHlvqrnjq/mlbDmja7vvJonLCB2Rm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh2YWx1ZVBhdGgpIHtcclxuICAgICAgICBjb250ZXh0ID0gdm0uX19nZXRfdmFsdWUodmFsdWVQYXRoLCBjb250ZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NFdmVudEV4dHJhICh2bSwgZXh0cmEsIGV2ZW50LCBfX2FyZ3NfXykge1xyXG4gIGNvbnN0IGV4dHJhT2JqID0ge307XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KGV4dHJhKSAmJiBleHRyYS5sZW5ndGgpIHtcclxuICAgIC8qKlxyXG4gICAgICpbXHJcbiAgICAgKiAgICBbJ2RhdGEuaXRlbXMnLCAnZGF0YS5pZCcsIGl0ZW0uZGF0YS5pZF0sXHJcbiAgICAgKiAgICBbJ21ldGFzJywgJ2lkJywgbWV0YS5pZF1cclxuICAgICAqXSxcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKid0ZXN0J1xyXG4gICAgICovXHJcbiAgICBleHRyYS5mb3JFYWNoKChkYXRhUGF0aCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBkYXRhUGF0aCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoIWRhdGFQYXRoKSB7IC8vIG1vZGVsLHByb3Auc3luY1xyXG4gICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChkYXRhUGF0aCA9PT0gJyRldmVudCcpIHsgLy8gJGV2ZW50XHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IGV2ZW50O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhUGF0aCA9PT0gJ2FyZ3VtZW50cycpIHtcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQuZGV0YWlsID8gZXZlbnQuZGV0YWlsLl9fYXJnc19fIHx8IF9fYXJnc19fIDogX19hcmdzX187XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyRldmVudC4nKSA9PT0gMCkgeyAvLyAkZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoLnJlcGxhY2UoJyRldmVudC4nLCAnJyksIGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtLl9fZ2V0X3ZhbHVlKGRhdGFQYXRoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZ2V0RXh0cmFWYWx1ZSh2bSwgZGF0YVBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBleHRyYU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmpCeUFycmF5IChhcnIpIHtcclxuICBjb25zdCBvYmogPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgIG9ialtlbGVtZW50WzBdXSA9IGVsZW1lbnRbMV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50QXJncyAodm0sIGV2ZW50LCBhcmdzID0gW10sIGV4dHJhID0gW10sIGlzQ3VzdG9tLCBtZXRob2ROYW1lKSB7XHJcbiAgbGV0IGlzQ3VzdG9tTVBFdmVudCA9IGZhbHNlOyAvLyB3eGNvbXBvbmVudCDnu4Tku7bvvIzkvKDpgJLljp/lp4sgZXZlbnQg5a+56LGhXHJcblxyXG4gIC8vIGZpeGVkIOeUqOaIt+ebtOaOpeinpuWPkSBtcEluc3RhbmNlLnRyaWdnZXJFdmVudFxyXG4gIGNvbnN0IF9fYXJnc19fID0gaXNQbGFpbk9iamVjdChldmVudC5kZXRhaWwpXHJcbiAgICA/IGV2ZW50LmRldGFpbC5fX2FyZ3NfXyB8fCBbZXZlbnQuZGV0YWlsXVxyXG4gICAgOiBbZXZlbnQuZGV0YWlsXTtcclxuXHJcbiAgaWYgKGlzQ3VzdG9tKSB7IC8vIOiHquWumuS5ieS6i+S7tlxyXG4gICAgaXNDdXN0b21NUEV2ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgJiZcclxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbVR5cGUgPT09ICd3eCc7XHJcbiAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7IC8vIOaXoOWPguaVsO+8jOebtOaOpeS8oOWFpSBldmVudCDmiJYgZGV0YWlsIOaVsOe7hFxyXG4gICAgICBpZiAoaXNDdXN0b21NUEV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFtldmVudF1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gX19hcmdzX19cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGV4dHJhT2JqID0gcHJvY2Vzc0V2ZW50RXh0cmEodm0sIGV4dHJhLCBldmVudCwgX19hcmdzX18pO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuICBhcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XHJcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXHJcbiAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgICAgcmV0LnB1c2goX19hcmdzX19bMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIHd4Y29tcG9uZW50IOe7hOS7tuaIluWGhee9rue7hOS7tlxyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmdbMF0gPT09ICdvJykge1xyXG4gICAgICAgIHJldC5wdXNoKGdldE9iakJ5QXJyYXkoYXJnKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgaGFzT3duKGV4dHJhT2JqLCBhcmcpKSB7XHJcbiAgICAgICAgcmV0LnB1c2goZXh0cmFPYmpbYXJnXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0LnB1c2goYXJnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcmV0XHJcbn1cclxuXHJcbmNvbnN0IE9OQ0UgPSAnfic7XHJcbmNvbnN0IENVU1RPTSA9ICdeJztcclxuXHJcbmZ1bmN0aW9uIGlzTWF0Y2hFdmVudFR5cGUgKGV2ZW50VHlwZSwgb3B0VHlwZSkge1xyXG4gIHJldHVybiAoZXZlbnRUeXBlID09PSBvcHRUeXBlKSB8fFxyXG4gICAgKFxyXG4gICAgICBvcHRUeXBlID09PSAncmVnaW9uY2hhbmdlJyAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgZXZlbnRUeXBlID09PSAnYmVnaW4nIHx8XHJcbiAgICAgICAgZXZlbnRUeXBlID09PSAnZW5kJ1xyXG4gICAgICApXHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnRleHRWbSAodm0pIHtcclxuICBsZXQgJHBhcmVudCA9IHZtLiRwYXJlbnQ7XHJcbiAgLy8g54i257uE5Lu25pivIHNjb3BlZCBzbG90cyDmiJbogIXlhbbku5boh6rlrprkuYnnu4Tku7bml7bnu6fnu63mn6Xmib5cclxuICB3aGlsZSAoJHBhcmVudCAmJiAkcGFyZW50LiRwYXJlbnQgJiYgKCRwYXJlbnQuJG9wdGlvbnMuZ2VuZXJpYyB8fCAkcGFyZW50LiRwYXJlbnQuJG9wdGlvbnMuZ2VuZXJpYyB8fCAkcGFyZW50LiRzY29wZS5fJHZ1ZVBpZCkpIHtcclxuICAgICRwYXJlbnQgPSAkcGFyZW50LiRwYXJlbnQ7XHJcbiAgfVxyXG4gIHJldHVybiAkcGFyZW50ICYmICRwYXJlbnQuJHBhcmVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZlbnQpIHtcclxuICBldmVudCA9IHdyYXBwZXIkMShldmVudCk7XHJcblxyXG4gIC8vIFtbJ3RhcCcsW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXV1dXHJcbiAgY29uc3QgZGF0YXNldCA9IChldmVudC5jdXJyZW50VGFyZ2V0IHx8IGV2ZW50LnRhcmdldCkuZGF0YXNldDtcclxuICBpZiAoIWRhdGFzZXQpIHtcclxuICAgIHJldHVybiBjb25zb2xlLndhcm4oJ+S6i+S7tuS/oeaBr+S4jeWtmOWcqCcpXHJcbiAgfVxyXG4gIGNvbnN0IGV2ZW50T3B0cyA9IGRhdGFzZXQuZXZlbnRPcHRzIHx8IGRhdGFzZXRbJ2V2ZW50LW9wdHMnXTsgLy8g5pSv5LuY5a6dIHdlYi12aWV3IOe7hOS7tiBkYXRhc2V0IOmdnumpvOWzsFxyXG4gIGlmICghZXZlbnRPcHRzKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxyXG4gIH1cclxuXHJcbiAgLy8gW1snaGFuZGxlJyxbMSwyLGFdXSxbJ2hhbmRsZTEnLFsxLDIsYV1dXVxyXG4gIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGU7XHJcblxyXG4gIGNvbnN0IHJldCA9IFtdO1xyXG5cclxuICBldmVudE9wdHMuZm9yRWFjaChldmVudE9wdCA9PiB7XHJcbiAgICBsZXQgdHlwZSA9IGV2ZW50T3B0WzBdO1xyXG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBldmVudE9wdFsxXTtcclxuXHJcbiAgICBjb25zdCBpc0N1c3RvbSA9IHR5cGUuY2hhckF0KDApID09PSBDVVNUT007XHJcbiAgICB0eXBlID0gaXNDdXN0b20gPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcclxuICAgIGNvbnN0IGlzT25jZSA9IHR5cGUuY2hhckF0KDApID09PSBPTkNFO1xyXG4gICAgdHlwZSA9IGlzT25jZSA/IHR5cGUuc2xpY2UoMSkgOiB0eXBlO1xyXG5cclxuICAgIGlmIChldmVudHNBcnJheSAmJiBpc01hdGNoRXZlbnRUeXBlKGV2ZW50VHlwZSwgdHlwZSkpIHtcclxuICAgICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudEFycmF5ID0+IHtcclxuICAgICAgICBjb25zdCBtZXRob2ROYW1lID0gZXZlbnRBcnJheVswXTtcclxuICAgICAgICBpZiAobWV0aG9kTmFtZSkge1xyXG4gICAgICAgICAgbGV0IGhhbmRsZXJDdHggPSB0aGlzLiR2bTtcclxuICAgICAgICAgIGlmIChoYW5kbGVyQ3R4LiRvcHRpb25zLmdlbmVyaWMpIHsgLy8gbXAtd2VpeGluLG1wLXRvdXRpYW8g5oq96LGh6IqC54K55qih5oufIHNjb3BlZCBzbG90c1xyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4ID0gZ2V0Q29udGV4dFZtKGhhbmRsZXJDdHgpIHx8IGhhbmRsZXJDdHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobWV0aG9kTmFtZSA9PT0gJyRlbWl0Jykge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ3R4LiRlbWl0LmFwcGx5KGhhbmRsZXJDdHgsXHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0V2ZW50QXJncyhcclxuICAgICAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBldmVudEFycmF5WzFdLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgICAgIGlzQ3VzdG9tLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kTmFtZVxyXG4gICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyQ3R4W21ldGhvZE5hbWVdO1xyXG4gICAgICAgICAgaWYgKCFpc0ZuKGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLiR2bS5tcFR5cGUgPT09ICdwYWdlJyA/ICdQYWdlJyA6ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5yb3V0ZSB8fCB0aGlzLmlzO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dHlwZX0gXCIke3BhdGh9XCIgZG9lcyBub3QgaGF2ZSBhIG1ldGhvZCBcIiR7bWV0aG9kTmFtZX1cImApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgIHRoaXMuJHZtLFxyXG4gICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgZXZlbnRBcnJheVsyXSxcclxuICAgICAgICAgICAgaXNDdXN0b20sXHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwYXJhbXMgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMgOiBbXTtcclxuICAgICAgICAgIC8vIOWPguaVsOWwvumDqOWinuWKoOWOn+Wni+S6i+S7tuWvueixoeeUqOS6juWkjeadguihqOi+vuW8j+WGheiOt+WPlumineWkluaVsOaNrlxyXG4gICAgICAgICAgaWYgKC89XFxzKlxcUytcXC5ldmVudFBhcmFtc1xccypcXHxcXHxcXHMqXFxTK1xcW1snXCJdZXZlbnQtcGFyYW1zWydcIl1cXF0vLnRlc3QoaGFuZGxlci50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuY29uY2F0KFssICwgLCAsICwgLCAsICwgLCAsIGV2ZW50XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXQucHVzaChoYW5kbGVyLmFwcGx5KGhhbmRsZXJDdHgsIHBhcmFtcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChcclxuICAgIGV2ZW50VHlwZSA9PT0gJ2lucHV0JyAmJlxyXG4gICAgcmV0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgdHlwZW9mIHJldFswXSAhPT0gJ3VuZGVmaW5lZCdcclxuICApIHtcclxuICAgIHJldHVybiByZXRbMF1cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEV2ZW50Q2hhbm5lbCB7XHJcbiAgY29uc3RydWN0b3IgKGlkLCBldmVudHMpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubGlzdGVuZXIgPSB7fTtcclxuICAgIHRoaXMuZW1pdENhY2hlID0ge307XHJcbiAgICBpZiAoZXZlbnRzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICB0aGlzLm9uKG5hbWUsIGV2ZW50c1tuYW1lXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdCAoZXZlbnROYW1lLCAuLi5hcmdzKSB7XHJcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoIWZucykge1xyXG4gICAgICByZXR1cm4gKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gfHwgKHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goYXJncylcclxuICAgIH1cclxuICAgIGZucy5mb3JFYWNoKG9wdCA9PiB7XHJcbiAgICAgIG9wdC5mbi5hcHBseShvcHQuZm4sIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gPSBmbnMuZmlsdGVyKG9wdCA9PiBvcHQudHlwZSAhPT0gJ29uY2UnKTtcclxuICB9XHJcblxyXG4gIG9uIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbicsIGZuKTtcclxuICAgIHRoaXMuX2NsZWFyQ2FjaGUoZXZlbnROYW1lKTtcclxuICB9XHJcblxyXG4gIG9uY2UgKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSwgJ29uY2UnLCBmbik7XHJcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBvZmYgKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIGNvbnN0IGZucyA9IHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIGlmICghZm5zKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm5zLmxlbmd0aDspIHtcclxuICAgICAgICBpZiAoZm5zW2ldLmZuID09PSBmbikge1xyXG4gICAgICAgICAgZm5zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIGktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NsZWFyQ2FjaGUgKGV2ZW50TmFtZSkge1xyXG4gICAgY29uc3QgY2FjaGVBcmdzID0gdGhpcy5lbWl0Q2FjaGVbZXZlbnROYW1lXTtcclxuICAgIGlmIChjYWNoZUFyZ3MpIHtcclxuICAgICAgZm9yICg7IGNhY2hlQXJncy5sZW5ndGggPiAwOykge1xyXG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBbZXZlbnROYW1lXS5jb25jYXQoY2FjaGVBcmdzLnNoaWZ0KCkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FkZExpc3RlbmVyIChldmVudE5hbWUsIHR5cGUsIGZuKSB7XHJcbiAgICAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdIHx8ICh0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV0gPSBbXSkpLnB1c2goe1xyXG4gICAgICBmbixcclxuICAgICAgdHlwZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBldmVudENoYW5uZWxzID0ge307XHJcblxyXG5mdW5jdGlvbiBnZXRFdmVudENoYW5uZWwgKGlkKSB7XHJcbiAgY29uc3QgZXZlbnRDaGFubmVsID0gZXZlbnRDaGFubmVsc1tpZF07XHJcbiAgZGVsZXRlIGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gIHJldHVybiBldmVudENoYW5uZWxcclxufVxyXG5cclxuY29uc3QgaG9va3MgPSBbXHJcbiAgJ29uU2hvdycsXHJcbiAgJ29uSGlkZScsXHJcbiAgJ29uRXJyb3InLFxyXG4gICdvblBhZ2VOb3RGb3VuZCcsXHJcbiAgJ29uVGhlbWVDaGFuZ2UnLFxyXG4gICdvblVuaGFuZGxlZFJlamVjdGlvbidcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRFdmVudENoYW5uZWwgKCkge1xyXG4gIFZ1ZS5wcm90b3R5cGUuZ2V0T3BlbmVyRXZlbnRDaGFubmVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fZXZlbnRDaGFubmVsX18pIHtcclxuICAgICAgdGhpcy5fX2V2ZW50Q2hhbm5lbF9fID0gbmV3IEV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX19ldmVudENoYW5uZWxfX1xyXG4gIH07XHJcbiAgY29uc3QgY2FsbEhvb2sgPSBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rO1xyXG4gIFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2sgPSBmdW5jdGlvbiAoaG9vaywgYXJncykge1xyXG4gICAgaWYgKGhvb2sgPT09ICdvbkxvYWQnICYmIGFyZ3MgJiYgYXJncy5fX2lkX18pIHtcclxuICAgICAgdGhpcy5fX2V2ZW50Q2hhbm5lbF9fID0gZ2V0RXZlbnRDaGFubmVsKGFyZ3MuX19pZF9fKTtcclxuICAgICAgZGVsZXRlIGFyZ3MuX19pZF9fO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhbGxIb29rLmNhbGwodGhpcywgaG9vaywgYXJncylcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2NvcGVkU2xvdHNQYXJhbXMgKCkge1xyXG4gIGNvbnN0IGNlbnRlciA9IHt9O1xyXG4gIGNvbnN0IHBhcmVudHMgPSB7fTtcclxuXHJcbiAgZnVuY3Rpb24gY3VycmVudElkIChmbikge1xyXG4gICAgY29uc3QgdnVlSWRzID0gdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGEudnVlSWQ7XHJcbiAgICBpZiAodnVlSWRzKSB7XHJcbiAgICAgIGNvbnN0IHZ1ZUlkID0gdnVlSWRzLnNwbGl0KCcsJylbMF07XHJcbiAgICAgIGZuKHZ1ZUlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUuJGhhc1NTUCA9IGZ1bmN0aW9uICh2dWVJZCkge1xyXG4gICAgY29uc3Qgc2xvdCA9IGNlbnRlclt2dWVJZF07XHJcbiAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgcGFyZW50c1t2dWVJZF0gPSB0aGlzO1xyXG4gICAgICB0aGlzLiRvbignaG9vazpkZXN0cm95ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHBhcmVudHNbdnVlSWRdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbG90XHJcbiAgfTtcclxuXHJcbiAgVnVlLnByb3RvdHlwZS4kZ2V0U1NQID0gZnVuY3Rpb24gKHZ1ZUlkLCBuYW1lLCBuZWVkQWxsKSB7XHJcbiAgICBjb25zdCBzbG90ID0gY2VudGVyW3Z1ZUlkXTtcclxuICAgIGlmIChzbG90KSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHNsb3RbbmFtZV0gfHwgW107XHJcbiAgICAgIGlmIChuZWVkQWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYXJhbXNbMF1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRzZXRTU1AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBjdXJyZW50SWQuY2FsbCh0aGlzLCB2dWVJZCA9PiB7XHJcbiAgICAgIGNvbnN0IHNsb3QgPSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBzbG90W25hbWVdID0gc2xvdFtuYW1lXSB8fCBbXTtcclxuICAgICAgcGFyYW1zLnB1c2godmFsdWUpO1xyXG4gICAgICBpbmRleCA9IHBhcmFtcy5sZW5ndGggLSAxO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5kZXhcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRpbml0U1NQID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3VycmVudElkLmNhbGwodGhpcywgdnVlSWQgPT4ge1xyXG4gICAgICBjZW50ZXJbdnVlSWRdID0ge307XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBWdWUucHJvdG90eXBlLiRjYWxsU1NQID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3VycmVudElkLmNhbGwodGhpcywgdnVlSWQgPT4ge1xyXG4gICAgICBpZiAocGFyZW50c1t2dWVJZF0pIHtcclxuICAgICAgICBwYXJlbnRzW3Z1ZUlkXS4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgVnVlLm1peGluKHtcclxuICAgIGRlc3Ryb3llZCAoKSB7XHJcbiAgICAgIGNvbnN0IHByb3BzRGF0YSA9IHRoaXMuJG9wdGlvbnMucHJvcHNEYXRhO1xyXG4gICAgICBjb25zdCB2dWVJZCA9IHByb3BzRGF0YSAmJiBwcm9wc0RhdGEudnVlSWQ7XHJcbiAgICAgIGlmICh2dWVJZCkge1xyXG4gICAgICAgIGRlbGV0ZSBjZW50ZXJbdnVlSWRdO1xyXG4gICAgICAgIGRlbGV0ZSBwYXJlbnRzW3Z1ZUlkXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VBcHAgKHZtLCB7XHJcbiAgbW9ja3MsXHJcbiAgaW5pdFJlZnNcclxufSkge1xyXG4gIGluaXRFdmVudENoYW5uZWwoKTtcclxuICB7XHJcbiAgICBpbml0U2NvcGVkU2xvdHNQYXJhbXMoKTtcclxuICB9XHJcbiAgaWYgKHZtLiRvcHRpb25zLnN0b3JlKSB7XHJcbiAgICBWdWUucHJvdG90eXBlLiRzdG9yZSA9IHZtLiRvcHRpb25zLnN0b3JlO1xyXG4gIH1cclxuICB1bmlJZE1peGluKFZ1ZSk7XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUubXBIb3N0ID0gXCJtcC14aHNcIjtcclxuXHJcbiAgVnVlLm1peGluKHtcclxuICAgIGJlZm9yZUNyZWF0ZSAoKSB7XHJcbiAgICAgIGlmICghdGhpcy4kb3B0aW9ucy5tcFR5cGUpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tcFR5cGUgPSB0aGlzLiRvcHRpb25zLm1wVHlwZTtcclxuXHJcbiAgICAgIHRoaXMuJG1wID0ge1xyXG4gICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIFt0aGlzLm1wVHlwZV06IHRoaXMuJG9wdGlvbnMubXBJbnN0YW5jZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy4kc2NvcGUgPSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XHJcblxyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2U7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAoIHRoaXMubXBUeXBlID09PSAncGFnZScpICYmXHJcbiAgICAgICAgdHlwZW9mIGdldEFwcCA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICApIHsgLy8gaGFjayB2dWUtaTE4blxyXG4gICAgICAgIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG4gICAgICAgIGlmIChhcHAuJHZtICYmIGFwcC4kdm0uJGkxOG4pIHtcclxuICAgICAgICAgIHRoaXMuX2kxOG4gPSBhcHAuJHZtLiRpMThuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5tcFR5cGUgIT09ICdhcHAnKSB7XHJcbiAgICAgICAgaW5pdFJlZnModGhpcyk7XHJcbiAgICAgICAgaW5pdE1vY2tzKHRoaXMsIG1vY2tzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhcHBPcHRpb25zID0ge1xyXG4gICAgb25MYXVuY2ggKGFyZ3MpIHtcclxuICAgICAgaWYgKHRoaXMuJHZtKSB7IC8vIOW3sue7j+WIneWni+WMlui/h+S6hu+8jOS4u+imgeaYr+S4uuS6hueZvuW6pu+8jOeZvuW6piBvblNob3cg5ZyoIG9uTGF1bmNoIOS5i+WJjVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiR2bSA9IHZtO1xyXG5cclxuICAgICAgdGhpcy4kdm0uJG1wID0ge1xyXG4gICAgICAgIGFwcDogdGhpc1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy4kdm0uJHNjb3BlID0gdGhpcztcclxuICAgICAgLy8gdm0g5LiK5Lmf5oyC6L29IGdsb2JhbERhdGFcclxuICAgICAgdGhpcy4kdm0uZ2xvYmFsRGF0YSA9IHRoaXMuZ2xvYmFsRGF0YTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcsIGFyZ3MpO1xyXG5cclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uTGF1bmNoJywgYXJncyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8g5YW85a655pen54mI5pysIGdsb2JhbERhdGFcclxuICBhcHBPcHRpb25zLmdsb2JhbERhdGEgPSB2bS4kb3B0aW9ucy5nbG9iYWxEYXRhIHx8IHt9O1xyXG4gIC8vIOWwhiBtZXRob2RzIOS4reeahOaWueazleaMguWcqCBnZXRBcHAoKSDkuK1cclxuICBjb25zdCBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcclxuICBpZiAobWV0aG9kcykge1xyXG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgYXBwT3B0aW9uc1tuYW1lXSA9IG1ldGhvZHNbbmFtZV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRBcHBMb2NhbGUoVnVlLCB2bSwgbm9ybWFsaXplTG9jYWxlKHhocy5nZXRTeXN0ZW1JbmZvU3luYygpLmxhbmd1YWdlKSB8fCBMT0NBTEVfRU4pO1xyXG5cclxuICBpbml0SG9va3MoYXBwT3B0aW9ucywgaG9va3MpO1xyXG4gIGluaXRVbmtub3duSG9va3MoYXBwT3B0aW9ucywgdm0uJG9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gYXBwT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFwcCAodm0pIHtcclxuICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XHJcbiAgICBtb2NrcyxcclxuICAgIGluaXRSZWZzXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VBcHAkMSAodm0pIHtcclxuICByZXR1cm4gcGFyc2VBcHAodm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcCAodm0pIHtcclxuICBBcHAocGFyc2VBcHAkMSh2bSkpO1xyXG4gIHJldHVybiB2bVxyXG59XHJcblxyXG5jb25zdCBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xyXG5jb25zdCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBjID0+ICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XHJcbmNvbnN0IGNvbW1hUkUgPSAvJTJDL2c7XHJcblxyXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XHJcbi8vIC0gZXNjYXBlcyBbIScoKSpdXHJcbi8vIC0gcHJlc2VydmUgY29tbWFzXHJcbmNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxyXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxyXG4gIC5yZXBsYWNlKGNvbW1hUkUsICcsJyk7XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqLCBlbmNvZGVTdHIgPSBlbmNvZGUpIHtcclxuICBjb25zdCByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChrZXkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gb2JqW2tleV07XHJcblxyXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGVuY29kZVN0cihrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgdmFsLmZvckVhY2godmFsMiA9PiB7XHJcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVTdHIoa2V5KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbmNvZGVTdHIoa2V5KSArICc9JyArIGVuY29kZVN0cih2YWwpXHJcbiAgfSkuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKS5qb2luKCcmJykgOiBudWxsO1xyXG4gIHJldHVybiByZXMgPyBgPyR7cmVzfWAgOiAnJ1xyXG59XHJcblxyXG5jb25zdCBpc0NvbXBvbmVudDIgPSB4aHMuY2FuSVVzZSgnY29tcG9uZW50MicpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNwZWNpYWxNZXRob2RzIChtcEluc3RhbmNlKSB7XHJcbiAgaWYgKCFtcEluc3RhbmNlLiR2bSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGxldCBwYXRoID0gbXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlO1xyXG4gIGlmICghcGF0aCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmIChwYXRoLmluZGV4T2YoJy8nKSA9PT0gMCkge1xyXG4gICAgcGF0aCA9IHBhdGguc3Vic3RyKDEpO1xyXG4gIH1cclxuICBjb25zdCBzcGVjaWFsTWV0aG9kcyA9IHhocy5zcGVjaWFsTWV0aG9kcyAmJiB4aHMuc3BlY2lhbE1ldGhvZHNbcGF0aF07XHJcbiAgaWYgKHNwZWNpYWxNZXRob2RzKSB7XHJcbiAgICBzcGVjaWFsTWV0aG9kcy5mb3JFYWNoKG1ldGhvZCA9PiB7XHJcbiAgICAgIGlmIChpc0ZuKG1wSW5zdGFuY2UuJHZtW21ldGhvZF0pKSB7XHJcbiAgICAgICAgbXBJbnN0YW5jZVttZXRob2RdID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICBpZiAoaGFzT3duKGV2ZW50LCAnbWFya2VySWQnKSkge1xyXG4gICAgICAgICAgICBldmVudC5kZXRhaWwgPSB0eXBlb2YgZXZlbnQuZGV0YWlsID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xyXG4gICAgICAgICAgICBldmVudC5kZXRhaWwubWFya2VySWQgPSBldmVudC5tYXJrZXJJZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRPRE8gbm9ybWFsaXplRXZlbnRcclxuICAgICAgICAgIG1wSW5zdGFuY2UuJHZtW21ldGhvZF0oZXZlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlV3JhcCA9IGZ1bmN0aW9uIChtcCwgZGVzdG9yeSkge1xyXG4gIGNvbnN0IHZ1ZUlkID0gbXAucHJvcHMudnVlSWQ7XHJcbiAgY29uc3QgbGlzdCA9IChtcC5wcm9wc1snZGF0YS1ldmVudC1saXN0J10gfHwgJycpLnNwbGl0KCcsJyk7XHJcbiAgbGlzdC5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBgJHtldmVudE5hbWV9JHt2dWVJZH1gO1xyXG4gICAgaWYgKGRlc3RvcnkpIHtcclxuICAgICAgZGVsZXRlIHRoaXNba2V5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE8gcmVtb3ZlIGhhbmRsZVJlZlxyXG4gICAgICB0aGlzW2tleV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbXAucHJvcHNbZXZlbnROYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaG9va3MkMSA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25VbmxvYWQnXHJcbl07XHJcblxyXG5ob29rcyQxLnB1c2goLi4uUEFHRV9FVkVOVF9IT09LUyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAgY29uc3QgW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc10gPSBpbml0VnVlQ29tcG9uZW50KFZ1ZSwgdnVlUGFnZU9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBwYWdlT3B0aW9ucyA9IHtcclxuICAgIG1peGluczogaW5pdEJlaGF2aW9ycyh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpLFxyXG4gICAgZGF0YTogaW5pdERhdGEodnVlT3B0aW9ucywgVnVlLnByb3RvdHlwZSksXHJcbiAgICBvbkxvYWQgKHF1ZXJ5KSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgdGhpcy5fX3F1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgIHRoaXMuX19vcHRpb25zID0ge1xyXG4gICAgICAgIG1wVHlwZTogJ3BhZ2UnLFxyXG4gICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgb25SZWFkeSAoKSB7XHJcbiAgICAgIC8vIGluaXRDaGlsZFZ1ZXModGhpcylcclxuICAgICAgLy8g5Yid5aeL5YyWIHZ1ZSDlrp7kvotcclxuICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KHRoaXMuX19vcHRpb25zKTtcclxuXHJcbiAgICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG5cclxuICAgICAgaW5pdFNwZWNpYWxNZXRob2RzKHRoaXMpO1xyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuXHJcbiAgICAgIC8vIG1vdW50ZWQgPT4gb25Mb2FkXHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX19xdWVyeTtcclxuICAgICAgdGhpcy4kdm0uJG1wLnF1ZXJ5ID0gdGhpcy5fX3F1ZXJ5OyAvLyDlhbzlrrkgbXB2dWVcclxuICAgICAgY29uc3QgY29weVF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fX3F1ZXJ5KTtcclxuICAgICAgZGVsZXRlIGNvcHlRdWVyeS5fX2lkX187XHJcbiAgICAgIHRoaXMuJHBhZ2UgPSB7XHJcbiAgICAgICAgZnVsbFBhdGg6ICcvJyArIHRoaXMucm91dGUgKyBzdHJpbmdpZnlRdWVyeShjb3B5UXVlcnkpXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25Mb2FkJywgdGhpcy5fX3F1ZXJ5KTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uU2hvdycpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblVubG9hZCAoKSB7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvblVubG9hZCcpO1xyXG4gICAgICB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIC8vIF9fcjogaGFuZGxlUmVmLFxyXG4gICAgX19lOiBoYW5kbGVFdmVudCxcclxuICAgIF9fbDogaGFuZGxlTGluayxcclxuICAgIF9fdzogaGFuZGxlV3JhcCxcclxuICAgIHRyaWdnZXJFdmVudDogZnVuY3Rpb24gbm9vcCAoKSB7fVxyXG4gIH07XHJcblxyXG4gIGluaXRIb29rcyhwYWdlT3B0aW9ucywgaG9va3MkMSwgdnVlT3B0aW9ucyk7XHJcbiAgaW5pdFVua25vd25Ib29rcyhwYWdlT3B0aW9ucywgdnVlT3B0aW9ucywgWydvblJlYWR5J10pO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheSh2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzKSkge1xyXG4gICAgdnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcy5mb3JFYWNoKGNhbGxNZXRob2QgPT4ge1xyXG4gICAgICBwYWdlT3B0aW9uc1tjYWxsTWV0aG9kXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdlICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBQYWdlKHBhcnNlUGFnZSh2dWVQYWdlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VDb21wb25lbnQgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIHtcclxuICBpc1BhZ2UsXHJcbiAgaW5pdFJlbGF0aW9uXHJcbn0gPSB7fSwgbmVlZFZ1ZU9wdGlvbnMpIHtcclxuICBjb25zdCBbVnVlQ29tcG9uZW50LCB2dWVPcHRpb25zXSA9IGluaXRWdWVDb21wb25lbnQoVnVlLCB2dWVDb21wb25lbnRPcHRpb25zKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICAvLyBzdHlsZUlzb2xhdGlvbjogJ2FwcGx5LXNoYXJlZCcsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZSxcclxuICAgIC4uLih2dWVPcHRpb25zLm9wdGlvbnMgfHwge30pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50T3B0aW9ucyA9IHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBkYXRhOiBpbml0RGF0YSh2dWVPcHRpb25zLCBWdWUucHJvdG90eXBlKSxcclxuICAgIGJlaGF2aW9yczogaW5pdEJlaGF2aW9ycyh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpLFxyXG4gICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlT3B0aW9ucy5wcm9wcywgZmFsc2UsIHZ1ZU9wdGlvbnMuX19maWxlKSxcclxuICAgIGxpZmV0aW1lczoge1xyXG4gICAgICBhdHRhY2hlZCAoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIG1wVHlwZTogaXNQYWdlLmNhbGwodGhpcykgPyAncGFnZScgOiAnY29tcG9uZW50JyxcclxuICAgICAgICAgIG1wSW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpbml0VnVlSWRzKHByb3BlcnRpZXMudnVlSWQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDlpITnkIbniLblrZDlhbPns7tcclxuICAgICAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICB2dWVQaWQ6IHRoaXMuXyR2dWVQaWQsXHJcbiAgICAgICAgICB2dWVPcHRpb25zOiBvcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMliB2dWUg5a6e5L6LXHJcbiAgICAgICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyDlpITnkIYkc2xvdHMsJHNjb3BlZFNsb3Rz77yI5pqC5LiN5pSv5oyB5Yqo5oCB5Y+Y5YyWJHNsb3Rz77yJXHJcbiAgICAgICAgaW5pdFNsb3RzKHRoaXMuJHZtLCBwcm9wZXJ0aWVzLnZ1ZVNsb3RzKTtcclxuXHJcbiAgICAgICAgLy8g6Kem5Y+R6aaW5qyhIHNldERhdGFcclxuICAgICAgICB0aGlzLiR2bS4kbW91bnQoKTtcclxuICAgICAgfSxcclxuICAgICAgcmVhZHkgKCkge1xyXG4gICAgICAgIC8vIOW9k+e7hOS7tiBwcm9wcyDpu5jorqTlgLzkuLogdHJ1Ze+8jOWIneWni+WMluaXtuS8oOWFpSBmYWxzZSDkvJrlr7zoh7QgY3JlYXRlZCxyZWFkeSDop6blj5EsIOS9hiBhdHRhY2hlZCDkuI3op6blj5FcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMud2VpeGluLnFxLmNvbS9jb21tdW5pdHkvZGV2ZWxvcC9kb2MvMDAwNjZhZTI4NDRjYzBmOGViODgzZTJhNTU3ODAwXHJcbiAgICAgICAgaWYgKHRoaXMuJHZtKSB7XHJcbiAgICAgICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdtb3VudGVkJyk7XHJcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZGV0YWNoZWQgKCkge1xyXG4gICAgICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLiRkZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgIHNob3cgKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlU2hvdycsIGFyZ3MpO1xyXG4gICAgICB9LFxyXG4gICAgICBoaWRlICgpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlSGlkZScpO1xyXG4gICAgICB9LFxyXG4gICAgICByZXNpemUgKHNpemUpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25QYWdlUmVzaXplJywgc2l6ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIF9fbDogaGFuZGxlTGluayxcclxuICAgICAgX19lOiBoYW5kbGVFdmVudFxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gZXh0ZXJuYWxDbGFzc2VzXHJcbiAgaWYgKHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzKSB7XHJcbiAgICBjb21wb25lbnRPcHRpb25zLmV4dGVybmFsQ2xhc3NlcyA9IHZ1ZU9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlT3B0aW9ucy53eHNDYWxsTWV0aG9kcykpIHtcclxuICAgIHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMuZm9yRWFjaChjYWxsTWV0aG9kID0+IHtcclxuICAgICAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzW2NhbGxNZXRob2RdID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kdm1bY2FsbE1ldGhvZF0oYXJncylcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5lZWRWdWVPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gW2NvbXBvbmVudE9wdGlvbnMsIHZ1ZU9wdGlvbnMsIFZ1ZUNvbXBvbmVudF1cclxuICB9XHJcbiAgaWYgKGlzUGFnZSkge1xyXG4gICAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnNcclxuICB9XHJcbiAgcmV0dXJuIFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50ICh2dWVDb21wb25lbnRPcHRpb25zLCBuZWVkVnVlT3B0aW9ucykge1xyXG4gIHJldHVybiBwYXJzZUJhc2VDb21wb25lbnQodnVlQ29tcG9uZW50T3B0aW9ucywge1xyXG4gICAgaXNQYWdlLFxyXG4gICAgaW5pdFJlbGF0aW9uXHJcbiAgfSwgbmVlZFZ1ZU9wdGlvbnMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjkuo7lu7bov5/osIPnlKggc2V0RGF0YVxyXG4gKiDlnKggc2V0RGF0YSDnnJ/lrp7osIPnlKjnmoTml7bmnLrpnIDmiafooYwgZml4U2V0RGF0YUVuZFxyXG4gKiBAcGFyYW0geyp9IG1wSW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIGZpeFNldERhdGFTdGFydCAobXBJbnN0YW5jZSkge1xyXG4gIGNvbnN0IHNldERhdGEgPSBtcEluc3RhbmNlLnNldERhdGE7XHJcbiAgY29uc3Qgc2V0RGF0YUFyZ3MgPSBbXTtcclxuICBtcEluc3RhbmNlLnNldERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXREYXRhQXJncy5wdXNoKGFyZ3VtZW50cyk7XHJcbiAgfTtcclxuICBtcEluc3RhbmNlLl9fZml4SW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldERhdGEgPSBzZXREYXRhO1xyXG4gICAgY29uc3QgZm4gPSAoKSA9PiB7XHJcbiAgICAgIHNldERhdGFBcmdzLmZvckVhY2goYXJncyA9PiB7XHJcbiAgICAgICAgc2V0RGF0YS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHNldERhdGFBcmdzLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5ncm91cFNldERhdGEpIHtcclxuICAgICAgICB0aGlzLmdyb3VwU2V0RGF0YShmbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuLyoqXHJcbiAqIOaBouWkjeecn+WunueahCBzZXREYXRhIOaWueazlVxyXG4gKiBAcGFyYW0geyp9IG1wSW5zdGFuY2VcclxuICovXHJcbmZ1bmN0aW9uIGZpeFNldERhdGFFbmQgKG1wSW5zdGFuY2UpIHtcclxuICBpZiAobXBJbnN0YW5jZS5fX2ZpeEluaXREYXRhKSB7XHJcbiAgICBtcEluc3RhbmNlLl9fZml4SW5pdERhdGEoKTtcclxuICAgIGRlbGV0ZSBtcEluc3RhbmNlLl9fZml4SW5pdERhdGE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbXBvcnQgcGFyc2VCYXNlQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21wLXdlaXhpbi9ydW50aW1lL3dyYXBwZXIvY29tcG9uZW50LXBhcnNlcidcclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ29tcG9uZW50JDEgKHZ1ZUNvbXBvbmVudE9wdGlvbnMsIG5lZWRWdWVPcHRpb25zKSB7XHJcbiAgY29uc3QgW2NvbXBvbmVudE9wdGlvbnMsIHZ1ZU9wdGlvbnNdID0gcGFyc2VDb21wb25lbnQodnVlQ29tcG9uZW50T3B0aW9ucywgdHJ1ZSk7XHJcbiAgY29uc3Qgb2xkQXR0YWNoZWQgPSBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5hdHRhY2hlZDtcclxuICBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5hdHRhY2hlZCA9IGZ1bmN0aW9uIGF0dGFjaGVkICgpIHtcclxuICAgIC8vIOaaguS4jeWMuuWIhueJiOacrFxyXG4gICAgaWYgKGlzUGFnZS5jYWxsKHRoaXMpKSB7XHJcbiAgICAgIGZpeFNldERhdGFTdGFydCh0aGlzKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZml4U2V0RGF0YUVuZCh0aGlzKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgICBvbGRBdHRhY2hlZC5jYWxsKHRoaXMpO1xyXG4gIH07XHJcbiAgcmV0dXJuIG5lZWRWdWVPcHRpb25zID8gW2NvbXBvbmVudE9wdGlvbnMsIHZ1ZU9wdGlvbnNdIDogY29tcG9uZW50T3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKHZ1ZU9wdGlvbnMpIHtcclxuICB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50KHBhcnNlQ29tcG9uZW50JDEodnVlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdWJwYWNrYWdlQXBwICh2bSkge1xyXG4gIGNvbnN0IGFwcE9wdGlvbnMgPSBwYXJzZUFwcCQxKHZtKTtcclxuICBjb25zdCBhcHAgPSBnZXRBcHAoe1xyXG4gICAgYWxsb3dEZWZhdWx0OiB0cnVlXHJcbiAgfSk7XHJcbiAgdm0uJHNjb3BlID0gYXBwO1xyXG4gIGNvbnN0IGdsb2JhbERhdGEgPSBhcHAuZ2xvYmFsRGF0YTtcclxuICBpZiAoZ2xvYmFsRGF0YSkge1xyXG4gICAgT2JqZWN0LmtleXMoYXBwT3B0aW9ucy5nbG9iYWxEYXRhKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBpZiAoIWhhc093bihnbG9iYWxEYXRhLCBuYW1lKSkge1xyXG4gICAgICAgIGdsb2JhbERhdGFbbmFtZV0gPSBhcHBPcHRpb25zLmdsb2JhbERhdGFbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBPYmplY3Qua2V5cyhhcHBPcHRpb25zKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKCFoYXNPd24oYXBwLCBuYW1lKSkge1xyXG4gICAgICBhcHBbbmFtZV0gPSBhcHBPcHRpb25zW25hbWVdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25TaG93KSAmJiB4aHMub25BcHBTaG93KSB7XHJcbiAgICB4aHMub25BcHBTaG93KCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHZtLl9fY2FsbF9ob29rKCdvblNob3cnLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uSGlkZSkgJiYgeGhzLm9uQXBwSGlkZSkge1xyXG4gICAgeGhzLm9uQXBwSGlkZSgoLi4uYXJncykgPT4ge1xyXG4gICAgICB2bS5fX2NhbGxfaG9vaygnb25IaWRlJywgYXJncyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vbkxhdW5jaCkpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSB4aHMuZ2V0TGF1bmNoT3B0aW9uc1N5bmMgJiYgeGhzLmdldExhdW5jaE9wdGlvbnNTeW5jKCk7XHJcbiAgICB2bS5fX2NhbGxfaG9vaygnb25MYXVuY2gnLCBhcmdzKTtcclxuICB9XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsdWdpbiAodm0pIHtcclxuICBjb25zdCBhcHBPcHRpb25zID0gcGFyc2VBcHAkMSh2bSk7XHJcbiAgaWYgKGlzRm4oYXBwT3B0aW9ucy5vblNob3cpICYmIHhocy5vbkFwcFNob3cpIHtcclxuICAgIHhocy5vbkFwcFNob3coKC4uLmFyZ3MpID0+IHtcclxuICAgICAgdm0uX19jYWxsX2hvb2soJ29uU2hvdycsIGFyZ3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChpc0ZuKGFwcE9wdGlvbnMub25IaWRlKSAmJiB4aHMub25BcHBIaWRlKSB7XHJcbiAgICB4aHMub25BcHBIaWRlKCguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHZtLl9fY2FsbF9ob29rKCdvbkhpZGUnLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoaXNGbihhcHBPcHRpb25zLm9uTGF1bmNoKSkge1xyXG4gICAgY29uc3QgYXJncyA9IHhocy5nZXRMYXVuY2hPcHRpb25zU3luYyAmJiB4aHMuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgIHZtLl9fY2FsbF9ob29rKCdvbkxhdW5jaCcsIGFyZ3MpO1xyXG4gIH1cclxuICByZXR1cm4gdm1cclxufVxyXG5cclxudG9kb3MuZm9yRWFjaCh0b2RvQXBpID0+IHtcclxuICBwcm90b2NvbHNbdG9kb0FwaV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5jYW5JVXNlcy5mb3JFYWNoKGNhbklVc2VBcGkgPT4ge1xyXG4gIGNvbnN0IGFwaU5hbWUgPSBwcm90b2NvbHNbY2FuSVVzZUFwaV0gJiYgcHJvdG9jb2xzW2NhbklVc2VBcGldLm5hbWUgPyBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZVxyXG4gICAgOiBjYW5JVXNlQXBpO1xyXG4gIGlmICgheGhzLmNhbklVc2UoYXBpTmFtZSkpIHtcclxuICAgIHByb3RvY29sc1tjYW5JVXNlQXBpXSA9IGZhbHNlO1xyXG4gIH1cclxufSk7XHJcblxyXG5sZXQgdW5pID0ge307XHJcblxyXG5pZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJyAmJiBcIm1wLXhoc1wiICE9PSAnYXBwLXBsdXMnKSB7XHJcbiAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICBnZXQgKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICBpZiAoaGFzT3duKHRhcmdldCwgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJhc2VBcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gYmFzZUFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhcGlbbmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGFwaVtuYW1lXSlcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKGV4dHJhQXBpW25hbWVdKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG5hbWUsIGV4dHJhQXBpW25hbWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9kb0FwaXNbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgdG9kb0FwaXNbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudEFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBldmVudEFwaVtuYW1lXVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB4aHNbbmFtZV0pKVxyXG4gICAgfSxcclxuICAgIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9KTtcclxufSBlbHNlIHtcclxuICBPYmplY3Qua2V5cyhiYXNlQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gYmFzZUFwaVtuYW1lXTtcclxuICB9KTtcclxuXHJcbiAge1xyXG4gICAgT2JqZWN0LmtleXModG9kb0FwaXMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5rZXlzKGV4dHJhQXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgZXh0cmFBcGlbbmFtZV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBPYmplY3Qua2V5cyhldmVudEFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IGV2ZW50QXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyhhcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKTtcclxuICB9KTtcclxuXHJcbiAgT2JqZWN0LmtleXMoeGhzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgaWYgKGhhc093bih4aHMsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHhoc1tuYW1lXSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG54aHMuY3JlYXRlQXBwID0gY3JlYXRlQXBwO1xyXG54aHMuY3JlYXRlUGFnZSA9IGNyZWF0ZVBhZ2U7XHJcbnhocy5jcmVhdGVDb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQ7XHJcbnhocy5jcmVhdGVTdWJwYWNrYWdlQXBwID0gY3JlYXRlU3VicGFja2FnZUFwcDtcclxueGhzLmNyZWF0ZVBsdWdpbiA9IGNyZWF0ZVBsdWdpbjtcclxuXHJcbnZhciB1bmkkMSA9IHVuaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVuaSQxO1xyXG5leHBvcnQgeyBjcmVhdGVBcHAsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlUGFnZSwgY3JlYXRlUGx1Z2luLCBjcmVhdGVTdWJwYWNrYWdlQXBwIH07XHJcbiIsInVuaS5hZGRJbnRlcmNlcHRvcih7XG4gIHJldHVyblZhbHVlIChyZXMpIHtcbiAgICBpZiAoISghIXJlcyAmJiAodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVzID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcy50aGVuKChyZXMpID0+IHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pKTtcbiAgICB9KTtcbiAgfSxcbn0pOyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBfdHlwZW9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIHI7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRoSG9sZXMgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmV4cG9ydCB7IF9hcnJheVdpdGhvdXRIb2xlcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxuZXhwb3J0IHsgX2NsYXNzQ2FsbENoZWNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5mdW5jdGlvbiBfY29uc3RydWN0KHQsIGUsIHIpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgdmFyIG8gPSBbbnVsbF07XG4gIG8ucHVzaC5hcHBseShvLCBlKTtcbiAgdmFyIHAgPSBuZXcgKHQuYmluZC5hcHBseSh0LCBvKSkoKTtcbiAgcmV0dXJuIHIgJiYgc2V0UHJvdG90eXBlT2YocCwgci5wcm90b3R5cGUpLCBwO1xufVxuZXhwb3J0IHsgX2NvbnN0cnVjdCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gIH0gY2F0Y2ggKHQpIHt9XG4gIHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgcmV0dXJuICEhdDtcbiAgfSkoKTtcbn1cbmV4cG9ydCB7IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgdmFyIHQgPSBudWxsID09IHIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIHJbU3ltYm9sLml0ZXJhdG9yXSB8fCByW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gdCkge1xuICAgIHZhciBlLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICB1LFxuICAgICAgYSA9IFtdLFxuICAgICAgZiA9ICEwLFxuICAgICAgbyA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoaSA9ICh0ID0gdC5jYWxsKHIpKS5uZXh0LCAwID09PSBsKSB7XG4gICAgICAgIGlmIChPYmplY3QodCkgIT09IHQpIHJldHVybjtcbiAgICAgICAgZiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKGYgPSAoZSA9IGkuY2FsbCh0KSkuZG9uZSkgJiYgKGEucHVzaChlLnZhbHVlKSwgYS5sZW5ndGggIT09IGwpOyBmID0gITApO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIG8gPSAhMCwgbiA9IHI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghZiAmJiBudWxsICE9IHRbXCJyZXR1cm5cIl0gJiYgKHUgPSB0W1wicmV0dXJuXCJdKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheUxpbWl0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlUmVzdCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVNwcmVhZCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKHQsIGUpIHtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiAodCwgZSkge1xuICAgIHJldHVybiB0Ll9fcHJvdG9fXyA9IGUsIHQ7XG4gIH0sIF9zZXRQcm90b3R5cGVPZih0LCBlKTtcbn1cbmV4cG9ydCB7IF9zZXRQcm90b3R5cGVPZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KHIsIGUpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGUpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGUpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZXhwb3J0IHsgX3NsaWNlZFRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5KHIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5leHBvcnQgeyBfdG9Db25zdW1hYmxlQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmV4cG9ydCB7IHRvUHJpbWl0aXZlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5leHBvcnQgeyB0b1Byb3BlcnR5S2V5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBhcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5leHBvcnQgeyBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyJdLCJuYW1lcyI6WyJpc09iamVjdCIsInZhbCIsIl90eXBlb2YiLCJkZWZhdWx0RGVsaW1pdGVycyIsIkJhc2VGb3JtYXR0ZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FjaGVzIiwiT2JqZWN0IiwiY3JlYXRlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpbnRlcnBvbGF0ZSIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJkZWxpbWl0ZXJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidG9rZW5zIiwicGFyc2UiLCJjb21waWxlIiwiUkVfVE9LRU5fTElTVF9WQUxVRSIsIlJFX1RPS0VOX05BTUVEX1ZBTFVFIiwiZm9ybWF0IiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGFydERlbGltaXRlciIsImVuZERlbGltaXRlciIsInBvc2l0aW9uIiwidGV4dCIsImNoYXIiLCJwdXNoIiwidHlwZSIsInN1YiIsImlzQ2xvc2VkIiwidGVzdCIsImNvbXBpbGVkIiwiaW5kZXgiLCJtb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwidG9rZW4iLCJwYXJzZUludCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbnNvbGUiLCJ3YXJuIiwiY29uY2F0IiwiTE9DQUxFX1pIX0hBTlMiLCJMT0NBTEVfWkhfSEFOVCIsIkxPQ0FMRV9FTiIsIkxPQ0FMRV9GUiIsIkxPQ0FMRV9FUyIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duIiwiY2FsbCIsImRlZmF1bHRGb3JtYXR0ZXIiLCJpbmNsdWRlIiwic3RyIiwicGFydHMiLCJmaW5kIiwicGFydCIsImluZGV4T2YiLCJzdGFydHNXaXRoIiwibm9ybWFsaXplTG9jYWxlIiwibG9jYWxlIiwibWVzc2FnZXMiLCJ0cmltIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibG9jYWxlcyIsImtleXMiLCJsYW5nIiwiSTE4biIsIl9yZWYzIiwiZmFsbGJhY2tMb2NhbGUiLCJ3YXRjaGVyIiwiZm9ybWF0ZXIiLCJ3YXRjaGVycyIsInNldExvY2FsZSIsIndhdGNoTG9jYWxlIiwiX3RoaXMiLCJvbGRMb2NhbGUiLCJmb3JFYWNoIiwiZ2V0TG9jYWxlIiwiZm4iLCJfdGhpczIiLCJzcGxpY2UiLCJhZGQiLCJvdmVycmlkZSIsImN1ck1lc3NhZ2VzIiwiYXNzaWduIiwiZiIsImpvaW4iLCJ0Iiwid2F0Y2hBcHBMb2NhbGUiLCJhcHBWbSIsImkxOG4iLCIkd2F0Y2hMb2NhbGUiLCJuZXdMb2NhbGUiLCIkd2F0Y2giLCIkbG9jYWxlIiwiZ2V0RGVmYXVsdExvY2FsZSIsInVuaSIsImdsb2JhbCIsImluaXRWdWVJMThuIiwiX3JlZjQiLCJfX3VuaUNvbmZpZyIsImdldEFwcCIsImlzV2F0Y2hlZEFwcExvY2FsZSIsIiR2bSIsIndhdGNoIiwiaXNTdHJpbmciLCJoYXNJMThuSnNvbiIsImpzb25PYmoiLCJ3YWxrSnNvbk9iaiIsImlzSTE4blN0ciIsInBhcnNlSTE4bkpzb24iLCJjb21waWxlU3RyIiwiY29tcGlsZUkxOG5Kc29uU3RyIiwianNvblN0ciIsIl9yZWY1IiwibG9jYWxlVmFsdWVzIiwibmFtZSIsInVuc2hpZnQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29tcGlsZUpzb25PYmoiLCJlIiwiY29tcGlsZVZhbHVlIiwidmFsdWVMb2NhbGVzIiwibG9jYWxWYWx1ZSIsIndhbGsiLCJpIiwicmVzb2x2ZUxvY2FsZSIsInJlc29sdmVMb2NhbGVDaGFpbiIsImNoYWluIiwic3BsaXQiLCJwb3AiLCJGb3JtYXR0ZXIiLCJWdWUiLCJyZWFsQXRvYiIsImI2NCIsImI2NHJlIiwiYXRvYiIsIlN0cmluZyIsIkVycm9yIiwic2xpY2UiLCJiaXRtYXAiLCJyZXN1bHQiLCJyMSIsInIyIiwiY2hhckF0IiwiZnJvbUNoYXJDb2RlIiwiYjY0RGVjb2RlVW5pY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm1hcCIsImMiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJnZXRDdXJyZW50VXNlckluZm8iLCJ4aHMiLCJnZXRTdG9yYWdlU3luYyIsInRva2VuQXJyIiwidWlkIiwicm9sZSIsInBlcm1pc3Npb24iLCJ0b2tlbkV4cGlyZWQiLCJ1c2VySW5mbyIsImVycm9yIiwiZXhwIiwiaWF0IiwidW5pSWRNaXhpbiIsInVuaUlESGFzUm9sZSIsInJvbGVJZCIsIl9nZXRDdXJyZW50VXNlckluZm8iLCJ1bmlJREhhc1Blcm1pc3Npb24iLCJwZXJtaXNzaW9uSWQiLCJfZ2V0Q3VycmVudFVzZXJJbmZvMiIsInVuaUlEVG9rZW5WYWxpZCIsIl9nZXRDdXJyZW50VXNlckluZm8zIiwiRGF0ZSIsIm5vdyIsIl90b1N0cmluZyIsImlzRm4iLCJpc1N0ciIsIm9iaiIsImlzUGxhaW5PYmplY3QiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsIl8iLCJ0b1VwcGVyQ2FzZSIsIkhPT0tTIiwiZ2xvYmFsSW50ZXJjZXB0b3JzIiwic2NvcGVkSW50ZXJjZXB0b3JzIiwibWVyZ2VIb29rIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJyZXMiLCJkZWR1cGVIb29rcyIsImhvb2tzIiwicmVtb3ZlSG9vayIsImhvb2siLCJtZXJnZUludGVyY2VwdG9ySG9vayIsImludGVyY2VwdG9yIiwib3B0aW9uIiwicmVtb3ZlSW50ZXJjZXB0b3JIb29rIiwiYWRkSW50ZXJjZXB0b3IiLCJtZXRob2QiLCJyZW1vdmVJbnRlcmNlcHRvciIsIndyYXBwZXJIb29rIiwicGFyYW1zIiwiZGF0YSIsImlzUHJvbWlzZSIsInRoZW4iLCJxdWV1ZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbGxiYWNrIiwid3JhcHBlck9wdGlvbnMiLCJvcHRpb25zIiwib2xkQ2FsbGJhY2siLCJjYWxsYmFja0ludGVyY2VwdG9yIiwid3JhcHBlclJldHVyblZhbHVlIiwicmV0dXJuVmFsdWUiLCJyZXR1cm5WYWx1ZUhvb2tzIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRBcGlJbnRlcmNlcHRvckhvb2tzIiwic2NvcGVkSW50ZXJjZXB0b3IiLCJpbnZva2VBcGkiLCJhcGkiLCJfbGVuIiwiX2tleSIsImludm9rZSIsInByb21pc2VJbnRlcmNlcHRvciIsInJlamVjdCIsIlNZTkNfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkUiLCJDT05URVhUX0FQSV9SRV9FWEMiLCJBU1lOQ19BUEkiLCJDQUxMQkFDS19BUElfUkUiLCJpc0NvbnRleHRBcGkiLCJpc1N5bmNBcGkiLCJpc0NhbGxiYWNrQXBpIiwiaGFuZGxlUHJvbWlzZSIsImNhdGNoIiwiZXJyIiwic2hvdWxkUHJvbWlzZSIsImZpbmFsbHkiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsInByb21pc2lmeSIsInByb21pc2VBcGkiLCJfbGVuMiIsIl9rZXkyIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsIkVQUyIsIkJBU0VfREVWSUNFX1dJRFRIIiwiaXNJT1MiLCJkZXZpY2VXaWR0aCIsImRldmljZURQUiIsImNoZWNrRGV2aWNlV2lkdGgiLCJfeGhzJGdldFN5c3RlbUluZm9TeW4iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJsYW5ndWFnZSIsImluaXRJMThuTWVzc2FnZXMiLCJpc0VuYWJsZUxvY2FsZSIsImxvY2FsZUtleXMiLCJ1c2VyTWVzc2FnZXMiLCJpMThuTWl4aW4iLCJtaXhpbiIsImJlZm9yZUNyZWF0ZSIsInVud2F0Y2giLCIkZm9yY2VVcGRhdGUiLCIkb25jZSIsIm1ldGhvZHMiLCIkJHQiLCJpbml0QXBwTG9jYWxlIiwic3RhdGUiLCJvYnNlcnZhYmxlIiwibG9jYWxlV2F0Y2hlcnMiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsInYiLCJnZXRMb2NhbGUkMSIsImFwcCIsImFsbG93RGVmYXVsdCIsInNldExvY2FsZSQxIiwib25Mb2NhbGVDaGFuZ2VDYWxsYmFja3MiLCJvbkxvY2FsZUNoYW5nZSIsImludGVyY2VwdG9ycyIsImJhc2VBcGkiLCJmcmVlemUiLCJfX3Byb3RvX18iLCJVVUlEX0tFWSIsImRldmljZUlkIiwidXNlRGV2aWNlSWQiLCJyYW5kb20iLCJzZXRTdG9yYWdlIiwiYWRkU2FmZUFyZWFJbnNldHMiLCJzYWZlQXJlYSIsInNhZmVBcmVhSW5zZXRzIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwic2NyZWVuSGVpZ2h0IiwicG9wdWxhdGVQYXJhbWV0ZXJzIiwiX3Jlc3VsdCRicmFuZCIsImJyYW5kIiwiX3Jlc3VsdCRtb2RlbCIsIm1vZGVsIiwiX3Jlc3VsdCRzeXN0ZW0iLCJzeXN0ZW0iLCJfcmVzdWx0JGxhbmd1YWdlIiwidGhlbWUiLCJ2ZXJzaW9uIiwiZm9udFNpemVTZXR0aW5nIiwiU0RLVmVyc2lvbiIsImRldmljZU9yaWVudGF0aW9uIiwiZXh0cmFQYXJhbSIsIm9zTmFtZSIsIm9zVmVyc2lvbiIsImhvc3RWZXJzaW9uIiwiZGV2aWNlVHlwZSIsImdldEdldERldmljZVR5cGUiLCJkZXZpY2VCcmFuZCIsImdldERldmljZUJyYW5kIiwiX2hvc3ROYW1lIiwiZ2V0SG9zdE5hbWUiLCJfZGV2aWNlT3JpZW50YXRpb24iLCJfZGV2aWNlUGl4ZWxSYXRpbyIsIl9TREtWZXJzaW9uIiwiaG9zdExhbmd1YWdlIiwicGFyYW1ldGVycyIsImFwcElkIiwiVU5JX0FQUF9JRCIsImFwcE5hbWUiLCJVTklfQVBQX05BTUUiLCJhcHBWZXJzaW9uIiwiVU5JX0FQUF9WRVJTSU9OX05BTUUiLCJhcHBWZXJzaW9uQ29kZSIsIlVOSV9BUFBfVkVSU0lPTl9DT0RFIiwiYXBwTGFuZ3VhZ2UiLCJnZXRBcHBMYW5ndWFnZSIsInVuaUNvbXBpbGVWZXJzaW9uIiwiVU5JX0NPTVBJTEVSX1ZFUlNJT04iLCJ1bmlSdW50aW1lVmVyc2lvbiIsInVuaVBsYXRmb3JtIiwiVU5JX1NVQl9QTEFURk9STSIsIlVOSV9QTEFURk9STSIsImRldmljZU1vZGVsIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaG9zdFRoZW1lIiwiaG9zdE5hbWUiLCJob3N0U0RLVmVyc2lvbiIsImhvc3RGb250U2l6ZVNldHRpbmciLCJ3aW5kb3dUb3AiLCJ3aW5kb3dCb3R0b20iLCJvc0xhbmd1YWdlIiwib3NUaGVtZSIsInVhIiwiaG9zdFBhY2thZ2VOYW1lIiwiYnJvd3Nlck5hbWUiLCJicm93c2VyVmVyc2lvbiIsImRldmljZVR5cGVNYXBzIiwiaXBhZCIsIndpbmRvd3MiLCJtYWMiLCJkZXZpY2VUeXBlTWFwc0tleXMiLCJfbW9kZWwiLCJfbSIsImRlZmF1bHRMYW5ndWFnZSIsIl9wbGF0Zm9ybSIsImdldFN5c3RlbUluZm8iLCJwcm90b2NvbHMiLCJ0b2RvcyIsImNhbklVc2VzIiwiQ0FMTEJBQ0tTIiwicHJvY2Vzc0NhbGxiYWNrIiwibWV0aG9kTmFtZSIsInByb2Nlc3NSZXR1cm5WYWx1ZSIsInByb2Nlc3NBcmdzIiwiZnJvbUFyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwidG9BcmdzIiwia2V5T3B0aW9uIiwia2VlcFJldHVyblZhbHVlIiwid3JhcHBlciIsInByb3RvY29sIiwiYXJnMSIsImFyZzIiLCJhcmdzIiwidG9kb0FwaXMiLCJUT0RPUyIsImNyZWF0ZVRvZG9BcGkiLCJ0b2RvQXBpIiwiZXJyTXNnIiwicHJvdmlkZXJzIiwib2F1dGgiLCJzaGFyZSIsInBheW1lbnQiLCJnZXRQcm92aWRlciIsInNlcnZpY2UiLCJwcm92aWRlciIsImV4dHJhQXBpIiwiZ2V0RW1pdHRlciIsIkVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiY3R4IiwiJG9uIiwiJG9mZiIsIiRlbWl0IiwiZXZlbnRBcGkiLCJ0cnlDYXRjaCIsImdldEFwaUNhbGxiYWNrcyIsImFwaUNhbGxiYWNrcyIsInBhcmFtIiwiY2lkIiwiY2lkRXJyTXNnIiwiZW5hYmxlZCIsIm5vcm1hbGl6ZVB1c2hNZXNzYWdlIiwiaW52b2tlUHVzaENhbGxiYWNrIiwiaW52b2tlR2V0UHVzaENpZENhbGxiYWNrcyIsIm9uUHVzaE1lc3NhZ2VDYWxsYmFja3MiLCJzdG9wcGVkIiwiZ2V0UHVzaENpZENhbGxiYWNrcyIsImdldFB1c2hDbGllbnRJZCIsIl9nZXRBcGlDYWxsYmFja3MiLCJoYXNTdWNjZXNzIiwiaGFzRmFpbCIsImhhc0NvbXBsZXRlIiwib25QdXNoTWVzc2FnZSIsIm9mZlB1c2hNZXNzYWdlIiwibW9ja3MiLCJmaW5kVm1CeVZ1ZUlkIiwidm0iLCJ2dWVQaWQiLCIkY2hpbGRyZW4iLCJjaGlsZFZtIiwiJHNjb3BlIiwiXyR2dWVJZCIsInBhcmVudFZtIiwiaW5pdEJlaGF2aW9yIiwiQmVoYXZpb3IiLCJpc1BhZ2UiLCJyb3V0ZSIsImluaXRSZWxhdGlvbiIsImRldGFpbCIsInRyaWdnZXJFdmVudCIsInNlbGVjdEFsbENvbXBvbmVudHMiLCJtcEluc3RhbmNlIiwic2VsZWN0b3IiLCIkcmVmcyIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJyZWYiLCJkYXRhc2V0IiwidG9Ta2lwIiwic3luY1JlZnMiLCJyZWZzIiwibmV3UmVmcyIsIm9sZEtleXMiLCJfY29uc3RydWN0IiwiU2V0IiwibmV3S2V5cyIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJldmVyeSIsImluY2x1ZGVzIiwiZGVsZXRlIiwiaW5pdFJlZnMiLCJmb3JDb21wb25lbnRzIiwiaGFuZGxlTGluayIsImV2ZW50IiwidnVlT3B0aW9ucyIsInBhcmVudCIsIm1hcmtNUENvbXBvbmVudCIsIklTX01QIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIk9CIiwiU0tJUCIsImlzRXh0ZW5zaWJsZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIk1QUGFnZSIsIlBhZ2UiLCJNUENvbXBvbmVudCIsIkNvbXBvbmVudCIsImN1c3RvbWl6ZVJFIiwiY3VzdG9taXplIiwiaW5pdFRyaWdnZXJFdmVudCIsIm9sZFRyaWdnZXJFdmVudCIsIm5ld1RyaWdnZXJFdmVudCIsImNvbVR5cGUiLCJfbGVuMyIsIl9rZXkzIiwiX3RyaWdnZXJFdmVudCIsImluaXRIb29rIiwiaXNDb21wb25lbnQiLCJvbGRIb29rIiwiX2xlbjQiLCJfa2V5NCIsIl9fJHdyYXBwZXJlZCIsImFmdGVyIiwiUEFHRV9FVkVOVF9IT09LUyIsImluaXRNb2NrcyIsIiRtcCIsIm1wVHlwZSIsIm1vY2siLCJoYXNIb29rIiwiZGVmYXVsdCIsImV4dGVuZE9wdGlvbnMiLCJzdXBlciIsIm1peGlucyIsImluaXRIb29rcyIsIm1wT3B0aW9ucyIsIl9fY2FsbF9ob29rIiwiaW5pdFVua25vd25Ib29rcyIsImV4Y2x1ZGVzIiwiZmluZEhvb2tzIiwiaW5pdEhvb2skMSIsImluaXRWdWVDb21wb25lbnQiLCJWdWVDb21wb25lbnQiLCJleHRlbmQiLCJpbml0U2xvdHMiLCJ2dWVTbG90cyIsIiRzbG90cyIsInNsb3ROYW1lIiwiJHNjb3BlZFNsb3RzIiwiaW5pdFZ1ZUlkcyIsInZ1ZUlkcyIsImxlbiIsIl8kdnVlUGlkIiwiaW5pdERhdGEiLCJjb250ZXh0IiwiVlVFX0FQUF9ERUJVRyIsIl9fbGlmZWN5Y2xlX2hvb2tzX18iLCJQUk9QX1RZUEVTIiwiQm9vbGVhbiIsImNyZWF0ZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJuZXdWYWwiLCJvbGRWYWwiLCJpbml0QmVoYXZpb3JzIiwidnVlQmVoYXZpb3JzIiwiYmVoYXZpb3JzIiwidnVlRXh0ZW5kcyIsImV4dGVuZHMiLCJ2dWVNaXhpbnMiLCJ2dWVQcm9wcyIsInByb3BzIiwiYmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwic2NvcGVkU2xvdHNDb21waWxlciIsInNldERhdGEiLCJvcHRzIiwid3JhcHBlciQxIiwibXAiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hcmtlcklkIiwiZ2V0RXh0cmFWYWx1ZSIsImRhdGFQYXRoc0FycmF5IiwiZGF0YVBhdGhBcnJheSIsImRhdGFQYXRoIiwicHJvcFBhdGgiLCJ2YWx1ZVBhdGgiLCJ2Rm9yIiwiaXNJbnRlZ2VyIiwic3Vic3RyIiwiX19nZXRfdmFsdWUiLCJ2Rm9ySXRlbSIsInZGb3JLZXkiLCJwcm9jZXNzRXZlbnRFeHRyYSIsImV4dHJhIiwiX19hcmdzX18iLCJleHRyYU9iaiIsImdldE9iakJ5QXJyYXkiLCJhcnIiLCJlbGVtZW50IiwicHJvY2Vzc0V2ZW50QXJncyIsImlzQ3VzdG9tIiwiaXNDdXN0b21NUEV2ZW50IiwiY3VycmVudFRhcmdldCIsInJldCIsImFyZyIsIk9OQ0UiLCJDVVNUT00iLCJpc01hdGNoRXZlbnRUeXBlIiwiZXZlbnRUeXBlIiwib3B0VHlwZSIsImdldENvbnRleHRWbSIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsImdlbmVyaWMiLCJoYW5kbGVFdmVudCIsImV2ZW50T3B0cyIsImV2ZW50T3B0IiwiZXZlbnRzQXJyYXkiLCJpc09uY2UiLCJldmVudEFycmF5IiwiaGFuZGxlckN0eCIsImhhbmRsZXIiLCJwYXRoIiwiaXMiLCJvbmNlIiwiRXZlbnRDaGFubmVsIiwiaWQiLCJldmVudHMiLCJfdGhpczMiLCJsaXN0ZW5lciIsImVtaXRDYWNoZSIsIm9uIiwiZW1pdCIsImV2ZW50TmFtZSIsIl9sZW41IiwiX2tleTUiLCJmbnMiLCJvcHQiLCJmaWx0ZXIiLCJfYWRkTGlzdGVuZXIiLCJfY2xlYXJDYWNoZSIsIm9mZiIsImNhY2hlQXJncyIsInNoaWZ0IiwiZXZlbnRDaGFubmVscyIsImdldEV2ZW50Q2hhbm5lbCIsImV2ZW50Q2hhbm5lbCIsImluaXRFdmVudENoYW5uZWwiLCJnZXRPcGVuZXJFdmVudENoYW5uZWwiLCJfX2V2ZW50Q2hhbm5lbF9fIiwiY2FsbEhvb2siLCJfX2lkX18iLCJpbml0U2NvcGVkU2xvdHNQYXJhbXMiLCJjZW50ZXIiLCJwYXJlbnRzIiwiY3VycmVudElkIiwicHJvcHNEYXRhIiwiJGhhc1NTUCIsInNsb3QiLCIkZ2V0U1NQIiwibmVlZEFsbCIsIiRzZXRTU1AiLCIkaW5pdFNTUCIsIiRjYWxsU1NQIiwiZGVzdHJveWVkIiwicGFyc2VCYXNlQXBwIiwic3RvcmUiLCIkc3RvcmUiLCJtcEhvc3QiLCIkaTE4biIsIl9pMThuIiwiYXBwT3B0aW9ucyIsIm9uTGF1bmNoIiwiZ2xvYmFsRGF0YSIsIl9pc01vdW50ZWQiLCJwYXJzZUFwcCIsInBhcnNlQXBwJDEiLCJjcmVhdGVBcHAiLCJBcHAiLCJlbmNvZGVSZXNlcnZlUkUiLCJlbmNvZGVSZXNlcnZlUmVwbGFjZXIiLCJjb21tYVJFIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RyaW5naWZ5UXVlcnkiLCJlbmNvZGVTdHIiLCJ2YWwyIiwieCIsImlzQ29tcG9uZW50MiIsImNhbklVc2UiLCJpbml0U3BlY2lhbE1ldGhvZHMiLCJzcGVjaWFsTWV0aG9kcyIsImhhbmRsZVdyYXAiLCJkZXN0b3J5IiwiX3RoaXM0IiwibGlzdCIsImhvb2tzJDEiLCJwYXJzZVBhZ2UiLCJ2dWVQYWdlT3B0aW9ucyIsIl9pbml0VnVlQ29tcG9uZW50IiwiX2luaXRWdWVDb21wb25lbnQyIiwicGFnZU9wdGlvbnMiLCJvbkxvYWQiLCJxdWVyeSIsIl9fcXVlcnkiLCJfX29wdGlvbnMiLCJvblJlYWR5IiwiX3RoaXM1IiwiJG1vdW50IiwiY29weVF1ZXJ5IiwiJHBhZ2UiLCJmdWxsUGF0aCIsInNldFRpbWVvdXQiLCJvblVubG9hZCIsIiRkZXN0cm95IiwiX19lIiwiX19sIiwiX193Iiwid3hzQ2FsbE1ldGhvZHMiLCJjYWxsTWV0aG9kIiwiY3JlYXRlUGFnZSIsInBhcnNlQmFzZUNvbXBvbmVudCIsInZ1ZUNvbXBvbmVudE9wdGlvbnMiLCJuZWVkVnVlT3B0aW9ucyIsIl9pbml0VnVlQ29tcG9uZW50MyIsIl9pbml0VnVlQ29tcG9uZW50NCIsIl9vYmplY3RTcHJlYWQiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJjb21wb25lbnRPcHRpb25zIiwiX19maWxlIiwibGlmZXRpbWVzIiwiYXR0YWNoZWQiLCJyZWFkeSIsImRldGFjaGVkIiwicGFnZUxpZmV0aW1lcyIsInNob3ciLCJoaWRlIiwicmVzaXplIiwic2l6ZSIsImV4dGVybmFsQ2xhc3NlcyIsInBhcnNlQ29tcG9uZW50IiwiZml4U2V0RGF0YVN0YXJ0Iiwic2V0RGF0YUFyZ3MiLCJfX2ZpeEluaXREYXRhIiwiX3RoaXM2IiwiZ3JvdXBTZXREYXRhIiwiZml4U2V0RGF0YUVuZCIsInBhcnNlQ29tcG9uZW50JDEiLCJfcGFyc2VDb21wb25lbnQiLCJfcGFyc2VDb21wb25lbnQyIiwib2xkQXR0YWNoZWQiLCJfdGhpczciLCJjcmVhdGVDb21wb25lbnQiLCJjcmVhdGVTdWJwYWNrYWdlQXBwIiwib25TaG93Iiwib25BcHBTaG93IiwiX2xlbjYiLCJfa2V5NiIsIm9uSGlkZSIsIm9uQXBwSGlkZSIsIl9sZW43IiwiX2tleTciLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsImNyZWF0ZVBsdWdpbiIsIl9sZW44IiwiX2tleTgiLCJfbGVuOSIsIl9rZXk5IiwiY2FuSVVzZUFwaSIsImFwaU5hbWUiLCJQcm94eSIsInVuaSQxIiwibyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9fZXNNb2R1bGUiLCJfYXJyYXlMaWtlVG9BcnJheSIsInIiLCJhIiwibiIsIl9hcnJheVdpdGhIb2xlcyIsImFycmF5TGlrZVRvQXJyYXkiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJUeXBlRXJyb3IiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJzZXRQcm90b3R5cGVPZiIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJwIiwiYmluZCIsInRvUHJvcGVydHlLZXkiLCJfZGVmaW5lUHJvcGVydGllcyIsIndyaXRhYmxlIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsInZhbHVlT2YiLCJfaXRlcmFibGVUb0FycmF5IiwiZnJvbSIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsImwiLCJ1IiwibmV4dCIsImRvbmUiLCJfbm9uSXRlcmFibGVSZXN0IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiX3NldFByb3RvdHlwZU9mIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsInRvUHJpbWl0aXZlIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==