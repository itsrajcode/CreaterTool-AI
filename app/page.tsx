import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Level Up Your Content
        <strong className="font-extrabold bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent sm:block"> With CreatorTool AI. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-primary px-12 py-3 text text-white shadow hover:scale-105 transition-all font-semibold focus:outline-none focus:ring  sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </Link>

        
      </div>
    </div>
  </div>
</section>
    </>
  );
}
