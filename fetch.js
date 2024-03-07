// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//   return res.json()
// })
// .then((res)=>{
//   console.log(res[0].name);
// })
// .catch((err)=>{
//   console.log(err);
// })

const app = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // const token = await generateToken()
    console.log(users[0].name);
  } catch (error) {
    console.log(error);
  }
};

app()