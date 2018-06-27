const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const from = 'User';
        const text = 'Dummy text';
        const generatedMsg = generateMessage(from, text);

        expect(typeof generatedMsg.createdAt).toBe('number');
        expect(generatedMsg).toMatchObject({ from, text });
    });
});