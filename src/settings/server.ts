const AMANDA_API_SERVER = "";
export const AMANDA_API = (() => {
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:5000";
  }
  return AMANDA_API_SERVER;
})();
