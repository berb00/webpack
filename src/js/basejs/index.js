// API
const object = require('./api/object')
const string = require('./api/string')

// Event
const wind = require('./events/window')

const _ = require('../../Frame/Lodash/lodash.core');
const lodash = require('../../Frame/Lodash/lodash');
const util1 = require('../JS/Utils/util_syntax');
const util2 = require('../JS/Utils/util_business');
const env = Object.keys(process.env);

main()

function main () {
    // =====================API====================

    object.test_trim()
    // object.test_char()
    // object.test_slice()
    // object.test_search()
    // object.test_fromCharCode()

    // object.test_is()
    // object.test_assign()
    // object.test_create()
    // object.test_freeze()
    // object.test_seal()
    // object.test_preventExtensions()
    // object.test_entries()
    // object.test_setPrototypeOf()
}