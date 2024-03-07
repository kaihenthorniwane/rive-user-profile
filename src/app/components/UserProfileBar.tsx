import UserProfileIcon, {
  UserProfileIconStates,
  type UserProfileIconProps,
} from "./UserProfileIcon";

export type UserProfileBarProps = {
  userName: string;
  userIconProps: UserProfileIconProps;
  handleRandomizeBasedonName?: (name: string) => void;
};

export default function UserProfileBar({
  userName = "No name assigned",
  userIconProps,
  handleRandomizeBasedonName = (name: string) => {},
}: UserProfileBarProps) {
  const statusIndicatorTextVariants: {
    [key in UserProfileIconStates]: string;
  } = {
    none: "none",
    "do not disturb": "do not disturb",
    away: "away",
    online: "online",
    typing: "typing...",
  };

  const statusText: string =
    userIconProps &&
    userIconProps.profileState &&
    userIconProps.profileState !== "none"
      ? statusIndicatorTextVariants[userIconProps.profileState]
      : "none";

  return (
    <button
      className="flex items-center gap-2.5 transition hover:scale-[1.0125] text-left active:scale-[0.9875] active:opacity-50"
      onClick={() => handleRandomizeBasedonName(userName)}
    >
      <UserProfileIcon
        imageSrc={userIconProps?.imageSrc}
        profileState={userIconProps?.profileState}
      />
      <div className="flex flex-col gap-0.5 mt-0.5 leading-none">
        <span className="font-bold text-lg leading-none">{userName}</span>
        {statusText !== "none" && (
          <span className="text-my-gray">{statusText}</span>
        )}
      </div>
    </button>
  );
}
