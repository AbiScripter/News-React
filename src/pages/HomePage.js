import React, { useState } from "react";
import "./HomePage.css";
//0ab57087d92b4d4292af2bb48b47bf60
//https://newsapi.org/v2/top-headlines?country=in&apiKey=0ab57087d92b4d4292af2bb48b47bf60
const yeah = [
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "Neha Yadav",
    title: "10 stunning images of cosmos shared by NASA - Hindustan Times",
    description: "10 stunning images of cosmos shared by NASA",
    url: "https://www.hindustantimes.com/web-stories/in-focus/10-stunning-images-of-cosmos-shared-by-nasa-101718622503052.html",
    urlToImage: null,
    publishedAt: "2024-06-17T12:30:03Z",
    content:
      "By Neha YadavPublished Jun 17, 2024\r\nHindustan TimesIn FocusPhoto Credits: Instagram/nasahubble",
  },
  {
    source: {
      id: null,
      name: "Business Standard",
    },
    author: "Nandini Singh",
    title:
      "Spread of deadly 'flesh-eating bacteria' in Japan raises global concerns - Business Standard",
    description:
      "Flesh-eating bacteria Japan: Data from Japan's National Institute of Infectious Diseases shows an alarming increase with nearly 1,000 reported cases of Streptococcal Toxic Shock Syndrome this year, exceeding last year's total",
    url: "https://www.business-standard.com/world-news/spread-of-deadly-flesh-eating-bacteria-in-japan-raises-global-concerns-124061700622_1.html",
    urlToImage:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/thumb/featurecrop/400X400/1718626748-9565.jpg",
    publishedAt: "2024-06-17T12:24:28Z",
    content:
      "Data from Japan's National Institute of Infectious Diseases shows an alarming increase with nearly 1,000 reported cases of Streptococcal Toxic Shock Syndrome this year, exceeding last year's total\r\nP… [+3367 chars]",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "Anurag Bohra",
    title:
      "Alia Bhatt posts cute picture of Raha walking with Ranbir Kapoor, internet reacts: ‘Papa’s Dilbaro’ - Hindustan Times",
    description:
      "Alia Bhatt and Ranbir Kapoor welcomed their baby daughter Raha in November 2022. The Jigra actor recently shared a cute pic of her toddler. | Bollywood",
    url: "https://www.hindustantimes.com/entertainment/bollywood/alia-bhatt-posts-cute-picture-of-raha-walking-with-ranbir-kapoor-internet-reacts-101718622083117.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/raha_walking_ranbir_alia_1718625048123_1718625065046.jpg",
    publishedAt: "2024-06-17T11:58:16Z",
    content:
      "Alia Bhatt and Ranbir Kapoor are not shy about showing their love for their daughter, Raha Kapoor. Alia recently posted a heartwarming picture of Raha walking with Ranbir, on Instagram. The post rece… [+2306 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Simone McCarthy, Anna Chernova",
    title:
      "Russia’s Putin to visit North Korea in rare trip as anti-West alignment deepens - CNN International",
    description:
      "Vladimir Putin is set to travel to North Korea this week, the Kremlin said Monday, in the Russian president’s first visit to the country in more than two decades – and the latest sign of a deepening alignment that’s raised widespread international concern.",
    url: "https://www.cnn.com/2024/06/17/asia/north-korea-russia-putin-visit-intl-hnk/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1662045038.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2024-06-17T11:36:00Z",
    content:
      "Vladimir Putin is set to travel to North Korea for a two-day visit starting Tuesday, the Kremlin said, in the Russian presidents first trip to the country in more than two decades and the latest sign… [+5773 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "BBC.com",
    title:
      "Kanchenjungha Express: Fifteen killed in India train collision - BBC.com",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jMGtreXZxMDgxd2_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvYzBra3l2cTA4MXdvLmFtcA?oc=5",
    urlToImage: null,
    publishedAt: "2024-06-17T11:26:15Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Opposition To Get A Leader In Lok Sabha, But It May Not Be Rahul Gandhi - NDTV",
    description:
      "Congress's Rahul Gandhi, widely expected to shoulder the responsibilities of the Leader of the Opposition in the 18th Lok Sabha, is not inclined to take up the post, sources in the party have confided.",
    url: "https://www.ndtv.com/india-news/lop-rahul-gandhi-opposition-gets-a-leader-in-lok-sabha-but-it-may-not-be-rahul-gandhi-5909118",
    urlToImage:
      "https://c.ndtvimg.com/2024-06/bp0t5ado_rahul-gandhi_625x300_15_June_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240616.100",
    publishedAt: "2024-06-17T11:21:14Z",
    content:
      "Rahul Gandhi has also decided to represent Sonia Gandhi's constituency, Raebareli, in parliament.\r\nNew Delhi: Congress's Rahul Gandhi, widely expected to shoulder the responsibilities of the Leader o… [+2024 chars]",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Sports Desk",
    title:
      "'Virat Kohli failed, so what? You are leading Pakistan...': Babar Azam mercilessly slammed in hot-headed rant - Hindustan Times",
    description:
      "Pakistan were eliminated from the group stage of the T20 World Cup, ending their campaign with a scratchy win over Ireland. | Crickit",
    url: "https://www.hindustantimes.com/cricket/virat-kohli-failed-so-what-you-are-leading-pakistan-babar-azam-mercilessly-slammed-in-hot-headed-rant-101718618665872.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/CRI-SPO-PAKISTAN-V-CANADA-ICC-MEN-S-T20-CRICKET-WO_1718622086376_1718622086825.jpg",
    publishedAt: "2024-06-17T11:02:37Z",
    content:
      "Pakistan were eliminated from the group stage of the T20 World Cup last week, following the losses to the United States and India. The side's survival in the edition depended on Ireland's win over th… [+2388 chars]",
  },
  {
    source: {
      id: null,
      name: "India Today",
    },
    author: "Ankita Garg",
    title:
      "iPhone 15 Pro and 15 Pro Max price drops in India, only devices eligible to receive Apple Intelligence - India Today",
    description:
      "The iPhone 15 Pro is now available at a discounted price of Rs 126990 on Vijay Sales down from its original price of Rs 134900 There is an extra Rs 3000 discount as well on select bank offers which will effectively drop the price to Rs 123990 Read on to know …",
    url: "https://www.indiatoday.in/technology/news/story/iphone-15-pro-and-15-pro-max-price-cut-in-india-only-devices-eligible-to-receive-apple-intelligence-2554295-2024-06-17",
    urlToImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/iphone-15-pro-max-291834181-16x9_3.png?VersionId=HBPbOChX5mVluIFv9VNhe6IRw9wd3OMy",
    publishedAt: "2024-06-17T10:47:14Z",
    content:
      "The prices of the iPhone 15 Pro and iPhone 15 Pro Max have been reduced on select online channels. These models, now more affordable, are also set to be the only devices to receive the recently annou… [+2902 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TOI Lifestyle Desk",
    title:
      "Common medications that can increase risk of dehydration during intense heatwave (here's what to do) - The Times of India",
    description:
      "Certain medications during heat waves can increase dehydration risk, especially for those with chronic conditions or the elderly. Understanding and ma",
    url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/common-medications-that-can-increase-risk-of-dehydration-during-intense-heatwave-heres-what-to-do/articleshow/111056291.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-111057114,width-1070,height-580,imgsize-600254,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2024-06-17T10:30:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Livemint",
    title:
      "Mumbai North West LS seat row: Shiv Sena (UBT) to approach court, says 'we have won the seat' | Mint - Mint",
    description:
      "Shiv Sena leaders plan to approach Supreme Court over Lok Sabha seat lost by 48 votes. They insist winning candidate Ravindra Waikar should be stopped from taking oath.",
    url: "https://www.livemint.com/politics/news/mumbai-north-west-ls-seat-row-shiv-sena-ubt-to-approach-court-aaditya-thackeray-ravindra-waikar-amol-kirtikar-11718619129689.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2024/06/17/1600x900/PTI06-17-2024-000203B-0_1718629618361_1718630295566.jpg",
    publishedAt: "2024-06-17T10:18:45Z",
    content:
      "Leaders from the Shiv Sena (UBT) have announced their plans to approach the Supreme Court over a Lok Sabha seat lost by 48 votes. The Uddhav Thackeray-led party insisted that winning candidate Ravind… [+2596 chars]",
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT News Desk",
    title:
      "Israel-Hamas war: Benjamin Netanyahu disbands war cabinet after key partner exits - Hindustan Times",
    description:
      "The war cabinet was created on October 11 to manage the country's military campaigns against Hamas and Hezbollah | Latest News India",
    url: "https://www.hindustantimes.com/india-news/israelhamas-war-benjamin-netanyahu-disbands-war-cabinet-after-key-partner-exits-101718614084282.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2024/06/17/1600x900/ISRAEL-POLITICS--5_1703688213979_1718617248742.JPG",
    publishedAt: "2024-06-17T09:58:00Z",
    content:
      "Israeli Prime Minister Benjamin Netanyahu has dissolved the six-member war cabinet which was created on October 11 to manage the country's military campaigns against Hamas and Hezbollah, Reuters repo… [+2085 chars]",
  },
  {
    source: {
      id: null,
      name: "The Indian Express",
    },
    author: "The Indian Express",
    title:
      "IAS officer transferred day after demolition of 2 sheds outside former CM Jagan Reddy’s home - The Indian Express",
    description: null,
    url: "https://indianexpress.com/article/cities/hyderabad/ias-officer-transferred-after-demolition-of-sheds-outside-jagan-reddys-home-9397428/",
    urlToImage: null,
    publishedAt: "2024-06-17T09:48:34Z",
    content: null,
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "NDTV",
    title:
      '"Justice Different From Friendship": Actor Kiccha Sudeep On Darshan Case - NDTV',
    description: null,
    url: "https://news.google.com/rss/articles/CBMingFodHRwczovL3d3dy5uZHR2LmNvbS9pbmRpYS1uZXdzL2RhcnNoYW4tdGhvb2d1ZGVlcGEtcGF2aXRocmEtZ293ZGEta2ljY2hhLXN1ZGVlcC1qdXN0aWNlLWRpZmZlcmVudC1mcm9tLWZyaWVuZHNoaXAtYWN0b3Ita2ljY2hhLXN1ZGVlcC1vbi1kYXJzaGFuLWNhc2UtNTkwODM5NdIBAA?oc=5",
    urlToImage: null,
    publishedAt: "2024-06-17T09:36:50Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: "NDTV Sports Desk",
    title:
      "'Ramiz Raja To Replace Babar Azam...': Former India Cricketer's Witty Idea For New Pakistan Captain After T20 World Cup Exit | Cricket News - NDTV Sports",
    description:
      "Pakistan crashed out in the group stage of the 2024 T20 World Cup, after losses to USA and India.",
    url: "https://sports.ndtv.com/t20-world-cup-2024/ramiz-raja-to-replace-babar-azam-former-india-cricketers-witty-idea-for-new-pakistan-captain-after-t20-world-cup-exit-5901892",
    urlToImage:
      "https://c.ndtvimg.com/2024-06/erva6ig_babar-azam-afp_625x300_06_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
    publishedAt: "2024-06-17T09:34:51Z",
    content:
      "Former India cricketer Sanjay Manjrekar joked that Babar Azam should be replaced by former Pakistan cricketer Ramiz Raja as captain. Speaking on Star Sports, Manjrekar came up with the witty idea in … [+1682 chars]",
  },
  {
    source: {
      id: null,
      name: "Ahmedabadmirror.com",
    },
    author: null,
    title:
      "Earth's inner core slowing down 'unambiguously': Study - Ahmedabad Mirror",
    description: "Earth’s inner core slowing down ‘unambiguously’: Study",
    url: "https://www.ahmedabadmirror.com/earths-inner-core-slowing-down-unambiguously-study/81869175.html",
    urlToImage:
      "https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1718570470100.jpg-org",
    publishedAt: "2024-06-17T09:34:08Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CNBCTV18",
    },
    author: "Hormaz Fatakia",
    title:
      "Trade Setup for June 18: Can the Nifty cross 24,000 before the June series expiry? - CNBCTV18",
    description:
      "For now, the action remains stock specific as the Nifty and the Nifty Bank both have important levels to cross before they head for the next leg of their rally on the upside.",
    url: "https://www.cnbctv18.com/market/trade-setup-for-june-18-nifty-key-levels-banks-midcap-iifl-fin-lic-zomato-ongc-share-price-19429435.htm",
    urlToImage:
      "https://images.cnbctv18.com/uploads/2023/08/TRADE_SETUP_BG.jpg?im=FitAndFill,width=500,height=300",
    publishedAt: "2024-06-17T09:30:44Z",
    content:
      "The Nifty is in consolidation mode. But its a consolidation that is also slowly taking the index higher. The week gone by saw the index gain in four out of the five trading sessions. It first surpass… [+7847 chars]",
  },
  {
    source: {
      id: null,
      name: "India Today",
    },
    author: "India Today News Desk",
    title:
      "Air India passenger finds blade in his meal, airline issues statement - India Today",
    description:
      "Journalist Mathures Paul who was on board flight AI 175 on June 9 took to social media to share his experience stating he found the blade in a fig chaat dish",
    url: "https://www.indiatoday.in/india/story/air-india-passenger-finds-blade-in-his-meal-airline-confirms-statement-foreign-object-2554205-2024-06-17",
    urlToImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/air-india-food-blade-174611912-16x9_0.jpg?VersionId=REX9VmdL3rJRRDYszI2J_oZJhGy2fNjq",
    publishedAt: "2024-06-17T08:49:39Z",
    content:
      "Air India is investigating after a passenger claimed he found a metal blade in their in-flight meal on a recent flight from Bengaluru to San Francisco. Journalist Mathures Paul, who was on board flig… [+1847 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TOI News Desk",
    title:
      "Pope-Modi picture: Congress issues apology, but targets PM - The Times of India",
    description:
      "India News: NEW DELHI: The Kerala Congress has apologized for a picture shared by its state unit featuring Prime Minister Narendra Modi with Pope Francis at the G.",
    url: "https://timesofindia.indiatimes.com/india/pope-modi-picture-congress-issues-apology-but-targets-pm/articleshow/111055330.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-111055662,width-1070,height-580,imgsize-1228947,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2024-06-17T08:37:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "India Today",
    },
    author: "India Today News Desk",
    title:
      "India dissociates from Swiss peace summit document on Ukraine, no Russia at meet - India Today",
    description:
      "India said it did not sign a joint communique at a Switzerland-hosted summit on peace in Ukraine taking the stand that all parties involved in the conflict need to be part of the negotiations",
    url: "https://www.indiatoday.in/india/story/india-opts-out-of-ukraine-declaration-at-swiss-peace-summit-as-russia-stays-away-2554184-2024-06-17",
    urlToImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/swiss-peace-summit-on-ukraine-172105432-16x9_0.jpg?VersionId=S4nDqdzqJCM.0ux5AKIOzGjqvi0JbNWO",
    publishedAt: "2024-06-17T08:21:23Z",
    content:
      "India abstained from signing the joint communique on peace in Ukraine during a summit hosted by Switzerland. The decision came as Russia chose not to attend the summit, dismissing it as a “waste of t… [+1894 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "TOI Entertainment Desk",
    title:
      "Amitabh Bachchan waits patiently as there's delay in 'Kalki 2898 AD' song release with Prabhas and Diljit - TOI Etimes",
    description:
      "Director Nag Ashwin thanks Amitabh Bachchan for being so patient as the actor tweets he's waiting for the release of 'Bhairava Anthem', featuring Dilj",
    url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amitabh-bachchan-waits-patiently-as-theres-delay-in-kalki-2898-ad-song-release-with-prabhas-and-diljit-dosanjh-director-nag-ashwin-responds/articleshow/111055335.cms",
    urlToImage:
      "https://static.toiimg.com/thumb/msid-111055359,width-1070,height-580,imgsize-52698,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2024-06-17T08:21:00Z",
    content: null,
  },
];
const HomePage = () => {
  const [data, setData] = useState(yeah);
  console.log(data);

  return (
    <div className="homepage-wrapper">
      {data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

const Article = ({ article }) => {
  if (article.urlToImage === null) return null;
  return (
    <div className="article-wrapper">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt="article" />
      <p>{article.description}</p>
    </div>
  );
};

export default HomePage;
