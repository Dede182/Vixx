import { FcGoogle } from 'react-icons/fc'
import { hasGrantedAnyScopeGoogle, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const Login = () => {

console.log(import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_REDIRECT_URI)
const login = useGoogleLogin({
  scope: 'https://www.googleapis.com/auth/gmail.readonly',
  onSuccess: async (codeResponse) => {
    console.log(codeResponse)
    const userInfo = await axios
    .get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${codeResponse.access_token}` },
    })
    .then(res => res.data);

    const hasAccess = hasGrantedAnyScopeGoogle(
      codeResponse,
      'https://www.googleapis.com/auth/gmail.readonly',
      );

    console.log(hasAccess);

    // Now, you can use the access token to retrieve emails from the Gmail API for the authenticated user ("me")
    const gmailResponse = await axios.get('https://www.googleapis.com/gmail/v1/users/me/messages', {
      headers: { Authorization: `Bearer ${codeResponse.access_token}` },
    });

    console.log(gmailResponse.data);

   
  console.log(userInfo);
  },
  flow: 'implicit',
});


  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="container bg-gray-800 w-2/6 h-60 flex justify-center items-center">
        <button
          onClick={()=> login()}
          className='flex gap-3 bg-slate-200 items-center px-4 py-2 rounded-lg text-black'>
          <span className="text-xl ">
            <FcGoogle />
          </span>
          <span>
            Log in with Google
          </span>
        </button>

      </div>
    </div>
  )
}

export default Login