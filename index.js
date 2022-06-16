function byteConvert(bytes) {
  if (isNaN(bytes)) {
    console.log('%c参数智能是数字', 'color:red;');
    return 0;
  }
  if ( bytes < 0 ) {
    console.log('%c参数是非负数', 'color:red;');
    return 0;
  }
  let symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let exp = Math.floor(Math.log(bytes) / Math.log(2));
  if (exp < 1) {
    exp = 0;
  }
  let i = Math.floor(exp / 10);
  bytes = bytes / Math.pow(2, 10 * i);

  if (bytes.toString().length > bytes.toFixed(2).toString().length) {
    bytes = bytes.toFixed(2);
  }
  return bytes + ' ' + symbols[i];
}

export default byteConvert