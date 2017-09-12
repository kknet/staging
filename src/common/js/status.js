export function statusFormatter(value) {
  switch (value) {
    case 0:
      return '带分期';
    case 1:
      return '审核中';
    case 2:
      return '已分期';
    case 3:
      return '已逾期';
    case 4:
      return '需代还(逾期超7天)';
    case 5:
      return '已代还';
    case 6:
      return '已结清';
    case 7:
      return '已结清';
  }
}
