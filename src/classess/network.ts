import NetworkCalcsDto from '../dtos/networkCalcsDto'

export default class Network {

    public static getCalcs(ipv4: string, mask: string): NetworkCalcsDto {
        const result = new NetworkCalcsDto()
        result.network = this.calcNetwork(ipv4, mask)
        result.broadcast = this.calcBroadcast(ipv4, mask)
        result.firstAddress = this.calcFirstAddress(ipv4, mask)
        result.lastAddress = this.calcLastAddress(ipv4, mask)
        return result
    }

    private static calcNetwork(ipv4: string, mask: string): string {
        return '1'
    }

    private static calcBroadcast(ipv4: string, mask: string): string {
        return '1'
    }

    private static calcFirstAddress(ipv4: string, mask: string): string {
        return '1'
    }

    private static calcLastAddress(ipv4: string, mask: string): string {
        return '1'
    }

}
