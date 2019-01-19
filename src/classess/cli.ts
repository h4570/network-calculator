import readline, { ReadLine } from 'readline'

export default class CLI {

    private rl: ReadLine

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    public getIPV4Address(): string {
        return 'not_implemented'
    }

    public getSubnetMask(): string {
        return 'not_implemented'
    }

}
