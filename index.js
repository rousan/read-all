module.exports = stream => new Promise((res, rej) => {
  if (!stream.readable) {
    rej(new Error('Stream must be a Readable Stream'));
    return;
  }

  const isObjectMode = stream._readableState.objectMode;
  let data;

  stream.on('data', (chunk) => {
    if (isObjectMode) {
      data = data || [];
      data.push(chunk);
    } else if (chunk instanceof Buffer) {
      data = data || Buffer.alloc(0);
      data = Buffer.concat([data, chunk]);
    } else {
      data = data || '';
      data = data.concat(chunk);
    }
  });

  stream.on('end', () => {
    res(data);
  });

  stream.on('error', (err) => {
    rej(err);
  });

  stream.on('close', () => {
    res(data);
  });
});
