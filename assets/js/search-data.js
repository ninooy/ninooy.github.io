// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-great-night-halloween-party",
        
          title: "Great Night, Halloween Party🎃",
        
        description: "KUBA Halloween Party was held on THE BUNKER 😎",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Halloween/";
          
        },
      },{id: "post-iros-2025-shanghai-tour",
        
          title: "IROS 2025 / Shanghai Tour 🦾",
        
        description: "IEEE/RSJ International Conference on Intelligent Robots🤖 and Systems (IROS) was held on Hangzhou🇨🇳",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/IROS/";
          
        },
      },{id: "post-hyundai-mobility-class-advanced-motor-class-️",
        
          title: "Hyundai Mobility Class - Advanced Motor Class🏎️",
        
        description: "designed and fabricated the motor, differential gear, and suspension components, and assembled them into a fully functional RC car🚗",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Hyundai/";
          
        },
      },{id: "news-i-am-now-entering-korea-university-for-studying-mechanical-engineering",
          title: 'I am now entering Korea University for studying Mechanical Engineering! 🥳',
          description: "",
          section: "News",},{id: "news-i-recently-start-working-as-a-research-intern-in-the-robogram-lab-at-kist",
          title: 'I recently start working as a research intern in the Robogram Lab at...',
          description: "",
          section: "News",},{id: "news-our-paper-optimization-of-shoulder-joint-frame-angles-for-torque-and-energy-performance-improvement-in-7-dof-humanoid-arms-received-the-excellence-undergraduate-paper-award",
          title: 'Our paper “Optimization of Shoulder Joint Frame Angles for Torque and Energy Performance...',
          description: "",
          section: "News",},{id: "news-our-paper-enhancing-humanoid-robot-dynamics-an-optimization-framework-for-shoulder-base-angle-adjustment-has-been-accepted-for-oral-presentation-at-iros-2025",
          title: 'Our paper “Enhancing Humanoid Robot Dynamics: An Optimization Framework for Shoulder Base Angle...',
          description: "",
          section: "News",},{id: "news-i-was-admitted-both-to-samsung-electronics-and-kaist-and-i-will-join-kaist-s-department-of-mechanical-engineering-through-the-reps-industry-linked-program",
          title: 'I was admitted both to Samsung Electronics and KAIST, and I will join...',
          description: "",
          section: "News",},{id: "news-i-begin-my-master-s-journey-in-the-drcd-lab-focusing-on-dynamic-robot-control-and-design-️",
          title: 'I begin my master’s journey in the DRCD Lab, focusing on dynamic robot...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
