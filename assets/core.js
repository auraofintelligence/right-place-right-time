/*
 * THE CANONICAL LUKE CORE — defined once, inherited by every tier skin.
 * This file is the whole point of the architecture: bio, spine, ethos,
 * support shape and the project register live HERE, so the four tier
 * pages stay thin skins that cannot drift apart.
 *
 * Placements below are PROVISIONAL — shelved by Claude in one pass so the
 * shelves exist. Luke holds the pen. Re-shelving is expected, not failure.
 * The static mirror of this register lives at register.html (the no-JS
 * fallback). If the two disagree, the seam is showing: fix it here first.
 */
(() => {
  const CORE = {
    name: 'Luke Nathan Hayes',
    place: 'Quandamooka Country (Minjerribah)',
    fronts: ['Strange but True', 'Luke Catalyst', 'Aura of Intelligence', 'i C. infinity'],

    /* The spine is an OPEN SLOT — one sentence that makes the whole body of
       work legible as one life's work. Not chosen yet. These candidates are
       all Luke's own words, quarried from live repos. He chooses or replaces. */
    spineCandidates: [
      'Systems for Earth, Self and Future.',
      'Sovereignty of self and data — with consensual allowances for tribe and family — and protection from extraction, so that Joyful Responsible Abundance, self-evolution, the care economy and the environment can thrive.',
      'Joyful responsible abundance as a compass, not disorder as a destination.',
      'How would you manage your own time if money was irrelevant and joyful responsible abundance was the goal of civilisation?'
    ],

    ethos: [
      'Joyful Responsible Abundance is the compass.',
      'The braided economy and the mobilisation of care.',
      'FPIC is the floor, not the ceiling.',
      'Value for value — any support that returns something returns something real.',
      'Provisional by design; visible seams are a feature.'
    ]
  };

  /*
   * THE REGISTER — each project placed on four axes:
   *   scale:     local | australia | oceania | world
   *   horizon:   proven (live and evidential) | active (live and growing)
   *              | horizon (described ahead of code, by design — unbuilt is
   *              not backlog, it is invitation)
   *   portable:  in-place (earns/functions only where it stands) | travels
   *   register:  record (gold, solid — established and citable)
   *              | proposal (purple, dashed — Luke's own provisional frame:
   *              react, revise, refuse)
   */
  const PROJECTS = [
    /* ---- Local: Minjerribah ---- */
    { name: 'Strange but True', scale: 'local', horizon: 'proven', portable: 'in-place', register: 'record',
      note: 'In-person tech, art and ideas help: market stall, services, paid downloads. The live engine — the payment rails and value-for-value pattern every other tier inherits.',
      href: 'https://auraofintelligence.github.io/strange-but-true/' },
    { name: 'Community Ledger & Honour Board', scale: 'local', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'A public support register: who backed what, what service was paid for, which community idea moved forward. A small voluntary experiment climbing toward shared governance.',
      href: 'https://auraofintelligence.github.io/strange-but-true/community-ledger.html' },
    { name: 'Cosmic Nexus', scale: 'local', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'An adventure atlas for careful wonder, travel planning and friendship systems. In development, not pretending to be finished.',
      href: 'https://auraofintelligence.github.io/strange-but-true-cosmic-nexus/' },
    { name: 'Web3 Sensorium', scale: 'local', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'A sovereign, living digital twin of a place that its own community can scan into, explore and govern. First instance Minjerribah; the pattern is forkable for any place. A digital twin, not a digital master.',
      href: 'https://github.com/auraofintelligence/web3-sensorium' },
    { name: 'Country-first events & film culture', scale: 'local', horizon: 'horizon', portable: 'in-place', register: 'proposal',
      note: 'Events engine and film festival scaffolds for the island. Anything carrying the Quandamooka name moves only with the right yeses — FPIC is the floor.',
      href: 'https://github.com/auraofintelligence/quandamooka-film-festival' },

    /* ---- National: Australia ---- */
    { name: 'P4A — the civic workbench', scale: 'australia', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'A national civic imagination workbench: roots-up democracy, ledgers, law memory, braided economy, referendum rehearsal. A proposed movement and drafting project, not a registered party.',
      href: 'https://auraofintelligence.github.io/p4a-xyz-cinema/' },
    { name: 'Luke Catalyst — systems work', scale: 'australia', horizon: 'proven', portable: 'travels', register: 'record',
      note: 'The working front for speaking and systems architecture: AI automation with heart, lean learning loops, calm software with real outcomes.',
      href: 'https://github.com/auraofintelligence/meet-luke' },
    { name: 'Grants & civic submissions practice', scale: 'australia', horizon: 'active', portable: 'travels', register: 'record',
      note: 'Real submissions into real processes — council strategies, grant rounds, open-data proposals. Paid civic craft that works from anywhere in the country.',
      href: 'https://github.com/auraofintelligence/stradbroke-grants-lab' },
    { name: 'Community wealth & mutuals', scale: 'australia', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'Lawful pooling, prevention-first mutual care and community wealth patterns, worked from the Moreton Bay ground up.',
      href: 'https://github.com/auraofintelligence/moreton-bay-community-wealth-and-mutuals' },

    /* ---- Regional: Oceania ---- */
    { name: 'P4A Oceania', scale: 'oceania', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'The regional expansion lab: what the civic pattern becomes across the Blue Pacific, held as an offering rather than an export.',
      href: 'https://auraofintelligence.github.io/p4a-oceania-cinema/' },
    /* ---- Global: the world ---- */
    { name: 'i C. infinity — the music universe', scale: 'world', horizon: 'proven', portable: 'travels', register: 'record',
      note: 'Four albums deep and still writing: songs as emotional technology, local myth and practical world-building. Fully portable — the music travels wherever Luke does.',
      href: 'https://auraofintelligence.github.io/i-C-infinity-music-universe/' },
    { name: 'Project Odyssey', scale: 'world', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'An eleven-year operational blueprint across roughly 256 countries and territories: short, focused deployments, each visit seeding local networks and gathering signal. The engine behind right place, right time.',
      href: 'https://github.com/auraofintelligence/Australian-world-travel' },
    { name: 'Travel Oracle', scale: 'world', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'Self-sovereign travel-life navigation: turns current signals into a ranked next-best-place. The daily instrument of the Odyssey.',
      href: 'https://auraofintelligence.github.io/strange-but-true-travel-oracle/' },
    { name: 'P4A Native Nations', scale: 'world', horizon: 'active', portable: 'travels', register: 'proposal',
      note: 'The world chapter: treaty atlas, FPIC instruments, and the gold-record versus purple-proposal register system itself. Nations self-onboard; no one is spoken for.',
      href: 'https://auraofintelligence.github.io/p4a-native-nations-cinema/' },
    { name: 'GAJRA Earth', scale: 'world', horizon: 'horizon', portable: 'travels', register: 'proposal',
      note: 'The Global Association for Joyful Responsible Abundance on Earth — a public build commons and activation path for the ethos that steers everything else here.',
      href: 'https://github.com/auraofintelligence/gajra-earth-public-hub' },
    { name: 'AI-native indie distribution', scale: 'world', horizon: 'active', portable: 'travels', register: 'record',
      note: 'A static toolkit for AI-era music release preparation. The artist remains the authority; generated files are handoffs for humans and agents, not automatic publishing commands.',
      href: 'https://github.com/auraofintelligence/ai-native-indie-distribution' }
  ];

  const HORIZON_ORDER = { proven: 0, active: 1, horizon: 2 };
  const HORIZON_LABEL = { proven: 'Proven', active: 'Active', horizon: 'Horizon' };
  const PORTABLE_LABEL = { 'in-place': 'In place', travels: 'Travels' };
  const REGISTER_LABEL = { record: 'Record', proposal: 'Proposal' };

  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const card = (p) => `
    <article class="project-card panel-${p.register}">
      <p class="chip-row">
        <span class="register-chip chip-${p.register}">${REGISTER_LABEL[p.register]}</span>
        <span class="register-chip chip-plain">${HORIZON_LABEL[p.horizon]}</span>
        <span class="register-chip chip-plain">${PORTABLE_LABEL[p.portable]}</span>
      </p>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.note)}</p>
      <div class="source-links"><a href="${p.href}" target="_blank" rel="noopener">Open</a></div>
    </article>`;

  document.querySelectorAll('[data-project-grid]').forEach((grid) => {
    const scale = grid.dataset.scale;
    const list = PROJECTS
      .filter((p) => !scale || p.scale === scale)
      .sort((a, b) => HORIZON_ORDER[a.horizon] - HORIZON_ORDER[b.horizon]);
    grid.innerHTML = list.map(card).join('');
  });

  document.querySelectorAll('[data-spine-candidates]').forEach((el) => {
    el.innerHTML = CORE.spineCandidates.map((s) => `<li><q>${esc(s)}</q></li>`).join('');
  });

  window.RPRT = { CORE, PROJECTS };
})();
