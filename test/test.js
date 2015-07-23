'use strict';

var bitArray = require('..');

var t1, t2;

describe('Bit array test', function () {

    beforeEach(function () {
        t1 = [0, 1, 0, 1];
        t2 = [0, 0, 1, 1];
    });

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
        bitArray.count([1]).should.equal(1);
        bitArray.count(t1).should.equal(2);
        bitArray.count(t2).should.equal(2);
    });

    describe('string methods', function () {
        it('binary', function () {
            var aux = bitArray.toBinaryString(t1);
            var ans = bitArray.parseBinaryString(aux);
            ans[0].should.equal(0);
            ans[1].should.equal(1);
            ans[2].should.equal(0);
            ans[3].should.equal(1);
            bitArray.toBinaryString([-1]).should.equal('11111111111111111111111111111111');

            var negativeString = bitArray.toBinaryString([-1000, -5]);
            bitArray.parseBinaryString(negativeString).should.eql([-1000, -5])
        });

        it('hex', function () {
            var aux = bitArray.toHexString(t1);
            var ans = bitArray.parseHexString(aux);
            ans[0].should.equal(0);
            ans[1].should.equal(1);
            ans[2].should.equal(0);
            ans[3].should.equal(1);
            bitArray.toHexString([-1]).should.equal('ffffffff');

            var negativeString = bitArray.toHexString([-1000, -5]);
            bitArray.parseHexString(negativeString).should.eql([-1000, -5])
        });
    });

    it('to debug', function () {
        var aux = bitArray.toDebug(t1);
        var expected = '0000: 0000 0000 0000 0000 0000 0000 0000 0000\n0020: 0000 0000 0000 0000 0000 0000 0000 0001\n0040: 0000 0000 0000 0000 0000 0000 0000 0000\n0060: 0000 0000 0000 0000 0000 0000 0000 0001';
        aux.should.equal(expected);
    });
});
