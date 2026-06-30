// Type coercion in details

console.log(Number(null))
console.log(Number(NaN))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))
console.log(Number(""))
console.log(Number(" "))

/*
The 10 Rules You Should Memorize
The + operator is special: it either adds numbers or concatenates strings.
-, *, /, %, and ** always try to convert operands to numbers.
true becomes 1, and false becomes 0 in numeric contexts.
null converts to 0 in numeric conversion, while undefined converts to NaN.
"" (empty string) converts to 0 when a number is needed, but remains a string for concatenation.
Non-numeric strings convert to NaN in numeric operations.
== performs type coercion; === never does.
null == undefined is a unique exception that evaluates to true.
Only these values are falsy: false, 0, -0, 0n, NaN, "", null, and undefined; everything else is truthy.
Objects are first converted to primitives (typically via valueOf() or toString()) before most operations.
*/

