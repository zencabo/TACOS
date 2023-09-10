kotlin.kotlin.io.output.flush();
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'moduleId'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'moduleId'.");
}
var moduleId = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  function main() {
    println('Hello, world!!!');
    print('Esto es una prueba, Cristian Alain Bustamante Osorio');
    println('- Abajo se han colocado tres enter');
    print('-\n-\n-');
  }
  _.main = main;
  main();
  Kotlin.defineModule('moduleId', _);
  return _;
}(typeof moduleId === 'undefined' ? {} : moduleId, kotlin);

kotlin.kotlin.io.output.buffer;