import { auth } from '@/auth';
import { getUserById } from '@/lib/actions/user.actions';
import { requireUser } from '@/lib/auth/current_user';
import { Metadata } from 'next';
import PaymentMethodForm from './payment_method_form';
import CheckoutSteps from '@/components/shared/checkout-steps';

export const metadata: Metadata = {
  title: 'Select Payment Method',
};
const PaymentMethodPage = async () => {
  const userId = (await requireUser()).id;
  const user = await getUserById(userId);
  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethodPage;
