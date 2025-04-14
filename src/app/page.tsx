import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="text-3xl font-bold underline">SGB Energy </h1>
        <p className="text-lg">Connect To Energy </p>
        <p className="text-lg">
          We provide a wide range of services to help you save energy and reduce
          costs.
        </p>
        <p>
          <span className="font-extrabold">Energieversorgung</span>
          <span> </span>
          <span>für Gewerbe und Industrie</span>
        </p>
      </main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
