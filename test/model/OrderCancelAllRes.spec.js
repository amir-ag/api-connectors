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
    instance = new BybitApi.OrderCancelAllRes();
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

  describe('OrderCancelAllRes', function() {
    it('should create an instance of OrderCancelAllRes', function() {
      // uncomment below and update the code to test OrderCancelAllRes
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be.a(BybitApi.OrderCancelAllRes);
    });

    it('should have the property clOrdID (base name: "clOrdID")', function() {
      // uncomment below and update the code to test the property clOrdID
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "order_type")', function() {
      // uncomment below and update the code to test the property orderType
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property timeInForce (base name: "time_in_force")', function() {
      // uncomment below and update the code to test the property timeInForce
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property createType (base name: "create_type")', function() {
      // uncomment below and update the code to test the property createType
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property orderStatus (base name: "order_status")', function() {
      // uncomment below and update the code to test the property orderStatus
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property leavesQty (base name: "leaves_qty")', function() {
      // uncomment below and update the code to test the property leavesQty
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property leavesValue (base name: "leaves_value")', function() {
      // uncomment below and update the code to test the property leavesValue
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property crossStatus (base name: "cross_status")', function() {
      // uncomment below and update the code to test the property crossStatus
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

    it('should have the property crossSeq (base name: "cross_seq")', function() {
      // uncomment below and update the code to test the property crossSeq
      //var instance = new BybitApi.OrderCancelAllRes();
      //expect(instance).to.be();
    });

  });

}));
