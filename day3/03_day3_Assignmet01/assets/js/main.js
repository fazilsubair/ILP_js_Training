// let promise= fetch(`https://jsonplaceholder.typicode.com/posts`);

async function async() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!response.ok) {
      throw new Error(`Api request failed with status : ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
async();
