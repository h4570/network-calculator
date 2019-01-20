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
        const binaryIp = this.ipToBinaryArray(ipv4)
        const removeme = this.binaryArrayToIp(binaryIp)
        console.log(binaryIp, removeme)
        // 192.168.0.1 / 18
        // hostMaskWholes = 2
        // hostMaskOthers =

        // const hostMaskWholes = Math.floor(mask / 8)
        // const hostMaskOthers = this.getHostOthersMask(mask - hostMaskWholes)

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

    private static ipToBinaryArray(ip: string): string[] {
        return ip.split('.').reduce((acc, element) => {
            const address: number = parseInt(element, 10)
            acc.push(address.toString(2))
            return acc
        }, [] as string[])
    }

    private static binaryArrayToIp(binaryArray: string[]): string {
        return binaryArray.reduce((acc, element) => {
            const subnet = parseInt(element, 2)
            return acc + '.' + subnet
        }, '')
    }

}
