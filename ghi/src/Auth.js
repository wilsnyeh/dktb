async function login(username, password) {
    const url = `${process.env.REACT_APP_API_HOST}/login/`;

const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    body: form,
  });
  if (response.ok) {
    const url = `${process.env.REACT_APP_API_HOST}/api/tokens/mine/`;

    try {
        const response = await fetch(url, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
          // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
        }
      } catch (e) {}
      return false;
    }
    let error = await response.json();
    // DO SOMETHING WITH THE ERROR, IF YOU WANT