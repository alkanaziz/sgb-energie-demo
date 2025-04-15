import Image from "next/image";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <div className="mx-auto w-full">
      <main className="w-full">
        <div className="hero-video relative h-[90vh] w-full overflow-hidden md:h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: -1 }}
          >
            <source src="/assets/Website_Energie-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content bg-slate-100 py-16 md:h-[90vh]">
          <div className="container mx-auto flex h-full flex-col justify-evenly px-4 text-[#002B5C] md:px-8">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-2xl font-bold md:text-[2.5rem]">
                ENERGIEVERSORGUNG
              </h1>
              <h2 className="mb-8 text-xl md:text-[2rem]">
                für Gewerbe und Industrie
              </h2>
              <h3 className="mb-8 text-xl font-semibold">
                Ihre Strom- und Gasversorgung
              </h3>
              <p className="mx-auto max-w-4xl text-lg">
                Die SGB Energie GmbH verbindet{" "}
                <span className="font-semibold">günstige Börsentarife</span> mit{" "}
                <span className="font-semibold">nachhaltigen Lösungen</span> und{" "}
                <span className="font-semibold">persönlicher Beratung</span>{" "}
                durch ein deutschlandweites Netzwerk von über 500 Experten –
                Ihre Energie, einfach besser.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24">
                  <Image
                    src="/assets/home2.svg"
                    alt="Kosten minimieren"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-2 text-lg">KOSTEN</h4>
                <p className="text-xl font-bold">MINIMIEREN</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24">
                  <Image
                    src="/assets/home7.svg"
                    alt="Einsparungen maximieren"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-2 text-lg">EINSPARUNGEN</h4>
                <p className="text-xl font-bold">MAXIMIEREN</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24">
                  <Image
                    src="/assets/home8.svg"
                    alt="Persönliche Beratung"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-2 text-xl font-bold">PERSÖNLICHE</h4>
                <p className="text-lg">BERATUNG</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24">
                  <Image
                    src="/assets/home3.svg"
                    alt="360° Versorgung"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h4 className="mb-2 text-xl font-bold">360°</h4>
                <p className="text-lg">VERSORGUNG</p>
              </div>
            </div>
          </div>
        </div>
        <VideoGallery />
      </main>
    </div>
  );
}
