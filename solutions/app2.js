const setCookie = (name, value) => {
  let now = new Date();
  now.setTime(now.getTime() + 15 * 60 * 1000);
  let expires = now.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}`;
};

setCookie("viewed", "5");
setCookie("uid", "354774631237");
setCookie("ssid", "Bx55OWbHJ0Vt_IGIF");

const cookieHandler = {
  getAll() {
    

  },
  toSessionStorage() {},
  flush() {},
};

export { cookieHandler };
