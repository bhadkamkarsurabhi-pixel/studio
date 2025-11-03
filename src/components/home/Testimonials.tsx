import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Words of Harmony
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our community is saying about their Charmony experience.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mt-12 w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatar = PlaceHolderImages.find(
                (img) => img.id === testimonial.avatarId
              );
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="border-none bg-transparent shadow-none">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        {avatar && (
                          <Image
                            src={avatar.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={avatar.imageHint}
                            width={80}
                            height={80}
                            className="mb-4 rounded-full"
                          />
                        )}
                        <blockquote className="max-w-xl text-lg font-medium text-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 font-headline text-base font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
