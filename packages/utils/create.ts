/** 前缀 */
function _bem(
  prefixedName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixedName += `-${blockSuffix}`;
  }
  if (element) {
    prefixedName += `__${element}`;
  }
  if (modifier) {
    prefixedName += `--${modifier}`;
  }
  return prefixedName;
}
/**
 * hw-button-box__element--disable
 * hw-button 前缀
 * block 代码块 -box
 * element 元素 success 表示block的后代
 * modifier 装饰 --modifier
 */
function createBEM(prefixName: string) {
  const b = (blockSuffix = '') => _bem(prefixName, blockSuffix, '', '');
  const e = (element = '') =>
    element ? _bem(prefixName, '', element, '') : '';
  const m = (modifier = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : '';
  const be = (blockSuffix = '', element = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
  const bm = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, modifier, '') : '';
  const bem = (blockSuffix = '', element = '', modifier = '') =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : '';

  // 拼接状态 isdisable
  const is = (name: string, state: string | boolean) =>
    state ? `is-${name}` : '';

  return {
    b,
    e,
    m,
    be,
    bm,
    bem,
    is
  };
}

export function createNamespcace(name: string) {
  const prefixName = `hw-${name}`;
  return createBEM(prefixName);
}
