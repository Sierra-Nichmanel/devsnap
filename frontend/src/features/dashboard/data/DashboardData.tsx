export const stats = [
  {
    title: "Total Requests",
    value: "148",
    change: "+18%",
    color: "blue",
  },
  {
    title: "Collections",
    value: "12",
    change: "+2",
    color: "emerald",
  },
  {
    title: "Success Rate",
    value: "96%",
    change: "+3%",
    color: "green",
  },
  {
    title: "Avg Response",
    value: "241ms",
    change: "-14ms",
    color: "orange",
  },
];

export const methodData = [
  { name: "GET", value: 60 },
  { name: "POST", value: 22 },
  { name: "PUT", value: 10 },
  { name: "DELETE", value: 8 },
];

export const statusData = [
  { name: "2xx", value: 91 },
  { name: "4xx", value: 6 },
  { name: "5xx", value: 3 },
];

export const trendData = [
  { day: "Mon", requests: 25 },
  { day: "Tue", requests: 32 },
  { day: "Wed", requests: 48 },
  { day: "Thu", requests: 37 },
  { day: "Fri", requests: 62 },
  { day: "Sat", requests: 29 },
  { day: "Sun", requests: 18 },
];

export const recentRequests = [
  {
    method: "GET",
    endpoint: "/api/users",
    status: 200,
    time: "120ms",
  },
  {
    method: "POST",
    endpoint: "/api/login",
    status: 201,
    time: "210ms",
  },
  {
    method: "DELETE",
    endpoint: "/api/posts/4",
    status: 204,
    time: "95ms",
  },
];

export const recentCollections = [
  {
    title: "Authentication",
    requests: 12,
  },
  {
    title: "Frontend",
    requests: 8,
  },
  {
    title: "Testing",
    requests: 6,
  },
];
