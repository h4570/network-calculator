import NetworkCalcsDto from '../dtos/networkCalcsDto'

export default class Formatter {

    public static printNetworkResult(ipv4: string, mask: string, calcs: NetworkCalcsDto): void {
        const cyan = '\x1b[36m%s\x1b[0m'
        const yellow = '\x1b[33m%s\x1b[0m'

        console.log(cyan, 'IPV4: ' + ipv4)
        console.log(cyan, 'Mask: ' + mask + '\n\r')

        console.log(yellow, 'Network: ' + calcs.network)
        console.log(yellow, 'Broadcast: ' + calcs.broadcast)
        console.log(yellow, 'First address: ' + calcs.firstAddress)
        console.log(yellow, 'Last address: ' + calcs.lastAddress)
    }

}
