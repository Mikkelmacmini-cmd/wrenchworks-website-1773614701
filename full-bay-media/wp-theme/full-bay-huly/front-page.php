<?php if (!defined('ABSPATH')) exit; ?>
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
  <div class="wrap head">
    <a class="logo" href="/"><img src="<?php echo esc_url(get_template_directory_uri().'/../full-bay-media/assets/full-bay-media-logo-v7.png'); ?>" alt="Full Bay Media"><span>Full Bay Media</span></a>
    <button class="menu-btn" aria-label="Open menu"><i></i></button>
  </div>
</header>

<div class="menu-drawer">
  <nav class="menu-nav">
    <a href="#services">Services</a>
    <a href="#results">Results</a>
    <a href="#process">Process</a>
    <a href="#faq">FAQ</a>
    <a href="#contact">Contact</a>
  </nav>
</div>

<main class="wrap hero reveal">
  <div class="glow"></div>
  <span class="tag">Built for Independent Auto Repair Shops</span>
  <h1 class="h1">The digital growth system that keeps your bays full.</h1>
  <p class="sub">Websites, local SEO, Google Business Profile optimization, and review automations—designed like a premium SaaS experience and built for real operators.</p>
  <div class="actions">
    <a href="#contact" class="btn btn-pri">Book a Free Shop Audit</a>
    <a href="#services" class="btn btn-sec">Explore Services</a>
  </div>

  <div class="template-row reveal">
    <div class="template-track" id="templateTrack">
      <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80" alt="Template 1">
      <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80" alt="Template 2">
      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Template 3">
      <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80" alt="Template 4">
      <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80" alt="Template 1 dup">
      <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80" alt="Template 2 dup">
    </div>
  </div>

  <div class="grid">
    <section class="panel">
      <h2 class="h2">High-performance local presence.</h2>
      <p class="sub">From first click to booked job, every section is optimized for trust and conversion.</p>
      <div class="metrics">
        <div class="metric"><b>More Calls</b><span>From maps + local search</span></div>
        <div class="metric"><b>More Trust</b><span>From design + reviews</span></div>
        <div class="metric"><b>More Jobs</b><span>From better conversion flow</span></div>
      </div>
    </section>
    <section class="panel">
      <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80" alt="Automotive shop" style="width:100%;border-radius:12px;border:1px solid rgba(255,255,255,.15)">
    </section>
  </div>
</main>

<section id="services" class="wrap section reveal">
  <h2 class="h2">Services</h2>
  <div class="cards">
    <article class="card"><h3>Website Design & Build</h3><p>Clean, fast, mobile-first sites built to convert local traffic into booked work.</p></article>
    <article class="card"><h3>Local SEO Optimization</h3><p>Page structure, content, and technical improvements to improve local visibility.</p></article>
    <article class="card"><h3>GBP Optimization & Management</h3><p>Profile positioning, posting cadence, and conversion-focused management.</p></article>
    <article class="card"><h3>Automated Review Funnels</h3><p>Consistent review growth with smart, low-friction request automation.</p></article>
  </div>
</section>

<section id="results" class="wrap section reveal">
  <div class="band">
    <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=80" alt="Results">
    <div class="overlay"><h3>Premium execution. Practical outcomes.</h3></div>
  </div>
</section>

<section id="process" class="wrap section reveal">
  <h2 class="h2">Process</h2>
  <div class="cards">
    <article class="card"><h3>01 / Audit</h3><p>Website, SEO, GBP, and reviews baseline.</p></article>
    <article class="card"><h3>02 / Build</h3><p>Implement conversion and visibility foundation.</p></article>
    <article class="card"><h3>03 / Launch</h3><p>Deploy tracking, forms, and automation.</p></article>
    <article class="card"><h3>04 / Grow</h3><p>Iterate monthly on booked-job outcomes.</p></article>
  </div>
</section>

<section id="faq" class="wrap section faq reveal">
  <h2 class="h2">FAQ</h2>
  <details><summary>How fast can we launch?</summary><p>Most builds launch in 7–14 days based on content and approvals.</p></details>
  <details><summary>Do you work with dealerships?</summary><p>Our focus is independent repair shops and collision operators.</p></details>
  <details><summary>Do you manage monthly?</summary><p>Yes—ongoing optimization and reporting plans are available.</p></details>
</section>

<section id="contact" class="wrap section reveal">
  <div class="panel">
    <h2 class="h2">Ready to fill more bays?</h2>
    <p class="sub">Book a free 20-minute growth audit and get a clear plan for your shop.</p>
    <p><a href="mailto:hello@fullbaymedia.com" class="btn btn-pri">Book My Free Audit</a></p>
  </div>
</section>

<footer class="wrap footer">Full Bay Media — Huly-inspired variant theme (separate from original).</footer>

<?php wp_footer(); ?>
</body>
</html>
