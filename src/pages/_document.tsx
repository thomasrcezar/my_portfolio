import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || 'en'; // Get locale from context, default to 'en'
    return { ...initialProps, locale }; // Pass locale as a prop
  }

  render() {
    // Access locale passed from getInitialProps
    const locale = this.props.locale || 'en';
    return (
      <Html lang={locale}> {/* Use dynamic locale */}
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Developer portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
