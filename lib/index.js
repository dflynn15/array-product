function product(source, target) {
  if (!Array.isArray(target)) return source;
  if (target.length === 0) return [];

  return source.flatMap(srcItem => {
    return target.map(targetItem => {
      return [srcItem, targetItem];
    });
  });
}

module.exports = product;
