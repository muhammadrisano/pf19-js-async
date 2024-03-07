// syncronous

// console.log('perintah 1');
// console.log('perintah 2')
// console.log('perintah 3')


// asyncnous
// console.log('perintah 1');

// setTimeout(()=>{
//   console.log('perintah 2');
// },[1000])

// console.log('perintah 3');


// const penjumlahan = (val1, val2, callback) =>{
//   setTimeout(()=>{
//     const result = val1 + val2
//     callback(result) 
//   }, 1000)
// }


// console.log('perintah 1');

// penjumlahan(10, 15, function(hasil){
//   const total = hasil * 100
//   console.log(total);

// })

// console.log('perintah 3');

// penjumlahan(10, 15, function(hasil){
//   const total = hasil * 100
//   console.log(total);

// })


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

// then catch

// const hasil = penjumlahan(10, 100)
// hasil
// .then((res)=>{
//   console.log('then dijalankan');
//   console.log(res);
// })
// .catch((err)=>{
//   console.log('catch dijalankan');
//   console.log(err);
// })

// asyn await

const startApp = async()=>{
  console.log('perintah 1');
  const hasil = await penjumlahan(10, 15)
  console.log(hasil);
  console.log('perintah 3');
}

startApp()