import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function AccountDetails() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <h1 className="text-5xl font-semibold text-center my-10">
        Personal Info
      </h1>
      <div className="relative flex flex-col items-start justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md py-10">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            src={user.photoURL}
            alt="profile-picture"
            className="w-full h-full"
          />
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-2 block  text-2xl font-md leading-snug tracking-normal text-blue-gray-900 antialiased">
            <span className="font-bold">UserId: </span> {user.uid}
          </h4>
        </div>
        <div className="text-center">
          <h4 className="mb-2 block  text-2xl  leading-snug tracking-normal text-blue-gray-900 antialiased">
            <span className="font-bold pr-2">Name:</span>
            {user.displayName}
          </h4>
        </div>
        <div className=" text-center">
          <h4 className="mb-2 block  text-2xl font-md leading-snug tracking-normal text-blue-gray-900 antialiased">
            <span className="font-bold pr-2">Email:</span>
            {user.email}
          </h4>
        </div>
        <div className=" text-center">
          <h4 className="mb-2 block  text-2xl font-md leading-snug tracking-normal text-blue-gray-900 antialiased">
            <span className="font-bold pr-2">Phone:</span>
            {user.phoneNumber? user.phoneNumber : 'xxxxxxxxxxxxxx'}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
