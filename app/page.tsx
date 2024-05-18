/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BVynGgWpKhS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import { motion } from "framer-motion"

interface IconProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function Home() {
  return (
    <div key="1" className="bg-[#ffd90f] text-gray-950">
      <header className="fixed top-0 z-50 w-full border-b border-gray-950 bg-gray-950 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
            <h2><Link className="text-[#ffd90f] font-bold text-2xl" href="#">
            KhanCoin
            </Link>
	    </h2>
          <nav className="hidden space-x-4 md:flex">
            <Link className="text-[#ffd90f]" href="#">
              Home
            </Link>
            <Link className="text-[#ffd90f]" href="#">
              About
            </Link>
            <Link className="text-[#ffd90f]" href="#">
              Roadmap
            </Link>
            <Link className="text-[#ffd90f]" href="#">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" variant="outline">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main>
        <section
          className="relative h-screen w-full bg-[url('/meme-coin.jpg')] bg-cover bg-center bg-no-repeat"
          id="hero"
        >
          <div className="absolute inset-0 bg-[#ffd90f] bg-opacity-80" />
          <div className="container mx-auto flex h-full items-center justify-center px-4">
            <div className="z-10 text-center">
              <Image
                  alt="khan coin"
                  className="mx-auto mb-8"
                  height={300}
		  width={200}
                  src="/genghis.svg"
              />
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">Welcome to KhanCoin</h1>
              <p className="mt-4 text-lg text-gray-950">The ultimate meme coin for the dankest of investors.</p>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#ffd90f]" id="about">
          <div className="container mx-auto px-4">
             <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-950">About MemeShiba</h2>
                <p className="mt-4 text-gray-950">
                  MemeShiba is a decentralized cryptocurrency that was created as a tribute to the popular Doge meme.
                  Our mission is to bring the dankest memes to the blockchain and provide a fun and engaging investment
                  opportunity for our community.
                </p>
                <p className="mt-4 text-gray-950">
                  With a strong focus on community engagement and meme-inspired development, MemeShiba is poised to
                  become the go-to meme coin for the next generation of crypto enthusiasts.
                </p>
              </div>
	      <div className="relative aspect-square flex justify-center  items-center h-min">
	      <Image
		  src="/noMus.svg"
		  alt="genghis face"
		  height={350}
		  width={350}>
	      </Image>
	      <motion.div className="absolute z-10"
			  style={{ transform: 'translate(-60%, 97%)' }}
	      >
		  <Image
		      src="/Lmus.svg"
		      alt="left mustache"
		      height={100}
		      width={100}>
		  </Image>
	      </motion.div>
	      <motion.div className="absolute z-10"
			  style={{ transform: 'translate(60%, 97%)' }}
	      >
		  <Image
		      src="/Rmus.svg"
		  alt="right mustache"
		  height={100}
		  width={100}>
		  </Image>
	      </motion.div>
	      </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-950">Key Features</h2>
                <ul className="mt-4 space-y-4 text-gray-950">
                  <li>
                    <RocketIcon className="mr-2 inline-block h-6 w-6 text-gray-950" />
                    Deflationary tokenomics to drive price appreciation
                  </li>
                  <li>
                    <WalletIcon className="mr-2 inline-block h-6 w-6 text-gray-950" />
                    Secure and decentralized blockchain infrastructure
                  </li>
                  <li>
                    <TrendingUpIcon className="mr-2 inline-block h-6 w-6 text-gray-950" />
                    Exciting roadmap with new features and partnerships
                  </li>
                  <li>
                    <UsersIcon className="mr-2 inline-block h-6 w-6 text-gray-950" />
                    Vibrant and engaged community of meme enthusiasts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#ffd90f] aspect-video" id="roadmap">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-950">Roadmap</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-950 p-6 shadow">
                <h3 className="text-xl font-bold text-[#ffd90f]">Q1 2023</h3>
                <ul className="mt-4 space-y-2 text-[#ffd90f]">
                  <li>
                    <RocketIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Token launch and initial exchange listings
                  </li>
                  <li>
                    <WalletIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Decentralized wallet integration
                  </li>
                  <li>
                    <UsersIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Community-driven meme contests and airdrops
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-950 p-6 shadow">
                <h3 className="text-xl font-bold text-[#ffd90f]">Q2 2023</h3>
                <ul className="mt-4 space-y-2 text-[#ffd90f]">
                  <li>
                    <TrendingUpIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Governance token and DAO implementation
                  </li>
                  <li>
                    <RocketIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Partnerships with major meme-focused platforms
                  </li>
                  <li>
                    <WalletIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Mobile wallet app development
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-950 p-6 shadow">
                <h3 className="text-xl font-bold text-[#ffd90f]">Q3 2023</h3>
                <ul className="mt-4 space-y-2 text-[#ffd90f]">
                  <li>
                    <RocketIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Meme-inspired NFT marketplace launch
                  </li>
                  <li>
                    <TrendingUpIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Decentralized exchange (DEX) integration
                  </li>
                  <li>
                    <UsersIcon className="mr-2 inline-block h-5 w-5 text-[#ffd90f]" />
                    Expanded community engagement initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-[#ffd90f] aspect-video" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-950">Get in Touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <p className="text-gray-950">
                  Have any questions or want to get involved with the MemeShiba community? Don't hesitate to reach out!
                </p>
                <form className="mt-6 space-y-4">
                  <Input className="w-full" placeholder="Name" type="text" />
                  <Input className="w-full" placeholder="Email" type="email" />
                  <Textarea className="w-full" placeholder="Message" />
                  <Button className="w-full" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-950 p-6 shadow">
                  <h3 className="text-xl font-bold text-[#ffd90f]">Join our Discord</h3>
                  <p className="mt-2 text-[#ffd90f]">
                    Connect with the MemeShiba community and stay up to date on the latest news and updates.
                  </p>
                  <Link
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-[#ffd90f] px-4 py-2 text-gray-950 font-medium hover:bg-[#ffd90f]/90"
                    href="#"
                  >
                    <DiscIcon className="mr-2 h-5 w-5" />
                    Join Now
                  </Link>
                </div>
                <div className="rounded-lg bg-gray-950 p-6 shadow">
                  <h3 className="text-xl font-bold text-[#ffd90f]">Follow us on Twitter</h3>
                  <p className="mt-2 text-[#ffd90f]">Stay up to date on the latest MemeShiba news and announcements.</p>
                  <Link
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-[#ffd90f] px-4 py-2 text-gray-950 font-medium hover:bg-[#ffd90f]/90"
                    href="#"
                  >
                    <TwitterIcon className="mr-2 h-5 w-5" />
                    Follow Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-4 text-center text-[#ffd90f]">© 2024 MemeShiba. All rights reserved.</div>
      </footer>
    </div>
  )
}

function DiscIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function MenuIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function RocketIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function TrendingUpIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function TwitterIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UsersIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
