import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white bg-secondary">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="text-4xl font-headline text-white sm:text-5xl md:text-6xl drop-shadow-lg">
          Elegance in Every Drop
        </h1>
        <p className="max-w-xl text-lg text-gray-200 drop-shadow-md">
          Discover our curated collection of luxury beauty essentials, crafted
          to bring harmony to your daily ritual.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/shop">
            Explore Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
