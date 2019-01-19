// tslint:disable-next-line:no-var-requires
const readlineSync = require('readline-sync')

export default class CLI {

    public static getIPV4Address(test: boolean = false): string {
        if (test) { return 'not_testable' }
        return readlineSync.question('Enter IPV4 Address: ')
    }

    public static getSubnetMask(test: boolean = false): number {
        if (test) { return 0 }
        return readlineSync.question('Enter subnet mask: ')
    }

}
