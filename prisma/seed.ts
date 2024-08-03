import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
   await prisma.course.deleteMany();

   await prisma.course.createMany({
      data: [
         {
            title: 'React Native1',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
         {
            title: 'React Native2',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
         {
            title: 'React Native3',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
         {
            title: 'React Native4',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
         {
            title: 'React Native5',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
         {
            title: 'React Native6',
            descriptions: 'React Native: The Practical Guide [2021 Edition]',
            language: 'English',
            level: 'Beginner',
            price: 19.99,
            discountPrice: 9.99,
            category: ['Mobile Development', 'React Native'],
            thumnailURL:
               'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            updateAt: '2021-07-01',
            status: 'Active',
         },
      ],
   });

   const allUsers = await prisma.course.findMany();
   console.dir(allUsers, { depth: null });
}

main()
   .catch(async (e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
