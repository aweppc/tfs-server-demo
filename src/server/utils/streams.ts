import { PassThrough } from 'stream';

export const mergeStreams = (...streams: NodeJS.ReadableStream[]) => {
    let resultingStream = new PassThrough();
    let streamsLeft = streams.length;
    for (let stream of streams) {
        resultingStream = stream.pipe(resultingStream, { end: false });
        stream.once('end', () => {
            streamsLeft = streamsLeft - 1;
            if (streamsLeft === 0) {
                resultingStream.emit('end');
            }
        });
    }
    return resultingStream
};
