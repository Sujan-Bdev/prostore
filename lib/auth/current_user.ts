import { auth } from '@/auth';
import prisma from '@/db/prisma';

import 'server-only';

export async function getCurrentUser() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) return null;

  const currentUser = await prisma.user.findFirst({
    where: { id: userId },
  });

  return currentUser;
}

// If you want to force an error instead of returning null
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not found');
  return user;
}
