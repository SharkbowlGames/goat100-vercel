import React, { useState, useRef, useEffect } from "react";
import loadable from '@loadable/component'

//import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Head from "next/head";
//import Header from "../components/header";
const Header = loadable(() => import('../components/header'))
//import Footer from "../components/footer";
const Footer = loadable(() => import('../components/footer'))

import renderHTML from "react-render-html";
//import Schedule from "../components/schedule";
const Schedule = loadable(() => import('../components/schedule'))

//import Collection from "../components/collection";
const Collection = loadable(() => import('../components/collection'))

import Help from "../components/help";
//const Help = loadable(() => import('../components/header'))

//import Instagram from "../components/instagram";
const Instagram = loadable(() => import('../components/instagram'))

import Script from "next/script";
import Image from "next/image";
const url = process.env.NEXT_PUBLIC_WORDPRESS_URL + "/wp-json/wp/v2/pages/225800";
const heroGradientStyle =
  "linear-gradient(180deg, #01215c 0%, rgba(1, 33, 92, 0) 50%),";
let localData;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=200000, stale-while-revalidate=200000'
  )
  let data = {};
  if (localData) {
    data = localData;
  } else {
    const res = await fetch(url, {
      method: "get",
    });
    data = await res.json();

    localData = data;
  }
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [windowWidth, setWindowWidth] = useState();
  const [isMobile, setIsMobile] = useState();
  const heroData = data.acf.landing.slider[0];
  const [productData, setProductData] = useState();
  //const productData = data.acf.product_row;
  const textData = [data.content];
  const seoData = data.yoast_head_json;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {

        var cData = [];

        setLoaded(true);
        $.each(data.acf.product_row, function() {
          console.log(this);
          var ths = this;
          fetch('https://royalcoster.com:81/royalcoster/images/getImage.php?src=' + ths.product_row_img.url, {
            mathod: "get"
          })
          .then((res) => res.json())
          .then((dt) => {


           ths.product_row_img.pid = dt.image;
           cData.push(ths)
           console.log(cData)
        })
      })
        console.log(data.acf.product_row)
        var ww = setInterval(function() {

          if (cData.length == data.acf.product_row.length) {
            clearInterval(ww);
        //    setProductData(cData);
          }
        }, 100)
    }
  setIsMobile((window.innerWidth < 576) ? true : false);
    var ww = setInterval(function() {
      if ($("#video").height() > 0) {
        clearInterval(ww)
        setTimeout(function() {
          if ($(window).width() < 576) {
              $("#video").parent().css({
                height: $("#video").height(),

              })
            }
              $("#video").css({
                visibility: "visible"
              })
            }, 2000);
          }
      } , 100);
  }, []);

  return (

    <div className="homepage">
      <Head>
        {seoData.title && (
          <title>{seoData.title} | Royal Coster</title>
        )}
        {seoData.og_description && (
          <meta name="description" content={seoData.og_description}/>
        )}
        {seoData.og_locale && (
          <meta property="og:locale" content={seoData.og_locale}/>
        )}
        {seoData.og_type && (
          <meta property="og:type" content={seoData.og_type}/>
        )}
        {seoData.og_title && (
          <meta property="og:title" content={seoData.og_title}/>
        )}
        {seoData.og_description && (
          <meta property="og:descrog_description" content={seoData.og_description}/>
        )}
        {seoData.og_url && (
          <meta property="og:urlog_url" content={seoData.og_url}/>
        )}
        {seoData.og_site_name && (
          <meta property="og:site_name" content={seoData.og_site_name}/>
        )}
        {seoData.article_publisher && (
          <meta property="article:publisher" content={seoData.article_publisher}/>
        )}
        {seoData.article_modified_time && (
          <meta property="article:modified_time" content={seoData.article_modified_time}/>
        )}
        {seoData.og_image && (
          <meta property="og:image" content={seoData.og_image}/>
        )}
        {seoData.auther && (
          <meta name="auther" content={seoData.auther}/>
        )}
        {seoData.twitter_card && (
          <meta name="twitter:card" content={seoData.twitter_card}/>
        )}
        {seoData.twitter_site && (
          <meta name="twitter:site" content={seoData.twitter_site}/>
        )}
        {seoData.schema && (
          <script type="application/ld+json" className="yoast-schema-graph">
            {/* {seoData.schema} */}
          </script>
        )}
      </Head>

      <Header page="homepage" />
      {/* Start hero section */}

      <div
        className={heroData.mobile.video.url ? "hero mobie_video" : "hero"}
        style={{
          marginTop: -20,
          height: 768,
          minheight: 768,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
            backgroundPosition: "0px -115px",
            backgroundImage:
            heroData?.mobile.image && isMobile
              ? heroGradientStyle + "url(" + "/img/rap_main.jpg" + ")"
              : heroData &&
                heroGradientStyle + "url(" + "/img/rap_main.jpg" + ")"
        }}
      >
        { !isMobile && (
          <video id="video" style={{filter: "brightness(40%)",visibility:"hidden", position: "absolute",top:0,zIndex: 0}}
            autoPlay="autoplay"
            loop="loop"
            muted
            defaultmuted="defaultmuted"
            playsInline
            onContextMenu={() => false}
            vvsd
            preload="auto"
            className="d-xl-block d-none bg_video"
          >
            <source src={heroData.video.url} type="video/mp4" />
          </video>
        )}

        {heroData && !isMobile && (
          <div className="r-container d-none d-sm-flex flex-column" style={{
            position: "absolute",
            color: "white",
            bottom: 0,
            width: "100%",
            maxWidth: "1280px",
            margin: "auto",
            paddingLeft: "12%"
          }}>

            <div className="text-panel col-lg-6 col-md-8 col-sm-10 col-12">
              <h1 className="text-capitalize text-left" style={{color:"white"}}>
                GOAT100
              </h1>
              <p className="mt-4 mb-5 pt-2" style={{color:"white"}}>
                The Very best of Hip Hop all the time
              </p>
            </div>
            <div className="btn-panel">

            </div>
          </div>
        )}
        {heroData && isMobile && 'Outer Video' != heroData.slider_type && (
          <div  style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingLeft: 25,
            paddingRight: 25,
            margin: "auto"
          }}>

            <div className="text-panel col-lg-6 col-md-8 col-sm-10 col-12"  >
              <h1 className="text-capitalize text-left" style={{fontSize: 30}}>
                {heroData.title && renderHTML(heroData.title)}
              </h1>
              <p className="mt-4 mb-5 pt-2">
                {heroData.sub_title && renderHTML(heroData.sub_title)}
              </p>
            </div>
            <div className="btn-panel">
              {heroData.button && (
                <Link href={heroData.button.url}>
                  <a className="btn rainbow-btn dark-btn round-form px-5 py-3 me-3 mt-5">
                    {heroData.button.title}
                  </a>
                </Link>
              )}
              {heroData.button2 && (
                <Link href={heroData.button2.url}>
                  <a className="btn blue-outline-btn shop-now-btn round-form px-5 py-3 mt-5">
                    {heroData.button2.title}
                  </a>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
      {heroData && isMobile && 'Outer Video' == heroData.slider_type && (
        <div className="text-panel-container mt-4 mb-5" style={{
          paddingLeft: 25,
          paddingRight: 25,
          textAlign: 'center'
        }}>

          <div className="text-panel col-lg-6 col-md-8 col-sm-10 col-12"  >
            <h1 className="text-capitalize text-left" style={{fontSize: 30}}>
              {heroData.title && renderHTML(heroData.title)}
            </h1>
            <p className="mb-5 pt-2" style={{fontSize: 14}}>
              {heroData.sub_title && renderHTML(heroData.sub_title)}
            </p>
          </div>
          <div className="btn-panel">
            {heroData.button && (
              <Link href={heroData.button.url}>
                <a className="btn rainbow-btn dark-btn round-form px-5 py-3 me-3 my-2" style={{fontSize: 12}}>
                  {heroData.button.title}
                </a>
              </Link>
            )}
            {heroData.button2 && (
              <Link href={heroData.button2.url}>
                <a className="btn blue-outline-btn shop-now-btn round-form px-5 py-3 my-2" style={{fontSize: 12}}>
                  {heroData.button2.title}
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
      {/* End Hero section */}

      <div className="categories d-none d-md-flex row m-0">
        {productData?.map((item, index) => {
          return (
            <div className="col-lg-3 col-sm-6 col-12 p-0 mb-4" key={index}>
              <Link passHref={true} href={item.product_row_url}>
                <a>
                  <div className="category-item round" style={{position:"relative"}}>
                  <Image

                      alt="Category"
                      src={item.product_row_img.url}
                      layout="fill"
                      objectFit="contain"
                      quality={100}

                  />
              {/*}      <imgloading='lazy'  src={item.product_row_img.pid} alt="category" />*/}
                    <div className="hover-title p-4">
                      {item.product_row_img_title}
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
}
