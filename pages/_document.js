import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
            <link rel="stylesheet" href="https://goat100.com/css/bootstrap.css" type="text/css"/>
            <link rel="stylesheet" href="https://goat100.com/css/sweetalert.css" />
            <link rel="stylesheet" href="https://goat100.com/css/typeahead.css" type="text/css"/>
            <link rel="stylesheet" href="https://goat100.com/css/main.css?v=<?=time()?>" type="text/css"/>
            <link rel="stylesheet" href="https://goat100.com/css/croppie.css" type="text/css"/>
            <link rel="stylesheet" href="https://goat100.com/css/dropzone.css" type="text/css"/>
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
            <link href="https://goat100.com/css/gallery-dark-materialize.min.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://goat100.com/css/social.css" type="text/css"></link>
            <link rel="stylesheet" href="https://goat100.com/css/select2.css" type="text/css"></link>
            <link rel="stylesheet" href="https://goat100.com/css/justifiedGallery.min.css" type="text/css"></link>
            <link rel="stylesheet" href="https://goat100.com/css/lightgallery.css" type="text/css"></link>
            <link rel="stylesheet" href="https://goat100.com/css/all.css"></link>

            <script   async  src="https://code.jquery.com/jquery-2.2.4.min.js"  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="  crossOrigin="anonymous"></script>
      <script  async src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <script  async src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.8.2/sweetalert2.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

      <script  async src="https://goat100.com/js/croppie.js"></script>
      <script  async src="https://goat100.com/js/base64.js"></script>
      <script  async src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
      <script  async src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script>
      <script  async src="https://goat100.com/js/imagesloaded.pkgd.min.js"></script>
      <script  async src="https://goat100.com/js/masonry.pkgd.min.js"></script>
      <script  async src="https://goat100.com/js/socket.js?v=10"></script>
      <script  async src="https://goat100.com/js/popover.js"></script>
      <script  async type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.16/b-1.5.1/b-colvis-1.5.1/b-flash-1.5.1/b-html5-1.5.1/b-print-1.5.1/cr-1.4.1/fc-3.2.4/fh-3.1.3/sc-1.4.4/sl-1.2.5/datatables.min.js"></script>
      <script  async type="text/javascript" src="//cdn.datatables.net/plug-ins/1.10.16/pagination/input.js"></script>
      <script  async type="text/javascript"  src="https://goat100.com/js/yadcf.js"></script>
      <script  async src="https://goat100.com/js/lightgallery.js"></script>
      <script  async src="https://goat100.com/js/select2.js"></script>
      <script  async src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js"></script>
      <script  async src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script>
      <script  async src="https://goat100.com/js/ratings.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossOrigin="anonymous" />


         <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
         <link type="text/css" rel="stylesheet" href="css/updated.css" />
        <script async type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/e775e37abbd622cc59d9f2a39318b470.js"></script>
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
