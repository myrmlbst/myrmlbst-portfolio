'use client';

import Hero from "@/components/hero";
import Grid from "@/components/Grid";
// import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });

export default function Home () {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}