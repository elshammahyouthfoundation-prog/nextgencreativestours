// main.js
// Render all website sections dynamically using JavaScript

const images = [
  "img/zanzibar beaches.jpg",
  "img/IMG_098_22. (1).jpg",
  "img/IMG_098_22. (2).jpg",
  "img/IMG_098_22. (4).jpg",
  "img/IMG_098_22. (5).jpg",
  "img/IMG_098_22. (9).jpg",
  "img/IMG_098_22. (12).jpg",
  "img/IMG_098_22. (19).jpg",
  "img/IMG_098_22. (20).jpg",
  "img/IMG_098_22. (49).jpg",
  "img/IMG_098_22. (50).jpg",
  "img/IMG_098_22. (51).jpg",
  "img/IMG_098_22. (52).jpg",
  "img/IMG_098_22. (53).jpg",
  "img/IMG_098_22. (54).jpg",
  "img/IMG_098_22. (55).jpg",
  "img/IMG_098_22. (57).jpg"
];

const destinations = [
  { title: "Blue Lagoon", img: images[2], desc: "On cliff and overlooking the beautiful ocean in low tide and high tide.", price: "$100 / 1 Pax", days: 1, details: "Includes boat ride, snorkeling gear, lunch, and guide. Enjoy the best view of the capital from the water." },
  { title: "Jozani Forest", img: images[3], desc: "See different species of monkeys, trees, and plants.", price: "$110 / 1 Pax", days: 1, details: "Guided forest walk, red colobus monkeys, mangrove boardwalk, and local lunch." },
  { title: "Mikumi National Park", img: images[4], desc: "Unique safari for those wanting to experience the beauty of Tanzania.", price: "$650 / 1 Pax", days: 5, details: "5 Days 4 Nights Safari. Includes transport, park fees, accommodation, meals, and game drives." },
  { title: "Stone Town", img: images[5], desc: "Visit the Old Arabic Fort, Slave Market, Forodhani Park, Sultan Palace.", price: "$70 / 1 Pax", days: 1, details: "Walking tour, entrance fees, local guide, and refreshments." },
  { title: "Aquarium", img: images[6], desc: "Swim and interact with friendly sea turtles.", price: "$85 / 1 Pax", days: 1, details: "Entry ticket, turtle feeding, swimming, and guide." },
  { title: "Prison Island", img: images[7], desc: "Water sports, beach dining, sun-kissed beaches, and clear water.", price: "$120 / 1 Pax", days: 1, details: "Boat transfer, snorkeling, lunch, and tortoise sanctuary visit." },
  { title: "Serengeti", img: images[8], desc: "Safari for those wanting to experience the beauty of Tanzania.", price: "$900 / 1 Pax", days: 3, details: "3 Days 2 Nights Safari. Includes transport, park fees, accommodation, meals, and game drives." },
  { title: "Rock Restaurant", img: images[9], desc: "Unique location, accessible by boat or walking depending on the tide.", price: "$90 / 1 Pax", days: 1, details: "Meal reservation, boat transfer, and guide." },
  { title: "Kuza Cave", img: images[10], desc: "Natural underground pool surrounded by lush tropical forest.", price: "$85 / 1 Pax", days: 1, details: "Entry ticket, swimming, and local guide." },
  { title: "Nakupenda Beach", img: images[11], desc: "Sandbank near Stone Town, very popular with tourists.", price: "$150 / 1 Pax", days: 1, details: "Boat trip, seafood lunch, snorkeling gear, and drinks." },
  { title: "Safari Blue", img: images[12], desc: "Unforgettable sea adventure on a traditional dhow boat.", price: "$85 / 1 Pax", days: 1, details: "Dhow cruise, snorkeling, seafood BBQ, fruits, and drinks." },
  { title: "Mnemba Island", img: images[13], desc: "Boat trip for snorkeling in clear waters with rich marine life.", price: "$115 / 1 Pax", days: 1, details: "Boat transfer, snorkeling gear, lunch, and guide." },
  { title: "Paje Beach", img: images[14], desc: "White sandy beach & kitesurfing paradise of Zanzibar east coast.", price: "$115 / 1 Pax", days: 1, details: "Beach day, kitesurfing lesson (optional), and refreshments." },
  { title: "Village Tour", img: images[15], desc: "Discover the authentic lifestyle of Zanzibar's local communities.", price: "$130 / 1 Pax", days: 1, details: "Village walk, local lunch, cultural experience, and guide." },
  { title: "Spice Tour", img: images[16], desc: "Explore Zanzibar's world-famous spice farms and plantations.", price: "$150 / 1 Pax", days: 1, details: "Farm tour, spice tasting, Swahili lunch, and guide." }
];

