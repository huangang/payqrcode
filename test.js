'use strict'

const paycode = require('.')
const test = require('tap').test

test('payqrcode', (t) => {
  t.test('weixin', t => {
    t.plan(1)
    let res = paycode.isWeixin(102837647820283747)
    console.log('weixin', res)
    t.strictEqual(res, true)
  })

  t.test('alipay', t => {
    t.plan(1)
    let res = paycode.isAlipay('287634438256643972234443')
    t.strictEqual(res, true)
  })

  t.test('unionpay', t => {
    t.plan(1)
    let res = paycode.isUnionpay(6228376427820283746)
    t.strictEqual(res, true)
  })

  t.test('dxmpay', t => {
    t.plan(1)
    let res = paycode.isDxmpay(6228376427820283746)
    t.strictEqual(res, false)
  })

  t.test('qpay', t => {
    t.plan(1)
    let res = paycode.isQpay(6228376427820283746)
    t.strictEqual(res, false)
  })

  t.test('jdpay', t => {
    t.plan(1)
    let res = paycode.isJdpay(6228376427820283746)
    console.log('jdpay', res)
    t.strictEqual(res, true)
  })

  t.endAll()
})
