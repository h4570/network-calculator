import NetworkCalcsDto from '../../src/dtos/networkCalcsDto'
import Network from '../../src/network'

describe('getFullCalcs()', () => {

    it('complete test | Positive', () => {
        const expected = new NetworkCalcsDto()
        expected.broadcast = '192.168.0.255'
        expected.firstAddress = '192.168.0.1'
        expected.lastAddress = '192.168.0.254'
        expected.network = '192.168.0.0'
        expected.mask = '255.255.255.0'

        const result = Network.getFullCalcs('192.168.0.20', 24)
        expect(result).toEqual(expected)
    })

    it('complete test | Negative', () => {
        const expected = new NetworkCalcsDto()
        expected.broadcast = '192.168.0.255'
        expected.firstAddress = '192.168.0.1'
        expected.lastAddress = '192.168.0.254'
        expected.network = '192.168.0.0'

        const result = Network.getFullCalcs('192.168.0.50', 16)
        expect(result).not.toEqual(expected)
    })

})

describe('calcNetwork()', () => {

    it('192.168.7.10/6', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(6))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('192.0.0.0')
    })

    it('192.168.7.10/21', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(21))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('192.168.0.0')
    })

    it('192.168.7.10/22', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(22))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('192.168.4.0')
    })

    it('192.168.0.50/24', () => {
        const ip = Network.ipToBinaryArray('192.168.0.50')
        const mask = Network.ipToBinaryArray(Network.getFullMask(24))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('192.168.0.0')
    })

    it('10.72.16.27/8', () => {
        const ip = Network.ipToBinaryArray('10.72.16.27')
        const mask = Network.ipToBinaryArray(Network.getFullMask(8))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('10.0.0.0')
    })

    it('16.56.254.12/16', () => {
        const ip = Network.ipToBinaryArray('16.56.254.12')
        const mask = Network.ipToBinaryArray(Network.getFullMask(16))
        const result = Network.calcNetwork(ip, mask)
        expect(result).toBe('16.56.0.0')
    })

})

describe('calcBroadcast()', () => {

    it('192.168.7.10/6', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(6))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('195.255.255.255')
    })

    it('192.168.7.10/21', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(21))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('192.168.7.255')
    })

    it('192.168.7.10/22', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(22))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('192.168.7.255')
    })

    it('192.168.0.50/24', () => {
        const ip = Network.ipToBinaryArray('192.168.0.50')
        const mask = Network.ipToBinaryArray(Network.getFullMask(24))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('192.168.0.255')
    })

    it('10.72.16.27/8', () => {
        const ip = Network.ipToBinaryArray('10.72.16.27')
        const mask = Network.ipToBinaryArray(Network.getFullMask(8))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('10.255.255.255')
    })

    it('16.56.254.12/16', () => {
        const ip = Network.ipToBinaryArray('16.56.254.12')
        const mask = Network.ipToBinaryArray(Network.getFullMask(16))
        const result = Network.calcBroadcast(ip, mask)
        expect(result).toBe('16.56.255.255')
    })

})

describe('calcFirstAddress()', () => {

    it('192.168.7.10/6', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(6))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('192.0.0.1')
    })

    it('192.168.7.10/21', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(21))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('192.168.0.1')
    })

    it('192.168.7.10/22', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(22))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('192.168.4.1')
    })

    it('192.168.0.50/24', () => {
        const ip = Network.ipToBinaryArray('192.168.0.50')
        const mask = Network.ipToBinaryArray(Network.getFullMask(24))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('192.168.0.1')
    })

    it('10.72.16.27/8', () => {
        const ip = Network.ipToBinaryArray('10.72.16.27')
        const mask = Network.ipToBinaryArray(Network.getFullMask(8))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('10.0.0.1')
    })

    it('16.56.254.12/16', () => {
        const ip = Network.ipToBinaryArray('16.56.254.12')
        const mask = Network.ipToBinaryArray(Network.getFullMask(16))
        const result = Network.calcFirstAddress(ip, mask)
        expect(result).toBe('16.56.0.1')
    })

})

describe('calcLastAddress()', () => {

    it('192.168.7.10/6', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(6))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('195.255.255.254')
    })

    it('192.168.7.10/21', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(21))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('192.168.7.254')
    })

    it('192.168.7.10/22', () => {
        const ip = Network.ipToBinaryArray('192.168.7.10')
        const mask = Network.ipToBinaryArray(Network.getFullMask(22))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('192.168.7.254')
    })

    it('192.168.0.50/24', () => {
        const ip = Network.ipToBinaryArray('192.168.0.50')
        const mask = Network.ipToBinaryArray(Network.getFullMask(24))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('192.168.0.254')
    })

    it('10.72.16.27/8', () => {
        const ip = Network.ipToBinaryArray('10.72.16.27')
        const mask = Network.ipToBinaryArray(Network.getFullMask(8))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('10.255.255.254')
    })

    it('16.56.254.12/16', () => {
        const ip = Network.ipToBinaryArray('16.56.254.12')
        const mask = Network.ipToBinaryArray(Network.getFullMask(16))
        const result = Network.calcLastAddress(ip, mask)
        expect(result).toBe('16.56.255.254')
    })

})
