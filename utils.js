/**
 * Functions utils js
 *
 */

/**
* Funcion para convertir la fecha del formulario en el formato de fecha del servidor
*
* @param {date} date Fecha del formulario que se desea convertir a formato del servidor
* @returns {date} Fecha en formato del serve YYYY[-MM[-DD]]
*/
function dateToServer(date){
  ss = new Date(date);
  return ss.getFullYear()+'-'+(ss.getMonth()*1+1)+'-'+ss.getDate();
}

/**
 * Funcion para extraer el peso del archivo 
 *
 * @param {decimal} bytes tamano del archivo
 * @param {decimal} decimals
 * @returns {El peso del archivo y su unidad}
 */
function formatBytes(bytes,decimals) {
  if(bytes == 0) return '0 Byte';
  var k = 1000;
  var dm = decimals + 1 || 3;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * toma los elementos de un array y retorna un array de las id
 *
 * @param {object} list
 */
function getArray(list){
  var tmp = [];
  if(!list) return tmp;
  for(i=0; i<list.length; i++){
    tmp.push(list[i].id);
  }
  return tmp;
}

/**
 * Convertir la fecha que viene del servidor al formato de js
 *
 * @param {date} date fecha en el formato del servidor
 * @returns {date} date js
 */
function fromServer(date){
  return new Date(date)
};
