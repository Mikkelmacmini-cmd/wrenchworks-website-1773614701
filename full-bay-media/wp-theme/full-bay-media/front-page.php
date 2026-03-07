<?php if (!defined('ABSPATH')) { exit; } ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand" aria-label="Full Bay Media home">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/full-bay-media-logo-v4.png'); ?>" alt="Full Bay Media logo">
    </a>
    <div class="top-nav">
      <a href="#contact" class="btn btn-primary nav-cta">Book Audit</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span>
      </button>
    </div>
  </div>
</header>

<div class="menu-drawer" aria-hidden="true">
  <nav class="drawer-nav" aria-label="Main navigation">
    <a href="#services" class="nav-link">Services</a>
    <a href="#results" class="nav-link">Results</a>
    <a href="#process" class="nav-link">Process</a>
    <a href="#faq" class="nav-link">FAQ</a>
    <a href="#contact" class="nav-link">Contact</a>
  </nav>
</div>

<section class="hero hero-with-image reveal">
  <div class="hero-backdrop"></div>
  <div class="narrow reveal hero-content">
    <div class="eyebrow">Built for Independent Auto Repair Shops</div>
    <h1>Fill Every Bay with Better Local Visibility.</h1>
    <p>Websites, local SEO, Google Business Profile optimization, and review systems designed to bring in more of the right repair jobs.</p>
    <div class="hero-cta">
      <a href="#contact" class="btn btn-primary">Book a Free Shop Audit</a>
      <a href="#services" class="btn btn-secondary">Learn more &rsaquo;</a>
      <a href="#results" class="btn btn-secondary">See Results &rsaquo;</a>
    </div>
  </div>
</section>

<section class="template-strip-wrap reveal" aria-label="Template previews">
  <div class="template-strip">
    <div class="template-track">
      <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80" alt="Automotive service website template preview" loading="lazy">
      <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80" alt="Repair shop landing page preview" loading="lazy">
      <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80" alt="Auto diagnostics template preview" loading="lazy">
      <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80" alt="Mechanic portfolio template preview" loading="lazy">
      <img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80" alt="Shop growth dashboard template preview" loading="lazy">
      <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80" alt="Automotive service website template preview duplicate" loading="lazy">
      <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80" alt="Repair shop landing page preview duplicate" loading="lazy">
    </div>
  </div>
</section>

<section class="section image-split reveal">
  <div class="container split-grid">
    <div class="image-wrap">
      <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1600&q=80" alt="Independent auto repair shop bay" loading="lazy">
    </div>
    <div class="split-copy">
      <h2>A premium first impression for hardworking shops.</h2>
      <p class="section-intro" style="text-align:left;margin-left:0;">Your website should match the quality of your work on the floor—clean, trustworthy, and built to convert local traffic into booked jobs.</p>
      <div class="hero-cta" style="justify-content:flex-start;">
        <a href="#contact" class="btn btn-primary">Get My Site Plan</a>
        <a href="#services" class="btn btn-secondary">View Services &rsaquo;</a>
      </div>
    </div>
  </div>
</section>

<section class="visual-band band-1 reveal">
  <div class="narrow">
    <h2>Built for the pace of a real shop.</h2>
    <p>Simple systems that work while you’re turning wrenches.</p>
  </div>
</section>

<section id="services" class="section section-soft reveal">
  <div class="container">
    <h2>Simple systems. Real shop growth.</h2>
    <p class="section-intro">Everything your shop needs to look premium online and convert local search into booked work.</p>
    <p style="text-align:center;margin-top:1rem;"><a href="#contact" class="btn btn-primary">Start With a Free Audit</a></p>

    <div class="service-rows stagger">
      <article class="service-row">
        <div class="service-icon">01</div>
        <div><h3>Website Design & Build</h3><p>Fast, clean, mobile-first websites that position your shop as the obvious local choice.</p></div>
      </article>
      <article class="service-row">
        <div class="service-icon">02</div>
        <div><h3>Local SEO Optimization</h3><p>Higher visibility for high-intent repair searches in your city and service radius.</p></div>
      </article>
      <article class="service-row">
        <div class="service-icon">03</div>
        <div><h3>GBP Optimization & Management</h3><p>Optimize and actively manage your profile to generate consistent calls and direction clicks.</p></div>
      </article>
      <article class="service-row">
        <div class="service-icon">04</div>
        <div><h3>Automated Review Funnels</h3><p>Turn happy customers into review momentum without adding manual follow-up friction.</p></div>
      </article>
    </div>
  </div>
</section>

