import assert from 'assert';
import SandStorage from '../src/main';

describe('SandStorage.available', function() {
    it('returns true on normal environment', function() {
        assert.equal(SandStorage.available(), true);
    });
});

describe('SandStorage.setItem', function() {
    beforeEach(function() {
        localStorage.clear();
    });

    it('stores on localStorage with default parameter', function() {
        assert.equal(localStorage.length, 0)

        const value = Math.floor(Math.random() * 100);

        SandStorage.setItem('test', value);

        assert.notEqual(localStorage.length, 0);
    });

    it('stores in sessionStorage with "type" option', function() {
        sessionStorage.clear();

        const value = Math.floor(Math.random() * 100);

        SandStorage.setItem('test', value, {
            type: 'sessionStorage'
        });

        assert.notEqual(sessionStorage.length, length);
    });

    it('does not store when "to" value is expired', function() {
        const length = sessionStorage.length;
        const value = Math.floor(Math.random() * 100);
        const result = SandStorage.setItem('test', value, {
            to: new Date('2016/01/01').getTime()
        });

        assert.strictEqual(result, null);
    });
});

describe('SandStorage.getItem', function() {
    beforeEach(function() {
        localStorage.clear();
    });

    it('gets value without options', function() {
        const value = Math.floor(Math.random() * 100);
        SandStorage.setItem('test', value);
        assert.equal(SandStorage.getItem('test'), value);
    });

    it('gets value when duration is avaliable', function() {
        const value = Math.floor(Math.random() * 100);
        SandStorage.setItem('test', value, {
            from: Date.now() - 10000,
            to: Date.now() + 10000
        });
        assert.equal(SandStorage.getItem('test'), value);
    });

    it('is null when "from" value is not reached', function() {
        const value = Math.floor(Math.random() * 100);
        SandStorage.setItem('test', value, {
            from: Date.now() + 10000
        });
        assert.strictEqual(SandStorage.getItem('test'), null);
    });

    it('is null when "to" value is expired', (done) => {
        const value = Math.floor(Math.random() * 100);
        SandStorage.setItem('test', value, {
            to: Date.now() + 100
        });
        setTimeout(function() {
            assert.strictEqual(SandStorage.getItem('test'), null);
            done();
        }, 1000);
    });
});

describe('SandStorage.removeItem', function() {
    beforeEach(function() {
        localStorage.clear();
    });

    it('gets value without options', function() {
        const value = Math.floor(Math.random() * 100);

        SandStorage.setItem('test', value);

        const oldLength = sessionStorage.length;

        SandStorage.removeItem('test');

        assert.equal(localStorage.length, oldLength - 1);
    });
});
