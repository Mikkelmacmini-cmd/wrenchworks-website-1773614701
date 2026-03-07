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
    <a href="/" class="brand">Full Bay <span>Media</span></a>
    <a href="#contact" class="btn btn-primary">Book Free Audit</a>
  </div>
</header>

<section class="hero">
  <div class="container hero-grid">
    <div>
      <h1>Digital Growth for Independent Auto Repair Shops</h1>
      <p class="lead">We build modern websites, improve local SEO, optimize your Google Business Profile, and automate reviews—so your bays stay full.</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Book a Free Shop Growth Audit</a>
        <a href="#services" class="btn btn-secondary">See Services</a>
      </div>
    </div>
    <div class="card">
      <p class="metric">+37%<small>Avg. lift in qualified local leads</small></p>
      <p class="metric">4.8★<small>Reputation targets with review funnels</small></p>
      <p class="metric">24/7<small>Your website sells while your team works the floor</small></p>
    </div>
  </div>
</section>

<section id="services" class="section">
  <div class="container">
    <h2>Built for independent shops. Not dealerships.</h2>
    <p class="lead">Simple systems that drive calls, bookings, and trust.</p>
    <div class="grid-4">
      <article class="card service">
        <h3>Website Design & Build</h3>
        <p>Clean, fast websites that convert local drivers into booked jobs.</p>
      </article>
      <article class="card service">
        <h3>Local SEO Optimization</h3>
        <p>Show up where people search when they need repairs now.</p>
      </article>
      <article class="card service">
        <h3>GBP Optimization & Management</h3>
        <p>Turn your Google profile into a conversion engine.</p>
      </article>
      <article class="card service">
        <h3>Automated Review Funnels</h3>
        <p>Get more 5-star reviews without adding manual follow-up work.</p>
      </article>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container">
    <h2>Our 4-Step Shop Growth Process</h2>
    <p class="muted">Audit → Build → Launch → Grow</p>
    <div class="process">
      <div class="step"><b>01 Audit</b><p>Website, GBP, SEO, and reviews gap analysis.</p></div>
      <div class="step"><b>02 Build</b><p>Conversion-first website and optimization foundation.</p></div>
      <div class="step"><b>03 Launch</b><p>Tracking, forms, and review automations turned on.</p></div>
      <div class="step"><b>04 Grow</b><p>Monthly iteration focused on leads and booked work.</p></div>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <div class="container card">
    <h2>Ready to Fill More Bays?</h2>
    <p class="lead">Book a free 20-minute shop growth audit and get a clear action plan.</p>
    <p><a class="btn btn-primary" href="mailto:hello@fullbaymedia.com">Book My Free Audit</a></p>
  </div>
</section>

<footer class="footer">
  <div class="container">Full Bay Media — Websites, SEO, GBP, and Review Systems for Independent Auto Repair Shops.</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