<section id="results" class="section gallery-section reveal">
  <div class="container">
    <h2>Work that feels premium and performs.</h2>
    <p class="section-intro">Design language inspired by high-end product brands, adapted for local repair shops.</p>
    <div class="gallery-grid">
      <figure><img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80" alt="Mechanic working under vehicle" loading="lazy"></figure>
      <figure><img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1400&q=80" alt="Clean automotive service environment" loading="lazy"></figure>
      <figure><img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1400&q=80" alt="Automotive tools and precision work" loading="lazy"></figure>
    </div>
    <p style="text-align:center;margin-top:1.2rem;"><a href="#contact" class="btn btn-primary">Build My Shop Website</a></p>
  </div>
</section>

<section class="section image-split reveal">
  <div class="container split-grid reverse">
    <div class="image-wrap">
      <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80" alt="Shop owner and strategist reviewing growth plan at a laptop" loading="lazy">
    </div>
    <div class="split-copy">
      <h2>A real growth plan built around your shop.</h2>
      <p class="section-intro" style="text-align:left;margin-left:0;">No recycled playbooks. We align your website, local SEO, GBP, and reviews into one practical system your team can actually run.</p>
      <div class="hero-cta" style="justify-content:flex-start;">
        <a href="#contact" class="btn btn-primary">Build My Growth Plan</a>
      </div>
    </div>
  </div>
</section>

<section class="section reveal metrics-with-chart">
  <div class="container">
    <h2>Measured by outcomes.</h2>
    <p class="section-intro">No vanity metrics. We focus on calls, qualified leads, and booked jobs.</p>

    <div class="chart-panel">
      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80" alt="Growth chart dashboard visual" loading="lazy">
    </div>

    <div class="metrics stagger">
      <div class="metric"><span class="num">More Calls</span><span class="label">From local search and maps</span></div>
      <div class="metric"><span class="num">More Trust</span><span class="label">From stronger websites and reviews</span></div>
      <div class="metric"><span class="num">More Bookings</span><span class="label">From streamlined online conversion</span></div>
    </div>
  </div>
</section>

<section class="visual-band band-2 reveal">
  <div class="narrow">
    <h2>Premium online presence. Practical results.</h2>
    <p>More trust, better leads, and fuller bays—without extra busywork.</p>
  </div>
</section>

<section id="process" class="section section-soft reveal">
  <div class="container">
    <h2>How we work</h2>
    <p class="section-intro">A straightforward process that respects your time and keeps momentum high.</p>

    <div class="inline-image">
      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80" alt="Advisor and business owner collaborating on a marketing plan" loading="lazy">
    </div>

    <div class="process stagger">
      <div class="step"><b>01 / Audit</b>Website, SEO, GBP, and review baseline.</div>
      <div class="step"><b>02 / Build</b>Implement site and optimization foundation.</div>
      <div class="step"><b>03 / Launch</b>Deploy tracking, forms, and automations.</div>
      <div class="step"><b>04 / Grow</b>Monthly iteration focused on revenue outcomes.</div>
    </div>
  </div>
</section>


<section id="faq" class="section reveal">
  <div class="container">
    <h2>FAQ</h2>
    <p class="section-intro">Straight answers for busy shop owners.</p>
    <div class="faq">
      <div class="faq-item">
        <button type="button">How long does a full website build take?<span>+</span></button>
        <div class="faq-content">Most starter builds launch in 7–14 days depending on content and approvals.</div>
      </div>
      <div class="faq-item">
        <button type="button">Do you only work with independent shops?<span>+</span></button>
        <div class="faq-content">Yes. Full Bay Media is intentionally focused on independent auto repair shops.</div>
      </div>
      <div class="faq-item">
        <button type="button">Can you manage GBP and reviews monthly?<span>+</span></button>
        <div class="faq-content">Yes — we offer ongoing profile management and review funnel optimization.</div>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <div class="narrow cta-box">
    <h2>Ready to fill more bays?</h2>
    <p class="section-intro">Book a free 20-minute growth audit and get a clear plan for your shop.</p>
    <p style="margin-top:1.1rem;display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap;">
      <a href="mailto:hello@fullbaymedia.com" class="btn btn-primary">Book My Free Audit</a>
      <a href="tel:+13035550123" class="btn btn-secondary">Call Now &rsaquo;</a>
      <a href="#services" class="btn btn-secondary">Compare Services &rsaquo;</a>
    </p>
  </div>
</section>

<footer class="footer">
  Full Bay Media — Websites, SEO, GBP, and review systems for independent auto repair shops.
</footer>

<?php wp_footer(); ?>
</body>
</html>
