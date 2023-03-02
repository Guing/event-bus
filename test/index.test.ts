import { promisify } from '../src/index'

test('test promisify', async () => {
  const func = (params: { success: (param: string) => void; fail: () => void }) => {
    setTimeout(() => {
      params?.success('success')
    }, 0)
  }
  const data = await promisify(func)({ name: 'test' })
  expect(data).toBe('success')
})
