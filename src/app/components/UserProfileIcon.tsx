import {
  type ImageAsset,
  useRive,
  decodeImage,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

export type UserProfileIconStates =
  | "none"
  | "online"
  | "do not disturb"
  | "away"
  | "typing";

export type UserProfileIconProps = {
  imageSrc?: string;
  profileState?: UserProfileIconStates;
};

export default function UserProfileIcon({
  imageSrc = "/user_profile_icon/User Profile-1238609.png",
  profileState = "none",
}: UserProfileIconProps) {
  const UserProfileIconDictionary = {
    none: 0,
    online: 1,
    "do not disturb": 2,
    away: 3,
    typing: 4,
  };

  const setImageAsset = (imageAsset: ImageAsset, src: string): void => {
    fetch(src).then(async (res) => {
      console.log("doing this");
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      imageAsset.setRenderImage(image);
      image.unref();
    });
  };

  const { rive, RiveComponent } = useRive({
    src: "/user_profile_icon/user_profile_icon.riv",
    stateMachines: "User Profile Image",
    autoplay: true,
    assetLoader: (asset) => {
      if (asset.isImage) {
        const imageAsset = asset as ImageAsset;
        setImageAsset(imageAsset, imageSrc);
        return true;
      } else {
        return false;
      }
    },
  });

  const riveIconStateInput = useStateMachineInput(
    rive,
    "User Profile Image",
    "State",
    UserProfileIconDictionary[profileState]
  );

  useEffect(() => {
    if (riveIconStateInput) {
      riveIconStateInput.value = UserProfileIconDictionary[profileState];
    }
  }, [riveIconStateInput, profileState]);

  return (
    <div className="aspect-square min-w-10 min-h-10 w-10 h-10">
      <RiveComponent />
    </div>
  );
}
