import { Login } from "../pages/Authentication/Login"

// const login = lazy(() => import("../pages/Authentication/Login"))

const userRoutes = [
  // { path: "/pages-gallery", component: PagesGallery },
  // { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  // { path: "/logout", component: Logout },
  // { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },
  { path: "/login", component: Login },
  // { path: "/", exact: true, component: () => <Redirect to="/login" /> },
]

export { userRoutes, authRoutes }
