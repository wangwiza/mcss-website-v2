export const directory = [
    {
        name: 'home',
        to: '/'
    },
    {
        name: 'events',
        to: '/events',
        children: [
            {
                name: 'event1',
                to: '/'
            },
            {
                name: 'event2',
                to: '/'
            },
            {
                name: 'event3',
                to: '/'
            }
        ]
    },
    
    {
        name: 'sponsors',
        to: '/sponsors',
        children: [
            {
                name: 'our sponsors',
                to: '/sponsors'
            },
            {
                name: 'membership',
                to: '/'
            }
        ]
    },
    {
        name: 'info',
        to: '/',
        children: [
            {
                name: 'about mcss',
                to: '/about'
            },

            {
                name: 'recruitment',
                to: '/about'
            },
            {
                name: 'contact us',
                to: '/community/contact'
            },
            
        ]
    },
    {
        name: 'shop',
        to: '/shop'
    }
]