import Navbar from "../components/navbar";
import { useUser } from "@clerk/clerk-react";

const profile = () => {
  const username = useUser().user?.username;
  const userImg = useUser().user?.imageUrl;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold mt-[50px]">
          Welcome {username}!
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={userImg} />
            </div>
          </div>
        </h1>
      </div>
    </>
  );
};

export default profile;
