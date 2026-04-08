# Finanzinvest Modern - Proje Talimatlari

## Proje Ozeti
Finanzinvest Vermogensmanagement icin modern web sitesi. React + TypeScript + Vite + Tailwind CSS.

## Tech Stack
- **Frontend**: React 19, TypeScript 5.8, Vite 7
- **Styling**: Tailwind CSS 3.4, Framer Motion
- **Routing**: React Router DOM 7
- **i18n**: i18next (Almanca/Turkce/Ingilizce)
- **Backend**: Supabase, Firebase
- **Payment**: Stripe
- **Charts**: Recharts
- **Deploy**: Netlify

## Dizin Yapisi
- `src/components/` - React bileşenleri
- `src/pages/` - Sayfa bileşenleri
- `src/contexts/` - React context'leri
- `src/data/` - Statik veri dosyalari
- `src/i18n/` - Ceviri dosyalari
- `src/router/` - Route tanimlari
- `src/mocks/` - Mock veriler
- `public/` - Statik dosyalar

## Komutlar
- `npm run dev` - Gelistirme sunucusu
- `npm run build` - Production build
- `npm run preview` - Build onizleme
- `npm run lint` - ESLint
- `npm run type-check` - TypeScript kontrol

## Kurallar
- Dil: Almanca UI, kod yorumlari Turkce
- Tum metin icerikleri i18next uzerinden
- Tailwind class'lari kullan, inline style yazma
- Component'ler functional + hooks ile
- Type safety: any kullanma, strict TypeScript
- Framer Motion ile animasyonlar
