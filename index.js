const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name) {
  var kittens = kittens.push(name);
  return kittens;
}