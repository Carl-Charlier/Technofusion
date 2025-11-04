import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between bg-background text-foreground">
      <Navbar />

      <Footer />
    </main>
  );
}
