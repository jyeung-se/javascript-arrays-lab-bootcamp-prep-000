const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function(name) {
  kittens.pop(name);
  return kittens;
}

var destructivelyRemoveFirstKitten = function(name) {
  kittens.shift(name);
  return kittens;
}

