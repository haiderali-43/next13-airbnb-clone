"use client";
import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        height={30}
        width={30}
        alt="Avatar"
        className="rounded-full"
        src={"/placeholder.jpg"}
      />
    </div>
  );
};

export default Avatar;
