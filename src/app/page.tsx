"use client";

import UserProfileBar from "./components/UserProfileBar";

export default function Home() {
  return (
    <main className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center flex-col p-5">
      <div className=" w-full max-w-sm flex flex-col gap-3">
        <UserProfileBar
          userName={"Jessica Perez"}
          userIconProps={{
            imageSrc: "/user_profile_icon/User Profile-1238609.png",
            profileState: "away",
          }}
        />
        <div className="flex items-center gap-2.5"></div>
      </div>
    </main>
  );
}