const adventures = [
  {
    title: "Nature Adventure Trips",
    desc: "WildLife Tour / 18 July. 2025",
    images: [
      "img/zanzibar beaches2.jpg",
      "img/IMG_098_22. (61).jpg",
      "img/IMG_098_22. (62).jpg",
      "img/IMG_098_22. (53).jpg",
      "img/IMG_098_22. (54).jpg"
    ]
  },
  {
    title: "Cultural Tour",
    desc: "Historical Tour / 1 May. 2025",
    images: [
      "img/zanzibar1.jpg",
      "img/IMG_098_22. (63).jpg",
      "img/IMG_098_22. (55).jpg",
      "img/IMG_098_22. (57).jpg"
    ]
  },
  {
    title: "Travel Advanture",
    desc: "Private Tour / 23 Mar. 2025",
    images: [
      "img/zanzibar23.jpg",
      "img/IMG_098_22. (49).jpg",
      "img/IMG_098_22. (50).jpg",
      "img/IMG_098_22. (51).jpg"
    ]
  },
  {
    title: "Island & Beach Trips",
    desc: "Beach Resorts / 11 Jan. 2025",
    images: [
      "img/zanzibar24.jpg",
      "img/IMG_098_22. (52).jpg",
      "img/IMG_098_22. (59).jpg"
    ]
  },
  {
    title: "City & Historical Tours",
    desc: "Customized Trip / 13 Dec. 2024",
    images: [
      "img/zanzibar25.jpg",
      "img/IMG_098_22. (58).jpg",
      "img/IMG_098_22. (65).jpg"
    ]
  },
  {
    title: "Heritage Sites",
    desc: "Island Trips / 27 Sep. 2024",
    images: [
      "img/zanzibar26.jpg",
      "img/IMG_098_22. (68).jpg",
      "img/IMG_098_22. (9).jpg"
    ]
  },
  {
    title: "Beach Resorts",
    desc: "Eastern Coast beaches / 12 Jan. 2024",
    images: [
      "img/zanzibar27.jpg",
      "img/IMG_098_22. (20).jpg",
      "img/IMG_098_22. (19).jpg"
    ]
  },
  {
    title: "Mikumi Park",
    desc: "Safari In Tanzania / 19 Aug. 2023",
    images: [
      "img/zanzibar28.jpg",
      "img/IMG_098_22. (4).jpg",
      "img/IMG_098_22. (5).jpg"
    ]
  },
  {
    title: "Villagio",
    desc: "Village Tour / 23 Feb. 2023",
    images: [
      "img/zaznibar beaches 3.jpg"
    ]
  }
];

