export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`https://bestbags-server.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("bestbags-token", data.token);
    });
};
