var exec = require('cordova/exec');

exports.getInstanceId = function(success, error) {
    exec(success, error, "fp", "getInstanceId", []);
};

exports.getToken = function(success, error) {
    exec(success, error, "fp", "getToken", []);
};

exports.onNotificationOpen = function(success, error) {
    exec(success, error, "fp", "onNotificationOpen", []);
};

exports.onTokenRefresh = function(success, error) {
    exec(success, error, "fp", "onTokenRefresh", []);
};

exports.grantPermission = function(success, error) {
    exec(success, error, "fp", "grantPermission", []);
};

exports.hasPermission = function(success, error) {
    exec(success, error, "fp", "hasPermission", []);
};

exports.setBadgeNumber = function(number, success, error) {
    exec(success, error, "fp", "setBadgeNumber", [number]);
};

exports.getBadgeNumber = function(success, error) {
    exec(success, error, "fp", "getBadgeNumber", []);
};

exports.subscribe = function(topic, success, error) {
    exec(success, error, "fp", "subscribe", [topic]);
};

exports.unsubscribe = function(topic, success, error) {
    exec(success, error, "fp", "unsubscribe", [topic]);
};

exports.unregister = function(success, error) {
    exec(success, error, "fp", "unregister", []);
};

//
// Crash reporting
//
exports.logError = function(message, success, error) {
    exec(success, error, "fp", "logError", [message]);
};

//
// Analytics
//
exports.logEvent = function(name, params, success, error) {
    exec(success, error, "fp", "logEvent", [name, params]);
};

exports.setScreenName = function(name, success, error) {
    exec(success, error, "fp", "setScreenName", [name]);
};

exports.setUserId = function(id, success, error) {
    exec(success, error, "fp", "setUserId", [id]);
};

exports.setUserProperty = function(name, value, success, error) {
    exec(success, error, "fp", "setUserProperty", [name, value]);
};

//
// Remote configuration
//
exports.activateFetched = function (success, error) {
    exec(success, error, "fp", "activateFetched", []);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
    var args = [];
    if (typeof cacheExpirationSeconds === 'number') {
        args.push(cacheExpirationSeconds);
    } else {
        error = success;
        success = cacheExpirationSeconds;
    }
    exec(success, error, "fp", "fetch", args);
};

exports.getByteArray = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "fp", "getByteArray", args);
};

exports.getValue = function (key, namespace, success, error) {
    var args = [key];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "fp", "getValue", args);
};

exports.getInfo = function (success, error) {
    exec(success, error, "fp", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
    exec(success, error, "fp", "setConfigSettings", [settings]);
};

exports.setDefaults = function (defaults, namespace, success, error) {
    var args = [defaults];
    if (typeof namespace === 'string') {
        args.push(namespace);
    } else {
        error = success;
        success = namespace;
    }
    exec(success, error, "fp", "setDefaults", args);
};

//
// Performance
//
exports.startTrace = function (name, success, error) {
    exec(success, error, "fp", "startTrace", [name]);
};

exports.incrementCounter = function (name, counterNamed, success, error) {
    exec(success, error, "fp", "incrementCounter", [name, counterNamed]);
};

exports.stopTrace = function (name, success, error) {
    exec(success, error, "fp", "stopTrace", [name]);
};
