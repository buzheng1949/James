export default {
  getJsonLength(json){
   var jsonLength = 0;
   for (var item in json) {
       jsonLength++;
   }
   return jsonLength;
 }
}
