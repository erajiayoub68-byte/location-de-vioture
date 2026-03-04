import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.booking.deleteMany();
  await prisma.carTranslation.deleteMany();
  await prisma.car.deleteMany();
  await prisma.cityTranslation.deleteMany();
  await prisma.city.deleteMany();
  await prisma.blogPostTranslation.deleteMany();
  await prisma.blogPost.deleteMany();

  const casablanca = await prisma.city.create({
    data: {
      translations: {
        create: [
          {
            lang: 'fr',
            name: 'Casablanca',
            slug: 'casablanca',
            description: 'Location de voitures premium à Casablanca avec livraison rapide.',
            seoTitle: 'Location voiture Casablanca | Offres 2026',
            seoDesc: 'Réservez votre véhicule à Casablanca en quelques clics.' ,
            faqJson: [{ q: 'Quels documents ?', a: 'CIN ou passeport + permis valide.' }]
          },
          {
            lang: 'en',
            name: 'Casablanca',
            slug: 'casablanca',
            description: 'Smart car rentals in Casablanca with airport and downtown pickup.',
            seoTitle: 'Rent a car in Casablanca | Best value deals',
            seoDesc: 'Book reliable cars in Casablanca with transparent pricing.',
            faqJson: [{ q: 'Can I pay on pickup?', a: 'Yes, cash and card are both accepted.' }]
          },
          {
            lang: 'ar',
            name: 'الدار البيضاء',
            slug: 'الدار-البيضاء',
            description: 'كراء سيارات في الدار البيضاء بخدمة سريعة وأسعار واضحة.',
            seoTitle: 'كراء سيارات الدار البيضاء | عروض يومية',
            seoDesc: 'احجز سيارتك في الدار البيضاء مع خيارات المطار ووسط المدينة.',
            faqJson: [{ q: 'هل التوصيل متاح للمطار؟', a: 'نعم، التوصيل متاح في مطار محمد الخامس.' }]
          }
        ]
      }
    }
  });

  const car = await prisma.car.create({
    data: {
      cityId: casablanca.id,
      basePricePerDay: 420,
      airportSurcharge: 80,
      insurancePerDay: 60,
      longDurationPercent: 10,
      seats: 5,
      doors: 5,
      gear: 'automatic',
      fuelType: 'diesel',
      translations: {
        create: [
          {
            lang: 'fr',
            name: 'Dacia Duster Automatique',
            slug: 'dacia-duster-automatique-casablanca',
            description: 'SUV idéal pour routes urbaines et escapades weekend.',
            seoTitle: 'Dacia Duster automatique à Casablanca',
            seoDesc: 'Louez une Dacia Duster confortable avec assurance optionnelle.'
          },
          {
            lang: 'en',
            name: 'Dacia Duster Automatic',
            slug: 'dacia-duster-automatic-casablanca',
            description: 'Comfortable SUV for city rides and long-distance trips.',
            seoTitle: 'Dacia Duster automatic in Casablanca',
            seoDesc: 'Flexible daily pricing with instant booking confirmation.'
          },
          {
            lang: 'ar',
            name: 'داسيا داستر أوتوماتيك',
            slug: 'داسيا-داستر-اوتوماتيك-الدار-البيضاء',
            description: 'سيارة SUV مريحة للتنقل اليومي والرحلات الطويلة.',
            seoTitle: 'داسيا داستر أوتوماتيك في الدار البيضاء',
            seoDesc: 'سعر يومي واضح مع إمكانية إضافة التأمين.'
          }
        ]
      }
    }
  });

  await prisma.blogPost.create({
    data: {
      category: 'guides',
      tags: ['casablanca', 'airport', 'tips'],
      isPublished: true,
      publishedAt: new Date(),
      translations: {
        create: [
          {
            lang: 'fr',
            title: 'Guide 2026: louer une voiture à l’aéroport Mohammed V',
            slug: 'guide-location-voiture-aeroport-casablanca',
            excerpt: 'Nos conseils pour éviter les frais cachés et gagner du temps.',
            contentMd: '# Astuces\nChoisissez la bonne heure de retrait...',
            seoTitle: 'Guide location voiture aéroport Casablanca',
            seoDesc: 'Comparez assurance, carburant et options de restitution.'
          },
          {
            lang: 'en',
            title: '2026 Guide: renting a car at Casablanca airport',
            slug: 'casablanca-airport-car-rental-guide',
            excerpt: 'Everything you need for a smooth pickup and return.',
            contentMd: '# Checklist\nBring your driving license and passport...',
            seoTitle: 'Casablanca airport car rental guide',
            seoDesc: 'Pickup strategy, insurance notes, and driving advice.'
          },
          {
            lang: 'ar',
            title: 'دليل 2026: كراء سيارة من مطار محمد الخامس',
            slug: 'دليل-كراء-سيارة-مطار-محمد-الخامس',
            excerpt: 'نصائح عملية لتفادي المصاريف الإضافية وتسريع الاستلام.',
            contentMd: '# قبل الاستلام\nتأكد من نوع التأمين وعدد الكيلومترات...',
            seoTitle: 'دليل كراء سيارات مطار الدار البيضاء',
            seoDesc: 'كل ما تحتاجه للاستلام السريع والقيادة الآمنة.'
          }
        ]
      }
    }
  });

  console.log(`Seeded city=${casablanca.id} car=${car.id}`);
}

main().finally(() => prisma.$disconnect());
