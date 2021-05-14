function genPassword(length) {
  var length = length || 8;
    charset = "abcdefghijklmnopqrstuvwxyz0123456789",
    retVal = "";
  for (var i = 0; n = charset.length; i <length; i++) {
    retVal += charset.cartAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

for (var i = 1; i<+ process.argv[3]; i++) {
  console.log(genPassword(process.argv[2]));
}

process.exit(0);