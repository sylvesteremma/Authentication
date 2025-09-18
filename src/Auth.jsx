import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';

function Auth() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        {showSignIn ? (
          <SignIn
            appearance={{
              elements: {
                socialButtons: {
                  display: 'flex',
                  justifyContent: 'space-between',
                },
              },
            }}
            socialButtons={[
              'google',
              'facebook',
              'github',
              'linkedin',
            ]}
          />
           ) : (
          <SignUp
            appearance={{
              elements: {
                socialButtons: {
                  display: 'flex',
                  justifyContent: 'space-between',
                },
              },
            }}
            socialButtons={[
              'google',
              'facebook',
              'github',
              'linkedin',
            ]}
          />
        )}
        <button
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setShowSignIn(!showSignIn)}
        >
          {showSignIn ? 'Sign up instead' : 'Sign in instead'}
        </button>
      </div>
    </div>
  );
}

export default Auth;
