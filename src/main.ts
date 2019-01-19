import CLI from './classess/cli'
import Formatter from './classess/formatter'
// import Network from './classess/network'

const ipv4 = CLI.getIPV4Address()
const mask = CLI.getSubnetMask()
const calcs = Network.getCalcs(ipv4, mask)
// Formatter.printNetworkResult(ipv4, mask, calcs)
console.log(ipv4, mask)
