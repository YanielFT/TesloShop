import TopMenu from '../../components/ui/top-menu/TopMenu';




export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu/>
      <div className='sm:mx-10'>
      {children}
      </div>
    </main>
  );
}
