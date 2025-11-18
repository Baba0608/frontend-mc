import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="h-screen bg-blue-500 p-4 flex flex-col gap-10">
          <p className="bg-red-500 p-4 rounded-xl">
            Frontend Machine Coding Questions
          </p>

          <div>
            <Link
              href="/counter"
              className="text-xl bg-green-300 p-4 rounded-xl text-black"
            >
              Counter
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
