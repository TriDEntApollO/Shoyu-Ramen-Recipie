function App() {
  const ramenHero = new URL('../Images/Ramen.png', import.meta.url).href
  const brothImg = new URL('../Images/Mirepoix.png', import.meta.url).href
  const chiliImg = new URL('../Images/Chili oil.png', import.meta.url).href
  const paneerImg = new URL('../Images/Soy Cured Paneer-Tofu.jpg', import.meta.url).href
  const eggImg = new URL('../Images/Soy Cured Egg.jpeg', import.meta.url).href
  const cornImg = new URL('../Images/Brown Butter Sweet Corn.png', import.meta.url).href
  const mushroomImg = new URL('../Images/Sauteed Mushrooms.png',import.meta.url).href
  const chickenImg = new URL('../Images/Soy Glazed Chicken.png', import.meta.url).href
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
    { id: 'soy-chicken', label: 'Soy Glazed Chicken' },
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
              This is a deeply layered homemade shoyu-style ramen built entirely
              from scratch using rich broth, aromatic oils, chili oil, chewy
              noodles, soy-cured eggs, pan-seared toppings, and your choice of
              either soy-glazed chicken or crispy chicken katsu.
            </p>
            <p>
              This recipe is intentionally detailed and technique-heavy so that
              even someone cooking ramen for the first time can reproduce the
              bowl properly. The recipe balances rich savory broth, aromatic
              finishing oils, sweetness from soy and honey, chewy noodles,
              crispy textures, spicy chili oil, and deeply umami toppings. The
              recipe is split into vegetarian and non-vegetarian components
              wherever possible.
            </p>
            <div className="callout">
              Read the whole recipe before preparation and ingredients as some
              parts of the recipe is not linear.
            </div>
            <div className="pill-row">
              <span className="pill">Broth-forward</span>
              <span className="pill">Soy + sesame warmth</span>
              <span className="pill">Spice-adjustable</span>
              <span className="pill">Vegetarian-ready</span>
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
              <h2>Full Ingredient List</h2>
            </div>
            <p className="section-note">
              Use these blocks as a complete checklist. The recipe cards below
              walk through each component with step-by-step timing and notes.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Non-Vegetarian Broth</h3>
              <pre className="code-block">
                  Chicken bones
                - Chicken meat and fat (optional)
                - Onion
                - Carrot
                - Apple
                - Garlic
                - Ginger
                - Green onion whites and greens separated
                - Whole or coarsely cracked black pepper
                - Neutral oil
                - Salt
                - Water
              </pre>
            </div>
            <div className="card">
              <h3>Vegetarian Broth</h3>
              <pre className="code-block">
                  Onion
                - Carrot
                - Apple
                - Garlic
                - Ginger
                - Green onion whites and greens separated
                - Whole or coarsely cracked black pepper
                - Neutral oil
                - Salt
                - Water
              </pre>
            </div>
            <div className="card">
              <h3>Noodles</h3>
              <pre className="code-block">
                Japanese ramen noodles or Hakka noodles
              </pre>
            </div>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Chili Oil</h3>
              <pre className="code-block">
                  Neutral oil
                - Shallots or red onion
                - Garlic
                - Ginger
                - Chili flakes
                - Chili powder
                - Optional green/red chilies
                - Soy sauce
                - Vinegar
              </pre>
            </div>
            <div className="card">
              <h3>Aromatic Oil</h3>
              <pre className="code-block">
                  Neutral oil
                - Ghee or Rendered chicken fat (schmaltz)
                - Green onions
                - Garlic
                - Sesame seeds
                - Toasted sesame oil
              </pre>
            </div>
            <div className="card">
              <h3>Soy-Cured Eggs (Ajitama)</h3>
              <pre className="code-block">
                  Eggs
                - Soy sauce
                - Sugar
                - Honey
                - Vinegar
                - Garlic
                - Ginger
                - Chili flakes
                - Sesame oil
                - Water
              </pre>
            </div>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Vegetarian Toppings</h3>
              <pre className="code-block">
                Paneer or tofu
              - Same soy marinade as eggs
              - Sweet corn
              - Butter
              - Salt
              - Black pepper
              - Dried shiitake mushrooms
              - Oyster mushrooms
              - Button mushrooms
              - Butter
              - Neutral oil
              - Salt
              - Black pepper
              </pre>
            </div>
            <div className="card">
              <h3>Soy-Glazed Chicken</h3>
              <pre className="code-block">
                  Boneless skin-on chicken thighs
                - Salt
                - Black pepper
                - Sesame oil
                - Corn flour
                - Neutral oil
                - Dark soy sauce
                - Honey
                - Garlic
                - Water
              </pre>
            </div>
            <div className="card">
              <h3>Chicken Katsu</h3>
              <pre className="code-block">
                  Boneless skinless chicken breast
                - Salt
                - Black pepper
                - Sesame oil
                - All-purpose flour
                - Eggs
                - Panko breadcrumbs
                - Optional seasoning:
                - Salt
                - Black pepper
                - Chili powder
              </pre>
            </div>
          </div>
          <div className="card">
            <h3>Final Garnishes</h3>
            <pre className="code-block">
               Thinly sliced green onions
              - Sesame seeds
            </pre>
          </div>
        </section>

        <div className="image-panel">
          <img src={brothImg} alt="Mirepoix for ramen broth" />
        </div>

        <section id="broth" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Broth</p>
              <h2>Broth Components</h2>
            </div>
            <p className="section-note">
              Build a clean, rich base with careful prep and long simmering.
              Choose the non-vegetarian or vegetarian stock and finish it as a
              shoyu broth.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>1. Non-Vegetarian Chicken Stock</h3>
              <p>
                Optional roasting step (highly recommended): Optionally roast
                chicken meat and chicken fat. Do NOT roast the bones. The
                roasting can be done in the oven on a tray or directly in a
                pan. Roast until lightly browned and aromatic. The chicken
                should not become burnt or deeply charred. Only light browning
                is needed for additional flavor depth in the broth.
              </p>
              <div className="divider"></div>
              <h4 className="eyebrow">Cleaning the Bones</h4>
              <ol className="steps">
                <li>Add the chicken bones into a large pot.</li>
                <li>Fill with water.</li>
                <li>Bring rapidly to a boil.</li>
                <li>Let the bones boil aggressively for a short while (10 to 15 seconds ).</li>
                <li>Strain the bones and throw away the dirty water.</li>
                <li>Wash the bones thoroughly under cold running water.</li>
              </ol>
              <div className="callout">
                This removes impurities and blood residue from the bones and
                creates a much cleaner tasting broth.
              </div>
              <div className="divider"></div>
              <h4 className="eyebrow">Mirepoix Preparation</h4>
              <ul className="prep-list">
                <li>2 Large diced (20mm) onion</li>
                <li>1 sliced carrot</li>
                <li>4-5 sliced garlic cloves</li>
                <li>4inch sliced ginger</li>
                <li>4-5 sliced button mushrooms</li>
                <li>4-5 sliced Shiitake (or alternatively Oyster) mushrooms</li>
                <li>1 Large diced apple</li>
                <li>2 whole green onions, whites sliced and greens roughly chopped each separated</li>
              </ul>
              <p>
                The vegetables do not need to be finely chopped because the
                broth will later be strained completely.
              </p>
            </div>
            <div className="card">
              <h3>Building the Stock</h3>
              <ol className="steps">
                <li>
                  In a large heavy-bottom pot (stock), lightly coat the bottom
                  with neutral oil.
                </li>
                <li>Put the flame/heat on high and heat the oil.</li>
                <li>
                  Drop the onions, carrots, gingers, garlics, whites of green
                  onion.
                </li>
                <li>
                  Sear, the mix, stir occasionally, each ingredient should be
                  lightly charred.
                </li>
                <li>Add your mushrooms and apples and saute for 2-4 minutes.</li>
                <li>Add 1 tablespoon of MSG if not using shiitake mushrooms.</li>
                <li>Add your cleaned chicken bones, meat and chicken fat.</li>
                <li>
                  Add 3 liters of room temperature water, add extra water if
                  needed to cover/submerge everything in water.
                </li>
                <li>Rapidly bring the water to a boil on high heat.</li>
                <li>Reduce heat to a medium/medium-low for gentle simmer.</li>
                <li>
                  Add your aromatics, roughly chopped greens of green onion,
                  whole or lightly crushed black pepper.
                </li>
                <li>Optionally add 2 tablespoon of dark soy sauce.</li>
                <li>Partially cover the top with a lid and simmer for 3-4 hours.</li>
                <li>
                  Occasionally skim excess scum or impurities from the surface
                  if necessary.
                </li>
              </ol>
              <div className="callout">
                Do NOT use finely ground black pepper because it may pass
                through the strainer later. Longer simmering creates deeper
                flavor.
              </div>
              <div className="divider"></div>
              <h4 className="eyebrow">Straining the Broth</h4>
              <ol className="steps">
                <li>Once the broth is done, strain thoroughly through a strainer.</li>
                <li>
                  Ensure no vegetable particles, no black pepper residue, no
                  solids remain in the final broth.
                </li>
                <li>The final broth should be clean and smooth.</li>
              </ol>
              <div className="divider"></div>
              <h4 className="eyebrow">Optional Step</h4>
              <p>
                If you used chicken fat in the stock preparation and after
                straining the fat is still left whole and did not emulsify into
                the stock then separate small amount of the stock, same or more
                amount than your chicken fat. Cool it down to room temperature.
                Pour your cooled down stock to a mixer bowl, add you chicken
                fat, turn on the mixer and mix them until properly emulsified.
                Add the emulsified stock back into the original stock and mix
                well.
              </p>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>2. Vegetarian Stock</h3>
              <h4 className="eyebrow">Mirepoix Preparation</h4>
              <ul className="prep-list">
                <li>2 Large diced (20mm) onion</li>
                <li>1 sliced carrot</li>
                <li>4-5 sliced garlic cloves</li>
                <li>4inch sliced ginger</li>
                <li>4-5 sliced button mushrooms</li>
                <li>4-5 sliced Shiitake (or alternatively Oyster) mushrooms</li>
                <li>1 Large diced apple</li>
                <li>2 whole green onions, whites sliced and greens roughly chopped each separated</li>
              </ul>
              <p>
                The vegetables do not need to be finely chopped because the
                broth will later be strained completely.
              </p>
            </div>
            <div className="card">
              <h3>Building the Stock</h3>
              <ol className="steps">
                <li>
                  In a large heavy-bottom pot (stock), lightly coat the bottom
                  with neutral oil.
                </li>
                <li>Put the flame/heat on high and heat the oil.</li>
                <li>
                  Drop the onions, carrots, gingers, garlics, whites of green
                  onion.
                </li>
                <li>
                  Sear, the mix, stir occasionally, each ingredient should be
                  lightly charred.
                </li>
                <li>Add your mushrooms and apples and saute for 2-4 minutes.</li>
                <li>Add 1 tablespoon of MSG if not using shiitake mushrooms.</li>
                <li>
                  Add 3 liters of room temperature water, add extra water if
                  needed to cover/submerge everything in water.
                </li>
                <li>Rapidly bring the water to a boil on high heat.</li>
                <li>Reduce heat to a medium/medium-low for gentle simmer.</li>
                <li>
                  Add your aromatics, roughly chopped greens of green onion,
                  whole or lightly crushed black pepper.
                </li>
                <li>Optionally add 2 tablespoon of dark soy sauce.</li>
                <li>Partially cover the top with a lid and simmer for 3-4 hours.</li>
                <li>
                  Occasionally skim excess scum or impurities from the surface
                  if necessary.
                </li>
              </ol>
              <div className="callout">
                Do NOT use finely ground black pepper because it may pass
                through the strainer later. Longer simmering creates deeper
                flavor.
              </div>
              <div className="divider"></div>
              <h4 className="eyebrow">Straining the Broth</h4>
              <ol className="steps">
                <li>Once the broth is done, strain thoroughly through a strainer.</li>
                <li>
                  Ensure no vegetable particles, no black pepper residue, no
                  solids remain in the final broth.
                </li>
                <li>The final broth should be clean and smooth.</li>
              </ol>
            </div>
          </div>
          <div className="card">
            <h3>3. The Shoyu Ramen Broth</h3>
            <h4 className="eyebrow">Broth Base</h4>
            <ol className="steps">
              <li>In a saucepan, lightly coat the bottom with neutral oil.</li>
              <li>Put it on medium high heat.</li>
              <li>Heat the oil and the pan.</li>
              <li>
                Add whites of two sliced green onions, two garlic cloves lightly
                crushed but left whole, one inch knob of ginger grated, half a
                finely chopped shallot or red onion.
              </li>
              <li>Saute for 30-50 seconds until fragrant.</li>
              <li>Add 4 cups prepared broth.</li>
              <li>
                Add 1/4 cup soy sauce, 1/2 to 1 tablespoon ground/powdered
                sugar, 1 tablespoon white distilled vinegar.
              </li>
              <li>Bring to a rapid boil on high heat.</li>
              <li>Reduce the heat to medium low.</li>
              <li>Simmer for another 10-15 minutes.</li>
              <li>Taste and adjust salt and sugar to your liking.</li>
            </ol>
            <div className="callout">
              The aromatics should become fragrant but not browned deeply.
            </div>
            <div className="divider"></div>
            <h4 className="eyebrow">Optional Soy Marinade Reduction Hack</h4>
            <p>
              Instead of using regular soy sauce directly: Take the leftover soy
              marinade used for eggs and paneer/tofu. Strain out garlic, ginger,
              chili flakes, solids. Simmer the strained marinade until reduced
              to one-third of its original volume. Add half of this reduction
              into the broth. This creates deeper sweetness because the
              marinade already contains sugar, honey, soy sauce, sesame oil.
              Add 1/2 a tablespoon of vinegar. Simmer the broth for another
              10-15 minutes. Taste and adjust salt and sugar to your liking.
            </p>
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
              <h3>Aromatics</h3>
              <p>
                Prepare finely diced shallots or red onion, finely diced garlic,
                and finely diced ginger. Preferred ratio: shallots/onions should
                be the dominant ingredient, garlic should be less than onion,
                ginger should be about half the quantity of garlic. Finely
                diced ginger is preferred over grated ginger because grated
                ginger releases too much water.
              </p>
              <div className="divider"></div>
              <h3>The oil</h3>
              <ol className="steps">
                <li>
                  Lightly heat or warm 1/4 cup of neutral oil gently in a
                  tempering pan (tadka pan) on medium heat.
                </li>
                <li>Add the finely diced shallots or onions and garlic.</li>
                <li>Cook slowly until fragrant.</li>
                <li>Add the ginger.</li>
                <li>Optionally add some thinly sliced fresh chilies.</li>
                <li>
                  Continue cooking gently until everything has developed a
                  nice brown color.
                </li>
              </ol>
              <div className="callout">
                Do not bring the heat up to high, keep it in medium. The
                aromatics should infuse into the oil without burning.
              </div>
              <div className="divider"></div>
              <h3>The spices</h3>
              <ol className="steps">
                <li>
                  While the oil is heating take a heat resistant bowl (ideally
                  metal).
                </li>
                <li>
                  Add chili powder (whatever you have Gochugaru, red chili
                  powder, ichimi).
                </li>
                <li>Optionally Sichuan Chili Flakes, or powder.</li>
                <li>Kashimiri chili powder for color.</li>
                <li>Pinch of salt.</li>
                <li>Pinch of MSG.</li>
                <li>Mix everything uniformly.</li>
              </ol>
              <p>
                Adjust spice levels freely according to preference and use any
                mix of your chili powder combination.
              </p>
              <div className="divider"></div>
              <h3>The Splash</h3>
              <ol className="steps">
                <li>
                  Immediately pour the hot oil directly on top of the spice mix.
                </li>
                <li>Stir everything so the oil infuses with all the spices.</li>
                <li>Add half a tablespoon of dark soy sauce.</li>
                <li>Add a dash of vinegar.</li>
                <li>Let the oil cool down to room temperature.</li>
              </ol>
              <div className="callout">
                The more the chili oil rests the deeper the flavour becomes.
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
              Use schmaltz for depth or ghee for a clean nutty glow. This oil is
              used as the final finishing oil for the ramen.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Instructions</h3>
              <ol className="steps">
                <li>
                  In a small heavy-bottom pan, combine 2 tablespoons neutral
                  oil and 1/2 tablespoon ghee or 3 tablespoons rendered chicken
                  fat / schmaltz.
                </li>
                <li>Heat gently on medium heat until the fat melts completely.</li>
                <li>
                  Add chopped green onions and lightly crushed whole garlic
                  cloves.
                </li>
                <li>
                  Fry gently until the garlic develops light color and the oil
                  smells strongly of garlic and green onions.
                </li>
                <li>Strain the oil.</li>
                <li>
                  Add 2 tablespoons toasted sesame oil and optionally white
                  sesame seeds. Mix gently.
                </li>
              </ol>
              <div className="callout">
                If using chicken fat, there is no need for neutral oil or ghee.
              </div>
            </div>
            <div className="card media-card">
              <h3>Homemade Toasted Sesame Oil Hack</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/4HChSHHd088"
                  title="How to Toast Sesame Oil"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="note">
                Do this only if your sesame oil is pale yellow or golden yellow,
                it is most likely cold-pressed sesame oil and not toasted sesame
                oil. Proper toasted sesame oil should be deep brown.
              </p>
              <ol className="steps">
                <li>Lightly crush white sesame seeds. Do not grind them into powder.</li>
                <li>Toast the sesame seeds in a dry pan until lightly browned and fragrant.</li>
                <li>In a heavy-bottom pan, pour in your untoasted sesame oil.</li>
                <li>Heat on medium-high briefly.</li>
                <li>
                  As soon as you can feel heat rising from the oil with your
                  palm, immediately reduce the heat to low or medium-low.
                </li>
                <li>Do not overheat the oil. Extremely high heat ruins the flavor.</li>
                <li>Add the toasted sesame seeds into the oil.</li>
                <li>Let the oil infuse for 10-15 minutes.</li>
                <li>Continue heating until the oil develops a deep brown color.</li>
                <li>Once the oil becomes dark brown turn off the heat.</li>
                <li>Let it cool down to room temperature.</li>
                <li>Strain the oil or optionally leave the sesame seeds in the oil.</li>
              </ol>
              <p className="note">
                Sesame Seed to Oil Ratio: Ideal 40% sesame seeds and 60% sesame
                oil. Minimum recommended 30% sesame seeds and 70% sesame oil.
              </p>
            </div>
          </div>
        </section>

        <section id="ajitama" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Ajitama</p>
              <h2>Soy-Cured Eggs (Ajitama)</h2>
            </div>
            <p className="section-note">
              Timing matters. Ice bath immediately for clean, centered yolks.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Soft-Boiled Eggs</h3>
              <ol className="steps">
                <li>Fill a pot with water.</li>
                <li>Bring it to a boil.</li>
                <li>Add 2 tablespoons vinegar and optionally 1-2 pinches salt.</li>
                <li>Carefully lower the eggs into the boiling water.</li>
                <li>For cold eggs boil for 7 minutes.</li>
                <li>For room temp eggs boil for 6-7 minutes.</li>
                <li>
                  After boiling immediately transfer the eggs into an cold ice
                  bath.
                </li>
                <li>Leave in the ice bath for about 5 minutes.</li>
              </ol>
              <div className="callout">
                6 minutes: runnier yolk. 7 minutes: jammy yolk. Vinegar helps
                loosen the shell and makes the eggs easier to peel.
              </div>
              <p>
                Peeling hack: Tap the shell gently all around using the back of
                a spoon. Crack the shell thoroughly. Slide the spoon underneath
                the shell. Carefully peel away the shell.
              </p>
            </div>
            <div className="card">
              <h3>Soy Marinade</h3>
              <ol className="steps">
                <li>
                  Lightly crush 2 medium sized garlic cloves and 2 medium sized
                  ginger slices. Crush enough to break fibers and release flavor
                  while still keeping them whole.
                </li>
                <li>
                  Into a bowl add 1/2 cup dark soy sauce, 1/4 cup sugar, 1
                  tablespoon honey, 1 tablespoon vinegar, the garlic cloves, the
                  ginger slices, optional sliced green or red chilies, 1
                  tablespoon chili flakes, 1/2 teaspoon sesame oil, 1/2 cup
                  water. Mix everything thoroughly.
                </li>
                <li>Place peeled eggs into the marinade.</li>
                <li>Cover the bowl tightly with plastic wrap.</li>
                <li>
                  Push the plastic wrap directly onto the eggs so the eggs
                  remain fully submerged. Optionally place a small weight on
                  top.
                </li>
                <li>Marinate for 20-24 hours or more.</li>
              </ol>
              <div className="callout">
                Any exposed surface may leave white unmarinated patches.
              </div>
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
              <h2>Soy-Marinated Paneer / Tofu</h2>
            </div>
            <p className="section-note">
              Use the same soy marinade as the eggs to keep flavors cohesive.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Soy Marinade</h3>
              <ol className="steps">
                <li>
                  Lightly crush 2 medium sized garlic cloves and 2 medium sized
                  ginger slices. Crush enough to break fibers and release flavor
                  while still keeping them whole.
                </li>
                <li>
                  Into a bowl add 1/2 cup dark soy sauce, 1/4 cup sugar, 1
                  tablespoon honey, 1 tablespoon vinegar, the garlic cloves, the
                  ginger slices, optional sliced green or red chilies, 1
                  tablespoon chili flakes, 1/2 teaspoon sesame oil, 1/2 cup
                  water. Mix everything thoroughly.
                </li>
              </ol>
              <h3>Marinating the Paneer/Tofu</h3>
              <ol className="steps">
                <li>Cut paneer or tofu into long rectangular cuboids.</li>
                <li>Place paneer/tofu pieces into the marinade.</li>
                <li>Cover the bowl tightly with plastic wrap.</li>
                <li>
                  Push the plastic wrap directly onto the paneer/tofu pieces so
                  the pieces remain fully submerged. Optionally place a small
                  weight on top.
                </li>
                <li>Marinate for 8 hours or more.</li>
              </ol>
              <p>
                If using the same marinade: Marinate the eggs first. After 12-14
                hours, add the paneer or tofu. Continue marinating everything
                together for another 8-10 hours.
              </p>
            </div>
            <div className="card">
              <h3>Pan Searing</h3>
              <ol className="steps">
                <li>Remove the paneer or tofu from the marinade.</li>
                <li>Let excess marinade drip off slightly.</li>
                <li>Lightly coat a pan with neutral oil.</li>
                <li>Heat the pan on high briefly.</li>
                <li>Reduce the heat to medium.</li>
                <li>Drop in your marinated paneer/tofu.</li>
                <li>
                  Sear all sides until browned, lightly crusted, and slightly
                  caramelized from the soy marinade.
                </li>
              </ol>
              <div className="callout">
                Any exposed surface may leave white unmarinated patches.
              </div>
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
              <h2>Brown Butter Sweet Corn</h2>
            </div>
            <p className="section-note">
              Keep it glossy, nutty, and lightly caramelized.
            </p>
          </div>
          <div className="card">
            <h3>Instructions</h3>
            <ol className="steps">
              <li>Melt 2 tablespoons butter in a pan over medium heat.</li>
              <li>Let the butter brown slowly.</li>
              <li>Swirl the pan occasionally so the butter browns evenly without burning.</li>
              <li>Once the butter develops a nutty brown aroma and color, add 3 tablespoons sweet corn.</li>
              <li>Toss and baste the corn repeatedly using the browned butter.</li>
              <li>Continue cooking until lightly caramelized.</li>
              <li>Optionally season with black pepper and salt.</li>
            </ol>
            <div className="callout">
              If using salted butter, additional salt is not necessary.
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={mushroomImg} alt="Sauteed mushrooms" />
        </div>

        <section id="mushrooms" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Mushrooms</p>
              <h2>Sauteed Mushrooms</h2>
            </div>
            <p className="section-note">
              Preferred: dried shiitake mushrooms. Alternative: oyster
              mushrooms. Last resort: button mushrooms. Button mushrooms work
              but do not provide as distinct a flavor profile.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Mushroom Choice</h3>
              <ul className="list">
                <li>Preferred: dried shiitake mushrooms.</li>
                <li>Alternative: oyster mushrooms.</li>
                <li>Last resort: button mushrooms.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Instructions</h3>
              <ol className="steps">
                <li>Thinly slice the mushrooms.</li>
                <li>In a pan, combine half butter and half neutral oil.</li>
                <li>Heat over medium heat.</li>
                <li>Once hot, add the mushrooms.</li>
                <li>Let the mushrooms sear properly and develop some color.</li>
                <li>Stir and Flip occasionally to prevent burning.</li>
                <li>Season with salt and black pepper.</li>
                <li>Continue cooking until deeply browned.</li>
              </ol>
              <div className="callout">
                Salt slightly breaks down the mushrooms and improves texture.
              </div>
            </div>
          </div>
        </section>

        <div className="image-panel">
          <img src={chickenImg} alt="Soy glazed chicken" />
        </div>

        <section id="soy-chicken" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Chicken Topping</p>
              <h2>Soy-Glazed Chicken</h2>
            </div>
            <p className="section-note">
              Soy glazed chicken is easier and faster to make. But taste wise
              and enjoyment wise I much prefer you to make the Chicken Katsu.
              Both will serve as a good ramen topping, but if you are willing to
              go that extra mile, I highly lean on the Chicken Katsu.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Chicken Preparation</h3>
              <ol className="steps">
                <li>Use boneless skin-on chicken thighs.</li>
                <li>Place the chicken onto a cutting board or flat surface.</li>
                <li>Cover with plastic wrap.</li>
                <li>Beat the meat with a meat mallet or heavy pan or pot.</li>
                <li>Flatten until approximately half-inch thick.</li>
              </ol>
              <p>
                Flattening helps the chicken cook evenly.
              </p>
              <div className="divider"></div>
              <h3>Marination</h3>
              <ol className="steps">
                <li>Season both sides with salt, black pepper, and small dash of sesame oil.</li>
                <li>Marinate for ideally 2-4 hours, or a minimum of 30 minutes.</li>
              </ol>
              <p>Longer marination improves flavor.</p>
            </div>
            <div className="card">
              <h3>Cooking the Chicken</h3>
              <ol className="steps">
                <li>Coat both sides lightly with corn flour.</li>
                <li>Shake off excess corn flour.</li>
                <li>Add a thin layer of neutral oil into a pan.</li>
                <li>Heat on high until the pan becomes hot.</li>
                <li>Reduce the heat to medium.</li>
                <li>Place the chicken skin-side down first.</li>
                <li>Cook for 7 minutes.</li>
                <li>Flip the chicken.</li>
                <li>Cook the second side for another 5-6 minutes.</li>
                <li>Remove the chicken from the pan.</li>
              </ol>
              <div className="divider"></div>
              <h3>Soy Glaze</h3>
              <p>
                Soy sauce, dark soy sauce, honey, garlic, water. Garlic options:
                For only garlicky flavour use lightly crushed garlic cloves. For
                garlic bits on the chicken use minced or finely chopped garlic.
              </p>
              <h4 className="eyebrow">Glazing Instructions</h4>
              <ol className="steps">
                <li>In the same pan used for the chicken, pour in the glaze mixture.</li>
                <li>Simmer for around 1 minute until slightly thickened.</li>
                <li>Allow the water to reduce.</li>
                <li>Once bubbling for 10-20 seconds, Add back the chicken into the pan.</li>
                <li>Spoon glaze over the top repeatedly and flipping the chicken occasionally.</li>
                <li>Cook the chicken for 1-2 minutes on high heat until fully coated.</li>
                <li>Slice into thick strips before serving.</li>
              </ol>
            </div>
          </div>
          <div className="card media-card">
            <h3>Reference video</h3>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/nL8HDnxKLvg"
                title="If you only have 20 minutes, make Soy Glazed Chicken!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
              <h2>Chicken Katsu</h2>
            </div>
            <p className="section-note">
              The key trick is using one dry hand and one wet hand. This
              prevents clumping and keeps the breading clean.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Chicken Preparation</h3>
              <ol className="steps">
                <li>Use boneless skin-on chicken thighs.</li>
                <li>Place the chicken onto a cutting board or flat surface.</li>
                <li>Cover with plastic wrap.</li>
                <li>Beat the meat with a meat mallet or heavy pan or pot.</li>
                <li>Flatten until approximately half-inch thick.</li>
              </ol>
              <p>Flattening helps the chicken cook evenly.</p>
              <div className="divider"></div>
              <h3>Marination</h3>
              <ol className="steps">
                <li>Season both sides with salt, black pepper, and small dash of sesame oil.</li>
                <li>Marinate for ideally 2-4 hours, or a minimum of 30 minutes.</li>
              </ol>
              <p>Longer marination improves flavor.</p>
            </div>
            <div className="card">
              <h3>Breading Station</h3>
              <p>Prepare three trays for all-purpose flour, egg wash, panko breadcrumbs.</p>
              <div className="divider"></div>
              <h4 className="eyebrow">Egg Wash</h4>
              <p>
                Crack eggs into a tray or bowl and whisk until yolks and whites
                are completely combined.
              </p>
              <h4 className="eyebrow">Optional Seasoning</h4>
              <p>Season the flour and egg wash with salt, black pepper, chili powder.</p>
            </div>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>1. Flour Layer</h3>
              <ol className="steps">
                <li>Place the chicken into the flour.</li>
                <li>Press firmly using your dry hand.</li>
                <li>Flip and repeat.</li>
                <li>Ensure the entire surface is coated.</li>
              </ol>
              <div className="divider"></div>
              <h3>2. Egg Wash Layer</h3>
              <ol className="steps">
                <li>Transfer the chicken into the egg wash.</li>
                <li>Use dry hand for dry surfaces and wet hand for wet surfaces.</li>
                <li>Press gently so the egg binds fully to the flour coating.</li>
              </ol>
            </div>
            <div className="card">
              <h3>3. Breadcrumb Layer</h3>
              <ol className="steps">
                <li>Transfer the chicken into the breadcrumbs using the wet hand.</li>
                <li>Press firmly so breadcrumbs stick properly.</li>
                <li>Flip the chicken.</li>
                <li>Use your dry hand once the breadcrumb side becomes dry.</li>
                <li>
                  Continue pressing firmly until no exposed meat, no exposed
                  flour, no visible egg wash remains.
                </li>
                <li>Only breadcrumbs should remain visible.</li>
              </ol>
            </div>
          </div>
          <div className="card">
            <h3>Oil Prep</h3>
            <ol className="steps">
              <li>Use a heavy-bottom pan.</li>
              <li>Ideally use a pan close to the size of the chicken.</li>
              <li>Ideally the oil should fully submerge the chicken.</li>
              <li>At minimum, the oil should cover half the chicken.</li>
              <li>
                Heat the oil on medium/medium-high to an ideal frying
                temperature of 350Â°F (175Â°C).
              </li>
            </ol>
            <div className="callout">
              Oil Temperature Test: Heat the oil on high. Dip a wooden utensil
              into the oil. If bubbles rapidly form around the wood, the oil is
              ready. Reduce the heat to medium before frying. High heat should
              only be used to preheat the oil faster.
            </div>
            <div className="divider"></div>
            <h3>Frying</h3>
            <ol className="steps">
              <li>Lay down the chicken in the pan facing away from you.</li>
              <li>Fry until deep brown and fully crispy.</li>
              <li>Ensure all breadcrumbs become evenly browned.</li>
              <li>Remove and drain excess oil.</li>
              <li>Slice into thick strips before serving.</li>
            </ol>
          </div>
          <div className="card media-card">
            <h3>Reference video</h3>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/D6diqH8RF4U"
                title="The Easiest Homemade Chicken Katsu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="panko" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Homemade Panko</p>
              <h2>Homemade Panko Breadcrumb Hack</h2>
            </div>
            <p className="section-note">
              The crumbs should remain medium and flaky. They should not brown.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Instructions</h3>
              <ol className="steps">
                <li>Take plain white bread.</li>
                <li>Remove all four crust edges.</li>
                <li>Use only the soft white center.</li>
                <li>Cut into medium chunks.</li>
                <li>Place into food processor or manual vegetable chopper.</li>
                <li>Do NOT use a mixer grinder.</li>
                <li>Pulse until medium flaky crumbs form.</li>
                <li>
                  Heat a pan gently on low heat. Add the breadcrumbs. Toast on
                  low heat for 10-15 minutes.
                </li>
                <li>Stir periodically so they don't brown or burn.</li>
                <li>Allow the breadcrumbs to dry out slowly.</li>
              </ol>
              <p>
                The breadcrumbs should become crispy, lose moisture, remain
                white. The crumbs should not become powder.
              </p>
            </div>
            <div className="card media-card">
              <h3>Reference video</h3>
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/rHcBHM8XDRw"
                  title="Never buy panko again!!"
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
              <h2>Noodles</h2>
            </div>
            <p className="section-note">
              Do not use instant ramen noodles or maggi noodles. They have wavy
              texture, absorbs broth too quick and becomes soggy and doesn't
              provide the chewy texture along with the satisfying slurp.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>1. Ramen Noodles</h3>
              <p>
                Ramen noodles are made with wheat and alkaline water which
                gives it that yellowish tint and springiness. Do not use deep
                fried ramen noodles.
              </p>
              <ol className="steps">
                <li>Cook according to package instructions.</li>
                <li>Strain the noodles.</li>
                <li>Transfer into a cold ice bath if not being directly used.</li>
                <li>Leave in the ice bath for 3-5 minutes.</li>
                <li>Strain thoroughly.</li>
              </ol>
              <p>Ramen noodles should remain slightly chewy.</p>
            </div>
            <div className="card">
              <h3>2. Hakka Noodles Alternative</h3>
              <ol className="steps">
                <li>Bring water to a boil.</li>
                <li>Add the noodles.</li>
                <li>Cook for 2-3 minutes maximum.</li>
                <li>Check texture frequently.</li>
                <li>Once slightly chewy immediately transfer into an ice bath.</li>
                <li>Leave in the ice bath for 3-5 minutes.</li>
                <li>Strain thoroughly.</li>
              </ol>
              <p>
                Ice water stops the cooking process and preserves chewiness.
              </p>
            </div>
          </div>
        </section>

        <section id="assembly" className="section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Final Assembly</p>
              <h2>Final Bowl Assembly</h2>
            </div>
            <p className="section-note">
              Use a large tapered ramen bowl: narrower at the bottom, wider at
              the top. This shape helps properly layer broth, noodles, toppings,
              and oils.
            </p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>Assembly Order</h3>
              <ol className="steps">
                <li>Pour hot broth into the bowl.</li>
                <li>Add noodles.</li>
                <li>Add chili oil according to your spice preference.</li>
                <li>
                  Optionally lightly mix broth, noodles and chili oil, so the
                  chili oil infuses evenly throughout the bowl.
                </li>
              </ol>
              <div className="divider"></div>
              <h3>Toppings</h3>
              <p>
                Arrange Ajitama, Brown butter sweet corn, Sauteed mushrooms,
                Chicken katsu or soy-glazed chicken, Soy-marinated paneer or
                tofu. Or any toppings of your choice.
              </p>
            </div>
            <div className="card">
              <h3>Final Garnishes</h3>
              <ol className="steps">
                <li>Add thinly sliced green onions in the center.</li>
                <li>Drizzle aromatic oil over everything.</li>
                <li>Sprinkle sesame seeds if not already present in the aromatic oil.</li>
              </ol>
              <div className="divider"></div>
              <p>
                And there you go your ramen bowl is ready to be devoured. This
                ramen is intentionally flexible. You can build a vegetarian
                bowl, build a non-vegetarian bowl, mix toppings freely, adjust
                spice levels, customize garnish quantities, adjust broth
                sweetness. The most important balance is between broth
                richness, noodle texture, aromatic oils, toppings, spice,
                sweetness, and texture. Enjoy your own hot hand cooked Shoyu
                Ramen.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App


