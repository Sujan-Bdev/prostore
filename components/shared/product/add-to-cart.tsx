'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CartItem } from '@/types';
import { useRouter } from 'next/navigation';
import { addItemToCart } from '@/lib/actions/cart-actions';
import { Plus } from 'lucide-react';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res?.success) {
      toast.error(res?.message);
      return;
    }
    // handle success add to cart
    toast.success(`${res?.message}`, {
      action: (
        <Button
          className="bg-primary text-white hover:bg-gray-800"
          onClick={() => router.push('/cart')}
        >
          Go To Cart
        </Button>
      ),
    });
   


  };
  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus/>Add to cart
    </Button>
  );
};

export default AddToCart;
