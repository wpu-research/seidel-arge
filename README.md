# seidel-arge

"Seidel Trading AR-GE" portföy sayfası: şirketin Ar-Ge ürün hatlarını tek ekranda gösteren, tek sayfalık bir komuta konsolu. Kartlar ilgili demo/tasarım yayınlarına açılır; canlı sistemleri değil demo ve tasarım sürümlerini gösterdiği sayfada belirtilir.

## İçerik
- Ürün hatları: Mixo (outlet e-ticaret vitrini, yönetim paneli, fiyat karşılaştırma), DigiBank (demo, uygulama, ops konsolu), WawiERP (ana sayfa, yönetim paneli, duvar ekranı, sunum) ve ortak süreç sayfaları (iş akışı paneli, başlangıç gereksinimleri)
- Durum şeridi, ürün hattı/yayın/commit sayaçları, ekran görüntüleri (`shots/`)
- Sayfa arama motorlarına kapalıdır (`noindex`)

## Teknoloji
Tek `index.html` (saf HTML/CSS/JS, Google Fonts) ve bağımlılıksız küçük bir Node.js sunucusu (`server.mjs`; HTML ile `shots/*.jpg` dosyalarını verir, güvenlik başlıkları ekler). Node.js >= 20.

## Kurulum ve çalıştırma
```bash
npm start     # node server.mjs, varsayılan port 8080
```
Bağımlılık kurulumu gerekmez.

## Ortam değişkenleri
- `PORT` (isteğe bağlı, varsayılan 8080)

Lisans: belirtilmemiş (LICENSE dosyası yok).
