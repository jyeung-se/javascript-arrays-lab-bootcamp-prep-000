const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructiveAppendKitten = function(name) {
  var kittens = kittens.push(name);
  return kittens;
}