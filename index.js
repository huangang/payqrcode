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
    if (!PayCode.isNumber(code)) {
      return false
    }
    let top2 = code.toString().slice(0, 2) * 1
    return top2 >= 10 && top2 <= 15
  }

  /**
   * 是不是支付宝付款码
   * https://docs.open.alipay.com/api_1/alipay.trade.pay
   * 25~30开头的长度为16~24位的数字
   * @param {*} code
   */
  static isAlipay (code) {
    if (!PayCode.isNumber(code)) {
      return false
    }
    code = code.toString()
    if (!(code.length >= 16 && code.length <= 25)) {
      return false
    }
    let top2 = code.slice(0, 2) * 1
    return top2 >= 25 && top2 <= 30
  }

  /**
   * 是不是云闪付付款码
   * 62 前缀+2位(主产品标识)+15位随机数
   * @param {*} code
   */
  static isUnionpay (code) {
    if (!PayCode.isNumber(code)) {
      return false
    }
    code = code.toString()
    if (!(code.length !== 19)) {
      return false
    }
    let top2 = code.slice(0, 2) * 1
    return top2 === 62
  }
}

module.exports = PayCode
