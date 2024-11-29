import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = Cookies.get('accessToken');
      console.log("Using Access Token:", token);

      if (!token) {
        console.warn('No access token found. Please login again.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/profiles/user/${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Server Response:', errorData);
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        console.log('Fetched User Profile:', data);

        if (data.length > 0) {
          setUserProfile(data[0]);
        } else {
          console.warn('No user profile found in the response');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {userProfile ? (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl text-blue-600 font-bold mb-2">User Profile</h2>
          <div className="flex items-center mb-4">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1726761458~exp=1726762058~hmac=9ac042b1fc2df46badce055889172b74932deabf05c182f0ac1aa87588702aad"
              alt={`${userProfile.first_name} ${userProfile.last_name}`}
              className="h-28 w-28 rounded-full object-cover border-2 border-blue-500 shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{userProfile.first_name} {userProfile.last_name}</h3>
              <p className="text-gray-500 text-sm">{userProfile.email}</p>
              <p className="text-gray-500 text-sm">User ID: {userProfile.user_id}</p>
              <button className="mt-1 text-blue-600 hover:underline text-sm">Edit Profile</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-sm">
              <tbody>
                {Object.entries(userProfile).map(([key, value]) => (
                  key !== 'first_name' && key !== 'last_name' && key !== 'user_id' && (
                    <tr className="border-b hover:bg-gray-100 transition-colors" key={key}>
                      <td className="py-2 px-3 font-medium text-gray-700 capitalize">{key.replace('_', ' ')}</td>
                      <td className="py-2 px-3">{value}</td>
                      <td className="py-2 px-3">
                        <button className="text-blue-600 hover:underline text-sm">Edit</button>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
