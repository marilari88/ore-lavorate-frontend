export default function authHeader() {
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const token = localStorage.getItem("auth-token");
  if (token)
    headers = {
      ...headers,
      "x-access-token": token,
    };

  return { headers };
}
