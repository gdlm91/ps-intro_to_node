var should = require('should');
var fun = require('./6.0-mathfun');

describe('MathFun', function() {

    describe('When running Sync', function() {

        it('Should double even numbers', function(done) {

            fun.evenDoublerSync(2).should.equal(4);
            done();

        });

        it('Should throw on odd numbers', function(done) {

            (function() { 
                fun.evenDoublerSync(3);
            }).should.throw(/Odd/);
            done();

        });

    });

    describe('When running Async', function() {

        it('Should double even numbers', function(done) {

            fun.evenDoubler(2, function(err, results) {

                should.not.exist(err);
                results.should.equal(4);
                done();

            })

        });

        it('Should throw on odd numbers', function(done) {

            fun.evenDoubler(3, function(err, results) {

                should.exist(err);
                should.not.exist(results);
                done();

            })

        });

    })

})
