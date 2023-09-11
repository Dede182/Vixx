import RoutesComponent from "./routes/Routes"
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

  return (
    <>
     <div>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID}>
      <RoutesComponent />

      </GoogleOAuthProvider>
     </div>
    </>
  )
}

export default App
