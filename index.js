const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newAr = [...kittens, name]
  return newAr
}

function prependKitten(name) {
  var newAr = [name, ...kittens]
  return newAR
}

function removeLastKitten() {
  var newAr = kittens.unshift()
  return newAr
}