import NetworkCalcsDto from '../dtos/networkCalcsDto'

export default class Network {

    public static getCalcs(ipv4: string, mask: number): NetworkCalcsDto {
        if (!this.maskIsValid(mask)) { return new NetworkCalcsDto('illegal_mask') }

        const result = new NetworkCalcsDto()
        result.mask = this.getFullMask(mask)
        const binaryIp = this.ipToBinaryArray(ipv4)
        const binaryMask = this.ipToBinaryArray(result.mask)
        result.network = this.calcNetwork(binaryIp, binaryMask)
        result.broadcast = this.calcBroadcast(binaryIp, binaryMask)
        result.firstAddress = this.calcFirstAddress(binaryIp, binaryMask)
        result.lastAddress = this.calcLastAddress(binaryIp, binaryMask)
        return result
    }

    public static calcNetwork(binaryIp: string[], binaryMask: string[]): string {
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

    public static calcBroadcast(binaryIp: string[], binaryMask: string[]): string {
        const result: string[] = ['', '', '', '']
        binaryIp.forEach((part, partIndex) => {
            let resultSubBroadcast = ''
            for (let i = 0; i < part.length; i++) {
                if (binaryMask[partIndex][i] === '0') {
                    resultSubBroadcast += '1'
                } else { resultSubBroadcast += part[i] }
            }
            result[partIndex] = resultSubBroadcast
        })
        return this.binaryArrayToIp(result)
    }

    public static calcFirstAddress(binaryIp: string[], binaryMask: string[]): string {
        return this.calcNetwork(binaryIp, binaryMask).slice(0, -1) + '1'
    }

    public static calcLastAddress(binaryIp: string[], binaryMask: string[]): string {
        return this.calcBroadcast(binaryIp, binaryMask).slice(0, -1) + '4'
    }

    public static maskIsValid(mask: number) {
        return mask < 33
    }

    public static getFullMask(mask: number): string {
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

    public static ipToBinaryArray(ip: string): string[] {
        return ip.split('.').reduce((acc, element) => {
            const address: number = parseInt(element, 10)
            const result = address.toString(2)
            acc.push(this.fixBinaryString(result))
            return acc
        }, [] as string[])
    }

    public static binaryArrayToIp(binaryArray: string[]): string {
        return binaryArray.reduce((acc, element) => {
            const subnet = parseInt(element, 2)
            return acc + subnet + '.'
        }, '').slice(0, -1)
    }

    private static fixBinaryString(binary: string) {
        return ('00000000' + binary).substring(binary.length)
    }

}
