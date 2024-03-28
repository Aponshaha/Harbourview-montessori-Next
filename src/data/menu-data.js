const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Home',
    link: '/',
    submenus: [
      // { title: 'Home Style 1', link: '/' },
      // { title: 'Home Style 2', link: '/home-2' },
      // { title: 'Home Style 3', link: '/home-3' },
    ]
  },
  {
    id: 2,
    hasDropdown: true,
    title: 'About',
    link: '/about',
    submenus: [
      { title: 'About Us', link: '/about' },
      { title: 'Dr. Maria Montessori', link: '/MariaMontessori' },
    ]
  },
  {
    id: 3,
    title: 'Programs',
    megaMenuTwo: true,
    megaMenu: false,
    link: '/programs',
    mega_menus_two: [
      // {
      //   title: 'List 1', link: '#',
      //   submenus: [
      //     { title: 'Settling', link: '/program-details', count: '01', age: '4-5 Yrs' },
      //     { title: 'Settling', link: '/program-details', count: '01', age: '4-5 Yrs' }
      //   ]
      // },
      // {
      //   title: 'List 2', link: '#',
      //   submenus: [
      //     { title: 'Nuesery', link: '/program-details', count: '04', age: '3-4 Yrs' },
      //     { title: 'Nuesery', link: '/program-details', count: '04', age: '3-4 Yrs' }
      //   ]
      // },
      // {
      //   title: 'List 3', link: '#',
      //   submenus: [
      //     { title: 'Nuesery', link: '/program-details', count: '04', age: '3-4 Yrs' }
      //   ]
      // },
      {
        title: 'List 1', link: '#',
        submenus: [
          { programImg: true, title: 'Children’s House', link: '/programs', img: '/assets/img/school/programs/oli.jpg', btn: 'View More' },
        ]
      },
      {
        title: 'List 2', link: '#',
        submenus: [
          { programImg: true, title: 'Elementary', link: '/programs', img: '/assets/img/school/programs/crazy_hair_day.jpeg', btn: 'View More' },
        ]
      },
      {
        title: 'List 3', link: '#',
        submenus: [
          { programImg: true, title: 'After School Program', link: '/programs', img: '/assets/img/school/programs/wilson.jpg', btn: 'View More' },
        ]
      },
      {
        title: 'List 4', link: '#',
        submenus: []
      }
    ]
  },
  {
    id: 4,
    hasDropdown: true,
    title: 'Our school',
    link: '/school',
    submenus: [
      { title: 'Our School', link: '/school' },
      { title: 'Our Students', link: '/student' },
      { title: 'Teachers & Staffs', link: '/teachers' },
      { title: 'Our Parents', link: '/testimonials' },
    ]
  },
  // {
  //   id: 4,
  //   title: 'Pages',
  //   megaMenu: true,
  //   link: '#',
  //   pages: true,
  //   mega_menus: [
  //     {
  //       title: 'Page Layout 1', link: '#',
  //       submenus: [
  //         { title: 'Testimonial', link: '/testimonials' },
  //         { title: 'Program Details', link: '/program-details' },
  //         { title: 'Gallery', link: '/gallery' },
  //         { title: 'Teacher Details', link: '/teacher-details' },
  //         { title: 'FAQ', link: '/faq' },
  //         { title: 'Time Table', link: '/time-tables' },
  //         // { title: 'Contact', link: '/contact' },
  //         // { title: 'About', link: '/about' },
  //       ]
  //     },
  //     // {
  //     //   title: 'Page Layout 2', link: '#',
  //     //   submenus: [
  //     //     { title: 'Testimonial', link: '/testimonials' },
  //     //     { title: 'Gallery', link: '/gallery' },
  //     //     { title: 'FAQ', link: '/faq' },
  //     //     { title: 'Class', link: '/classes' },
  //     //     { title: 'Class Details', link: '/class-details' },
  //     //   ]
  //     // },
  //     // {
  //     //   title: 'Page Layout 3', link: '#',
  //     //   submenus: [
  //     //     { title: 'About', link: '/about' },
  //     //     { title: 'Contact', link: '/contact' },
  //     //     { title: 'Login', link: '/login' },
  //     //     { title: 'Register', link: '/register' },
  //     //     { title: 'Error Page', link: '/404' },
  //     //   ]
  //     // }
  //   ]
  // },
  {
    id: 5,
    hasDropdown: true,
    title: 'Pages',
    link: '#',
    submenus: [
      { title: 'Testimonial', link: '/testimonials' },
      { title: 'Program Details', link: '/program-details' },
      { title: 'Gallery', link: '/gallery' },
      { title: 'Admission ', link: '/admission' },
      { title: 'FAQ', link: '/faq' },
      { title: 'Time Table', link: '/time-tables' },
      { title: 'Dress Code', link: '/dresscode' },
      // { title: 'About', link: '/about' },
    ]
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Our Approach',
    link: '#',
    submenus: [
      { title: 'Our Approach', link: '/approach' },
      { title: 'Outdoor Classroom', link: '/outdoor-approach' },
    ]
  },
  {
    id: 7,
    hasDropdown: false,
    title: 'News',
    link: '/news-classic',
    // submenus: [
    //   { title: 'News Default', link: '/news' },
    //   { title: 'News Sidebar', link: '/news-sidebar' },
    //   { title: 'News Classic', link: '/news-classic' },
    //   { title: 'News Details', link: '/news-details' },
    // ]
  },
  {
    id: 8,
    hasDropdown: false,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;
