const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
    //   .catch((error) => {
    //     reject(error);
    //   });
  });
};

getUsers()
  .then((data) => {
    console.log(data); // This will log the fetched data to the console
    // You can do further processing of the data here
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
