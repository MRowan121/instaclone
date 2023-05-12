import { getProviders, signIn } from "next-auth/react";
import Header from "@/components/Header";
import Image from "next/legacy/image";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://cdn-hfccj.nitrocdn.com/ZcdvpPrOuqiIRmmNafzktyViRdxlsNrE/assets/images/optimized/rev-a55c25a/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram image"
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                src="https://www.blookup.com/en/blog/wp-content/uploads/2018/10/klan-loup-instagram.png"
                alt="instagram logo"
                className="w-32 object-cover"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes.
              </p>
              <button
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
