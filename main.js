// // document.addEventListener('DOMContentLoaded', () => {
// //     const el = document.getElementById('typewriter');
// //     const text = el.textContent;
// //     el.innerHTML = '';
// //     let i = 0;
// //     function type() {
// //         if (i < text.length) {
// //             const ch = text.charAt(i);
// //             el.innerHTML += ch === '\n' ? '<br>' : ch;
// //             i++;
// //             setTimeout(type, 20);
// //         } else {
// //             setTimeout(() => { el.innerHTML = ''; i = 0; type(); }, 5000);
// //         }
// //     }
// //     type();
// // });

// // Coding content
// document.addEventListener("DOMContentLoaded", () => {
//   const codeEl = document.getElementById("codeTypewriter");
//   const lines = [
//     "class SoftwareEngineer {",
//     "  constructor() {",
//     '    this.name = "Md. Ariful Islam Evan";',
//     '    this.role = "Software Engineer";',
//     '    this.experience = "1+ years";',
//     // '    this.email = "md.ariful.evan08@gmail.com";',
//     // '    this.phone = "01828986631";',
//     // '    this.location = "Banasree, Dhaka, Bangladesh";',
//     '    this.languages = ["C", "C++", "Python", "PHP", "JavaScript"];',
//     "  }",
//     "",
//     "  profile() {",
//     "    console.log(`Name: ${this.name}`);",
//     "    console.log(`Role: ${this.role}`);",
//     "    console.log(`Experience: ${this.experience}`);",
//     // '    console.log(`Email: ${this.email}`);',
//     // '    console.log(`Phone: ${this.phone}`);',
//     // '    console.log(`Location: ${this.location}`);',
//     '    console.log(`Languages: ${this.languages.join(", ")}`);',
//     "  }",
//     "}",
//     "",
//     "const me = new SoftwareEngineer();",
//     "me.profile();",
//   ];

//   let lineIdx = 0,
//     charIdx = 0,
//     display = "";

//   function step() {
//     if (lineIdx >= lines.length) {
//       return setTimeout(() => {
//         display = "";
//         lineIdx = 0;
//         charIdx = 0;
//         codeEl.innerHTML = "";
//         step();
//       }, 3000);
//     }

//     const current = lines[lineIdx];
//     if (charIdx <= current.length) {
//       display = current.slice(0, charIdx);
//       charIdx++;
//     } else {
//       display += "\n";
//       lineIdx++;
//       charIdx = 0;
//     }

//     const escaped = display.replace(/ /g, "&nbsp;").replace(/\n/g, "<br>");
//     codeEl.innerHTML = escaped + '<span class="animate-pulse">|</span>';
//     setTimeout(step, 40);
//   }

//   step();
// });

// // Mobile Menu Toggle
// const mobileMenuButton = document.getElementById("mobile-menu-button");
// const mobileMenu = document.getElementById("mobile-menu");

// mobileMenuButton.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });

// // Close mobile menu when clicking on links
// const mobileMenuLinks = mobileMenu.querySelectorAll("a");
// mobileMenuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     mobileMenu.classList.add("hidden");
//   });
// });

// // Form submission (prevent default for demo)
// const contactForm = document.querySelector("form");
// if (contactForm) {
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Message sent! This is a demo form.");
//     contactForm.reset();
//   });
// }

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute("href");
//     if (targetId === "#") return;

//     const targetElement = document.querySelector(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// // Show/hide back to top button based on scroll position
// const backToTopButton = document.querySelector(".back-to-top");

// window.addEventListener("scroll", () => {
//   backToTopButton.classList.toggle("visible", window.scrollY > 300);
// });

