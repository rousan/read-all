/* global describe, it */
/* eslint-disable no-unused-expressions */

const { Transform } = require('stream');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const intoStream = require('into-stream');
const streamBuffers = require('stream-buffers');
const readAll = require('./');

chai.use(chaiAsPromised);
chai.should();

describe('readAll', () => {
  it('should read all data when stream has encoding', () => {
    const data = 'I will eat your all data';
    const rStream = intoStream(data);
    rStream.setEncoding('utf8');
    return readAll(rStream).should.eventually.equal(data);
  });

  it('should read all data when stream hasn\'t encoding', () => {
    const data = 'I will eat your all data';
    const rStream = intoStream(data);
    return readAll(rStream)
      .then(buf => buf.equals(Buffer.from(data)))
      .should.eventually.be.true;
  });

  it('should return an array of objects when stream is in object mode', () => {
    const transformStream = new Transform({
      readableObjectMode: true,
      transform(chunk, encoding, callback) {
        this.push({ value: chunk.toString() });
        callback();
      },
    });

    setTimeout(() => {
      transformStream.write('a');
      transformStream.write('b');
      transformStream.write('c');
      transformStream.end();
    });

    return readAll(transformStream)
      .should.eventually
      .be.eql([{ value: 'a' }, { value: 'b' }, { value: 'c' }]);
  });

  it('should throw error when input stream is not Readable', () => {
    const writableStream = new streamBuffers.WritableStreamBuffer();
    return readAll(writableStream).should.be.rejectedWith(Error);
  });
});
