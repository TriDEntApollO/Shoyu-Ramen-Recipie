

function App() {
  const ramenHero = new URL('../Images/Ramen.png', import.meta.url).href
  const brothImg = new URL('../Images/Mirepoix.png', import.meta.url).href
  const chiliImg = new URL('../Images/Chili oil.jpg', import.meta.url).href
  const paneerImg = new URL('../Images/Soy Cured Paneer-Tofu.jpg', import.meta.url)
    .href
  const cornImg = new URL(
    '../Images/Brown Butter Sweet Corn.jpg',
    import.meta.url,
  ).href
  const mushroomImg = new URL(
    '../Images/Sauteed Mushrooms.jpg',
    import.meta.url,
  ).href
  const chickenImg = new URL(
    '../Images/Soy Glazed Chicken.png',
    import.meta.url,
  ).href
  const katsuImg = new URL('../Images/Chicken-Katsu.jpg', import.meta.url).href

  const navItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'broth', label: 'Broth' },
    { id: 'chili-oil', label: 'Chili Oil' },
    { id: 'aromatic-oil', label: 'Aromatic Oil' },
    { id: 'ajitama', label: 'Ajitama' },
    { id: 'paneer', label: 'Paneer/Tofu' },
    { id: 'sweet-corn', label: 'Sweet Corn' },
    { id: 'mushrooms', label: 'Mushrooms' },
    { id: 'soy-chicken', label: 'Soy Chicken' },
    { id: 'katsu', label: 'Chicken Katsu' },
    { id: 'panko', label: 'Panko' },
    { id: 'noodles', label: 'Noodles' },
    { id: 'assembly', label: 'Final Assembly' },
  ]

  return (
    <div className="page-shell">
      <div className="page-glow" aria-hidden="true"></div>
      <header className="site-header">
        <nav className="nav-wrap">
          <div className="brand">
            <span className="brand-dot"></span>
            <div>
              <p className="brand-title">Shoyu Ramen</p>
              <p className="brand-subtitle">Homemade night-shop recipe</p>
            </div>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="main-wrap">
        <section id="intro" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cinematic, warm, and deeply layered</p>
            <h1>Homemade Shoyu Ramen</h1>
            <p className="lead">
              A cozy night-shop bowl with rich broth, toasted oils, and deeply
              umami toppings. Designed for home kitchens with professional
              layering and a premium finish.
            </p>
            <div className="pill-row">
              <span className="pill">Broth-forward</span>
              <span className="pill">Soy + sesame warmth</span>
              <span className="pill">Spice-adjustable</span>
              <span className="pill">Vegetarian-ready</span>
            </div>
            <div className="meta-grid">
              <div className="meta-card">
                <p className="meta-label">Flavor profile</p>
                <p className="meta-value">Savory, smoky, gently sweet</p>
              </div>
              <div className="meta-card">
                <p className="meta-label">Texture balance</p>
                <p className="meta-value">Chewy noodles + crisp toppings</p>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="steam steam-one"></div>
            <div className="steam steam-two"></div>
            <img src={ramenHero} alt="Final shoyu ramen bowl" />
            <div className="hero-frame"></div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="ingredients" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Ingredients overview</p>
              <h2>Build the flavor layers</h2>
            </div>
            <p className="section-note">
              Use the ingredient blocks as a quick checklist while the recipe
              cards guide the exact process.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Broth</h3>
              <pre className="code-block">
Chicken bones (optional)
Onion, carrot, celery
Apple, garlic, ginger
Green onion whites
Whole black pepper
Water + salt
              </pre>
            </div>
            <div className="card">
              <h3>Oils & Aromatics</h3>
              <pre className="code-block">
Neutral oil or schmaltz
Ghee, garlic, green onions
Sesame seeds
Toasted sesame oil
Chili flakes + vinegar
              </pre>
            </div>
            <div className="card">
              <h3>Core Toppings</h3>
              <pre className="code-block">
Ajitama eggs
Paneer or tofu
Sweet corn
Mushrooms
Soy chicken or katsu
              </pre>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={brothImg} alt="Mirepoix for ramen broth" />
        </div>

        <section id="broth" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Broth</p>
              <h2>Deep, clean, slow-simmered base</h2>
            </div>
            <p className="section-note">
              Build your base with a classic mirepoix and let the aromatics do
              the heavy lifting.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Key Steps</h3>
              <ol className="steps">
                <li>Sear bones (optional) until lightly browned.</li>
                <li>Add mirepoix, apple, garlic, ginger, pepper.</li>
                <li>Cover with water and simmer for hours.</li>
                <li>Strain until perfectly clean and season.</li>
              </ol>
              <div className="callout">
                Use whole or coarsely cracked black pepper so the broth stays
                clear after straining.
              </div>
            </div>
            <div className="card">
              <h3>Vegetarian option</h3>
              <p>
                Skip bones and focus on long simmering. The apple, ginger, and
                green onion whites add sweetness that balances shoyu.
              </p>
              <div className="divider"></div>
              <h3>Shoyu finish</h3>
              <p>
                Simmer broth with sauteed green onion whites, garlic, and ginger
                before adding soy sauce and a touch of sugar.
              </p>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={chiliImg} alt="Chili oil and aromatics" />
        </div>

        <section id="chili-oil" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Chili Oil</p>
              <h2>Slow-infused heat with soy aroma</h2>
            </div>
            <p className="section-note">
              Keep the heat gentle so the aromatics bloom without burning.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Method</h3>
              <ol className="steps">
                <li>Slowly sweat shallots, garlic, ginger in neutral oil.</li>
                <li>Bloom chili flakes and optional dried chilies.</li>
                <li>Finish with a splash of soy sauce and vinegar.</li>
              </ol>
              <div className="callout">
                Shallots should lead the ratio, garlic second, ginger half of
                garlic.
              </div>
            </div>
            <div className="card media-card">
              <h3>Reference video</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/9722BdyoWgY"
                  title="Chili Oil Recipe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="aromatic-oil" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Aromatic Oil</p>
              <h2>Garlic-forward, sesame-warm finish</h2>
            </div>
            <p className="section-note">
              Use schmaltz for depth or ghee for a clean nutty glow.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Quick build</h3>
              <ol className="steps">
                <li>Warm fat gently until melted.</li>
                <li>Add crushed garlic + chopped green onions.</li>
                <li>Strain once lightly golden.</li>
                <li>Finish with toasted sesame oil and seeds.</li>
              </ol>
            </div>
            <div className="card media-card">
              <h3>Toasted sesame oil hack</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/4HChSHHd088"
                  title="How to Toast Sesame Oil"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="note">
                Aim for deep brown oil with a 40:60 sesame seed to oil ratio.
              </p>
            </div>
          </div>
        </section>

        <section id="ajitama" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Ajitama</p>
              <h2>Jammy soy-cured eggs</h2>
            </div>
            <p className="section-note">
              Timing matters. Ice bath immediately for clean, centered yolks.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Timing</h3>
              <ul className="list">
                <li>Cold eggs: 7 minutes.</li>
                <li>Room temp eggs: 6 to 7 minutes.</li>
                <li>Marinate 20 to 24 hours.</li>
              </ul>
              <div className="callout">
                Vinegar loosens shells and keeps the egg surface clean.
              </div>
            </div>
            <div className="card">
              <h3>Marinade balance</h3>
              <p>
                Dark soy, sugar, honey, vinegar, garlic, ginger, and chili
                flakes create a sweet-savory cure that stains the whites a deep
                amber.
              </p>
              <div className="divider"></div>
              <p>
                Press plastic wrap directly on the eggs and weight the surface
                to avoid pale patches.
              </p>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={paneerImg} alt="Soy cured paneer and tofu" />
        </div>

        <section id="paneer" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Paneer / Tofu</p>
              <h2>Vegetarian umami centerpiece</h2>
            </div>
            <p className="section-note">
              Use the same soy marinade as the eggs to keep flavors cohesive.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Marinate</h3>
              <ol className="steps">
                <li>Cut into thick rectangular batons.</li>
                <li>Marinate at least 8 hours.</li>
                <li>For shared marinade, add after 12 hours of eggs.</li>
              </ol>
            </div>
            <div className="card">
              <h3>Pan-sear</h3>
              <ol className="steps">
                <li>Drain excess marinade.</li>
                <li>Heat oil high, then reduce to medium.</li>
                <li>Sear all sides until caramelized.</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={cornImg} alt="Brown butter sweet corn" />
        </div>

        <section id="sweet-corn" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Sweet Corn</p>
              <h2>Brown butter glaze</h2>
            </div>
            <p className="section-note">
              Keep it glossy, nutty, and lightly caramelized.
            </p>
          </div>
          <div className="card">
            <ol className="steps">
              <li>Brown 2 tbsp butter over medium heat.</li>
              <li>Add 3 tbsp corn and baste repeatedly.</li>
              <li>Finish with salt and black pepper.</li>
            </ol>
          </div>
        </section>

        <div className="image-panel">
          <img src={mushroomImg} alt="Sauteed mushrooms" />
        </div>

        <section id="mushrooms" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Mushrooms</p>
              <h2>Deep sear, smoky finish</h2>
            </div>
            <p className="section-note">
              Prefer dried shiitake for a more pronounced umami punch.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Choices</h3>
              <ul className="list">
                <li>Preferred: dried shiitake.</li>
                <li>Alternative: oyster mushrooms.</li>
                <li>Last resort: button mushrooms.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Cook</h3>
              <ol className="steps">
                <li>Slice thin and sear in half butter + half oil.</li>
                <li>Let them brown before stirring.</li>
                <li>Season with salt and pepper until deeply browned.</li>
              </ol>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={chickenImg} alt="Soy glazed chicken" />
        </div>

        <section id="soy-chicken" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Soy-glazed chicken</p>
              <h2>Sticky, caramelized, aromatic</h2>
            </div>
            <p className="section-note">
              Flatten thighs for even cooking and a glossy glaze.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Cook</h3>
              <ol className="steps">
                <li>Marinate thighs with salt, pepper, sesame oil.</li>
                <li>Dust with corn flour and pan-sear skin-side down.</li>
                <li>Glaze with soy, dark soy, honey, garlic.</li>
              </ol>
            </div>
            <div className="card media-card">
              <h3>Reference video</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/nL8HDnxKLvg"
                  title="Soy Glazed Chicken"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={katsuImg} alt="Chicken katsu" />
        </div>

        <section id="katsu" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Chicken Katsu</p>
              <h2>Golden, crispy, and clean</h2>
            </div>
            <p className="section-note">
              A thick, even breadcrumb layer gives the bowl its crunch.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Breading flow</h3>
              <ol className="steps">
                <li>Flour, egg wash, then panko.</li>
                <li>Use one wet hand, one dry hand.</li>
                <li>Fry at 350°F until deep golden brown.</li>
              </ol>
            </div>
            <div className="card media-card">
              <h3>Reference video</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/D6diqH8RF4U"
                  title="Chicken Katsu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="panko" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Homemade Panko</p>
              <h2>Feather-light breadcrumbs</h2>
            </div>
            <p className="section-note">
              Dry slowly so the crumbs stay pale and crisp, never browned.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <ol className="steps">
                <li>Use only soft white bread center.</li>
                <li>Pulse into medium flakes, not powder.</li>
                <li>Toast on low heat for 10 to 15 minutes.</li>
              </ol>
            </div>
            <div className="card media-card">
              <h3>Reference video</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/rHcBHM8XDRw"
                  title="Homemade Panko"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="noodles" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Noodles</p>
              <h2>Chewy, springy, and quick</h2>
            </div>
            <p className="section-note">
              Shocking in ice water preserves bite and prevents overcooking.
            </p>
          </div>
          <div className="card">
            <ol className="steps">
              <li>Cook ramen noodles per package instructions.</li>
              <li>For hakka noodles: boil 2 to 3 minutes max.</li>
              <li>Immediately ice-bath, then strain thoroughly.</li>
            </ol>
          </div>
        </section>

        <section id="assembly" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Final Assembly</p>
              <h2>Layer the bowl with intention</h2>
            </div>
            <p className="section-note">
              Keep the broth hot, the noodles elastic, and the oil finish last.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Assembly order</h3>
              <ol className="steps">
                <li>Pour hot broth, add noodles.</li>
                <li>Stir in chili oil as desired.</li>
                <li>Arrange toppings in the recommended order.</li>
                <li>Finish with green onions and aromatic oil.</li>
              </ol>
            </div>
            <div className="card">
              <h3>Recommended topping order</h3>
              <ol className="steps">
                <li>Ajitama</li>
                <li>Brown butter sweet corn</li>
                <li>Sauteed mushrooms</li>
                <li>Chicken katsu or soy-glazed chicken</li>
                <li>Paneer/tofu</li>
                <li>Green onions</li>
                <li>Aromatic oil drizzle</li>
              </ol>
            </div>
          </div>
          <div className="final-card">
            <p>
              Your bowl should feel warm, glossy, and deeply aromatic. Serve
              immediately while the oils are shimmering.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
