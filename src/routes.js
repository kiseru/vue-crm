export default [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/categories",
    component: () => import("@/views/Categories"),
    meta: {
      layout: "main",
    }
  }
];