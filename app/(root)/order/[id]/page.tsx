import { getOrderById } from '@/lib/actions/order-actions';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OrderDetailsTable from './order-details-table';
import { ShippingAddress } from '@/types';

export const metadata: Metadata = {
  title: 'Order Details',
};

interface OrderPageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function OrderDetailsPage({ params }: OrderPageProps) {
  const { id } = await params;
  const order = await getOrderById(id);
  if (!order) notFound();

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
    />
  );
}
