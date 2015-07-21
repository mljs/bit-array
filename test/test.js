'use strict';

var bitArray = require('..');

var t1 = [0,1,0,1];
var t2 = [0,0,1,1];

describe('Bit array test', function () {

    it('AND test', function () {
        var and = bitArray.and(t1, t2);
        and[0].should.equal(0);
        and[1].should.equal(0);
        and[2].should.equal(0);
        and[3].should.equal(1);
    });

    it('OR test', function () {
        var or = bitArray.or(t1, t2);
        or[0].should.equal(0);
        or[1].should.equal(1);
        or[2].should.equal(1);
        or[3].should.equal(1);
    });

    it('XOR test', function () {
        var xor = bitArray.xor(t1, t2);
        xor[0].should.equal(0);
        xor[1].should.equal(1);
        xor[2].should.equal(1);
        xor[3].should.equal(0);
    });

    it('NOT test', function () {
        var not = bitArray.not(t2);
        not[0].should.equal(-1);
        not[1].should.equal(-1);
        not[2].should.equal(-2);
        not[3].should.equal(-2);
    });

    it('get test', function () {
        bitArray.getBit(t1, 2).should.be.false();
        bitArray.getBit(t1, 32).should.be.false();
        bitArray.getBit(t1, 63).should.be.true();
    });

    it('set test', function () {
        bitArray.getBit(t1, 2).should.be.false();
        var ans = bitArray.setBit(t1, 2, false);
        bitArray.getBit(ans, 2).should.be.false();
        ans = bitArray.setBit(t1, 2, true);
        bitArray.getBit(ans, 2).should.be.true();
    });

    it('count test', function () {
        bitArray.count(t1).should.equal(2);
        bitArray.count(t2).should.equal(2);
    });
});