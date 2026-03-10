const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = '/home/killermasterturkey/Desktop/gorseller';
const BASE_URL = 'http://localhost:3000';

// Demo user data (from users.ts)
const DEMO_USER = {
  id: 'user-001',
  email: 'demo@demo.com',
  password: 'demo123',
  firstName: 'Max',
  lastName: 'Mustermann',
  phone: '+49 (0)89 588088170',
  address: 'Friedrichstraße 123',
  city: 'Berlin',
  postalCode: '10117',
  country: 'Deutschland',
  dateOfBirth: '15.03.1985',
  nationality: 'Deutsch',
  idNumber: 'DE123456789',
  taxId: '12/345/67890',
  createdAt: '2025-01-15'
};

// All pages to capture
const pages = [
  // Main website pages
  { url: '/', name: '01-anasayfa' },
  { url: '/ueber-uns', name: '02-ueber-uns' },
  { url: '/team', name: '03-team' },
  { url: '/blog', name: '04-blog' },
  { url: '/maerkte', name: '05-maerkte' },
  { url: '/kontakt', name: '06-kontakt' },
  { url: '/leistungen/festgeld', name: '07-leistungen-festgeld' },
  { url: '/leistungen/flexgeld', name: '08-leistungen-flexgeld' },
  { url: '/leistungen/tagesgeld', name: '09-leistungen-tagesgeld' },
  { url: '/leistungen/aktien', name: '10-leistungen-aktien' },
  { url: '/leistungen/anleihen', name: '11-leistungen-anleihen' },
  { url: '/impressum', name: '12-impressum' },
  { url: '/datenschutz', name: '13-datenschutz' },
  { url: '/rechtliche-hinweise', name: '14-rechtliche-hinweise' },
  { url: '/login', name: '15-login' },

  // Dashboard pages (require login)
  { url: '/dashboard', name: '16-dashboard', requiresAuth: true },
  { url: '/dashboard/festgeld', name: '17-dashboard-festgeld', requiresAuth: true },
  { url: '/dashboard/flexgeld', name: '18-dashboard-flexgeld', requiresAuth: true },
  { url: '/dashboard/tagesgeld', name: '19-dashboard-tagesgeld', requiresAuth: true },
  { url: '/dashboard/aktien', name: '20-dashboard-aktien', requiresAuth: true },
  { url: '/dashboard/anleihen', name: '21-dashboard-anleihen', requiresAuth: true },
  { url: '/dashboard/profil', name: '22-dashboard-profil', requiresAuth: true },

  // Static angebot pages
  { url: '/angebot/festgeld.html', name: '23-angebot-festgeld' },
  { url: '/angebot/flexgeld.html', name: '24-angebot-flexgeld' },
  { url: '/angebot/tagesgeld.html', name: '25-angebot-tagesgeld' },
  { url: '/angebot/aktien.html', name: '26-angebot-aktien' },
  { url: '/angebot/anleihen.html', name: '27-angebot-anleihen' },

  // Fetrag pages
  { url: '/fetrag/', name: '28-fetrag' },
  { url: '/fetrag0001/', name: '29-fetrag0001' },
  { url: '/fetrag0002/', name: '30-fetrag0002' },
];

// Sleep helper
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Scroll entire page to load all lazy content
async function scrollFullPage(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const getScrollHeight = () => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    let currentPosition = 0;
    const scrollStep = 400;
    let lastHeight = getScrollHeight();

    while (currentPosition < lastHeight) {
      window.scrollTo(0, currentPosition);
      await delay(200);
      currentPosition += scrollStep;

      const newHeight = getScrollHeight();
      if (newHeight > lastHeight) {
        lastHeight = newHeight;
      }
    }

    window.scrollTo(0, lastHeight);
    await delay(800);

    window.scrollTo(0, 0);
    await delay(500);
  });
}

// Wait for all images and fonts to load
async function waitForFullLoad(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(images.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
        setTimeout(resolve, 5000);
      });
    }));

    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    await delay(500);
  });
}

// Set localStorage for authentication
async function setAuthLocalStorage(page) {
  await page.evaluate((userData) => {
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }, DEMO_USER);
}

async function captureScreenshots() {
  console.log('='.repeat(50));
  console.log('SCREENSHOT CAPTURE STARTING');
  console.log('='.repeat(50));
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Total pages: ${pages.length}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor'
    ]
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  });

  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < pages.length; i++) {
    const pageInfo = pages[i];
    const fullUrl = `${BASE_URL}${pageInfo.url}`;
    const outputPath = path.join(OUTPUT_DIR, `${pageInfo.name}.jpg`);

    console.log(`[${i + 1}/${pages.length}] ${pageInfo.name}`);
    console.log(`    URL: ${fullUrl}`);

    try {
      // For dashboard pages, set localStorage before navigation
      if (pageInfo.requiresAuth) {
        // First go to base URL to set localStorage
        await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await setAuthLocalStorage(page);
        await sleep(500);
      }

      // Navigate to target page
      await page.goto(fullUrl, {
        waitUntil: 'networkidle0',
        timeout: 45000
      });

      // For auth pages, verify localStorage is set and reload if needed
      if (pageInfo.requiresAuth) {
        await setAuthLocalStorage(page);
        await page.reload({ waitUntil: 'networkidle0', timeout: 30000 });
      }

      // Wait for initial render
      await sleep(3000);

      // Wait for content
      await waitForFullLoad(page);

      // Scroll to trigger lazy loading
      await scrollFullPage(page);

      // Extra wait for animations
      await sleep(2000);

      // Final content check
      await waitForFullLoad(page);

      // Take screenshot
      await page.screenshot({
        path: outputPath,
        fullPage: true,
        type: 'jpeg',
        quality: 95
      });

      const stats = fs.statSync(outputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`    SAVED: ${outputPath} (${sizeMB} MB)\n`);
      successCount++;

    } catch (error) {
      console.log(`    ERROR: ${error.message}\n`);
      errorCount++;
    }
  }

  await browser.close();

  console.log('='.repeat(50));
  console.log('SCREENSHOT CAPTURE COMPLETED');
  console.log('='.repeat(50));
  console.log(`Success: ${successCount}/${pages.length}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('='.repeat(50));
}

captureScreenshots().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
