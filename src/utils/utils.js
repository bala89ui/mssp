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
  static isValidPath(baseObject, path) {
    var current = baseObject;
    var components = path.split('.');

    for (var i = 0; i < components.length; i++) {
      if (typeof current !== 'object' || !current || !(components[i] in current)) {
        return false;
      }

      current = current[components[i]];
    }

    return true;
  }
}