import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://154.20.199.58:9000/api",
});

apiClient.get("/listings").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
