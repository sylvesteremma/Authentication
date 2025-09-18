import { useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/sign-in');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user?.username}!
        </h1>
        <p className="text-lg mb-4">
          You're logged in with the email {user?.emailAddresses[0].emailAddress}.
        </p>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;