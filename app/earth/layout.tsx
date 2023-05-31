export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-center text-2xl">Page content:</h1>
      {children}
    </div>
  );
}
