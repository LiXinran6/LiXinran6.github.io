/* Progressive enhancements; all academic content remains visible without JS. */
(() => {
  const root = document.querySelector('.portfolio-shell');
  if (!root) return;
  root.querySelectorAll('.section-content > h2').forEach(heading => {
    heading.textContent = heading.textContent.replace(/^[^A-Za-z]+/, '');
  });
  const publications = root.querySelector('.section-publications .section-content');
  if (publications) {
    let card;
    Array.from(publications.children).forEach(node => {
      if (node.tagName === 'P' && /^\d+\.\s/.test(node.textContent)) {
        card = document.createElement('article');
        card.className = 'publication-card';
        publications.insertBefore(card, node);
      }
      if (card) card.appendChild(node);
    });
    const addArchitecture = (paper, imageUrl, label, alt) => {
      const details = document.createElement('details');
      details.className = 'paper-architecture';
      details.innerHTML = `<summary><img src="${imageUrl}" alt="" loading="lazy"><span>${label}<small>View framework diagram</small></span><span class="architecture-toggle" aria-hidden="true">＋</span></summary><figure><a href="${imageUrl}" target="_blank" rel="noopener"><img src="${imageUrl}" alt="${alt}" loading="lazy"></a><figcaption>${label} · Open image in a new tab for full size.</figcaption></figure>`;
      const metadata = paper.querySelector(':scope > p:first-child');
      if (metadata) metadata.after(details);
      else paper.appendChild(details);
    };
    const papers = publications.querySelectorAll('.publication-card');
    if (papers[0]) addArchitecture(papers[0], root.dataset.prcImage, 'PRC-Emo architecture', 'PRC-Emo framework architecture showing prompt design, historical context, retrieval, curriculum learning, and LoRA fine-tuning');
    if (papers[1]) addArchitecture(papers[1], root.dataset.tcdaImage, 'TCDA architecture', 'TCDA framework architecture showing thread-aware utterance encoding, multi-granularity integration, quadruple decoding, and the thread-constrained directed acyclic graph');
    if (papers[2]) addArchitecture(papers[2], root.dataset.lsdgnnImage, 'LSDGNN + ICL architecture', 'LSDGNN and improved curriculum learning framework with long- and short-distance graph neural network layers, feature fusion, and emotion prediction');
  }
  const experience = root.querySelector('.section-experience .section-content');
  if (experience) {
    Array.from(experience.querySelectorAll(':scope > h3')).forEach(heading => {
      const card = document.createElement('article');
      card.className = 'experience-card';
      heading.after(card);
      let node = card.nextSibling;
      while (node && !(node.nodeType === 1 && node.matches('h3'))) {
        const next = node.nextSibling;
        card.appendChild(node);
        node = next;
      }
    });
  }
  const links = root.querySelectorAll('.portfolio-nav a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -60% 0px'});
    root.querySelectorAll('section[id], header[id]').forEach(section => observer.observe(section));
  }
})();
