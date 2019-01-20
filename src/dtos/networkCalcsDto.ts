export default class NetworkCalcsDto {

    public network: string | undefined
    public mask: string | undefined
    public broadcast: string | undefined
    public firstAddress: string | undefined
    public lastAddress: string | undefined
    public message: string | undefined

    constructor(msg: string = '') {
        this.message = msg
    }

}
