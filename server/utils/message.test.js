const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'User';
        const text = 'Dummy text';
        const generatedMsg = generateMessage(from, text);

        expect(typeof generatedMsg.createdAt).toBe('string');
        expect(generatedMsg).toMatchObject({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        const from = 'User';
        const latitude = 1;
        const longitude = 2;
        const url = 'https://www.google.com/maps?q=1,2';
        const generatedMsg = generateLocationMessage(from, latitude, longitude);

        expect(typeof generatedMsg.createdAt).toBe('string');
        expect(generatedMsg).toMatchObject({ from, url });
    });
});