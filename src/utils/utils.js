export default class Utils {
  static isEmpty(obj){
    if (typeof obj == 'number' || typeof obj == 'boolean') {
      return false;
    }
    if (obj == '') {
      return true;
    }
    for (let x in obj) {
      return false;
    }
    return true;
  
  }
  static getUniqueId(){
    return Math.floor(Math.random() * 100000);
  }
}