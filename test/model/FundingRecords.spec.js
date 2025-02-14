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
    instance = new BybitApi.FundingRecords();
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

  describe('FundingRecords', function() {
    it('should create an instance of FundingRecords', function() {
      // uncomment below and update the code to test FundingRecords
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be.a(BybitApi.FundingRecords);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property coin (base name: "coin")', function() {
      // uncomment below and update the code to test the property coin
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property txId (base name: "tx_id")', function() {
      // uncomment below and update the code to test the property txId
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property walletBalance (base name: "wallet_balance")', function() {
      // uncomment below and update the code to test the property walletBalance
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property execTime (base name: "exec_time")', function() {
      // uncomment below and update the code to test the property execTime
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

    it('should have the property crossSeq (base name: "cross_seq")', function() {
      // uncomment below and update the code to test the property crossSeq
      //var instance = new BybitApi.FundingRecords();
      //expect(instance).to.be();
    });

  });

}));
