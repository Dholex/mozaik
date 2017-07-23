export default {
    name: 'mini kuro',
    colors: {
        icon: '#fff',
        unknown: '#c0ab7f',
        success: '#4eb6a3',
        warning: '#d1be65',
        failure: '#ff9176',
    },
    root: {
        fontFamily: `'Roboto Mono', monospace`,
        color: '#fff',
        background: '#000',
        extend: `
        @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700');
        & a {
            font-weight: 400;
        }
        & img {
            filter: grayscale(100%);
        }
        `,
    },
    widget: {
        background: '#000',
        wrapper: {
            padding: '1.6vmin 3vmin',
        },
        header: {
            textTransform: 'uppercase',
            fontSize: '1.8vmin',
            padding: '0.8vmin 0 0 0',
            extend: `
            border-top: 2px solid #fff;
            align-items: flex-start;    
            `,
            subject: {
                extend: `
                font-weight: 700;
                `
            },
            count: {
                extend: `
                font-weight: 700;
                vertical-align: baseline;
                `
            },
            icon: {
                extend: `
                display: none;
                `
            }
        },
    },
    notifications: {
        item: {
            padding: '1.2vmin 2vmin',
            background: '#fff',
            color: '#000',
            extend: `
            font-weight: 400;
            `,
        },
    },
    label: {
        extend: `
        line-height: 1em;
        border-top: 1px dotted #fff;
        border-bottom: 1px dotted #fff;
        align-items: baseline;
        `,
        main: {
            padding: '1vmin 0.2vmin',
        },
        addon: {
            padding: '1vmin 0.6vmin',
            extend: `
            font-weight: 700;
            &:first-child {
                padding-right: 1.4vmin;
                border-right: 1px dotted #fff;
            }
            &:last-child {
                padding-left: 1.4vmin;
                border-left: 1px dotted #fff;
            }
            & + .Label {
                padding-left: 1.4vmin;
            }
            .Label + & {
                margin-left: 1.4vmin;
            }
            `,
        },
    },
    list: {
        item: {
            padding: '1vmin 0',
            extend: `
            border-bottom: 1px solid #fff;
            &:last-child {
                border-bottom: 0;
            }
            `,
            meta: {
                fontSize: '1.4vmin',
                extend: `
                font-weight: 300;
                `,
            },
        },
    },
}