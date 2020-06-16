function calc() {

  const binari = document.querySelector("#bina")
  const dec = document.querySelector("#dec")

  const tama = binari.value.length
  console.log(tama)
  let cont = tama - 1
  let v = 0;
  let soma = 0;


  for (var i = 0; i < tama; i++) {
    var item = binari.value.charAt(i)
    console.log(item)
    if (item == 0) {
      v = 0
      v *= 2 ** cont


    }
    if (item == 1) {
      v = 1
      v *= 2 ** cont

    }
    if (item != 0 && item != 1) {
      binari.value = ""
      dec.value = ""

      alert("Only Binary!")
      break

    }
    cont -= 1
    soma += v
    dec.value = soma

  }
  binari.value = ""
  //dec.value = soma


}

function clean() {
  const binari = document.querySelector("#bina")
  const dec = document.querySelector("#dec")

  binari.value = ""
  dec.value = ""

}
