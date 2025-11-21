import { getOrderById } from '@/lib/actions/order-actions';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Order Details',
};

interface OrderPageProps {
  params: {
    id: string;
  };
}
export default async function OrderDetailsPage({ params }: OrderPageProps) {
  const { id } = await params;
  const order = await getOrderById(id);
  if (!order) notFound();

  return <div>Details</div>;
}
