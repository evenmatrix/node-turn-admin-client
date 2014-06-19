'use strict';

var parse = require('../../lib/parser');
var fs = require('fs');
var chai = require('chai');
var should = chai.should();

var testString = fs.readFileSync(__dirname + '/lib/testString.txt');

describe('Parse some test admin TURN data', function () {
  it('should return an object', function () {
    var results = parse(testString);

    results.recordNumber.should.be.equal('1');
    results.id.should.be.equal('000000000000034864');
    results.user.should.be.equal('1-QzZGODU5MDMtOTk3MS00QzQ0LThDMDQtNjA0ODk0ODUzMzVC-TWF0dEZyZWRyaWNrc29uMg==-ODk0NkFFMzktMTA2Qi00OTZELThCRDEtRDE2OTQzMkZGRjlF.1401812136');
    results.started.should.be.equal('26');
    results.starftedTimeFormat.should.be.equal('secs');
    results.expires.should.be.equal('574');
    results.expiresTimeFormat.should.be.equal('secs');
    results.clientProtocol.should.be.equal('UDP');
    results.relayProtocol.should.be.equal('UDP');
    results.fingerprints.should.be.equal('OFF');
    results.mobile.should.be.equal('OFF');
    results.SHA256.should.be.equal('OFF');
    results.SHA_type.should.be.equal('SHA1');
    results.usage_rp.should.be.equal('6');
    results.usage_rb.should.be.equal('1204');
    results.usage_sp.should.be.equal('5');
    results.usage_sb.should.be.equal('508');
    results.rate_r.should.be.equal('0');
    results.rate_s.should.be.equal('0');
    results.rate_total.should.be.equal('0');
    results.peers.should.be.instanceof(Array);
    results.peers.should.be.deep.equal([
      '10.24.65.91',
      '216.207.245.1',
      '10.24.250.86',
      '54.200.182.167'
    ]);
  });
});