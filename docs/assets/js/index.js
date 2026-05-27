document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // MOBILE NAVIGATION
    // ==========================================================================
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars-staggered');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileNavToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars-staggered');
                    icon.classList.remove('fa-xmark');
                }
            }
        });
    });

    // ==========================================================================
    // ACTIVE NAV LINK TRACKING ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // ==========================================================================
    // PORTFOLIO STATS COUNT-UP ANIMATION
    // ==========================================================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const countUpOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const animateCountUp = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                let suffix = '+';
                if (element.getAttribute('data-target') === '120') suffix = 'M+';
                if (element.getAttribute('data-target') === '28') suffix = '%';
                if (element.getAttribute('data-target') === '98') suffix = '%';
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                let suffix = '+';
                if (element.getAttribute('data-target') === '120') suffix = 'M+';
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, countUpOptions);

    statNumbers.forEach(num => statsObserver.observe(num));

    // ==========================================================================
    // REFRIGERATION CASES MODAL DATABASE
    // ==========================================================================
    const projectDatabase = {
        cstore: {
            title: "National C-Store Chain Nationwide Inverter Integration",
            badge: "Flagship Success Story",
            content: `
                <p>This landmark B2B project represents a complete transformation of standard convenience store cooling using Daikin's pioneering Inverter refrigeration technology.</p>
                
                <h4>Strategic Journey &amp; Pitching</h4>
                <ul>
                    <li><strong>Day One Commitment:</strong> From the very first day Daikin launched its commercial Inverter systems, advocated for its benefits directly to C-level engineering stakeholders at the country's largest retail convenience chain.</li>
                    <li><strong>Pilot Testing Audits:</strong> Set up side-by-side trial stores to measure electrical current reductions, presenting direct compressor frequency metrics versus old fixed-speed units.</li>
                    <li><strong>Mass Rollout Execution:</strong> Managed contract pricing and technical support networks to install eco-friendly Inverter units across <strong>12,000+ active convenience stores</strong>.</li>
                </ul>

                <div class="modal-metrics-box">
                    <div class="metric-item">
                        <span class="metric-val">12,000+</span>
                        <p class="metric-lbl">Stores Upgraded Nationwide</p>
                    </div>
                    <div class="metric-item">
                        <span class="metric-val">-28%</span>
                        <p class="metric-lbl">Electricity Bill Savings per Store</p>
                    </div>
                </div>

                <h4>Engineering &amp; Business Value</h4>
                <p>Successfully lowered national carbon footprints across C-store grids while offering immediate electricity OPEX cost-cutting, yielding an average ROI payback period of just 18 months.</p>
            `
        },
        hypermarket: {
            title: "Hypermarket Eco-Friendly Central Plant Commissioning",
            badge: "Large Scale Central Packs",
            content: `
                <p>Consultative contract win to replace aging, energy-inefficient central plants for a prominent regional hypermarket conglomerate.</p>
                
                <h4>Technical Engineering &amp; Delivery</h4>
                <ul>
                    <li>Engineered multi-pack compressor racks using Daikin's modern scroll compressors.</li>
                    <li>Introduced green refrigeration technologies, designing high-capacity transcritical CO2 (R744) packs to comply with eco-friendly climate policies.</li>
                    <li>Coordinated direct delivery, field piping design, and system balancing for minimal operational downtime during swap-outs.</li>
                </ul>

                <div class="modal-metrics-box">
                    <div class="metric-item">
                        <span class="metric-val">35M Baht</span>
                        <p class="metric-lbl">Total Sales Contract Value</p>
                    </div>
                    <div class="metric-item">
                        <span class="metric-val">-18%</span>
                        <p class="metric-lbl">Overall Coolant OPEX Reduced</p>
                    </div>
                </div>

                <h4>Key Client Impact</h4>
                <p>Decreased mechanical footprint by 25% while stabilizing cold storage rooms and vegetable cases, protecting millions of baht in perishable stock from system failure.</p>
            `
        },
        horeca: {
            title: "Smart HoReCa Cold Room & Blast Freezer Integrations",
            badge: "Custom Engineering",
            content: `
                <p>Specialized cooling and deep freezing consultative sales to premier hotels and food service chains across the region.</p>
                
                <h4>Customized Cooling Integration</h4>
                <ul>
                    <li>Designed walk-in cold rooms and rapid blast freezers with precise heat load calculation to prevent food loss.</li>
                    <li>Integrated customized multi-split Daikin condensing packages to save kitchen exhaust space in cramped urban environments.</li>
                    <li>Implemented cloud-connected smart IoT temperature monitoring, providing automatic reporting for HACCP food safety audits.</li>
                </ul>

                <div class="modal-metrics-box">
                    <div class="metric-item">
                        <span class="metric-val">50+</span>
                        <p class="metric-lbl">Luxury Hotels &amp; Cafes Partnered</p>
                    </div>
                    <div class="metric-item">
                        <span class="metric-val">98%</span>
                        <p class="metric-lbl">Customer Satisfaction Index (CSAT)</p>
                    </div>
                </div>

                <h4>Business Operational Growth</h4>
                <p>Maintained total cold chain integrity for prestigious kitchens, dramatically reducing food shrinkage and completely automating temperature logging operations.</p>
            `
        }
    };

    // Modal DOM Elements
    const projectLinks = document.querySelectorAll('.project-link');
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const openModal = (projectId) => {
        const data = projectDatabase[projectId];
        if (data && projectModal && modalBadge && modalTitle && modalBody) {
            modalBadge.textContent = data.badge;
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        }
    };

    const closeModal = () => {
        if (projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Enable scroll
        }
    };

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projId = link.getAttribute('data-project');
            openModal(projId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }

    // ==========================================================================
    // INTERACTIVE B2B SALES ASSISTANT CONSOLE (TERMINAL)
    // ==========================================================================
    const terminalInput = document.getElementById('terminalInput');
    const terminalBody = document.getElementById('terminalBody');

    const addTerminalLine = (text, type = '') => {
        const container = terminalBody.querySelector('.terminal-output');
        const line = document.createElement('p');
        line.className = `term-line ${type}`;
        line.innerHTML = text;
        container.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    const handleCommand = (command) => {
        const cmd = command.trim().toLowerCase();
        
        if (cmd === '') return;

        addTerminalLine(`daikin_assistant:~$ ${command}`, 'term-highlight');

        switch (cmd) {
            case 'help':
                addTerminalLine(`Available Daikin sales commands:
  <span class="term-highlight">about</span>   - Executive path (Engineer to Manager)
  <span class="term-highlight">cases</span>   - Show landmark commercial B2B installations
  <span class="term-highlight">stats</span>   - Annual sales revenue and store upgrade figures
  <span class="term-highlight">contact</span> - Request B2B cooling audit / consult
  <span class="term-highlight">clear</span>   - Purge screen terminal outputs`);
                break;
                
            case 'about':
                addTerminalLine(`❄️ <strong>K Komkit | Daikin Refrigeration Division</strong>
- <strong>Phase 1:</strong> Design & Commissioning Engineer (Thermodynamic balancing).
- <strong>Phase 2:</strong> Consultative Sales Engineer (B2B financial structures).
- <strong>Phase 3:</strong> Department Manager. Leading regional cold chain initiatives.
- <em>Focus:</em> Reducing retail and HoReCa energy bills via custom Inverter configurations.`);
                break;
                
            case 'cases':
                addTerminalLine(`🏭 <strong>Flagship B2B Refrigeration Deployments:</strong>
  1. <strong>C-Store Inverter Upgrade:</strong> 12,000+ convenience stores, -28% electricity bills.
  2. <strong>Hypermarket CO2 Pack:</strong> Transcritical natural refrigeration system, 35M Baht deal.
  3. <strong>Smart HoReCa Cold Rooms:</strong> Customized blast freezers with automated IoT logs.`);
                break;
                
            case 'stats':
                addTerminalLine(`📈 <strong>Current Department Metrics (FY 2026):</strong>
  - Annual Division Revenue:   120 Million Baht
  - Inverter Store Deployments:  12,000+ locations
  - Average Energy Cutback:      Up to 28% per facility
  - Customer Retention (CSAT):   98% Index`);
                break;
                
            case 'contact':
                addTerminalLine(`📬 <strong>Daikin B2B Consulting Pipelines:</strong>
  - Office Email:  <a href="mailto:komkit.k@daikin.co.th" class="info-link">komkit.k@daikin.co.th</a>
  - LinkedIn:      <a href="https://linkedin.com/in/k-komkit" target="_blank" class="info-link">linkedin.com/in/k-komkit</a>
  - Office Address: Daikin Airconditioning Thailand, Bangkok`);
                break;
                
            case 'clear':
                const container = terminalBody.querySelector('.terminal-output');
                container.innerHTML = '';
                addTerminalLine(`Daikin Refrigeration B2B Assistant Console initialised.`, 'welcome-text');
                addTerminalLine(`Type <span class="term-highlight">help</span> to view available system options.`);
                break;
                
            default:
                addTerminalLine(`system: command not found: <span class="accent-red">${cmd}</span>. Type <span class="term-highlight">help</span> for assistance.`, 'text-danger');
        }
    };

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value;
                handleCommand(cmd);
                terminalInput.value = '';
            }
        });

        // Ensure clicking anywhere in the terminal focuses the input
        terminalBody.addEventListener('click', () => {
            terminalInput.focus();
        });
    }
    // ==========================================================================
    // THEME TOGGLE (LIGHT / DARK)
    // ==========================================================================
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Load initial theme from localStorage if saved
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = 'fa-solid fa-sun';
            }
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (document.body.classList.contains('light-theme')) {
                    icon.className = 'fa-solid fa-sun';
                    localStorage.setItem('theme', 'light');
                } else {
                    icon.className = 'fa-solid fa-moon';
                    localStorage.setItem('theme', 'dark');
                }
            }
        });
    }
});
