import CLI from '../../src/classess/cli'

describe('Constructor', () => {
    it('creates readline interface', () => {
        const cli = new CLI()
        expect(cli.rl).not.toBeNull()
    })
})

describe('getIPV4Address()', () => {
    it('returns 192.168.0.1 when entering 192.168.0.1', () => {
        const cli = new CLI()
        const ipv4 = cli.getIPV4Address()
        cli.rl.write('192.168.0.1\n\r')
        expect(ipv4).toBe('192.168.0.1')
    })
    it('returns 10.72.152.34 when entering 10.72.152.34', () => {
        const cli = new CLI()
        const ipv4 = cli.getIPV4Address()
        cli.rl.write('10.72.152.34\n\r')
        expect(ipv4).toBe('10.72.152.34')
    })
})

describe('getSubnetMask()', () => {
    it('returns 255.255.255.0 when entering 255.255.255.0', () => {
        const cli = new CLI()
        const ipv4 = cli.getSubnetMask()
        cli.rl.write('255.255.255.0\n\r')
        expect(ipv4).toBe('255.255.255.0')
    })
    it('returns 208.211.244.0 when entering 208.211.244.0', () => {
        const cli = new CLI()
        const ipv4 = cli.getIPV4Address()
        cli.rl.write('208.211.244.0\n\r')
        expect(ipv4).toBe('208.211.244.0')
    })
})
