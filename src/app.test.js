function soma(a, b) {
  return a + b;
}

test('testar soma 1', () => {
  expect(soma(2, 1)).toBe(3);
});

test('testar soma 2', () => {
  expect(soma(4, 5)).toBe(9);
});

fit('test', () => {
  expect(12).toBeTruthy();
});
