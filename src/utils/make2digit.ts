export function make2digit(num: number) {
  if( num == null){
    return null
  }
    if ((num + "").length == 1) {
      return "0" + num;
    } else {
      return num + "";
    }
  }