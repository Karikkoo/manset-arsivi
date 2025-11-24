// ÖRNEK VERİ SETİ (Gerçek bir uygulamada bu veri veritabanından gelir)
const mockData = {
    "11-24": [ // 24 Kasım Verileri
        {
            year: 2004,
            category: "education",
            source: "Hürriyet",
            headline: "Öğretmene Müjde: Maaşlara %10 Zam Yolda",
            summary: "Hükümet, öğretmenler gününde yeni bir iyileştirme paketi açıkladı."
        },
        {
            year: 2008,
            category: "economy",
            source: "Milliyet",
            headline: "Kriz Teğet Geçecek mi? Piyasalar Tedirgin",
            summary: "Global ekonomik krizin Türkiye'ye etkileri tartışılıyor."
        },
        {
            year: 2014,
            category: "education",
            source: "Cumhuriyet",
            headline: "Atanamayan Öğretmenler Meydanlarda",
            summary: "24 Kasım'da öğretmenler atama talebiyle toplandı."
        },
        {
            year: 2019,
            category: "culture",
            source: "Sabah",
            headline: "Şener Şen'den Unutulmaz 'Mucize' Filmi",
            summary: "Öğretmenlik mesleğinin kutsallığını anlatan film vizyona girdi."
        },
        {
            year: 2023,
            category: "education",
            source: "Sözcü",
            headline: "Öğretmen Maaşı Kiraya Yetmiyor",
            summary: "Büyükşehirlerde görev yapan öğretmenler barınma sorunu yaşıyor."
        },
        {
            year: 2024, // Bugün
            category: "education",
            source: "Gazete Oku",
            headline: "Eğitimde Reform Tartışmaları Sürüyor",
            summary: "Bakanlık yeni müfredatı tanıttı, sendikalar tepkili."
        }
    ]
};

// İroni / Bağlam Analizleri (Tarihe göre statik metinler)
const contextAnalysis = {
    "11-24": "Son 20 yıla baktığımızda, 'Öğretmenler Günü' manşetlerinde değişmeyen tek şeyin 'beklenti' olduğu görülüyor. 2004'te 'müjde' olarak sunulan zam haberleri, 2024'te yerini 'geçim sıkıntısı' manşetlerine bırakmış. Eğitimdeki reform tartışmaları ise 20 yıldır bir döngü halinde devam ediyor.",
    "default": "Bu tarih için özel bir analiz bulunamadı. Ancak manşetler arasındaki benzerlikleri inceleyebilirsiniz."
};

// DOM Elementleri
const dateInput = document.getElementById('dateInput');
const timelineContainer = document.getElementById('timeline-container');
const catButtons = document.querySelectorAll('.cat-btn');
const analysisText = document.getElementById('analysis-text');

let currentCategory = 'all';

// Başlangıç Tarihi Ayarlama (Bugün)
const today = new Date();
const dateString = today.toISOString().split('T')[0]; // YYYY-MM-DD formatı
dateInput.value = dateString;

// İlk Yükleme
loadNews(dateString);

// Olay Dinleyicileri
dateInput.addEventListener('change', (e) => {
    loadNews(e.target.value);
});

catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktif sınıfını değiştir
        catButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentCategory = btn.dataset.category;
        loadNews(dateInput.value);
    });
});

// Haberleri Yükleme ve Ekrana Basma Fonksiyonu
function loadNews(dateStr) {
    // Tarihten Ay-Gün formatını al (Örn: 11-24)
    const [year, month, day] = dateStr.split('-');
    const monthDay = `${month}-${day}`;
    
    // Veriyi çek
    const newsList = mockData[monthDay] || [];
    
    // Analiz metnini güncelle
    analysisText.innerText = contextAnalysis[monthDay] || contextAnalysis["default"];

    // Timeline'ı temizle
    timelineContainer.innerHTML = '';

    if (newsList.length === 0) {
        timelineContainer.innerHTML = '<p style="text-align:center; width:100%;">Bu tarih için arşivde kayıt bulunamadı. (Lütfen 24 Kasım seçin)</p>';
        return;
    }

    // Kategoriye göre filtrele
    const filteredNews = newsList.filter(item => {
        return currentCategory === 'all' || item.category === currentCategory;
    });

    // HTML Oluştur
    filteredNews.forEach(news => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');
        
        item.innerHTML = `
            <div class="timeline-content">
                <span class="news-year">${news.year}</span>
                <span class="news-source">${news.source}</span>
                <h4 class="news-headline">${news.headline}</h4>
                <p>${news.summary}</p>
            </div>
        `;
        
        timelineContainer.appendChild(item);
    });
}