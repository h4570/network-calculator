import CLI from './classess/cli'

const ipv4 = CLI.getIPV4Address()
const mask = CLI.getSubnetMask()

console.log(ipv4, mask)
