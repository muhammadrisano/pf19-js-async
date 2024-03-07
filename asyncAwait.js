const penjumlahan = (val1, val2)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(typeof(val1) !== 'number' || typeof(val2) !== 'number' ){
        return reject('parameter harus number')
      }
      const result = val1 + val2
      resolve(result)
    },2000)
  })
}

const startApp = async()=>{


  try {
  console.log('perintah 1');
  const hasil = await penjumlahan(10, 14)
  console.log(hasil);
  console.log('perintah 3');
  } catch (error) {
    console.log(error);
    
  }finally{
    console.log('proses sudah selesai');
  }
}

startApp()