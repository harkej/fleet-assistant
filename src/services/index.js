export function getBusinessSummary(duration) {
  const baseUrl = `${process.env.REACT_APP_BASE_URL}/business_summary`;

  return fetch(`${baseUrl}/${duration}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json());
}
