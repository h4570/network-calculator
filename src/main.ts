import Network from './network'
import CLI from './utils/cli'
import Formatter from './utils/formatter'

const ipv4 = CLI.getIPV4Address()
const mask = CLI.getSubnetMask()
const calcs = Network.getFullCalcs(ipv4, mask)

Formatter.printNetworkResult(ipv4, calcs)
