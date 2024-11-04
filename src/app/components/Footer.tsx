import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";



const Footer = () => {
  return (
    <div className='py-80'>
      <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex  justify-around">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Core Courses</h3>
            <ul className="space-y-2 text-lg">
              <li>Programming Fundamentals</li>
              <li>Web2 Using NextJS</li>
              <li>Earn as You Learn</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Advanced Courses</h3>
            <ul className="space-y-2 text-lg">
              <li>Web 3 and Metaverse</li>
              <li>Cloud-Native Computing</li>
              <li>Artificial Intelligence (AI) and Deep Learning</li>
              <li>Ambient Computing and IoT</li>
              <li>Genomics and Bioinformatics</li>
              <li>Network Programmability and Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Social Links</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.facebook.com/TeamKTessori">
                <FaFacebookF className="text-white w-6 h-6 bg-blue-800 rounded-full py-1" />
              </Link>
              <Link href="https://www.youtube.com/@KamranTessorikk">
                <FaYoutube className="text-white w-6 h-6 bg-red-600 rounded-full py-1" />
              </Link>
              <Link href="https://twitter.com/KamranTessoriPk">
                <FaTwitter className="text-white w-6 h-6 bg-blue-500 rounded-full py-1" />
              </Link>
              <Link href="https://www.instagram.com/KamranTessoriPk/">
                <FaInstagram className="text-white w-6 h-6 bg-pink-400 rounded-full py-1" />
              </Link>
              <Link href="https://www.tiktok.com/@KamranTessoriPk">
                <FaTiktok className="text-white w-6 h-6 bg-black rounded-full py-1" />
              </Link>
            </div>
            <Link
              href="mailto:education@goversindh.com "
              className="text-blue-800 underline flex items-center gap-3"
            >
              <AiTwotoneMail className='size-6'/>
              education@goversindh.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
