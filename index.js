'use strict'

class PayQrCode {
  static isNumber (num) {
    return typeof num === 'number'
  }
  /**
   * 是不是微信支付付款码
   * https://pay.weixin.qq.com/wiki/doc/api/micropay_sl.php?chapter=5_1
   * 18位纯数字，以10、11、12、13、14、15开头
   * @param {*} code
   */
  static isWeixin (code) {
    return /^1[012345]\d{16}$/.test(code)
  }

  /**
   * 是不是支付宝付款码
   * https://docs.open.alipay.com/api_1/alipay.trade.pay
   * 25~30开头的长度为16~24位的数字
   * @param {*} code
   */
  static isAlipay (code) {
    return /^(2[5-9]|30)\d{14,22}$/.test(code)
  }

  /**
   * 是不是云闪付付款码
   * 62 前缀+2位(主产品标识)+15位随机数
   * @param {*} code
   */
  static isUnionpay (code) {
    return /^62\d{17}$/.test(code)
  }

  /**
   * 是不是百度钱包
   * 不超过 18 位；前缀：31
   * https://co.baifubao.com/content/resource/shop/documents/%E7%99%BE%E5%BA%A6%E9%92%B1%E5%8C%85_%E4%BB%98%E7%A0%81%E6%8E%A5%E5%85%A5%E6%96%87%E6%A1%A3.pdf
   * @param {*} code
   */
  static isBaifubao (code) {
    return /^31\d{14,16}$/.test(code)
  }
}

module.exports = PayQrCode
