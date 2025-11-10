import React from 'react';
import { cn } from '@/lib/utils';
function ProductPrice({
  value,
  className,
}: {
  value?: number;
  className?: string;
}) {
  // Ensure two decimal values
  const stringValue = value?.toFixed(2);
  // Get int / float value
  const [intValue, floatValue] = stringValue?.split('.');
  return (
    <p className={cn('text-2xl', className)}>
      <span className="text-2xl  font-bold">${intValue}</span>
      <span className="text-sm align-super">.{floatValue}</span>
    </p>
  );
}

export default ProductPrice;
