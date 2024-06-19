import React, { useState } from "react";
import "./HomePage.css";
import { useFetch } from "../Utils";
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165
const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&country=in`;
// `https://newsdata.io/api/1/news?apikey=${api_key}&language=en&country=${country}&category=${category}`;
const yeah = [
  {
    article_id: "1a31a5e589ea14bda499fa97ab5775df",
    title:
      "Assam: Ayushmita Hazarika from Delhi Public School Guwahati wins national scholarship in Kathak",
    link: "https://www.sentinelassam.com/cities/guwahati-city/assam-ayushmita-hazarika-from-delhi-public-school-guwahati-wins-national-scholarship-in-kathak",
    keywords: null,
    creator: ["Sentinel Digital Desk"],
    video_url: null,
    description: null,
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:48:55",
    image_url:
      "https://media.assettype.com/sentinelassam-english%2F2024-06%2Fe1d9ac50-d97e-4c2c-8731-ef3ff3191641%2Fashm.png?w=480&auto=format%2Ccompress&fit=max",
    source_id: "sentinel",
    source_priority: 177615,
    source_url: "https://www.sentinelassam.com",
    source_icon: "https://i.bytvi.com/domain_icons/sentinel.jpg",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "60c5e1295ec14d1af8577bd301f1905b",
    title:
      "'Whether I will contest or not will be party's decision': CPI's Annie Raja on Wayanad by-poll",
    link: "https://timesofindia.indiatimes.com/india/whether-i-will-contest-or-not-will-be-partys-decision-cpis-annie-raja-on-wayanad-by-poll/articleshow/111073032.cms",
    keywords: null,
    creator: null,
    video_url: null,
    description: null,
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:48:02",
    image_url:
      "https://static.toiimg.com/photo/msid-111073083,imgsize-1369907.cms",
    source_id: "toi",
    source_priority: 391,
    source_url: "https://timesofindia.indiatimes.com",
    source_icon: "https://i.bytvi.com/domain_icons/toi.png",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "c9ffc65125cb78ff62080f8130cf41d7",
    title:
      "WATCH: Girl Dies After Car Falls Into Ditch While Filming Reel In Maharashtra",
    link: "https://news24online.com/india/watch-girl-dies-after-car-falls-into-ditch-while-filming-reel-in-maharashtra/288605/",
    keywords: [
      "top news",
      "chhatrapati sambhaji nagar",
      "maharashtra",
      "india",
    ],
    creator: ["Aniket Raj"],
    video_url: null,
    description:
      "In a tragic incident in Maharashtra, a young woman died after accidentally pressing the accelerator in reverse gear while shooting a video, causing her car to crash through a crash barrier and fall into a ditch near Chhatrapati Sambhaji Nagar. The post WATCH: Girl Dies After Car Falls Into Ditch While Filming Reel In Maharashtra appeared first on News24.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:48:00",
    image_url:
      "https://news24online.com/wp-content/uploads/2024/06/TWITER-VIDEO-.jpg",
    source_id: "news24online",
    source_priority: 549589,
    source_url: "https://news24online.com",
    source_icon: "https://i.bytvi.com/domain_icons/news24online.png",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "e6cbb891a8c8e9f12a4a2c184b57927d",
    title:
      "Budget 2024: Continuity in more ways than one in FM's seventh Budget",
    link: "https://www.business-standard.com/budget/news/budget-2024-continuity-in-more-ways-than-one-in-fms-seventh-budget-124061800130_1.html",
    keywords: null,
    creator: null,
    video_url: null,
    description:
      "Will there be tax breaks in the Union Budget 2024? Will there be welfare? Will there be fiscal consolidation? Budget Watch keeps a tab",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:47:17",
    image_url:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/14/thumb/fitandfill/400X400/1718341882-676.jpg",
    source_id: "business-standard",
    source_priority: 9158,
    source_url: "https://www.business-standard.com",
    source_icon: "https://i.bytvi.com/domain_icons/business-standard.png",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "91e29d56f7c4835daad622413ab7a37c",
    title:
      "NEET PG 2024 Admit Card to be out today on natboard.edu.in, here's how to download hall tickets",
    link: "https://www.hindustantimes.com/education/competitive-exams/neet-pg-2024-admit-card-to-be-out-today-on-natboard-edu-in-heres-how-to-download-hall-tickets-101718681316506.html",
    keywords: ["education"],
    creator: null,
    video_url: null,
    description:
      "Candidates will be informed through SMS/Email alerts and website notices regarding the availability of the admit card on the NBEMS website.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:47:09",
    image_url:
      "https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/IMG-20240616-WA0033_1718512979581_1718682273942.jpg",
    source_id: "hindustantimes",
    source_priority: 933,
    source_url: "http://www.hindustantimes.com",
    source_icon: "https://i.bytvi.com/domain_icons/hindustantimes.png",
    language: "english",
    country: ["india"],
    category: ["science"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "92420f51e759fd1448a50817be2e3b42",
    title:
      "Taapsee Pannu says she got into Bollywood because of her resemblance with Preity Zinta: ‘I had to live up to that’",
    link: "https://www.hindustantimes.com/entertainment/bollywood/taapsee-pannu-says-she-got-into-bollywood-because-of-her-resemblance-with-preity-zinta-101718679897300.html",
    keywords: ["entertainment"],
    creator: null,
    video_url: null,
    description:
      "Taapsee Pannu joined Shikhar Dhawan on his chat show to talk about her career in films, during which she shared how she shifted from Telugu films to Bollywood.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:47:06",
    image_url:
      "https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/taapsee_1718680373555_1718680373851.jpg",
    source_id: "hindustantimes",
    source_priority: 933,
    source_url: "http://www.hindustantimes.com",
    source_icon: "https://i.bytvi.com/domain_icons/hindustantimes.png",
    language: "english",
    country: ["india"],
    category: ["entertainment"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "b4e8e2ba624ee896a141ddf7f9e3b023",
    title:
      "Akash Ambani spotted driving rare Rs 105000000 Ferrari SUV without wearing seatbelt, netizens say 'ameer log...'",
    link: "https://www.dnaindia.com/automobile/report-akash-ambani-spotted-driving-rare-rs-105000000-ferrari-suv-without-wearing-seatbelt-netizens-say-ameer-log-3093799",
    keywords: ["automobile", "business"],
    creator: ["Ayushmann Chawla"],
    video_url: null,
    description:
      "Akash Ambani was spotted driving a rare Rs 10.5 crore Ferrari SUV, however the son of India's richest man was not wearing a seatbelt.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:47:00",
    image_url:
      "https://cdn.dnaindia.com/sites/default/files/styles/third/public/2024/06/18/2638262-akash-ambani.jpg",
    source_id: "dnaindia",
    source_priority: 18388,
    source_url: "https://www.dnaindia.com",
    source_icon: null,
    language: "english",
    country: ["india"],
    category: ["business"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "1c6c94e3f8a4dd2bb47a7974f728b4b1",
    title:
      "Bengal train collision: Mamata blames Centre for negligence towards Railways",
    link: "https://telanganatoday.com/bengal-train-collision-mamata-blames-centre-for-negligence-towards-railways",
    keywords: [
      "mamata banerjee",
      "train collision",
      "express train",
      "bengal train accident",
      "train accident",
      "news",
      "india",
      "kanchanjungha",
      "west bengal",
      "darjeeling",
    ],
    creator: ["ANI"],
    video_url: null,
    description:
      "After accident, Kanchanjungha Express completes restoration, reaches Sealdah station in Kolkata",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:46:51",
    image_url:
      "https://cdn.telanganatoday.com/wp-content/uploads/2024/06/Train-accident-768x450.jpg",
    source_id: "telanganatoday",
    source_priority: 63887,
    source_url: "https://telanganatoday.com",
    source_icon: "https://i.bytvi.com/domain_icons/telanganatoday.png",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "a89fda7ac219501e861d8abe981b2b95",
    title:
      "BRS govt Chhattisgarh PPA led to Rs 6,000 crore loss for Telangana: Officials",
    link: "https://timesofindia.indiatimes.com/city/hyderabad/brs-govt-chhattisgarh-ppa-led-to-rs-6000-crore-loss-for-telangana-officials/articleshow/111072992.cms",
    keywords: null,
    creator: ["Koride Mahesh"],
    video_url: null,
    description:
      "Telangana officials refute ex-CM K Chandrasekhar Rao's claims on power purchase agreement with Chhattisgarh, stating a Rs 6,000 crore loss. The PPA, not approved by TSERC, led to extra expenses of Rs 2,083 crore for power supply shortages. KCR criticizes CoI and former CJ of Patna HC. Dispute over dues between Telangana and Chhattisgarh.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:46:33",
    image_url:
      "https://static.toiimg.com/photo/msid-111073063,imgsize-61210.cms",
    source_id: "toi",
    source_priority: 391,
    source_url: "https://timesofindia.indiatimes.com",
    source_icon: "https://i.bytvi.com/domain_icons/toi.png",
    language: "english",
    country: ["india"],
    category: ["top"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
  {
    article_id: "4d94b1df82fac0389378b5b072c7bc96",
    title: "BTS Star Jimin Announces Second Solo Album Muse; Teaser Video Out",
    link: "https://www.news18.com/movies/bts-star-jimin-announces-second-solo-album-muse-teaser-video-out-8935847.html",
    keywords: ["movies"],
    creator: null,
    video_url: null,
    description:
      "After making his debut as a solo artist last year, Jimin is set to release his second solo album titled Muse in July.",
    content: "ONLY AVAILABLE IN PAID PLANS",
    pubDate: "2024-06-18 03:46:21",
    image_url:
      "https://images.news18.com/ibnlive/uploads/2024/06/untitled-design-2024-06-18t091546.033-2024-06-844c6abe8923ce0b09ce7b615f60997c-3x2.png",
    source_id: "news18",
    source_priority: 6644,
    source_url: "https://www.news18.com",
    source_icon: "https://i.bytvi.com/domain_icons/news18.png",
    language: "english",
    country: ["india"],
    category: ["entertainment"],
    ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
    ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
  },
];
const HomePage = () => {
  const { data, isLoading, error } = useFetch(url);
  console.log(data);
  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="homepage-wrapper">
      {yeah?.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

const Article = ({ article }) => {
  // if (article.image_url === null) return null;
  return (
    <div className="article-wrapper">
      <h2>{article.title}</h2>
      <img src={article.image_url} alt="article" />
      <p>
        {article.description && (
          <span>{article.description?.slice(0, 300)}</span>
        )}
        <span>
          <a target="_blank" rel="noopener noreferrer" href={article.link}>
            Read More
          </a>
        </span>
      </p>
    </div>
  );
};

export default HomePage;
