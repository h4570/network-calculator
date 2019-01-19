import NetworkCalcsDto from '../dtos/networkCalcsDto'

export default class Network {

    public static getCalcs(ipv4: string, mask: number): NetworkCalcsDto {
        if (!this.maskIsValid(mask)) { return new NetworkCalcsDto('illegal_mask') }

        const result = new NetworkCalcsDto()
        result.network = this.calcNetwork(ipv4, mask)
        result.broadcast = this.calcBroadcast(ipv4, mask)
        result.firstAddress = this.calcFirstAddress(ipv4, mask)
        result.lastAddress = this.calcLastAddress(ipv4, mask)
        return result
    }

    public static calcNetwork(ipv4: string, mask: number): string {
        // 192.168.0.1 / 255.255.224.0
        return '1'
    }

    public static calcBroadcast(ipv4: string, mask: number): string {
        return '1'
    }

    public static calcFirstAddress(ipv4: string, mask: number): string {
        return '1'
    }

    public static calcLastAddress(ipv4: string, mask: number): string {
        return '1'
    }

    public static maskIsValid(mask: number) {
        return mask < 33
    }

}
