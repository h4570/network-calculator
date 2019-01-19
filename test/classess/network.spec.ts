import Network from '../../src/classess/network'
import NetworkCalcsDto from '../../src/dtos/networkCalcsDto';

describe('getCalcs()', () => {

    it('complete test | Positive', () => {
        const expected = new NetworkCalcsDto()
        expected.broadcast = '192.168.0.255'
        expected.firstAddress = '192.168.0.1'
        expected.lastAddress = '192.168.0.254'
        expected.network = '192.168.0.0'

        const result = Network.getCalcs('192.168.0.20', '255.255.255.0')
        expect(result).toEqual(expected)
    })

    it('complete test | Negative', () => {
        const expected = new NetworkCalcsDto()
        expected.broadcast = '192.168.0.255'
        expected.firstAddress = '192.168.0.1'
        expected.lastAddress = '192.168.0.254'
        expected.network = '192.168.0.0'

        const result = Network.getCalcs('192.168.0.50', '255.255.0.0')
        expect(result).not.toEqual(expected)
    })

})

describe('calcNetwork()', () => {

    it('192.168.0.50/24 should return 192.168.0.0', () => {
        const ip = '192.168.0.50'
        const mask = '255.255.255.0'
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('192.168.0.0')
    })

    it('10.72.16.27/8 should return 10.0.0.0', () => {
        const ip = '10.72.16.27'
        const mask = '255.0.0.0'
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('10.0.0.0')
    })

    it('16.56.254.12/16 should return 16.56.0.0', () => {
        const ip = '16.56.254.12'
        const mask = '255.255.0.0'
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('16.56.0.0')
    })

})

describe('calcBroadcast()', () => {

    it('192.168.0.50/24 should return 192.168.0.255', () => {
        const ip = '192.168.0.50'
        const mask = '255.255.255.0'
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('192.168.0.255')
    })

    it('10.72.16.27/8 should return 10.255.255.255', () => {
        const ip = '10.72.16.27'
        const mask = '255.0.0.0'
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('10.255.255.255')
    })

    it('16.56.254.12/16 should return 16.56.255.255', () => {
        const ip = '16.56.254.12'
        const mask = '255.255.0.0'
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('16.56.255.255')
    })

})

describe('calcFirstAddress()', () => {

    it('192.168.0.50/24 should return 192.168.0.0', () => {
        const ip = '192.168.0.50'
        const mask = '255.255.255.0'
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('192.168.0.1')
    })

    it('10.72.16.27/8 should return 10.0.0.0', () => {
        const ip = '10.72.16.27'
        const mask = '255.0.0.0'
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('10.0.0.1')
    })

    it('16.56.254.12/16 should return 16.56.0.0', () => {
        const ip = '16.56.254.12'
        const mask = '255.255.0.0'
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('16.56.0.1')
    })

})

describe('calcLastAddress()', () => {

    it('192.168.0.50/24 should return 192.168.0.0', () => {
        const ip = '192.168.0.50'
        const mask = '255.255.255.0'
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('192.168.0.254')
    })

    it('10.72.16.27/8 should return 10.0.0.0', () => {
        const ip = '10.72.16.27'
        const mask = '255.0.0.0'
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('10.255.255.254')
    })

    it('16.56.254.12/16 should return 16.56.0.0', () => {
        const ip = '16.56.254.12'
        const mask = '255.255.0.0'
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('16.56.255.254')
    })

})
