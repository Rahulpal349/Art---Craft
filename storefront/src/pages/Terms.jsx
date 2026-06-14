export default function Terms() {
  return (
    <div className="terms-page" style={{ padding: '4rem 5%', background: '#f8fafc' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>Last Updated - October 24, 2024</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#0f172a', margin: '0 0 1.5rem' }}>Terms of Service</h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Please read these terms carefully before using Artisanat. We aim to keep our guidelines as clear and artisanal as our products.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        <aside className="terms-sidebar">
          <div style={{ position: 'sticky', top: '2rem' }}>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', marginBottom: '1rem' }}>On this page</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
              {['Acceptance of Terms', 'Website Usage', 'Intellectual Property', 'Purchases & Payments', 'Shipping & Returns', 'Limitation of Liability', 'Contact Information'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a href={`#section-${index + 1}`} style={{ color: index === 6 ? '#1e3a8a' : '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: index === 6 ? 600 : 400 }}>
                    {index + 1}. {item}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ background: '#f0f4f8', padding: '1.5rem', borderRadius: '4px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>Need help?</h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem', lineHeight: 1.5 }}>Our concierge is available for any clarification.</p>
              <a href="/contact" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Contact Support &rarr;</a>
            </div>
          </div>
        </aside>

        <div className="terms-content" style={{ color: '#475569', lineHeight: 1.7 }}>
          
          <section id="section-1" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '1rem' }}>By accessing and using the Artisanat Gallery website (the "Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            <p>The materials contained in this website are protected by applicable copyright and trademark law. We reserve the right to update these terms at any time without prior notice.</p>
          </section>

          <section id="section-2" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>2. Website Usage</h2>
            <p style={{ marginBottom: '1rem' }}>Permission is granted to temporarily view the materials on Artisanat's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Modify or copy the artisanal designs or photography.</li>
              <li>Use the materials for any commercial purpose or public display.</li>
              <li>Attempt to decompile or reverse engineer any software contained on the site.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section id="section-3" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: '1.5rem' }}>All content included on the Site, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Artisanat Gallery or its content suppliers and protected by international copyright laws.</p>
            <blockquote style={{ margin: '0', padding: '2rem', background: 'white', borderLeft: '4px solid #1e3a8a', fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontStyle: 'italic', color: '#1e3a8a', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              "Every piece of glass, every thread of textile, and every curve of ceramic on this site represents the creative soul of an artisan."
            </blockquote>
          </section>

          <section id="section-4" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>4. Purchases & Payments</h2>
            <p style={{ marginBottom: '1rem' }}>Artisanat Gallery reserves the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>
            <ol style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Pricing:</strong> All prices are subject to change without notice.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Payment Methods:</strong> We accept all major credit cards and secure digital payments.</li>
              <li><strong>Accuracy:</strong> You agree to provide current, complete, and accurate purchase and account information for all purchases.</li>
            </ol>
          </section>

          <section id="section-5" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>5. Shipping & Returns</h2>
            <p style={{ marginBottom: '1rem' }}>Because many of our items are handmade to order, shipping times may vary. Please refer to our Dedicated Refund Policy for detailed information on returns and exchanges.</p>
            <p>Standard delivery typically takes 7-14 business days. International shipping is calculated at checkout based on weight and destination.</p>
          </section>

          <section id="section-6" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>6. Limitation of Liability</h2>
            <p>In no event shall Artisanat Gallery or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
          </section>

          <section id="section-7" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>7. Contact Information</h2>
            <p style={{ marginBottom: '1rem' }}>Questions about the Terms of Service should be sent to us at legal@artisanatgallery.com or via mail at:</p>
            <p>Artisanat Gallery Legal Dept.<br/>1221 Artisan Way, Suite 400<br/>Portland, OR 97201, USA</p>
          </section>

        </div>
      </div>
    </div>
  );
}