const blogs = [
  {
    title: "Why Zanzibar Is The Perfect Holiday Destination.",
    summary: "The Best Zanzibar Day Trips, Tour & Excursions And Also Coral Areas Viewing, And Organize your Travel plans for the Whole itinerary to requirements And Budget.",
    details: `Zanzibar is a paradise for travelers seeking adventure, relaxation, and cultural immersion. From the stunning beaches to the vibrant markets and historical sites, every moment is an experience. Plan your trip to include day trips, coral viewing, and excursions tailored to your needs and budget!`,
    images: ["img/IMG_098_22. (58).jpg", "img/IMG_098_22. (59).jpg"] ,
    meta: "NextGen Creatives • 4 Days ago"
  },
  {
    title: "Historical Sites",
    summary: "Stone Town And Its Buildings are Full Of History And Ancient Stories On Zanzibar. Guests will Visit The Old Arabic Fort, Slave Market, Forodhani Park, Sultan Palace.",
    details: `Stone Town is a UNESCO World Heritage site, rich in history and culture. Explore the Old Arabic Fort, the Slave Market, Forodhani Park, and Sultan Palace to discover the stories that shaped Zanzibar.`,
    images: ["img/IMG_098_22. (59).jpg", "img/IMG_098_22. (60).jpg"],
    meta: "NextGen Creatives • 3 Weeks ago"
  },
  {
    title: "Island Trips",
    summary: "Islands Destination Offer A range Of Activities, From Water Sports And Beach Front dining experience. Relax And Unwind On Sun-Kissed Beaches, Swim In Clear Water. In Zanzibar You Don't need many days to experience its beauty, you can explore several breathtaking Destination in just one full day! From swimming with Dolphins in the morning, visiting the historic Stone Town, exploring the Prison Island and relaxing on the stunning beaches of Nungwi or Paje every moment is An Adventure. Our Full-Day Tours are Designed to give you the best of Zanzibar in one unforgettable Experience.",
    details: `Enjoy a full day of adventure in Zanzibar: swim with dolphins, visit Stone Town, explore Prison Island, and relax on the beaches of Nungwi or Paje. Our tours are designed for maximum experience in minimum time!`,
    images: ["img/IMG_098_22. (60).jpg", "img/IMG_098_22. (61).jpg", "img/IMG_098_22. (62).jpg"],
    meta: "NextGen Creatives • 2 months ago"
  }
];

const testimonials = [
  { text: "NextGen Creatives made our trip to Zanzibar unforgettable! Their team are storytellers who make every place come alive. Highly recommended!", author: "Laisésma", country: "Brazil", flag: "🇧🇷", rating: 5, month: "January 2025", profile: "img/1 (1).jpeg" },
  { text: "The guides were knowledgeable and friendly. We loved every moment of our safari!", author: "Anna Müller", country: "Germany", flag: "🇩🇪", rating: 4, month: "February 2025", profile: "img/1 (2).jpeg" },
  { text: "A seamless experience from booking to the actual tour. Highly professional.", author: "John Smith", country: "United Kingdom", flag: "🇬🇧", rating: 5, month: "March 2025", profile: "img/1 (3).jpeg" },
  { text: "The best travel company I have ever used. Will definitely recommend!", author: "Sofia Rossi", country: "Italy", flag: "🇮🇹", rating: 4, month: "April 2025", profile: "img/1 (4).jpeg" },
  { text: "Incredible attention to detail and customer care. Thank you!", author: "David Lee", country: "USA", flag: "🇺🇸", rating: 5, month: "May 2025", profile: "img/1 (5).jpeg" },
  { text: "Our family had an amazing adventure. The kids loved every activity.", author: "Marie Dubois", country: "France", flag: "🇫🇷", rating: 5, month: "June 2025", profile: "img/1 (7).jpeg" },
  { text: "Superb organization and unique experiences. We will come back!", author: "Carlos Mendez", country: "Spain", flag: "🇪🇸", rating: 4, month: "July 2025", profile: "img/1 (6).jpeg" },
  { text: "The Zanzibar tour exceeded our expectations. Thank you NextGen!", author: "Emily Johnson", country: "Canada", flag: "🇨🇦", rating: 5, month: "August 2025", profile: "img/1 (8).jpeg" },
  { text: "We traveled in January 2026 and everything was perfect. Highly recommended!", author: "Mats Andersson", country: "Sweden", flag: "🇸🇪", rating: 5, month: "January 2026", profile: "img/1 (9).jpeg" },
  { text: "Fantastic service and unforgettable memories. Will book again in 2026!", author: "Yuki Tanaka", country: "Japan", flag: "🇯🇵", rating: 5, month: "January 2026", profile: "img/1 (10).jpeg" }
];

