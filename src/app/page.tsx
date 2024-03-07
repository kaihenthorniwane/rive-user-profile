"use client";

import { useState } from "react";
import UserProfileBar, {
  type UserProfileBarProps,
} from "./components/UserProfileBar";
import { UserProfileIconStates } from "./components/UserProfileIcon";

const initialUserProfileBarContent: UserProfileBarProps[] = [
  {
    userName: "Person 1",
    userIconProps: { imageSrc: "/png/Person 1.png", profileState: "online" },
  },
  {
    userName: "Person 2",
    userIconProps: {
      imageSrc: "/png/Person 2.png",
      profileState: "do not disturb",
    },
  },
  {
    userName: "Person 3",
    userIconProps: { imageSrc: "/png/Person 3.png", profileState: "away" },
  },
  {
    userName: "Person 4",
    userIconProps: { imageSrc: "/png/Person 4.png", profileState: "typing" },
  },
  {
    userName: "Person 5",
    userIconProps: { imageSrc: "/png/Person 5.png", profileState: "none" },
  },
  {
    userName: "Person 6",
    userIconProps: {
      imageSrc: "/png/Person 6.png",
      profileState: "do not disturb",
    },
  },
  {
    userName: "Person 7",
    userIconProps: { imageSrc: "/png/Person 7.png", profileState: "away" },
  },
  {
    userName: "Person 8",
    userIconProps: { imageSrc: "/png/Person 8.png", profileState: "typing" },
  },
];

export default function Home() {
  const [userProfileBarContent, setUserProfileBarContent] = useState<
    UserProfileBarProps[]
  >(initialUserProfileBarContent);

  const handleRandomizeAll = (): void => {
    const possibleStates: UserProfileIconStates[] = [
      "away",
      "do not disturb",
      "none",
      "online",
      "typing",
    ];

    setUserProfileBarContent((prevValue) =>
      prevValue.map((user) => {
        return {
          userName: user.userName,
          userIconProps: {
            ...user.userIconProps,
            profileState:
              user.userIconProps && user.userIconProps.profileState
                ? possibleStates.filter(
                    (state) => state !== user.userIconProps.profileState
                  )[Math.floor(Math.random() * 5)]
                : "none",
          },
        };
      })
    );
  };
  const handleRandomizeBasedonName = (name: string): void => {
    const possibleStates: UserProfileIconStates[] = [
      "away",
      "do not disturb",
      "none",
      "online",
      "typing",
    ];

    setUserProfileBarContent((prevValue) =>
      prevValue.map((user) => {
        if (user.userName === name) {
          const currentState = user.userIconProps?.profileState;
          const filteredStates = possibleStates.filter(
            (state) => state !== currentState
          );
          const randomState =
            filteredStates[Math.floor(Math.random() * filteredStates.length)];

          return {
            ...user,
            userIconProps: {
              ...user.userIconProps,
              profileState: randomState,
            },
          };
        }
        return user;
      })
    );
  };

  return (
    <main className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center p-5">
      <div className="w-48 flex flex-col gap-8">
        <button
          className="flex items-center font-bold text-lg gap-2 transition leading-none hover:scale-[1.0125] active:scale-[0.9875] active:text-my-gray"
          onClick={handleRandomizeAll}
        >
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 17.9976V11.9976M23 11.9976H17M23 11.9976L18.36 16.3576C17.2853 17.4329 15.9556 18.2184 14.4952 18.6409C13.0348 19.0633 11.4911 19.1089 10.0083 18.7734C8.52547 18.4379 7.1518 17.7322 6.01547 16.7222C4.87913 15.7122 4.01717 14.4308 3.51 12.9976M1 1.99762V7.99762M1 7.99762H7M1 7.99762L5.64 3.63763C6.71475 2.56235 8.04437 1.77684 9.50481 1.35441C10.9652 0.931975 12.5089 0.886385 13.9917 1.22189C15.4745 1.5574 16.8482 2.26307 17.9845 3.27305C19.1209 4.28304 19.9828 5.56442 20.49 6.99763"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Refresh All
        </button>
        <div className="flex flex-col gap-4">
          {userProfileBarContent.map((user) => (
            <UserProfileBar
              key={user.userName}
              userName={user.userName}
              userIconProps={{
                imageSrc: user.userIconProps.imageSrc,
                profileState: user.userIconProps.profileState,
              }}
              handleRandomizeBasedonName={handleRandomizeBasedonName}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
