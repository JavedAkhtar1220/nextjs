import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { data: session } = useSession();

  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-[#0199dc] shadow-md p-5 md:px-10">
      {/* Dynamic Logo */}
      <div className="relative flex justify-center items-center h-8 my-auto ">
        <Image
          onClick={() => router.push("/")}
          src={"/logo-with-text.svg"}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="absolute cursor-pointer"
        />
      </div>
      {/* Search Bar */}
      {/* Menu and User Control */}
      {session ? (
        <>
          <div className="flex items-center space-x-4 justify-end text-gray-50">
            <p onClick={signOut} className="hidden md:inline cursor-pointer">
              Hello, {session.user.name}
            </p>
            <div className="flex items-center space-x-2 p-2 cursor-pointer">
              <MenuIcon className="h-6" />
              <Image src={session.user.image} className="h-6 rounded-full" />
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => router.push("/auth/signin")}
          className="text-white"
        >
          Sign in
        </button>
      )}
    </header>
  );
}

export default Header;
