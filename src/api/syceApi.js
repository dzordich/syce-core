import React, { usState, useEffect } from "react";
import api from "@aws-amplify/api";

const ENDPOINT_NAME = "syce-api-dev";

const asQuery = (query) => !!query && { queryStringParameters: query };

const formatBody = (body) => !!body && { body: body };

const syceApi = () => ({
  get: (route) => (query) => api.get(ENDPOINT_NAME, route, asQuery(query)),
  post: (route) => (body) => api.post(ENDPOINT_NAME, route, formatBody(body)),
  patch: (route) => (body) => api.patch(ENDPOINT_NAME, route, formatBody(body)),
  put: (route) => (body) => api.put(ENDPOINT_NAME, route, formatBody(body)),
});

export default syceApi;