const attractions = [
  {
    name: "Serengeti National Park",
    img: "img/IMG_098_22. (4).jpg",
    desc: "World-renowned for its annual wildebeest migration, the Serengeti offers vast savannahs teeming with wildlife, including the Big Five. Its endless plains and acacia trees create iconic African landscapes.",
    details: "The park is a UNESCO World Heritage Site and is home to over 500 bird species and numerous mammals. The Great Migration, where millions of wildebeest and zebras move in search of fresh grazing, is a highlight.",
    best: "June to October (dry season, best for wildlife viewing and the migration river crossings).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/serengeti"
  },
  {
    name: "Mount Kilimanjaro National Park",
    img: "img/IMG_098_22. (5).jpg",
    desc: "Home to Africa’s highest peak, Mount Kilimanjaro is a bucket-list destination for trekkers and climbers. The park features diverse ecosystems, from rainforest to alpine desert and glaciers.",
    details: "Kilimanjaro is a UNESCO World Heritage Site and offers several trekking routes, with the summit standing at 5,895 meters. The park is also rich in flora and fauna, including endemic species.",
    best: "January to March and June to October (dry seasons, best for climbing).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/kilimanjaro"
  },
  {
    name: "Ngorongoro Conservation Area",
    img: "img/IMG_098_22. (9).jpg",
    desc: "Famous for the Ngorongoro Crater, the world’s largest intact volcanic caldera, this area is a haven for wildlife and Maasai culture. The crater floor is home to a dense population of animals, including rare black rhinos.",
    details: "A UNESCO World Heritage Site, the area also includes Olduvai Gorge, an important paleoanthropological site. The Maasai people live and graze their cattle alongside wildlife.",
    best: "June to October (dry season, best for wildlife viewing).",
    source: "https://whc.unesco.org/en/list/39/"
  },
  {
    name: "Zanzibar Archipelago (Unguja & Pemba)",
    img: "img/zanzibar beaches.jpg",
    desc: "Zanzibar is famed for its white-sand beaches, turquoise waters, and rich Swahili culture. Stone Town, the historic center, is a UNESCO World Heritage Site with winding alleys and vibrant markets.",
    details: "The islands offer world-class diving, spice tours, and a blend of African, Arab, and European influences. Pemba is less developed and known for its pristine reefs.",
    best: "June to October (cool, dry season); December to February (warm, dry season).",
    source: "https://www.zanzibartourism.go.tz/"
  },
  {
    name: "Selous Game Reserve (Nyerere National Park)",
    img: "img/IMG_098_22. (20).jpg",
    desc: "One of Africa’s largest protected areas, Selous (now Nyerere National Park) is known for its wild landscapes and boat safaris along the Rufiji River. It hosts large populations of elephants, hippos, and crocodiles.",
    details: "A UNESCO World Heritage Site, the park is less crowded than northern parks and offers walking and boat safaris. It covers over 30,000 square kilometers.",
    best: "June to October (dry season, best for wildlife viewing).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/nyerere"
  },
  {
    name: "Ruaha National Park",
    img: "img/IMG_098_22. (49).jpg",
    desc: "Ruaha is Tanzania’s largest national park, known for its rugged scenery and high concentration of elephants and predators. The Great Ruaha River attracts diverse wildlife, especially during the dry season.",
    details: "The park is a birdwatcher’s paradise with over 570 species recorded. Its remote location means fewer visitors and a more exclusive safari experience.",
    best: "June to October (dry season, animals gather at water sources).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/ruaha"
  },
  {
    name: "Lake Manyara National Park",
    img: "img/IMG_098_22. (51).jpg",
    desc: "Famous for its tree-climbing lions and large flocks of flamingos, Lake Manyara offers diverse habitats from groundwater forests to alkaline lake shores. The park is compact but rich in wildlife.",
    details: "It is also known for its large baboon troops and scenic views of the Rift Valley escarpment. Canoeing and birdwatching are popular activities.",
    best: "July to October (dry season, best for wildlife); November to June (birdwatching, lush scenery).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/lake_manyara"
  },
  {
    name: "Tarangire National Park",
    img: "img/IMG_098_22. (52).jpg",
    desc: "Tarangire is renowned for its massive baobab trees and large herds of elephants. The park’s river attracts wildlife during the dry season, making it a top spot for game viewing.",
    details: "It is also home to over 550 bird species and seasonal migrations of wildebeest and zebras. The landscape is dotted with termite mounds and acacia woodland.",
    best: "June to October (dry season, animals congregate at the river).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/tarangire"
  },
  {
    name: "Stone Town (Zanzibar)",
    img: "img/IMG_098_22. (55).jpg",
    desc: "Stone Town is the historic heart of Zanzibar City, known for its labyrinthine streets, coral stone buildings, and rich cultural heritage. It is a UNESCO World Heritage Site.",
    details: "The town reflects a unique blend of Arab, Persian, Indian, and European influences. Key sites include the Old Fort, House of Wonders, and bustling markets.",
    best: "June to October (dry season, pleasant weather).",
    source: "https://whc.unesco.org/en/list/173/"
  },
  {
    name: "Olduvai Gorge",
    img: "img/IMG_098_22. (53).jpg",
    desc: "Olduvai Gorge is one of the world’s most important paleoanthropological sites, offering insights into early human evolution. Fossils and stone tools dating back millions of years have been discovered here.",
    details: "The site features a museum and guided tours explaining the significance of the discoveries made by the Leakey family.",
    best: "June to October (dry season, easier access).",
    source: "https://www.lonelyplanet.com/tanzania/olduvai-gorge"
  },
  {
    name: "Mafia Island Marine Park",
    img: "img/zanzibar beaches2.jpg",
    desc: "Mafia Island is famous for its pristine coral reefs, whale shark snorkeling, and laid-back atmosphere. The marine park protects a rich diversity of marine life and is a top diving destination.",
    details: "The island is less developed than Zanzibar, offering a tranquil escape with excellent opportunities for diving, snorkeling, and turtle watching.",
    best: "October to March (whale shark season); June to October (dry, best for diving).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/mafia"
  },
  {
    name: "Bagamoyo",
    img: "img/IMG_098_22. (54).jpg",
    desc: "Bagamoyo is a historic coastal town known for its role in the East African slave trade and as a center of Swahili culture. The town features colonial-era buildings and ancient ruins.",
    details: "Key sites include the Old Fort, Catholic Mission, and Kaole Ruins. Bagamoyo is a UNESCO World Heritage Tentative Site.",
    best: "June to October (dry season, cooler temperatures).",
    source: "https://whc.unesco.org/en/tentativelists/1992/"
  },
  {
    name: "Gombe Stream National Park",
    img: "img/IMG_098_22. (12).jpg",
    desc: "Gombe is renowned for Jane Goodall’s pioneering chimpanzee research. The park’s forested hills along Lake Tanganyika are home to habituated chimpanzee groups and diverse primates.",
    details: "Visitors can trek to observe chimpanzees in their natural habitat and enjoy birdwatching and lake activities.",
    best: "July to October (dry season, easier trekking).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/gombe"
  },
  {
    name: "Katavi National Park",
    img: "img/IMG_098_22. (19).jpg",
    desc: "Katavi is one of Tanzania’s most remote parks, offering unspoiled wilderness and large concentrations of hippos, crocodiles, and buffalo. It is ideal for adventurous travelers seeking solitude.",
    details: "The park’s floodplains and woodlands support diverse wildlife, and the dry season brings dramatic gatherings of animals at shrinking water sources.",
    best: "June to October (dry season, best for wildlife viewing).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/katavi"
  },
  {
    name: "Udzungwa Mountains National Park",
    img: "img/IMG_098_22. (2).jpg",
    desc: "Known as the 'Galapagos of Africa,' Udzungwa is celebrated for its biodiversity and hiking trails through rainforest and mountain terrain. It is home to several endemic primate species.",
    details: "The park offers waterfalls, birdwatching, and challenging treks, including the popular Sanje Waterfall trail.",
    best: "June to October (dry season, best for hiking).",
    source: "https://www.tanzaniaparks.go.tz/national_parks/udzungwa"
  }
];

