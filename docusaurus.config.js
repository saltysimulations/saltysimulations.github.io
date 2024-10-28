// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Salty Simulations Documentation",
    tagline: "",
    url: "https://saltysimulations.github.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "saltysimulations", // Usually your GitHub org/user name.
    projectName: "saltysimulations.github.io", // Usually your repo name.
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    routeBasePath: "/"
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    plugins: [
        [
            "content-docs",
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            ({
                id: "release-notes",
                path: "release-notes",
                routeBasePath: "release-notes",
                sidebarPath: require.resolve("./sidebars.js"),
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: "Salty Simulations Documentation",
                logo: {
                    alt: "Salty Simulations Logo",
                    src: "/img/salty-shaker.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "installation",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        to: "/release-notes/latest",
                        position: "left",
                        label: "Release Notes",
                    },
                    {
                        href: "https://github.com/saltysimulations/salty-747",
                        position: "right",
                        className: "navbar-github",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Installation",
                                to: "/installation",
                            },
                            {
                                label: "EFB",
                                to: "/efb/overview",
                            }
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/S4PJDwk",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/Salty_Sim",
                            },
                            {
                                label: "Facebook",
                                href: "https://www.facebook.com/people/Salty-Simulations/100022089045483",
                            },
                        ],
                    }
                ],
                copyright: `Copyright © 2024 Salty Simulations`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