// // When you click it, animate scroll up
// backToTopButton.addEventListener("click", e => {
//   e.preventDefault();
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const platformData = {
//     codechef: {
//       title: 'CodeChef',
//       stats: [
//         { label: 'Problems Solved',       value: '350+' },
//         { label: 'Country Rank',          value: '1350' },
//         { label: 'Contests Participated', value: '30+' },
//       ],
//       link: 'https://www.codechef.com/users/arifulevan08'
//     },
//     codeforces: {
//       title: 'Codeforces',
//       stats: [
//         { label: 'Problems Solved', value: '15+' },
//         { label: 'Contests',        value: '30+' },
//       ],
//       link: 'https://codeforces.com/profile/arifulevan08'
//     },
//     leetcode: {
//       title: 'LeetCode',
//       stats: [
//         { label: 'Problems Solved', value: '25+' },
//         { label: 'Contests',        value: '30+' },
//       ],
//       link: 'https://leetcode.com/u/arifulevan08/'
//     },
//     stopstalk: {
//       title: 'StopStalk',
//       stats: [
//         { label: 'Problems Solved',       value: '500+' },
//         { label: 'Contests Participated', value: '30+' },
//       ],
//       link: 'https://www.stopstalk.com/user/profile/arifulevan08'
//     }
//   };

//   const items      = document.querySelectorAll('#platform-list .platform-item');
//   const titleEl    = document.getElementById('stats-title');
//   const ulEl       = document.getElementById('stats-ul');
//   const listEl     = document.getElementById('stats-list');
//   const linkEl     = document.getElementById('stats-link');

//   function renderStats(key) {
//     const cfg = platformData[key];
//     // title
//     titleEl.textContent = cfg.title;
//     // list items
//     ulEl.innerHTML = cfg.stats
//       .map(s => `<li><strong>${s.label}:</strong> ${s.value}</li>`)
//       .join('');
//     // profile link
//     linkEl.href = cfg.link;
//   }

//   items.forEach(el => {
//     el.addEventListener('click', () => {
//       // highlight
//       items.forEach(i => i.classList.remove('border-primary','border-2'));
//       el.classList.add('border-primary','border-2');

//       renderStats(el.dataset.platform);
//     });
//   });

//   // initialize default to CodeChef
//   const defaultKey = 'codechef';
//   document.querySelector(`[data-platform="${defaultKey}"]`)
//     .classList.add('border-primary','border-2');
//   renderStats(defaultKey);
  
// });









// main.js
document.addEventListener("DOMContentLoaded", () => {
  // ——— Typewriter for Hero code block ——————————————
  const codeEl = document.getElementById("codeTypewriter");
  const lines = [
      "class SoftwareEngineer {",
      "  constructor() {",
      '    this.name = "Md. Ariful Islam Evan";',
      '    this.role = "Software Engineer";',
      '    this.experience = "1+ years";',
      '    this.languages = ["C", "C++", "Python", "PHP", "JavaScript"];',
      "  }",
      "",
      "  profile() {",
      "    console.log(`Name: ${this.name}`);",
      "    console.log(`Role: ${this.role}`);",
      "    console.log(`Experience: ${this.experience}`);",
      '    console.log(`Languages: ${this.languages.join(", ")}`);',
      "  }",
      "}",
      "",
      "const me = new SoftwareEngineer();",
      "me.profile();",
  ];

  let lineIdx = 0, charIdx = 0, display = "";
  function step() {
      if (lineIdx >= lines.length) {
          return setTimeout(() => {
              display = "";
              lineIdx = 0;
              charIdx = 0;
              codeEl.innerHTML = "";
              step();
          }, 3000);
      }
      const current = lines[lineIdx];
      if (charIdx <= current.length) {
          display = current.slice(0, charIdx);
          charIdx++;
      } else {
          display += "\n";
          lineIdx++;
          charIdx = 0;
      }
      const escaped = display.replace(/ /g, " ").replace(/\n/g, "<br>");
      codeEl.innerHTML = escaped + '<span class="animate-pulse">|</span>';
      setTimeout(step, 40);
  }
  if (codeEl) step();

  // ——— Mobile Menu Toggle ——————————————————————————
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
      });
      mobileMenu.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
  }

  // ——— Contact Form Demo Submit —————————————————————
  const contactForm = document.querySelector("form");
  if (contactForm) {
      contactForm.addEventListener("submit", e => {
          e.preventDefault();
          alert("Message sent! This is a demo form.");
          contactForm.reset();
      });
  }

  // ——— Smooth Scrolling for Anchors ———————————————————
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;
          const target = document.querySelector(targetId);
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: "smooth",
              });
          }
      });
  });

  // ——— Back‑to‑Top Button ————————————————————————
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
      window.addEventListener("scroll", () => {
          backToTopButton.classList.toggle("visible", window.scrollY > 300);
      });
      backToTopButton.addEventListener("click", e => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }

  // ——— Dynamic Competitive Programming Stats ——————————
  const platformData = {
      codeforces: {
          title: "Codeforces",
          username: "arifulevan08",
          problems: 15,
          progressWidth: "7.5%", // 15/200 * 100
          link: "https://codeforces.com/profile/arifulevan08"
      },
      leetcode: {
          title: "LeetCode",
          username: "arifulevan08",
          problems: 25,
          progressWidth: "12.5%", // 25/200 * 100
          link: "https://leetcode.com/u/arifulevan08/"
      },
      codechef: {
          title: "CodeChef",
          username: "arifulevan08",
          problems: 350,
          progressWidth: "100%", // 350 > 200, so max out
          link: "https://www.codechef.com/users/arifulevan08"
      },
      stopstalk: {
          title: "StopStalk",
          username: "arifulevan08",
          problems: 500,
          progressWidth: "100%", // 500 > 200, so max out
          link: "https://www.stopstalk.com/user/profile/arifulevan08"
      }
  };

  const items = document.querySelectorAll("#platform-list .platform-item");
  const iconEl = document.getElementById("stats-icon");
  const titleEl = document.getElementById("stats-title");
  const usernameEl = document.getElementById("stats-username");
  const progressEl = document.getElementById("stats-progress");
  const linkEl = document.getElementById("stats-link");

  function renderStats(key) {
      const cfg = platformData[key];
      const el = document.querySelector(`#platform-list [data-platform="${key}"]`);
      // Copy the SVG from the selected platform
      iconEl.innerHTML = el.querySelector("svg").outerHTML;
      // Update title, username, progress, and link
      titleEl.textContent = cfg.title;
      usernameEl.textContent = cfg.username;
      progressEl.style.width = cfg.progressWidth;
      linkEl.href = cfg.link;
  }

  items.forEach(el => {
      el.addEventListener("click", () => {
          // Remove highlight from all items
          items.forEach(i => i.classList.remove("border-primary", "border-2"));
          // Highlight clicked item
          el.classList.add("border-primary", "border-2");
          // Render stats for selected platform
          renderStats(el.dataset.platform);
      });
  });

  // Initialize default to Codeforces
  const defaultKey = "codeforces";
  const defaultItem = document.querySelector(`#platform-list [data-platform="${defaultKey}"]`);
  if (defaultItem) {
      defaultItem.classList.add("border-primary", "border-2");
      renderStats(defaultKey);
  }
});