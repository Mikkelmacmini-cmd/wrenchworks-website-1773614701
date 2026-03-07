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
    <a href="#contact" class="nav-link">Book Audit</a>
  </div>
</header>

<section class="hero">
  <div class="narrow">
    <div class="eyebrow">Built for Independent Auto Repair Shops</div>
    <h1>Fill Every Bay with Better Local Visibility.</h1>
    <p>Websites, local SEO, Google Business Profile optimization, and review systems designed to bring in more of the right repair jobs.</p>
    <div class="hero-cta">
      <a href="#contact" class="btn btn-primary">Book a Free Shop Audit</a>
      <a href="#services" class="btn btn-secondary">Learn more &rsaquo;</a>
    </div>
  </div>
</section>

<section class="visual-band band-1">
  <div class="narrow">
    <h2>Built for the pace of a real shop.</h2>
    <p>Simple systems that work while you’re turning wrenches.</p>
  </div>
</section>

<section id="services" class="section section-soft">
  <div class="container">
    <h2>Simple systems. Real shop growth.</h2>
    <p class="section-intro">Everything your shop needs to look premium online and convert local search into booked work.</p>

    <div class="grid">
      <article class="card">
        <h3>Website Design & Build</h3>
        <p>Fast, clean, mobile-first sites that earn trust and drive calls.</p>
      </article>
      <article class="card">
        <h3>Local SEO Optimization</h3>
        <p>Rank better for high-intent local searches in your service area.</p>
      </article>
      <article class="card">
        <h3>GBP Optimization & Management</h3>
        <p>Turn your profile into a daily source of clicks, calls, and directions.</p>
      </article>
      <article class="card">
        <h3>Automated Review Funnels</h3>
        <p>Get more 5-star reviews consistently with simple automations.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Measured by outcomes.</h2>
    <p class="section-intro">No vanity metrics. We focus on calls, qualified leads, and booked jobs.</p>

    <div class="metrics">
      <div class="metric"><span class="num">More Calls</span><span class="label">From local search and maps</span></div>
      <div class="metric"><span class="num">More Trust</span><span class="label">From stronger websites and reviews</span></div>
      <div class="metric"><span class="num">More Bookings</span><span class="label">From streamlined online conversion</span></div>
    </div>
  </div>
</section>

<section class="visual-band band-2">
  <div class="narrow">
    <h2>Premium online presence. Practical results.</h2>
    <p>More trust, better leads, and fuller bays—without extra busywork.</p>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <h2>How we work</h2>
    <p class="section-intro">A straightforward process that respects your time and keeps momentum high.</p>

    <div class="process">
      <div class="step"><b>01 / Audit</b>Website, SEO, GBP, and review baseline.</div>
      <div class="step"><b>02 / Build</b>Implement site and optimization foundation.</div>
      <div class="step"><b>03 / Launch</b>Deploy tracking, forms, and automations.</div>
      <div class="step"><b>04 / Grow</b>Monthly iteration focused on revenue outcomes.</div>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <div class="narrow cta-box">
    <h2>Ready to fill more bays?</h2>
    <p class="section-intro">Book a free 20-minute growth audit and get a clear plan for your shop.</p>
    <p style="margin-top:1.1rem;"><a href="mailto:hello@fullbaymedia.com" class="btn btn-primary">Book My Free Audit</a></p>
  </div>
</section>

<footer class="footer">
  Full Bay Media — Websites, SEO, GBP, and review systems for independent auto repair shops.
</footer>

<?php wp_footer(); ?>
</body>
</html>
