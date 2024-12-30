import { buttonVariants } from '@/components/ui/button';
import { satisfy } from '@/components/ui/fonts';
import { Routes } from '@/constants/enums';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Hero() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-start gap-5 md:py-10">
        <h1 className={`${satisfy.className} text-3xl font-bold`}>
          Your Celebration, Our Creation
        </h1>
        <p className="text-gray-500">
          Welcome to{" "}
          <span className={`${satisfy.className} text-primary`}>Cakeify</span>,
          where every bite is a celebration! Whether you’re planning a birthday,
          wedding, or any special moment, we craft custom cakes, cupcakes, and
          desserts that taste as amazing as they look. From classic flavors to
          creative designs, Cakeify is here to turn your sweetest dreams into
          reality. Let us make your moments unforgettable—one delicious slice at
          a time!
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href={`/${Routes.MENU}`} className={`${buttonVariants()} uppercase`}>
            Order Now
            <ArrowRight />
          </Link>
          <Link
            href={`/${Routes.ABOUT}`}
            className="flex items-center gap-1 hover:text-primary transition-all font-semibold text-sm"
          >
            Learn More
            <ArrowRight size={16} strokeWidth={2}/>
          </Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/assets/images/cake.png"}
          alt="Cake"
          fill
          loading="eager"
          priority
          className='object-contain'
        />
      </div>
    </section>
  );
}
