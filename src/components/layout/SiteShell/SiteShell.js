import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';

export default function SiteShell({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
