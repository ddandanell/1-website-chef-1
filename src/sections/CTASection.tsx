export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto page-padding">
        <div className="max-w-[720px]">
          <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] text-black mb-4">
            Quick Tips for Booking Villa Catering
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              'Book 3-5 days in advance minimum',
              'Confirm your villa kitchen setup',
              'Share dietary restrictions early',
              'Ask for all-inclusive pricing',
              'Request photos of past events',
              'Confirm arrival & cleanup times',
              'Check if staff gratuity is included',
              'Ask your villa manager for recommendations',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-body text-[12px] text-black/35 tracking-wide pt-[2px] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-[14px] leading-[1.6] text-black/70">{tip}</p>
              </div>
            ))}
          </div>

          <div className="font-body text-[14px] md:text-[15px] leading-[1.7] text-black/70 space-y-3">
            <p>
              Finding the right villa catering service in Bali starts with knowing what you need. How many guests? What cuisine? What is your budget? What kind of atmosphere do you want? Once you have answers to these basics, narrowing down options becomes much easier.
            </p>
            <p>
              We recommend contacting at least two or three catering companies for quotes and availability. This gives you a point of comparison and helps you gauge responsiveness and professionalism before committing. The best Bali catering services respond quickly, ask detailed questions about your event, and provide transparent proposals with no hidden costs.
            </p>
            <p>
              If your villa is managed by a professional company, ask them for recommendations first. Villa managers work with catering teams regularly and can direct you to reliable, vetted options. This is especially helpful for first-time Bali visitors who are not yet familiar with the local service landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
