function fn1() {
    console.log('fn11111111')
}
let fn2 = undefined
let num = undefined

fn1()
fn2()

num = 1234


fn2 = function () {
    console.log('fn22222222')
}