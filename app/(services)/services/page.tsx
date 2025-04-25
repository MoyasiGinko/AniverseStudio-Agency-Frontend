import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left mb-6">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Image
                src="/icons/web-design.svg"
                alt="Web Design"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600">
              Beautiful, responsive websites that capture your brand's essence
              and engage your audience.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Image
                src="/icons/development.svg"
                alt="Development"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-gray-600">
              Custom mobile and web applications built to solve your unique
              business challenges.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Image
                src="/icons/marketing.svg"
                alt="Marketing"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600">
              Strategic campaigns that drive traffic, generate leads, and
              increase your online presence.
            </p>
          </div>
        </div>

        <button className="mt-8 bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition-colors">
          Contact Us
        </button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Terms
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Privacy
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Contact
        </a>
        <p className="text-gray-500">
          © 2023 Aniverse Studio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
