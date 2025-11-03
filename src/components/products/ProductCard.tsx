import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn(
            'h-4 w-4',
            i < Math.round(rating) ? 'text-primary' : 'text-gray-300'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.25 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const firstImage = PlaceHolderImages.find(
    (img) => img.id === product.imageIds[0]
  );
  const secondImage = product.imageIds[1]
    ? PlaceHolderImages.find((img) => img.id === product.imageIds[1])
    : firstImage;

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-64 w-full">
          {firstImage && (
            <Image
              src={firstImage.imageUrl}
              alt={product.name}
              data-ai-hint={firstImage.imageHint}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
          )}
          {secondImage && (
            <Image
              src={secondImage.imageUrl}
              alt={product.name}
              data-ai-hint={secondImage.imageHint}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>
      </Link>
      {product.discount && (
        <Badge
          variant="destructive"
          className="absolute top-3 left-3 bg-primary text-primary-foreground"
        >
          {product.discount}% OFF
        </Badge>
      )}
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card/80 text-card-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
      >
        <Heart className="h-4 w-4" />
        <span className="sr-only">Add to wishlist</span>
      </Button>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-headline text-lg font-medium text-foreground">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <div className="mt-4 flex flex-1 items-end justify-between">
          <div>
            <p
              className={cn(
                'text-lg font-semibold text-foreground',
                product.discount && 'text-primary'
              )}
            >
              $
              {product.discount
                ? (
                    product.price *
                    (1 - product.discount / 100)
                  ).toFixed(2)
                : product.price.toFixed(2)}
            </p>
            {product.discount && (
              <p className="text-sm text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
