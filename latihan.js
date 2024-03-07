const sayHelo = (name)=>{
  setTimeout(()=>{
    const text = `Selamat Siang ${name}, Apakabar`
    return text
  },1000)
}

const hasil = sayHelo('risano')
console.log(hasil);