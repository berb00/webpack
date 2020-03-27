// vue schema
// typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory());
// a?b:c?d:e?f:g means the same as a?b:(c?d:(e?f:g))
(
    function (global, factory) {

        (typeof exports === 'object' && typeof module !== 'undefined') ? 
        module.exports = factory() : 
        (typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory()));
  
    }(
        this,
        function () {
            'use strict';
            return 'Vue'
        }
    )
);