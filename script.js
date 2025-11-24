// ÖRNEK VERİ SETİ (Gerçek bir uygulamada bu veri veritabanından gelir)
const mockData = {
    "11-24": [ // 24 Kasım Verileri
    {
        "year": 1978,
        "category": "economy",
        "source": "Milliyet",
        "headline": "Ecevit Hükümeti IMF ile Masada: Kemerler Sıkılacak",
        "summary": "Döviz darboğazındaki Türkiye, kredi kilidini açmak için IMF heyetiyle görüşmelere başladı."
    },
    {
        "year": 1980,
        "category": "economy",
        "source": "Hürriyet",
        "headline": "24 Ocak Kararları Açıklandı: IMF'nin İstediği Oldu",
        "summary": "Ekonomide devrim niteliğindeki kararlar yürürlüğe girdi. TL devalüe edildi, sübvansiyonlar kalktı."
    },
    {
        "year": 1985,
        "category": "economy",
        "source": "Cumhuriyet",
        "headline": "Özal: 'IMF'nin Dediklerini Yaptık, İhracat Patladı'",
        "summary": "Başbakan Özal, serbest piyasa reformlarının meyvelerini vermeye başladığını savundu."
    },
    {
        "year": 1994,
        "category": "economy",
        "source": "Sabah",
        "headline": "5 Nisan Kararları: Acı Reçete Yürürlükte",
        "summary": "Ekonomik kriz sonrası Çiller hükümeti, IMF destekli istikrar paketini açıkladı. Dolar fırladı."
    },
    {
        "year": 1998,
        "category": "economy",
        "source": "Radikal",
        "headline": "IMF ile Yakın İzleme Anlaşması İmzalandı",
        "summary": "Hükümet, global krizden korunmak amacıyla fon ile 'Staff Monitored Program' üzerinde anlaştı."
    },
    {
        "year": 1999,
        "category": "economy",
        "source": "Milliyet",
        "headline": "IMF'den Deprem Yardımı ve Stand-By Müjdesi",
        "summary": "Gölcük depremi sonrası ekonomiyi toparlamak için IMF ile 17. Stand-By anlaşması kapıda."
    },
    {
        "year": 2001,
        "category": "economy",
        "source": "Hürriyet",
        "headline": "Derviş Geldi, IMF Krediyi Serbest Bıraktı",
        "summary": "Büyük kriz sonrası Kemal Derviş'in 'Güçlü Ekonomiye Geçiş' programına IMF'den tam destek geldi."
    },
    {
        "year": 2002,
        "category": "economy",
        "source": "Yeni Şafak",
        "headline": "Seçim Sonrası İlk Mesaj: IMF Programı Sürecek",
        "summary": "Yeni iktidar AK Parti, piyasalara güven vermek için mevcut IMF programına sadık kalacağını açıkladı."
    },
    {
        "year": 2005,
        "category": "economy",
        "source": "Vatan",
        "headline": "IMF ile Yeni Dönem: 10 Milyar Dolarlık İmza",
        "summary": "Türkiye, ekonomik istikrarı perçinlemek için IMF ile 3 yıllık yeni bir anlaşma imzaladı."
    },
    {
        "year": 2008,
        "category": "economy",
        "source": "Star",
        "headline": "Erdoğan: 'IMF ile Anlaşma Olmazsa Kıyamet Kopmaz'",
        "summary": "Global kriz dünyayı sarsarken Başbakan, IMF ile yeni anlaşma konusunda isteksiz konuştu."
    },
    {
        "year": 2010,
        "category": "economy",
        "source": "Dünya",
        "headline": "IMF Heyeti Ankara'da: Türkiye Krizi Hafif Atlattı",
        "summary": "IMF, Türkiye'nin büyüme tahminlerini yukarı yönlü revize etti, bankacılık sektörünü övdü."
    },
    {
        "year": 2013,
        "category": "economy",
        "source": "Sabah",
        "headline": "Tarihi Gün: IMF'ye Son Taksit Ödendi, Borç Bitti",
        "summary": "Türkiye, IMF'ye olan 52 yıllık borç defterini kapattı. Başbakan Yardımcısı Babacan transferi yaptı."
    },
    {
        "year": 2017,
        "category": "economy",
        "source": "Sözcü",
        "headline": "IMF'den Türkiye Uyarısı: Enflasyon Beklentisi Yüksek",
        "summary": "Fonun yayınladığı raporda, aşırı ısınan ekonomi ve cari açık risklerine dikkat çekildi."
    },
    {
        "year": 2019,
        "category": "economy",
        "source": "BirGün",
        "headline": "IMF Heyeti ile 'Gizli Görüşme' Tartışması",
        "summary": "Muhalefetin IMF yetkilileriyle otelde görüşmesi, hükümet kanadında sert tepkiyle karşılandı."
    },
    {
        "year": 2021,
        "category": "economy",
        "source": "Bloomberg HT",
        "headline": "IMF'den 6.4 Milyar Dolarlık SDR Desteği",
        "summary": "Pandemi nedeniyle üye ülkelere dağıtılan SDR (Özel Çekme Hakkı) rezervlerine Türkiye de dahil oldu."
    },
    {
        "year": 2023,
        "category": "economy",
        "source": "Ekonomim",
        "headline": "Seçim Öncesi Piyasanın Gözü Kulağı Ekonomi Modelinde",
        "summary": "Yabancı yatırımcılar raporlarında 'Ortodoks politikalara dönüş' ve 'IMF çapası' ihtimallerini tartışıyor."
    },
    {
        "year": 2024,
        "category": "economy",
        "source": "Hürriyet",
        "headline": "Bakan Şimşek Net Konuştu: IMF ile Program Gündemde Yok",
        "summary": "Hazine ve Maliye Bakanı, uygulanan rasyonel politikalar sayesinde dış kaynağın zaten geldiğini, IMF'ye ihtiyaç olmadığını belirtti."
    },
    {
        "year": 2025,
        "category": "economy",
        "source": "Reuters Türkçe",
        "headline": "IMF 4. Madde Görüşmeleri: 'Türkiye Doğru Yolda Ama Riskler Sürüyor'",
        "summary": "Yıllık olağan tarama için gelen heyet, enflasyondaki düşüşü olumlu buldu ancak sıkı para politikasının devamını önerdi."
    }
    ]
};

// İroni / Bağlam Analizleri (Tarihe göre statik metinler)
const contextAnalysis = {
    "11-24": "Türkiye-IMF ilişkisi 50 yıllık bir 'aşk-nefret' döngüsü gibi. 70'ler ve 90'larda 'kurtarıcı' olarak kapısı çalınan, 2001'de ekonominin dümenine geçen kurum; 2013'te borcun bitmesiyle 'istenmeyen kişi' ilan edildi. Ancak 2024-25 manşetleri gösteriyor ki; resmi bir anlaşma olmasa da, uygulanan 'rasyonel' politikalar aslında IMF'nin yıllardır önerdiği reçetelerle büyük benzerlik taşıyor. İroni şurada: IMF yok ama 'gölgesi' hala ekonomi yönetiminin üzerinde."
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
