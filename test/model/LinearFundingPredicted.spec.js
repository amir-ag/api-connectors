/**
 * Bybit API
 * ## REST API for the Bybit Exchange. Base URI: [https://api.bybit.com]  
 *
 * OpenAPI spec version: 0.2.10
 * Contact: support@bybit.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BybitApi);
  }
}(this, function(expect, BybitApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BybitApi.LinearFundingPredicted();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LinearFundingPredicted', function() {
    it('should create an instance of LinearFundingPredicted', function() {
      // uncomment below and update the code to test LinearFundingPredicted
      //var instance = new BybitApi.LinearFundingPredicted();
      //expect(instance).to.be.a(BybitApi.LinearFundingPredicted);
    });

    it('should have the property predictedFundingRate (base name: "predicted_funding_rate")', function() {
      // uncomment below and update the code to test the property predictedFundingRate
      //var instance = new BybitApi.LinearFundingPredicted();
      //expect(instance).to.be();
    });

    it('should have the property predictedFundingFee (base name: "predicted_funding_fee")', function() {
      // uncomment below and update the code to test the property predictedFundingFee
      //var instance = new BybitApi.LinearFundingPredicted();
      //expect(instance).to.be();
    });

  });

}));
