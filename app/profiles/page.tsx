import Image from "next/image";
import Link from "next/link";

const profiles = [
  {
    name: "default-blue",
    img: "/assets/profile-img/default-blue.png",
  },
  {
    name: "default-green",
    img: "/assets/profile-img/default-green.png",
  },
  {
    name: "default-red",
    img: "/assets/profile-img/default-red.png",
  },
];

type Props = {};
const Profiles = (props: Props) => {
  return (
    <main className="flex items-center h-full justify-center">
      <div className="flex flex-col" id="profile-selector">
        <h1 className="text-3xl mb:text-6xl text-white text-center">
          Who&apos;s Watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          {profiles.map((profile, _) => (
            <Link href={`/`} key={_}>
              <div className="group flex-row w-44 mx-auto">
                <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer grouo-hover:border-white overflow-hidden">
                  <Image
                    src={profile.img}
                    alt="Profile Image"
                    width={200}
                    height={200}
                  />
                </div>
                <p className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                  {profile.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Profiles;
