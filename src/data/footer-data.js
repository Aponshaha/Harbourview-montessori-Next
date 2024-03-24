import logo from '@assets/img/logo/logo.png';
import logoWhite from '@assets/img/logo/logo-white.svg';

const footer_data = {
    "description": {
        id: 1,
        logo: logo,
        logoWhite: logoWhite,
        teaser: '“The education of a child is not for preparing him/her for school but for life!” - -Maria Montessori ',
        socialTitle: 'Social',
        newsTitle: 'Join Our Newsletter',
        newsBtn: 'Subscribe now',
        social_icons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/profile.php?id=100063698166915&fref=ts',
                name: 'Facebook',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                url: 'https://twitter.com/',
                name: 'Twitter',
            },
            {
                id: 3,
                icon: 'fa-brands fa-youtube',
                url: 'https://www.youtube.com/',
                name: 'Youtube',
            }
        ]
    },
    "quick_links": {
        id: 2,
        title: 'Quick links',
        menus: [
            {
                id: 1,
                menu: 'About',
                path: '/about',
            },
            {
                id: 2,
                menu: 'Programs',
                path: '/programs',
            },
            {
                id: 4,
                menu: 'News',
                path: '/news',
            },
            {
                id: 5,
                menu: 'Contact',
                path: '/contact',
            }
        ]
    },
    "program_links": {
        id: 3,
        title: 'Programs',
        programs: [
            {
                id: 1,
                menu: 'Children’s House',
                path: '/program-details/1',
            },
            {
                id: 2,
                menu: 'Elementary',
                path: '/program-details/2',
            },
            {
                id: 3,
                menu: 'After School Program',
                path: '/program-details/3',
            },
        ]
    },
    "customer_services": {
        id: 3,
        title: 'Programs',
        services: [
            {
                id: 1,
                menu: 'Recently Viewed',
                path: '/programs',
            },
            {
                id: 2,
                menu: 'New Products',
                path: '/shop',
            },
            {
                id: 3,
                menu: 'Shipping & Returns',
                path: '/contact',
            },
            {
                id: 4,
                menu: 'Senior Kg',
                path: '/programs',
            },
            {
                id: 5,
                menu: 'Become a Seller',
                path: '/programs',
            }
        ]
    },
    "contact_info": {
        id: 4,
        title: 'Contact Us',
        infos: [
            {
                id: 1,
                icon: 'fa-light fa-location-dot',
                url: '#',
                title: '290 Murphy Rd, Sydney, Canada',
            },
            {
                id: 2,
                icon: 'fa-light fa-phone',
                url: 'tel:9072003462',
                title: '+1 902-539-8884',
            },
            {
                id: 3,
                icon: 'fa-light fa-envelope',
                url: 'mailto:devapon77@gmail.com',
                title: 'support@harbourviewmontessori.com',
            }
        ]
    },
}

export default footer_data;
