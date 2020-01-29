import { message } from "../../src/model/message";
 
test('正しいメッセージが返却される', () => {
    expect(message('hoge')).toEqual(`Hello, CDK! You've hit hoge\n`)
})