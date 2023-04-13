import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import imgNotAvailable from './imgNotAvailable.png';


const News = (props)=> {
  const[articles,setArticles] = useState([
    {
      source: {
        id: null,
        name: "futurezone.at",
      },
      author: "futurezone.at",
      title: "Tesla will nicht, dass Mitarbeiter über Bezahlung sprechen",
      description:
        "Tesla-Mitarbeiter*innen sollen sich angeblich nicht bei höheren Manager*innen über ihre Bezahlung beschweren.",
      url: "https://futurezone.at/b2b/tesla-mitarbeiter-bezahlung-beschwerde-nlrb-kayla-blado-elon-musk/402277217",
      urlToImage:
        "https://image.futurezone.at/images/facebook/6864194/46-186216301.jpg",
      publishedAt: "2023-01-01T10:25:27Z",
      content:
        "Tesla-Mitarbeiter*innen sollen sich angeblich nicht bei höheren Manager*innen über ihre Bezahlung beschweren.",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "yahoo.com",
      title:
        "NLRB says Tesla violated the law by telling employees not to talk about pay",
      description:
        "The National Labor Relations Board has accused Tesla of violating labor law by prohibiting employees in Orlando, Florida from talking about workplace matters. According to Bloomberg, NLRB's Tampa regional director filed a complaint against the automaker in Se…",
      url: "https://biztoc.com/x/9e4adb80ea85af0c",
      urlToImage: "https://c.biztoc.com/p/9e4adb80ea85af0c/og.webp",
      publishedAt: "2023-01-01T10:18:04Z",
      content:
        "The National Labor Relations Board has accused Tesla of violating labor law by prohibiting employees in Orlando, Florida from talking about workplace matters. According to Bloomberg, NLRB's Tampa reg… [+419 chars]",
    },
    {
      source: {
        id: null,
        name: "Atlantico.fr",
      },
      author: "Ula Chrobak",
      title:
        "Envol des véhicules électriques : le défi du recyclage de million de batteries usagées",
      description:
        "Au Nevada et dans d'autres États américains, des entrepreneurs anticipent le prochain boom des batteries lithium-ion hors d'usage des voitures électriques et espèrent créer un marché pour les minéraux recyclés.",
      url: "https://atlantico.fr/article/rdv/envol-des-vehicules-electriques-le-defi-du-recyclage-de-million-de-batteries-usagees-pollution-industrie-technologie-bilan-entreprises-industrie-dangers-risques-solutions-perspectives-voitures-industrie-automobile-ecologie-ula-chrobak",
      urlToImage:
        "https://atlantico-media.s3.eu-west-3.amazonaws.com/000_QI_4_A4_69c3f249e7.jpg",
      publishedAt: "2023-01-01T10:14:14Z",
      content:
        "A 30 km à l'est de Reno, dans le Nevada, après des collines poussiéreuses parsemées de sauge d'un bleu discret et d'un panneau d'affichage occasionnel pour les avocats spécialisés dans les blessures,… [+17995 chars]",
    },
    {
      source: {
        id: "the-next-web",
        name: "The Next Web",
      },
      author: "Tristan Greene",
      title: "The most mind-blowing Neural stories of 2022",
      description:
        "We did it! Despite humanity's best efforts, we made it through 2022. Before we pick ourselves up, dust ourselves off, and brace for whatever 2023 has to offer, we should probably take ...",
      url: "https://thenextweb.com/news/most-mind-blowing-neural-stories-of-2022",
      urlToImage:
        "https://img-cdn.tnwcdn.com/image/neural?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2022%2F12%2F2022_roundup.jpg&signature=a78b75597c780e9e7c06ec5d5902390c",
      publishedAt: "2023-01-01T10:08:47Z",
      content:
        "We did it! Despite humanitys best efforts, we made it through 2022. Before we pick ourselves up, dust ourselves off, and brace for whatever 2023 has to offer, we should probably take some time to ref… [+4781 chars]",
    },
    {
      source: {
        id: null,
        name: "AutoExpress",
      },
      author: "Steve Sutcliffe",
      title: "New Maserati GranTurismo Folgore 2023 review",
      description:
        "The all-electric Maserati GranTurismo Folgore boasts huge performance, but is still lacking in certain areas",
      url: "https://www.autoexpress.co.uk/maserati/granturismo/359407/new-maserati-granturismo-folgore-2023-review",
      urlToImage:
        "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1671191933/autoexpress/2022/12/Maserati GranTurismo Folgore 2023-3.jpg",
      publishedAt: "2023-01-01T10:00:52Z",
      content:
        "The all-electric GranTurismo Folgore is a key car for Maserati, because it represents the future for one of Italys most famous car companies. In most ways its a strong contender that has huge on-pape… [+5827 chars]",
    },
    {
      source: {
        id: null,
        name: "Ilpost.it",
      },
      author: null,
      title:
        "Le grosse notizie dal mondo del 2022, anno della guerra in Ucraina",
      description:
        "La morte di Elisabetta II, la decisione della Corte Suprema americana sull'aborto e le proteste in Iran, tra le altre cose",
      url: "https://www.ilpost.it/2023/01/01/notizie-importanti-2022/",
      urlToImage:
        "https://www.ilpost.it/wp-content/uploads/2022/12/23/1671793753-ucraina-esplosione.jpg",
      publishedAt: "2023-01-01T09:59:03Z",
      content:
        "Ricorderemo il 2022 come l’anno in cui la Russia ha invaso l’Ucraina, e in cui, proprio quando la pandemia globale sembrava sul punto di finire, il ritorno della guerra d’invasione in Europa ha porta… [+17873 chars]",
    },
    {
      source: {
        id: null,
        name: "Vnexpress.net",
      },
      author: "VnExpress",
      title: "Elon Musk trở thành người đầu tiên trên thế giới mất 200 tỷ USD",
      description:
        "Tỷ phú Elon Musk bước sang năm mới 2023 với khối tài sản 137 tỷ USD, giảm hơn 200 tỷ USD so với trước đó một năm.",
      url: "https://vnexpress.net/elon-musk-tro-thanh-nguoi-dau-tien-tren-the-gioi-mat-200-ty-usd-4555184.html",
      urlToImage:
        "https://i2-vnexpress.vnecdn.net/2023/01/01/elonmusk13-1672566011-7313-1672566199.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QebO-8jv6Bb6X6pyHRtRXA",
      publishedAt: "2023-01-01T09:44:14Z",
      content:
        "T phú Elon Musk bc sang nm mi 2023 vi khi tài sn 137 t USD, gim hn 200 t USD so vi trc ó mt nm.Thng kê do t Bloomberg ca M công b hôm 31/12/2022 cho thy t phú Elon Musk s hu khi tài sn tr giá 137 t U… [+1388 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Hindi.Moneycontrol.com Team, Moneycontrol Hindi",
      title:
        "Tesla कार खरीदारों के लिए न्यू ईयर ऑफर का ऐलान, मिलेगा 1.20 लाख रुपये तक डिस्काउंट",
      description:
        "Tesla: नए साल 2023 के मौके पर एलन मस्क (Elon Musk) की कंपनी टेस्ला इंक (Tesla Inc) अपने कस्टमर्स के लिए एक्सक्लूसिव इंसेंटिव ऑफर लेकर आई है। टेस्ला की वेबसाइट के अनुसार, कंपनी मॉडल 3 सेडान और मॉडल Y स्पोर्ट यूटिलिटी व्हीकल खरीदने वाले ग्राहकों को 10,000 युआन …",
      url: "https://hindi.moneycontrol.com/news/tech/auto/tesla-car-new-year-offers-for-car-buyers-in-china-details-972901.html",
      urlToImage:
        "https://images.moneycontrol.com/static-hindinews/2022/07/TeslaLogoFB-770x430.jpg",
      publishedAt: "2023-01-01T09:41:57Z",
      content:
        "Tesla: 2023 (Elon Musk) (Tesla Inc) , 3 Y 10,000 (1,450 ) 1.20 , 28 , \r\n 6,000- , 4,000- 37% , , \r\nTesla , 3 Y 7,500 , S X , 70%",
    },
    {
      source: {
        id: null,
        name: "Wykop.pl",
      },
      author: "Chrok",
      title:
        "Największy spadek od czasu pęknięcia bańki internetowej. Amazon kończy...",
      description:
        "Gorzej miała tylko Tesla (68 proc.) i Meta (66 proc.). Amazon z wynikiem 51 proc. jest na trzecim miejscu. To jego drugi najgorszy spadek wartości akcji w historii.",
      url: "https://www.wykop.pl/link/6965919/najwiekszy-spadek-od-czasu-pekniecia-banki-internetowej-amazon-konczy/",
      urlToImage:
        "https://www.wykop.pl/cdn/c3397993/link_1672565985AcdCHRPGAqi8A2mdg2S0Zf,w1200h627f.jpg",
      publishedAt: "2023-01-01T09:41:34Z",
      content:
        "Drogi Wykopowiczu\r\nw zaczonym linku do Polityki Prywatnoci przypominamy podstawowe informacje z zakresu przetwarzania danych osobowych dostarczanych przez Ciebie podczas korzystania z naszego serwisu… [+108 chars]",
    },
  ]);
  const[pageNumber,setPageNumber] = useState(1);
  const[loading,setLoading] = useState(true);
  const[totalResults,setTotalResults] = useState(0);

useEffect(()=>{
  props.setProgress(10);
      let fetchData = async()=>{
          let data = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize?props.pageSize:6}`
          )
          props.setProgress(90);
          let parsedData = await data.json();

          setArticles(parsedData.articles);
          setTotalResults(parsedData.totalResults);
      } 
      setLoading(true);
      props.setProgress(100);
      // fetchData();
      document.title = capitalize();
      console.log(document.title);
      
  },[]);

  const capitalize = () => {
    let word = props.category;
    let capi = word.charAt(0).toUpperCase() + word.slice(1, word.length);
    return capi;
  };
  
  const fetchMore =  async () =>{
    let data = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5897b0bf2be647b7ab42fa7143b789ae&page=${pageNumber+1}&pageSize=${props.pageSize?props.pageSize:6}`
          )
          setPageNumber(pageNumber + 1);
          let parsedData = await data.json();
          setArticles(articles.concat(parsedData.articles)); 
  }

  return (
    <div className="container my-4 ">
      <h2 className='text-center' style={{color:"antiquewhite",marginTop:"5rem"}}>React NewsPaper</h2>
      <h5 className='text-center my-4' style={{color:"antiquewhite"}}>Top HeadLines From {capitalize()}</h5>
      {!loading && <Spinner/> }  
        <InfiniteScroll dataLength = {articles.length} next={fetchMore} hasMore={articles.length!==totalResults} loader={<Spinner></Spinner>} >
        <div className="row my-4">
        {articles.map((article) => {
          return (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={
                  article.title !== null
                    ? article.title.concat(".....read more")
                    : null
                }
                description={
                  article.description !== null
                    ? article.description.concat("......read more")
                    : null
                }
                imgUrl={article.urlToImage == null? imgNotAvailable: article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              ></NewsItem>
            </div>
          );
        })}
          </div>
        </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string,
  category: PropTypes.string,
}

 export default News;