import CLI from './classess/cli'

const cli = new CLI()
const ipv4 = cli.getIPV4Address()
const mask = cli.getSubnetMask()
console.log(ipv4, mask)
