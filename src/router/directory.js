export const directory = [
    {
        name: 'home',
        to: '/'
    },
    {
        name: 'events',
        to: '/events',
        // children: [
        //     {
        //         name: '2023-2024',
        //         to: '/events'
        //     },
        //     {
        //         name: '2022-2023',
        //         to: '/events'
        //     },
        //     {
        //         name: '2021-2022',
        //         to: '/events'
        //     },
        //     {
        //         name: '2020-2021',
        //         to: '/events'
        //     },
        // ]
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
                to: '/membership'
            }
        ]
    },
    {
        name: 'info',
        to: '/about',
        children: [
            {
                name: 'about mcss',
                to: '/about'
            },

            {
                name: 'recruitment',
                to: '/recruitment'
            },
            {
                name: 'contact us',
                to: '/contact'
            },
            
        ]
    },
]