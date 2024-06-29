import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'teste@email.com' },
    update: {},
    create: {
      email: 'teste@email.com',
      name: 'Teste',
      password: '123456',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'johndoe@email.com' },
    update: {},
    create: {
      email: 'johndoe@email.com',
      name: 'John Doe',
      password: 'senha123',
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
