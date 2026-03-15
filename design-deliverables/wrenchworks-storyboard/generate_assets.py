from pathlib import Path

BASE = Path('/Users/openclaw/.openclaw/workspace/design-deliverables/wrenchworks-storyboard')

palette = {
    'bg':'#FFF7EE',
    'panel':'#FFFFFF',
    'line':'#3B2F2F',
    'primary':'#F28C52',
    'secondary':'#4BA3C7',
    'accent':'#F2C14E',
    'good':'#6BBF59',
    'text':'#2F2521'
}

CHAR = '''
<g transform="translate({x},{y}) scale({s})">
  <circle cx="0" cy="0" r="30" fill="#FFD9B3" stroke="{line}" stroke-width="4"/>
  <circle cx="-10" cy="-5" r="3" fill="{line}"/>
  <circle cx="10" cy="-5" r="3" fill="{line}"/>
  <path d="M-10,10 Q0,18 10,10" stroke="{line}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <rect x="-22" y="32" width="44" height="52" rx="16" fill="{primary}" stroke="{line}" stroke-width="4"/>
  <line x1="-22" y1="46" x2="22" y2="46" stroke="{line}" stroke-width="3"/>
  <line x1="-28" y1="44" x2="-48" y2="60" stroke="{line}" stroke-width="4" stroke-linecap="round"/>
  <line x1="28" y1="44" x2="48" y2="60" stroke="{line}" stroke-width="4" stroke-linecap="round"/>
</g>
'''

def wrap(w,h,title,body):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <title>{title}</title>
  <rect width="100%" height="100%" fill="{palette['bg']}"/>
  {body}
