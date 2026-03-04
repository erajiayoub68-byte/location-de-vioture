# (1) Architecture + Project Structure

## Stack
- **Monorepo (pnpm workspaces)**
- `apps/web`: Next.js App Router + TS + Tailwind-ready structure + i18n URLs (`/ar`, `/fr`, `/en`).
- `apps/api`: NestJS + Prisma + PostgreSQL + Redis + JWT/RBAC-ready module boundaries.
- `packages/shared`: Zod schemas + shared types.

## Structure
```txt
/apps/web
/apps/api
/packages/shared
/docker-compose.yml
/.env.example
```

## Rendering Strategy
- Home/Public pages: SSR/ISR.
- City pages: ISR (`revalidate`).
- Car details: ISR.
- Blog: SSG/ISR.

# (2) Prisma Schema كامل
- يوجد بشكل كامل في: `apps/api/prisma/schema.prisma`
- يدعم جميع الجداول المطلوبة: City/CityTranslation, Car/CarTranslation, BlogPost/BlogPostTranslation, LandingPage/LandingPageTranslation, Booking, Review, User, PriceRule, Season, Media.

# (3) NestJS Modules + Controllers + DTOs + Services الأساسية

## Modules
- `AuthModule`
- `CitiesModule`
- `CarsModule`
- `BookingsModule`
- `BlogModule`
- `LandingsModule`

## Public Endpoints implemented (base prefix `/api`)
- `GET /api/cities?lang=fr`
- `GET /api/cities/:slug?lang=ar`
- `GET /api/cars?city=&start=&end=&gear=`
- `GET /api/cars/:slug?lang=en`
- `POST /api/bookings`
- `GET /api/blog?lang=fr`
- `GET /api/blog/:slug?lang=ar`
- `GET /api/landings/:slug?lang=en`

## Admin Endpoints (Protected design)
- نفس الموارد مع CRUD تحت مسار مثل `/api/admin/*` مع JWT + Roles (`ADMIN`, `EDITOR`, `AGENT`) كخطوة تالية مباشرة.

## Request/Response example
### POST /api/bookings
```json
{
  "carId": "clx1",
  "cityId": "cty1",
  "startDate": "2026-07-02T10:00:00.000Z",
  "endDate": "2026-07-07T10:00:00.000Z",
  "pickupType": "airport",
  "pickupLocation": "CMN Terminal 1",
  "insuranceChosen": true,
  "customerName": "Ali Ben",
  "customerEmail": "ali@example.com",
  "customerPhone": "+212600000000"
}
```
```json
{
  "reference": "BK-12345678",
  "status": "pending",
  "message": "Booking created with transactional availability check"
}
```

# (4) Next.js pages الأساسية + Admin + UI Components

## Implemented route skeletons
- `/{lang}` home
- `/{lang}/search`
- `/{lang}/cars/{slug}`
- `/{lang}/blog`
- `/{lang}/blog/{slug}`
- `/{lang}/deals`
- `/{lang}/deals/{slug}`
- `/{lang}/admin`

## Admin scope (ready for expansion)
- dashboard, cars CRUD, cities CRUD, bookings management, pricing rules, blog CRUD, landing CRUD, reviews moderation, users/roles, settings.

## Reusable components plan
- SearchWidget, CarCard, CityCard, ReviewCarousel, FAQAccordion, PriceBreakdown, LanguageSwitcher.

# (5) SEO: sitemap + robots + metadata + json-ld + hreflang
- `robots.ts` configured with sitemap URL.
- `sitemap.ts` returns sitemap index URLs for each lang/content type.
- Dynamic sitemap route handlers موجودة في `app/sitemaps/*.xml/route.ts`.
- `lib/seo.ts` يحتوي canonical + hreflang alternates.
- `lib/jsonld.ts` يحتوي Organization + Product/Offer JSON-LD helpers.

# (6) Docker Compose + env example
- `docker-compose.yml` يشمل: Postgres, Redis, optional MinIO, API, Web.
- `.env.example` يتضمن متغيرات API/Web و URLs و JWT secrets.

# (7) Seed script (AR/FR/EN)
- `apps/api/prisma/seed.ts` يزرع:
  - مدينة Casablanca بثلاث لغات وبمحتوى مختلف.
  - سيارة Dacia Duster بثلاث لغات.
  - مقالة Blog بثلاث لغات بمحتوى غير متطابق حرفيًا.

# (8) خطوات التشغيل المحلية + أوامر pnpm
```bash
cp .env.example .env
pnpm install
pnpm --filter api prisma:generate
pnpm --filter api prisma:migrate
pnpm seed
pnpm dev
```

## تشغيل عبر Docker
```bash
docker compose up --build
```

## ملاحظات فنية مهمة
- لا يوجد اعتماد إجباري على خدمات مدفوعة.
- الترجمات الديناميكية تأتي من DB Translation tables.
- fallback locale = `fr`.
- بنية SEO/i18n جاهزة للتوسع إلى مئات landing pages.
