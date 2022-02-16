export function fetchUsers() {
  return fetch("http://localhost:4000/api/users").then((res) => res.json());
}

export function fetchDevices(filterOptions) {
  let url = "http://localhost:4000/api/devices";
  if (filterOptions) {
    url += filterOptions;
  }
  return fetch(url).then((res) => res.json());
}