</svg>'''

def phone(x,y,w=90,h=170):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="18" fill="#fff" stroke="{palette["line"]}" stroke-width="4"/><rect x="{x+10}" y="{y+25}" width="{w-20}" height="{h-45}" rx="8" fill="#F9EFE3"/>'

def shop(x,y,w=210,h=150,label='WrenchWorks'):
    return f'''<g><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#fff" stroke="{palette['line']}" stroke-width="4"/>
    <rect x="{x+20}" y="{y+15}" width="{w-40}" height="30" rx="8" fill="{palette['primary']}"/>
    <text x="{x+w/2}" y="{y+36}" text-anchor="middle" font-family="Arial" font-size="16" fill="white" font-weight="700">{label}</text>
    <rect x="{x+18}" y="{y+60}" width="{w-36}" height="75" rx="8" fill="#F9EFE3"/>
    </g>'''

def card(x,y,w,h,title,sub):
    return f'''<g><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="#fff" stroke="{palette['line']}" stroke-width="3"/>
    <text x="{x+20}" y="{y+36}" font-family="Arial" font-size="22" font-weight="700" fill="{palette['text']}">{title}</text>
    <text x="{x+20}" y="{y+66}" font-family="Arial" font-size="16" fill="{palette['text']}">{sub}</text></g>'''

# Concept board
body = []
body.append(card(40,30,420,220,'Style DNA','Rounded shapes • Warm palette • Friendly interactions'))
body.append('<circle cx="120" cy="140" r="28" fill="#FFD9B3" stroke="#3B2F2F" stroke-width="4"/>')
body.append(shop(500,40,340,220,'Auto Repair Shop'))
body.append(card(40,280,360,240,'Customer Journey','Google → Phone Site → Drive → Front Desk → Service → Review'))
body.append(card(430,280,410,240,'Visual Motifs','Map pins, chat bubbles, stars, dashboard cards, wrench icons'))
body.append(f'<rect x="40" y="560" width="800" height="70" rx="12" fill="#fff" stroke="{palette["line"]}" stroke-width="3"/>')
for i,c in enumerate([palette['primary'],palette['secondary'],palette['accent'],palette['good'],palette['bg']]):
    body.append(f'<circle cx="{90+i*95}" cy="595" r="20" fill="{c}" stroke="{palette["line"]}" stroke-width="2"/>')
body.append('<text x="580" y="602" font-family="Arial" font-size="24" fill="#2F2521" font-weight="700">WrenchWorks Visual Concept Board</text>')
(BASE/'concept-board'/'concept-board.svg').write_text(wrap(900,680,'Concept Board','\n'.join(body)))

# Storyboards variants
variants = [
('A','Customer-first narrative'),
('B','Ops + trust narrative'),
('C','Speed-to-review narrative')
]
for key,subtitle in variants:
    panel_w,panel_h = 360,200
    pieces = [f'<text x="40" y="40" font-family="Arial" font-size="30" font-weight="700" fill="{palette["text"]}">Hero Storyboard Variant {key}</text>',
              f'<text x="40" y="70" font-family="Arial" font-size="18" fill="{palette["text"]}">{subtitle}</text>']
    labels = ['1. Google Business Profile discovery','2. Mobile website visit','3. Drive + parking','4. Front desk check-in','5. Service + checkout','6. SMS review tap']
    for i,label in enumerate(labels):
        x = 40 + (i%3)*(panel_w+25)
        y = 95 + (i//3)*(panel_h+25)
        pieces.append(f'<rect x="{x}" y="{y}" width="{panel_w}" height="{panel_h}" rx="16" fill="#fff" stroke="{palette["line"]}" stroke-width="3"/>')
        pieces.append(f'<text x="{x+14}" y="{y+28}" font-family="Arial" font-size="14" font-weight="700" fill="{palette["text"]}">{label}</text>')
        if i==0:
            pieces.append(phone(x+250,y+20,90,160)); pieces.append(CHAR.format(x=x+110,y=y+86,s=0.85,line=palette['line'],primary=palette['primary']))
            pieces.append(f'<circle cx="{x+285}" cy="{y+55}" r="10" fill="{palette["good"]}"/><text x="{x+302}" y="{y+60}" font-size="12" font-family="Arial">4.9 ★</text>')
        elif i==1:
            pieces.append(phone(x+230,y+20,110,160)); pieces.append(f'<rect x="{x+242}" y="{y+52}" width="86" height="25" rx="6" fill="{palette["primary"]}"/>')
            pieces.append(CHAR.format(x=x+110,y=y+86,s=0.85,line=palette['line'],primary=palette['secondary']))
        elif i==2:
            pieces.append(f'<rect x="{x+48}" y="{y+118}" width="240" height="40" rx="20" fill="{palette["secondary"]}" stroke="{palette["line"]}" stroke-width="3"/>')
            pieces.append(f'<circle cx="{x+95}" cy="{y+160}" r="20" fill="#333"/><circle cx="{x+245}" cy="{y+160}" r="20" fill="#333"/>')
            pieces.append(f'<text x="{x+135}" y="{y+144}" font-size="14" fill="#fff" font-family="Arial">Customer driving to shop</text>')
        elif i==3:
            pieces.append(shop(x+180,y+35,160,130,'Front Desk')); pieces.append(CHAR.format(x=x+100,y=y+90,s=0.8,line=palette['line'],primary=palette['accent']))
        elif i==4:
            pieces.append(f'<rect x="{x+30}" y="{y+90}" width="130" height="70" rx="10" fill="#EFEFEF" stroke="{palette["line"]}" stroke-width="3"/>')
            pieces.append(f'<rect x="{x+190}" y="{y+75}" width="150" height="90" rx="10" fill="#fff" stroke="{palette["line"]}" stroke-width="3"/>')
            pieces.append(f'<text x="{x+205}" y="{y+110}" font-size="14" font-family="Arial">Invoice Paid ✅</text>')
        else:
            pieces.append(phone(x+235,y+18,105,165)); pieces.append(f'<rect x="{x+245}" y="{y+48}" width="85" height="65" rx="8" fill="#fff" stroke="{palette["line"]}" stroke-width="2"/>')
            pieces.append(f'<text x="{x+252}" y="{y+74}" font-size="12" font-family="Arial">Leave a review</text>')
            pieces.append(f'<circle cx="{x+280}" cy="{y+132}" r="15" fill="{palette["good"]}"/>')
    (BASE/'storyboards'/f'hero-storyboard-{key}.svg').write_text(wrap(1170,545,f'Hero storyboard {key}','\n'.join(pieces)))

# service headers
services = [
    ('website-build','Website Build','Modern mobile-first site for local shops'),
    ('local-seo-gbp','Local SEO / GBP Optimization','Rank in map pack and convert searches'),
    ('review-funnels','Review Funnels Automation','Trigger SMS follow-ups after checkout'),
    ('managed-hosting','Managed Hosting','Fast, secure uptime and maintenance'),
    ('conversion-optimization','Conversion Optimization','Turn visitors into booked appointments')
]
for i,(slug,title,sub) in enumerate(services):
    b=[]
    b.append('<rect x="30" y="30" width="1140" height="320" rx="26" fill="#fff" stroke="#3B2F2F" stroke-width="4"/>')
    b.append(f'<text x="80" y="130" font-family="Arial" font-size="54" font-weight="700" fill="{palette["text"]}">{title}</text>')
    b.append(f'<text x="82" y="175" font-family="Arial" font-size="28" fill="{palette["text"]}">{sub}</text>')
    b.append(shop(760,95,340,210,'WrenchWorks'))
    b.append(CHAR.format(x=670,y=185,s=1.1,line=palette['line'],primary=[palette['primary'],palette['secondary'],palette['accent'],palette['good'],palette['primary']][i]))
    icon = ['💻','📍','💬','🛡️','📈'][i]
    b.append(f'<text x="84" y="255" font-size="60">{icon}</text>')
    (BASE/'service-headers'/f'service-{slug}.svg').write_text(wrap(1200,380,title,'\n'.join(b)))

# testimonial cards
testimonials = [
('Rivera Auto Care','"Phones started ringing within 2 weeks."','+41% calls • Denver, CO'),
('Northside Motors','"Review funnel doubled our 5-star reviews."','4.3 → 4.8 stars'),
('Peak Garage','"Website finally books jobs from mobile."','+29% appointment form submits')
]
for idx,(name,quote,metric) in enumerate(testimonials,1):
    b=[]
    b.append('<rect x="20" y="20" width="760" height="360" rx="20" fill="#fff" stroke="#3B2F2F" stroke-width="4"/>')
    b.append(f'<text x="56" y="90" font-family="Arial" font-size="38" font-weight="700" fill="{palette["text"]}">{name}</text>')
    b.append(f'<text x="56" y="145" font-family="Arial" font-size="28" fill="{palette["text"]}">{quote}</text>')
    b.append(f'<rect x="56" y="210" width="370" height="72" rx="12" fill="{palette["bg"]}"/>')
    b.append(f'<text x="78" y="255" font-family="Arial" font-size="30" fill="{palette["good"]}" font-weight="700">{metric}</text>')
    b.append(CHAR.format(x=620,y=195,s=1.0,line=palette['line'],primary=palette['secondary']))
    (BASE/'testimonial-cards'/f'testimonial-card-{idx}.svg').write_text(wrap(800,400,name,'\n'.join(b)))

# micro animation notes + simple SVG frames
notes = '''# WrenchWorks Micro-Interaction Spec (Lottie/GIF Notes)

