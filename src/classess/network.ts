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
        const fullMask = this.getFullMask(mask)
        const binaryMask = this.ipToBinaryArray(fullMask)
        const result: string[] = ['', '', '', '']
        binaryIp.forEach((part, partIndex) => {
            let resultSubNetwork = ''
            for (let i = 0; i < part.length; i++) {
                if (binaryMask[partIndex][i] === '1') {
                    resultSubNetwork += binaryIp[partIndex][i]
                } else { resultSubNetwork += '0' }
            }
            result[partIndex] = resultSubNetwork
        })
        return this.binaryArrayToIp(result)
    }

    public static calcBroadcast(ipv4: string, mask: number): string {
        const binaryIp = this.ipToBinaryArray(ipv4)
        const fullMask = this.getFullMask(mask)
        const binaryMask = this.ipToBinaryArray(fullMask)
        const result: string[] = ['', '', '', '']
        // console.log(binaryIp, binaryMask)

        binaryIp.forEach((part, partIndex) => {
            let resultSubBroadcast = ''

            for (let i = 0; i < part.length; i++) {
                if (binaryMask[partIndex][i] === '0') {
                    resultSubBroadcast += '1'
                } else { resultSubBroadcast += part[i] }
            }
            console.log(part, binaryMask[partIndex], resultSubBroadcast)
            result[partIndex] = resultSubBroadcast
        })
        return this.binaryArrayToIp(result)
    }

    public static calcFirstAddress(ipv4: string, mask: number): string {
        return this.calcNetwork(ipv4, mask).slice(0, -1) + '1'
    }

    public static calcLastAddress(ipv4: string, mask: number): string {
        return '1'
    }

    public static maskIsValid(mask: number) {
        return mask < 33
    }

    private static getFullMask(mask: number): string {
        const result = ['0', '0', '0', '0']
        const hostMaskWholes = Math.floor(mask / 8)
        const hostMaskOthers = mask - (hostMaskWholes * 8)
        let offset = 0
        for (; offset < hostMaskWholes; offset++) { result[offset] = '255' }
        result[offset] = '00000000'
        for (let i = 0; i < hostMaskOthers; i++) {
            result[offset] = result[offset].substring(0, i) + '1' + result[offset].substring(i + 1)
        }
        result[offset] = parseInt(result[offset], 2).toString()
        return result.join('.')
    }

    private static ipToBinaryArray(ip: string): string[] {
        return ip.split('.').reduce((acc, element) => {
            const address: number = parseInt(element, 10)
            const result = address.toString(2)
            acc.push(this.fixBinaryString(result))
            return acc
        }, [] as string[])
    }

    private static fixBinaryString(binary: string) {
        return ('00000000' + binary).substring(binary.length)
    }

    private static binaryArrayToIp(binaryArray: string[]): string {
        return binaryArray.reduce((acc, element) => {
            const subnet = parseInt(element, 2)
            return acc + subnet + '.'
        }, '').slice(0, -1)
    }

}
