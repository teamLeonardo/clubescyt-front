import ReactDOM from "react-dom"
import { Switch, BrowserRouter as Router } from "react-router-dom"

// Import Routes all
import { authRoutes } from "./routers/allRoutes"

// Import all middleware
import Authmiddleware from "./routers/middleware/Authmiddleware"

// Import scss
import "./assets/scss/theme.scss"
import NonAuthLayout from "./components/NonAuthLayout"
import { AppProvider } from "./store/appStore"
import { AuthProvider } from "./store/authStore"

const App = () => (
    <Router>
        <Switch>
            <AuthProvider>
                <AppProvider>
                    {authRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={NonAuthLayout}
                            component={route.component}
                            key={idx}
                            isAuthProtected={false}
                        />
                    ))}
                </AppProvider>
            </AuthProvider>

        </Switch>
    </Router>
)

ReactDOM.render(<App />, document.getElementById("root"))