export default function TrustedVillasSection() {
  return (
    <section className="bg-black py-10">
      <div className="max-w-[1200px] mx-auto page-padding text-center">
        <p className="font-body text-[11px] tracking-[0.1em] uppercase text-white/50 mb-6">
          TRUSTED BY VILLAS ACROSS BALI
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {['Canggu', 'Seminyak', 'Uluwatu', 'Ubud', 'Nusa Dua', 'Sanur'].map((area) => (
            <span key={area} className="font-body text-[13px] md:text-[14px] tracking-[0.04em] text-white/60 uppercase">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
