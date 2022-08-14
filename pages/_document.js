import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        


            <script async
                src="https://code.jquery.com/jquery-3.6.0.js"
                integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
                crossOrigin="anonymous"></script>


               <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css" />
               <script async src="/jqueryui.js"></script>
               <script async src="/jquery.validate.js"></script>
               <link href="/magiczoom.css" rel="stylesheet" type="text/css" media="screen"/>

               <script async src="/moment.js"></script>
                <link
                       rel="preload"
                       href="/font/marlin-geo-sq/MarlinGeoSQ-Light.ttf"
                       as="font"
                       type="font/ttf"
                       crossOrigin
                     />
                     <link
                        rel="preload"
                        href="/font/marlin-geo-sq/MarlinGeoSQ-Medium.eot"
                        as="font"
                        type="font/eot"
                        crossOrigin
                      />
                      <link
                         rel="preload"
                         href="/font/marlin-geo-sq/MarlinGeoSQ-Medium.eot?#iefix"
                         as="font"
                         type="font/eot"
                         crossOrigin
                       />
                       <link
                          rel="preload"
                          href="/font/marlin-geo-sq/MarlinGeoSQ-Medium.woff2"
                          as="font"
                          type="font/woff2"
                          crossOrigin
                        />
                        <link
                           rel="preload"
                           href="/font/marlin-geo-sq/MarlinGeoSQ-Medium.woff"
                           as="font"
                           type="font/woff"
                           crossOrigin
                         />
                         <link
                            rel="preload"
                            href="/font/marlin-geo-sq/MarlinGeoSQ-Medium.ttf"
                            as="font"
                            type="font/ttf"
                            crossOrigin
                          />
                              <script async src="/bootstrap.min.js"></script>
                      <script async defer  src="https://connect.facebook.net/en_US/sdk.js"></script>
                      <meta name="google-site-verification" content="hwNV3ftbYggFmrsM0q70QuGWFm08JnRT65JIiqM_r7Q" />
        </Head>
        <body>
        <div id="fb-root"></div>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              const fbDiv = document.createElement("div");
                fbDiv.id = "fb-root";
                document.body.appendChild(fbDiv);
                // Run any script after sdk is loaded
                window.fbAsyncInit = () => {
                  FB.init({
                      appId            : '362991595876147',
                      autoLogAppEvents : true,
                      xfbml            : true,
                      version          : 'v13.0'
                    });
                };
                // inject sdk.js
                (function(d, script) {
                  script = d.createElement("script");
                  script.type = "text/javascript";
                  script.async = true;
                  script.src =
                    "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=362991595876147" +
                    "&autoLogAppEvents=1";
                  d.getElementsByTagName("head")[0].appendChild(script);
                })(document);
          `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
