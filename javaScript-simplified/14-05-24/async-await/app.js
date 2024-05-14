async function getUsers() {
  try {
    const respose = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respose.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

(async () => {
  try {
    const users = await getUsers();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error:", error);
  }
})();
