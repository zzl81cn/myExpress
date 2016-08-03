/**
 * Created by zhouzilong on 2016/8/3.
 */

var main = require('../alsotang/lesson6');
var should = require('should');

// Command

//D:\Workspaces\javascript\Node\myExpress>mocha
//
//
//test/fibonacci_test.js
//√ should equal 0 when n === 0
//√ should equal 1 when n === 1
//√ should equal 55 when n === 10
//√ should throw when n>10
//√ should throw when n<0
//√ should throw n isnt Number


//6 passing (10ms)

describe('test/fibonacci_test.js', function(){
    it('should equal 0 when n === 0', function(){
        main.fibonacci(0).should.equal(0);
    });
    it('should equal 1 when n === 1', function(){
        main.fibonacci(1).should.equal(1);
    });
    it('should equal 55 when n === 10', function(){
        main.fibonacci(10).should.equal(55);
    });
    it('should throw when n>10', function(){
        (function(){
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    });
    it('should throw when n<0', function(){
        (function(){
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    });
    it('should throw n isnt Number', function(){
        (function(){
            main.fibonacci("呵呵");
        }).should.throw('n should be a Number');
    });
});