// app/layout.js
import ApolloWrapper from './ApolloWrapper';
import './globals.css';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="container container-flex">
        <main role="main">
        <ApolloWrapper>
          {children}
        </ApolloWrapper>

        </main>
        <Sidebar/>
       
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
