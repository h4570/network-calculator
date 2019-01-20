import CLI from '../../src/utils/cli'

describe('getIPV4Address()', () => {

    it('not testable', () => {
        const result = CLI.getIPV4Address(true)
        expect(result).toBe('not_testable')
    })

})

describe('getSubnetMask()', () => {

    it('not testable', () => {
        const result = CLI.getSubnetMask(true)
        expect(result).toBe(0)
    })

})
