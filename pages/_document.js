import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
            <link rel="stylesheet" href="css/sweetalert.css" />
            <link rel="stylesheet" href="css/typeahead.css" type="text/css"/>
            <link rel="stylesheet" href="css/main.css?v=<?=time()?>" type="text/css"/>
            <link rel="stylesheet" href="css/croppie.css" type="text/css"/>
            <link rel="stylesheet" href="css/dropzone.css" type="text/css"/>
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
            <link href="css/gallery-dark-materialize.min.css" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="css/social.css" type="text/css"/>
            <link rel="stylesheet" href="css/select2.css" type="text/css"/>
            <link rel="stylesheet" href="css/justifiedGallery.min.css" type="text/css"/>
            <link rel="stylesheet" href="css/lightgallery.css" type="text/css"/>
            <link rel="stylesheet" href="css/all.css" />
        </Head>
        <body>
        </body>
      </Html>
    )
  }
}
