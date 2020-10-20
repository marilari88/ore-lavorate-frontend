export default function authHeader(tokenId) {
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  if (tokenId)
    headers = {
      ...headers,
      "x-access-token": tokenId,
    };

  const token = localStorage.getItem("auth-token");
  if (token)
    headers = {
      ...headers,
      "x-access-token": token,
    };

  return { headers };
}