function renderApp() {
  document.getElementById('app').innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="img/logo.png" alt="Logo" height="32" style="margin-right:8px;"> <span style="font-size:1.1rem;font-weight:600;letter-spacing:0.5px;vertical-align:middle;">NextGen Creatives</span></a>
        <div class="d-flex align-items-center social-header ms-3">
          <a href="https://wa.me/255744929721" target="_blank" class="ms-2" title="WhatsApp" style="color:#25D366;font-size:1.5rem;"><i class="bi bi-whatsapp"></i></a>
        
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#destinations">Tours</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#destinations">Destinations</a></li>
            <li class="nav-item"><a class="nav-link" href="#adventures">Adventures</a></li>
            <li class="nav-item"><a class="nav-link" href="#blogs">Blogs</a></li>
            <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          
          </ul>
        </div>
      </div>
    </nav>
    <section class="hero-section p-0">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div class="carousel-inner">
          ${[
            {img: images[0], header: "Karibu Tanzania! Land of Hospitality"},
            {img: images[1], header: "Discover the Warmth of Zanzibar"},
            {img: images[2], header: "Experience True African Welcome"},
            {img: images[3], header: "Tanzania: Where Strangers Become Friends"},
            {img: images[4], header: "Feel at Home in the Heart of Africa"},
            {img: images[5], header: "Explore Tanzania's Beauty & Kindness"}
          ].map((slide, i) => `
            <div class="carousel-item${i === 0 ? ' active' : ''}">
              <div class="hero-slide d-flex align-items-center justify-content-center text-center" style="min-height:60vh;background-image:url('${slide.img}');background-size:cover;background-position:center;">
                <div class="container">
                  <h1 class="display-3 fw-bold text-light shadow-lg" style="background:rgba(0,0,0,0.35);border-radius:12px;display:inline-block;padding:0.3em 1em;">${slide.header}</h1>
                  <p class="lead text-light">Authentic African Tours & Experiences</p>
                  <a href="#destinations" class="btn btn-warning btn-lg mt-3">Explore Tours</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section id="about" class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="${images[1]}" class="img-fluid rounded" alt="About NextGen Creatives">
          </div>
          <div class="col-md-6">
            <h2>About Us</h2>
            <p><strong>NextGen Creatives</strong> is a leading Tanzanian creative agency specializing in innovative digital solutions, branding, and tourism marketing. Our team is dedicated to delivering exceptional experiences for clients in the travel, hospitality, and creative industries. We combine local expertise with global standards to help businesses and destinations stand out in a competitive market. Our services include web design, digital marketing, content creation, and strategic consulting for tourism and beyond.</p>
            <ul>
              <li><strong>Company:</strong> NextGen Creatives</li>
              <li><strong>Email:</strong> info@nextgencreatives.co.tz</li>
              <li><strong>Contact:</strong> +255 744 929721</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Attractions Gallery Section -->
    <section id="gallery" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Attractions of Tanzania & Zanzibar</h2>
        <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
          <div class="carousel-inner" style="min-height:260px;">
            ${attractions.map((item, i) => `
              <div class="carousel-item${i === 0 ? ' active' : ''}" style="cursor:pointer;" data-attr-idx="${i}">
                <div class="row align-items-center justify-content-center g-4 flex-md-row flex-column">
                  <div class="col-md-6 text-center">
                    <img src="${item.img}" class="img-fluid rounded shadow gallery-thumb" style="max-height:340px;object-fit:contain;background:#eee;" alt="${item.name}">
                  </div>
                  <div class="col-md-6">
                    <h4 class="fw-bold gallery-caption mb-2">${item.name}</h4>
                    <p class="mb-0 gallery-desc">${item.desc}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <p class="text-center mt-3">Famous attractions: beaches, national parks, and historical sites in Tanzania and Zanzibar.</p>
      </div>
    </section>

    <section id="destinations" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Destinations & Tours</h2>
        <p class="text-center mb-5">Explore curated tours and experiences across Tanzania and Zanzibar.</p>
        <div class="row">
          ${destinations.map((dest, i) => `
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="${dest.img}" class="card-img-top" alt="${dest.title}">
                <div class="card-body">
                  <h5 class="card-title">${dest.title}</h5>
                  <p class="card-text">${dest.desc}<br><strong>Price:</strong> ${dest.price}</p>
                  <button class="btn btn-warning see-more-btn" data-dest="${i}">See More</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Modal for destination/tour details -->
    <div class="modal fade" id="destModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="destModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img id="destModalImg" src="" class="img-fluid rounded mb-3" alt="">
            <div id="destModalDetails"></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-success" id="bookNowBtn">Book Now</button>
            <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <section id="adventures" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Travel Adventures</h2>
        <p class="text-center mb-5">See the best tours and travel experiences we have organized.</p>
        <div class="row">
          ${adventures.map((adv, i) => `
            <div class="col-md-4 mb-4">
              <div class="card h-100 adventure-card" data-adv="${i}" style="cursor:pointer;">
                <img src="${adv.images[0]}" class="card-img-top" alt="${adv.title}">
                <div class="card-body">
                  <h5 class="card-title">${adv.title}</h5>
                  <p class="card-text">${adv.desc}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="testimonials" class="py-5" style="background: linear-gradient(120deg, #f9d29d 0%, #ffd6e0 100%), url('img/bg-pattern.png'); background-size: cover, 300px; background-repeat: repeat, repeat;">
      <div class="container">
        <h2 class="text-center mb-4">Testimonials</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <div class="carousel-inner">
            ${testimonials.map((t, i) => `
              <div class="carousel-item${i === 0 ? ' active' : ''}">
                <div class="d-flex justify-content-center">
                  <div class="card w-75 text-center border-0 shadow-lg" style="background: rgba(255,255,255,0.92);">
                    <div class="card-body">
                      <img src="${t.profile || 'img/default-profile.png'}" alt="${t.author}" class="rounded-circle mb-3" style="width:90px;height:90px;object-fit:cover;border:4px solid #f9d29d;box-shadow:0 2px 8px rgba(0,0,0,0.08);background:#fff;">
                      <p class="card-text">${t.text}</p>
                      <h6 class="card-subtitle mb-2 text-muted">
                        ${t.author} <span class="ms-2">${t.flag} ${t.country}</span> <span class="ms-2">${t.month}</span><br>
                        <span class="text-warning">${'★'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section id="blogs" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Blogs</h2>
        <div class="row">
          ${blogs.map((blog, i) => `
            <div class="col-md-4 mb-4">
              <div class="card h-100 blog-card" data-blog="${i}" style="cursor:pointer;">
                <img src="${blog.images[0]}" class="card-img-top" alt="${blog.title}">
                <div class="card-body">
                  <h5 class="card-title">${blog.title}</h5>
                  <p class="card-text">${blog.summary}</p>
                  <small class="text-muted">${blog.meta}</small>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Modal for gallery and blog details -->
    <div class="modal fade" id="galleryModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="galleryModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="galleryModalImages" class="mb-3"></div>
            <div id="galleryModalDetails"></div>
          </div>
        </div>
      </div>
    </div>

    <section id="contact" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <form>
              <div class="mb-3">
                <label for="contact-name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="contact-name" required>
              </div>
              <div class="mb-3">
                <label for="contact-email" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="contact-email" required>
              </div>
              <div class="mb-3">
                <label for="contact-subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="contact-subject" required>
              </div>
              <div class="mb-3">
                <label for="contact-message" class="form-label">Message</label>
                <textarea class="form-control" id="contact-message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-success">Send Message</button>
            </form>
          </div>
          <div class="col-md-6">
            <h3 class="mb-3">Get in Touch</h3>
            <p>NextGen Creatives is your partner for digital innovation, branding, and tourism marketing in Tanzania and East Africa. For business inquiries, collaborations, or to learn more about our services, contact us below.</p>
            <ul class="list-unstyled">
              <li><strong>Company:</strong> NextGen Creatives</li>
              <li><strong>Contact:</strong> +255 744 929721</li>
              <li><strong>Email:</strong> info@nextgencreatives.co.tz</li>
            </ul>
            <div class="mt-3">
              <a href="https://www.facebook.com/nextgencreativestz" target="_blank" class="me-3" title="Facebook">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" style="width:28px;height:28px;vertical-align:middle;">
              </a>
              <a href="https://www.instagram.com/nextgencreativestz" target="_blank" class="me-3" title="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" style="width:28px;height:28px;vertical-align:middle;">
              </a>
              <a href="https://wa.me/255744929721?text=Hello%20Gentile%20Di%20Zanzibar!%20I%20would%20like%20to%20book%20a%20tour." target="_blank" class="me-3" title="WhatsApp">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" style="width:28px;height:28px;vertical-align:middle;">
              </a>
              <a href="https://x.com/nextgencreativestz" target="_blank" class="me-3" title="X (Twitter)">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X (Twitter)" style="width:28px;height:28px;vertical-align:middle;">
              </a>
              <a href="https://www.threads.net/nextgencreativestz" target="_blank" title="Threads">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/threads.svg" alt="Threads" style="width:28px;height:28px;vertical-align:middle;">
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-dark text-light text-center py-3">
      <div class="container">
        <small>&copy; 2026 NextGen Creatives. All rights reserved.</small>
      </div>
    </footer>
  `;
}

// Modal logic
function showGalleryModal(title, images, detailsHtml) {
  document.getElementById('galleryModalLabel').textContent = title;
  document.getElementById('galleryModalImages').innerHTML = `
    <div id="galleryCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        ${images.map((img, idx) => `
          <div class="carousel-item${idx === 0 ? ' active' : ''}">
            <img src="${img}" class="d-block w-100 rounded" alt="${title} image ${idx+1}">
          </div>
        `).join('')}
      </div>
      ${images.length > 1 ? `
      <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      ` : ''}
    </div>
  `;
  // Add more content and Contact Us button
  document.getElementById('galleryModalDetails').innerHTML =
    (detailsHtml || '') +
    '<div class="mt-3"><p>For more information or to book this adventure, contact us directly.</p>' +
    '<button class="btn btn-success" id="adventureContactBtn">Contact Us</button></div>';
  const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
  modal.show();
  setTimeout(function() {
    var btn = document.getElementById('adventureContactBtn');
    if(btn) {
      btn.onclick = function() {
        document.getElementById('contact-subject').value = 'Inquiry: ' + title;
        document.getElementById('contact-message').value = 'Hello, I am interested in this adventure: ' + title + '. Please provide more details.';
        modal.hide();
        setTimeout(function() {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }, 400);
      };
    }
  }, 200);
}

function setupGalleryClicks() {
  // Attractions
  document.querySelectorAll('#galleryCarousel .carousel-item').forEach(el => {
    el.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-attr-idx'));
      const attr = attractions[idx];
      if (!attr) return;
      showGalleryModal(attr.name, [attr.img], `<p>${attr.details}</p><p><strong>Best time to visit:</strong> ${attr.best}</p>`);
    });
  });
  // Adventures
  document.querySelectorAll('.adventure-card').forEach(card => {
    card.addEventListener('click', function() {
      const adv = adventures[parseInt(this.getAttribute('data-adv'))];
      // Show all images for the adventure
      showGalleryModal(adv.title, adv.images, `<p>${adv.desc}</p>`);
    });
  });
  // Blogs
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', function() {
      const blog = blogs[parseInt(this.getAttribute('data-blog'))];
      // Show all images for the blog
      showGalleryModal(blog.title, blog.images, `<p>${blog.details}</p><small class='text-muted'>${blog.meta}</small>`);
    });
  });
}

renderApp();
setTimeout(function() {
  document.querySelectorAll('.see-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-dest'));
      var dest = destinations[idx];
      document.getElementById('destModalLabel').textContent = dest.title;
      document.getElementById('destModalImg').src = dest.img;
      document.getElementById('destModalImg').alt = dest.title;
        document.getElementById('destModalDetails').innerHTML =
          '<p>' + dest.desc + '</p>' +
          '<p><strong>Package Includes:</strong> ' + dest.details + '</p>' +
          '<p><strong>Duration:</strong> ' + dest.days + ' Day(s)</p>' +
          '<p><strong>Price:</strong> ' + dest.price + '</p>';
      var modal = new bootstrap.Modal(document.getElementById('destModal'));
      modal.show();
      document.getElementById('bookNowBtn').onclick = function() {
        document.getElementById('contact-subject').value = 'Booking: ' + dest.title;
        document.getElementById('contact-message').value = 'Hello, I would like to book the package: ' + dest.title + ' (' + dest.price + '). Details: ' + dest.desc;
        modal.hide();
        setTimeout(function() {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }, 400);
      };
    });
  });
}, 200);
setTimeout(setupGalleryClicks, 100);
