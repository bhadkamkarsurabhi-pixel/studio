import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';

const promoImage1 = PlaceHolderImages.find((p) => p.id === 'promo-1');
const promoImage2 = PlaceHolderImages.find((p) => p.id === 'promo-2');

export function Promotions() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-lg bg-card p-8 text-center text-card-foreground">
             {promoImage1 && (
              <Image
                src={promoImage1.imageUrl}
                alt={promoImage1.description}
                data-ai-hint={promoImage1.imageHint}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center text-white">
              <h3 className="font-headline text-3xl font-semibold">Limited Time Offer</h3>
              <p className="mt-2 text-lg">Get 15% off all Skincare</p>
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/shop?category=skincare">Shop Skincare</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-lg bg-card p-8 text-center text-card-foreground">
            {promoImage2 && (
              <Image
                src={promoImage2.imageUrl}
                alt={promoImage2.description}
                data-ai-hint={promoImage2.imageHint}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center text-white">
              <h3 className="font-headline text-3xl font-semibold">Free Shipping</h3>
              <p className="mt-2 text-lg">On orders over $50</p>
               <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
