'use strict'

class PayCode {
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
}

module.exports = PayCode