## 1) GBP Star Pulse (2.0s loop)
- Layers: map-pin, star-cluster, glow-ring
- Keyframes:
  - 0ms: star scale 90%, opacity 80%
  - 400ms: scale 112%, opacity 100%
  - 800ms: settle 100%
  - 1200-2000ms: subtle glow pulse (opacity 20%→45%→20%)
- Easing: easeOutBack for pop, easeInOutSine for glow.

## 2) SMS Review Tap (2.4s loop)
- Layers: phone, message bubble, CTA button, finger cursor
- Sequence:
  - 0-600ms: bubble slides up 16px + fades in
  - 700-1200ms: CTA button color transitions orange→green on tap
  - 1200-1700ms: ripple ring from tap origin (scale 0→140%)
  - 1700-2400ms: reset to initial frame

## 3) Conversion Counter Tick (1.8s loop)
- Layers: dashboard card, number text, sparkline
- Sequence:
  - number morphs 24→25→26 with rolling digits
  - sparkline draws left-to-right in 600ms
  - check badge bounces at end

Export recommendations: Lottie JSON @ 60fps, fallback GIF 800x500, transparent background where possible.
'''
(BASE/'micro-animations'/'micro-interaction-spec.md').write_text(notes)

for i,label in enumerate(['gbp-star-pulse','sms-review-tap','conversion-counter-tick'],1):
    frame = f'''<rect x="20" y="20" width="760" height="460" rx="22" fill="#fff" stroke="#3B2F2F" stroke-width="4"/>
<text x="50" y="80" font-family="Arial" font-size="34" font-weight="700" fill="#2F2521">{label.replace('-', ' ').title()} - Key Frame</text>
{phone(520,120,180,320)}
<circle cx="190" cy="270" r="48" fill="{palette['accent']}" opacity="0.7"/>
<text x="115" y="278" font-family="Arial" font-size="24" fill="#2F2521">Motion cue</text>
'''
    (BASE/'micro-animations'/f'{label}-frame.svg').write_text(wrap(800,500,label,frame))

brand = f'''# WrenchWorks Brand Palette & Typography (Short Spec)

## Color Palette
- Warm Orange (Primary): `{palette['primary']}`
- Sky Blue (Secondary): `{palette['secondary']}`
- Signal Yellow (Accent): `{palette['accent']}`
- Success Green: `{palette['good']}`
- Cream Background: `{palette['bg']}`
- Ink Line/Text: `{palette['line']}` / `{palette['text']}`

## Typography
- Primary Headline: **Poppins Bold** (fallback: Arial Rounded / Arial)
- Body/UI: **Inter Regular/Medium** (fallback: Arial)
- Numeric/metrics emphasis: **Inter SemiBold**

## Illustration Direction
- Rounded corners (12–26px), friendly face geometry, thick outline strokes (3–4px)
- Warm neutral backgrounds with high-contrast CTA accents
- Character presence in most scenes to reinforce human support and trust
'''
(BASE/'brand-spec'/'brand-palette-typography.md').write_text(brand)

print('Generated SVG and spec files.')
