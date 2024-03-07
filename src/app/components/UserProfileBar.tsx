import UserProfileIcon, {
  UserProfileIconStates,
  type UserProfileIconProps,
} from "./UserProfileIcon";

type UserProfileBarProps = {
  userName?: string;
  userIconProps?: UserProfileIconProps;
};

export default function UserProfileBar({
  userName = "No name assigned",
  userIconProps,
}: UserProfileBarProps) {
  const statusIndicatorTextVariants: {
    [key in UserProfileIconStates]: string;
  } = {
    none: "none",
    "do not disturb": "do not disturb",
    away: "away",
    online: "online 4hr ago",
    typing: "typing...",
  };

  const statusText: string =
    userIconProps &&
    userIconProps.profileState &&
    userIconProps.profileState !== "none"
      ? statusIndicatorTextVariants[userIconProps.profileState]
      : "none";

  return (
    <div className="flex items-center gap-2.5">
      <UserProfileIcon
        imageSrc={userIconProps?.imageSrc}
        profileState={userIconProps?.profileState}
      />
      <div className="flex flex-col gap-0.5 mt-0.5 leading-none">
        <span className="font-bold">{userName}</span>
        {statusText !== "none" && (
          <span className="text-my-gray">{statusText}</span>
        )}
      </div>
    </div>
  );
}
