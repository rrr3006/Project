var config = {
    style: 'mapbox://styles/rr3006/ckq0jj6b60har17mghyilmgda',
    accessToken: 'pk.eyJ1IjoicnIzMDA2IiwiYSI6ImNrcTJuc3VhOTBkZzQydWthMjAxZHlwMW0ifQ.XYlT9v5pyZ2eOHvzbml69Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Citations: [1] The Wire. “Did Chennai Learn Anything from the 2015 Floods?” Accessed June 9, 2021. [2] Ibid; “Chennai Floods: What Happened at Chembarambakkam, Negligence or Nature’s Fury? | The News Minute.” Accessed June 9, 2021; The Week. “Nivar Cyclone: Why Chembarambakkam Lake Brought Back Fears of 2015 Floods.” Accessed June 9, 2021.[3] “Chennai Water Shortage: How Chennai, One of the World’s Wettest Major Cities, Ran out of Water - The Economic Times.” Accessed June 9, 2021., [4] “Madras and the Environs - Digital Maps and Geospatial Data | Princeton University.” Accessed June 9, 2021., [5] Hall-Matthews, David (1996), "Historical Roots of Famine Relief Paradigms: Ideas on Dependency and Free Trade in India in the 1870s", Disasters, 20 (3): 216–230, [6] Ibid:4, [7] “North Chennai Coastal Areas Hit by Seawater Intrusion, Says Study - The Hindu.” Accessed June 17, 2021.[8] Govindarajan, Vinita. “Six Chennai Maps Spanning over a Century Explain Why the City Faces Flood Danger Each Year.” Text. Scroll.in. https://scroll.in. Accessed June 18, 2021.[9] The Wire. “We Parched the Country to Quench the City, and Chennai Still Cries for Help.” Accessed June 9, 2021.[10] Mitra, Sudeshna. 2018. "A ‘peripheries’ view of planning failures in Kolkata and Hyderabad." In Companion to Planning in the Global South, by Gautam Bhan, Vanessa Watson and Smita Srinivas, 79-90. Hyderabad: Orient BlackSwan.[11] Roy, Ananya. “Why India Cannot Plan Its Cities: Informality, Insurgence and the Idiom of Urbanization.” Planning Theory 8, no. 1 (February 1, 2009): 76–87.',
    chapters: [
        {
            id: 'titleslide',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51254295645_2e3e66a538_b.jpg',
            description: '',
            location: {
                center: [79.96067, 13.11098],
                zoom: 9.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'INTRODUCTION',
            image: 'https://live.staticflickr.com/65535/51253031623_6ec9b2c58d_b.jpg',
            description: 'In 2015, Chennai city experienced its worst floods in more than a century. After receiving around 340mm of rain on November 15, and later 490mm on December 1, the inner city was completely inundated. [1] Thousands were evacuated from low-lying, vulnerable areas, 500,000 houses were destroyed, around 500 people lost their lives and the economic damage amounted to around $3 billion.',
            location: {
                center: {lon: 79.96067, lat: 13.11098},
                zoom: 9.43,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-major-label copy',
              opacity: 1,
              duration: 500
              }
              ],
            onChapterExit: []
        },
        {
            id: 'nov24',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'And as seen from this series of overlays, flooding around November 24, 2015, although significant, pales in comparison to the aftermath of December 2, when most of the inner city was submerged. Media reports pointed to bureaucratic delays in opening the sluice gates of the 3645-million-cubic-feet-large Chembarambakkam Reservoir—one of the four main rain-fed reservoirs that supply the city with water—as one of the key factors that caused further flooding.[2]',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.10,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'flooded-nov',
                opacity: 0.4,
                duration: 2000
                }
                ],
            onChapterExit: [
                {
                layer: 'flooded-nov',
                opacity: 0
                }
            ]
            },
        {
            id: 'dec02',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The large, uncontrolled, volume of water that needed to be released to prevent a breach of the lake walls, was routed through the Adyar river—one of the three rivers that drain the region—which then overflowed its banks into the upscale neighbourhoods and informal settlements that lined its shores. The diagnosis was clear: too much water had been released in too short a period. Yet, despite widespread destruction, the floods were written off as a once-in-century incident, that could hardly become the barometer against which the city’s planning authorities could be judged. After all, as the official line sought establish, little could be done about the vagaries of the climate or a particularly destructive El Niño.',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.20,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'flooded-dec',
                opacity: 0.7,
                duration: 2000
                }
            ],
            onChapterExit: []
            },
            {
                id: 'marker-flood',
                alignment: 'left',
                hidden: true,
                title: '',
                image: '',
                description: '',
                location: {
                    center: [80.21642, 13.00229],
                    zoom: 12.32,
                    pitch: 8.50,
                    bearing: 0
                },
                markers: [
                    {
                        latLong: [ 80.18591, 13.02114],
                        text: 'At MIOT Hospital, patients died after power and oxygen supplies failed.',
                        imagePath: '',
                    },
                    {
                        latLong: [80.17247, 12.99271],
                        text: 'Some parts of the Chennai International Airport were reported to be under 7 feet of water.',
                        imagePath: '',
                    },
                    {
                        latLong: [80.22973, 13.01425],
                        text: 'Flood waters flowed down Sardar Patel Road into Saidapet and adjoining areas.',
                        imagePath: '',
                    }
                ],
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [
                  {
                  layer: 'settlement-subdivision-label',
                  opacity: 1,
                  duration: 500
                  }
                ],
                onChapterExit: [
                  {
                  layer: 'settlement-subdivision-label',
                  opacity: 0,
                  },
                ]
            },
        {
            id: 'drought',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://api.time.com/wp-content/uploads/2019/06/india-chennai-water-crisis.jpg',
            description: 'Nevertheless, cyclical flood and drought years in the city have become increasingly common. Paradoxically, the succeeding years after 2015—2016,2017 and 2018—have all been drought-ridden, and in 2019, Chennai became one of the first cities in the world to run out of water—trucking in 10 million litres a day to hydrate its population.  By July 2020, the city had experienced 200 days without a drop of rain. Amid the crisis, the Chennai Metropolitan Water Supply and Sewerage Board (CMWSSB) was rumoured to have decided to bring in water from as far away as Jolarpettai, a border district in southern Karnataka and water meant for Vellore sourced from the Mettur drinking water project was to be diverted to Chennai city.[3] Therefore, despite the even urbanisation and infrastructure development within Tamil Nadu-relative to other states-the issue of water scarcity reinforces the city’s centralising tendency as the state’s main metropolitan region, rendering lands beyond the urban boundary a hinterland.',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.20,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'settlement-major-label copy',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'production',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51254946976_7b54dd46dc_b.jpg',
            description: '',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.30,
                pitch: 8.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ecocrisis',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://ascelibrary.org/cms/asset/c1fde460-981a-4b56-a38e-b090dcaa2229/figure1.gif',
            description: 'While the reasons for current Chennai’s ecological crisis are complex, they can at least partially be explained by its geographic location as a port city, served by coastal aquifers that hold fresh water and saltwater in a fragile balance. To maintain aquifer water-levels, groundwater extraction must be balanced with natural recharge. And during the annual cyclone season that unfailingly occurs in last quarter of the year, storm surge increases saltwater intrusion into the mainland. ',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.30,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'settlement-major-label copy',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'historic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51253710636_290537d11d_b.jpg',
            description: 'Yet historically, Madras comprising Fort St. George or “White Town” and 16 neighbouring native villages, has been depicted as water-rich in colonial maps. In a heavily rain-dependant agrarian region, the Tamil countryside relied on artificially engineered system of tank bunds and ponds (ery’s), strategically located in low-lying regions. Irrigation canals or ‘anicuts’ connected water reservoirs to the paddy fields. One of the first available maps of the settlement: The Environs of Madras (1814)[4]—undertaken by the Military institution of Madras as part of the "Survey of the Carnatic" during one of the first spurts of explosive commercial growth in the region—shows a landscape dotted liberally with waterbodies, serviced by an intricate indigenous network of ponds, tanks, and erys.',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.20,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                layer: 'settlement-major-label copy',
                opacity: 0
                }
            ]
        },
        {
            id: 'famine',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51254450079_b345e1d20f_b.jpg',
            description: 'The intense drought of 1876-78 led to massive crop failure across the Deccan Plateau . Despite starvation and rising mortality, regular export of grain by the colonial government continued and the Famine Commissioner, Richard Temple, insisted upon rationed quantities of relief in order to prevent dependency. ‘Relief’ was offered to the able-bodied in the form of labour in public works, in return for a daily pound of grain and 1 anna.[5] So when, Madras ran out of water in 1876, implementation of a comprehensive water management plan was undertaken as ‘relief works’—resulting in the construction of Red Hills reservoir and the expansion of the Buckingham Canal (built 1806; 1877-78)—to ensure uninterrupted supply to the burgeoning settlement. John G. Bartholomew’s 1909 map of Madras , shows the addition of new colonial water infrastructure to the existing urban landscape.[6]',
            location: {
                center: {lon: 80.22957, lat: 13.04266},
                zoom: 10.20,
                pitch: 8.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                layer: 'settlement-major-label copy',
                opacity: 0
                }
            ]
        },
        {
            id: 'sprawl',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'But overall, while the estuarine landscape of Chennai could, historically, absorb yearly environmental shocks, relying on extant wetlands and tanks to provide water, the rapid growth of the city has made this impossible. An article in The Hindu, a popular news daily, pointed out that overexploitation of ground water had caused seawater intrusion into the mainland to have increased, from just 4km in 1969 to 18km in 2021.[7]',
            location: {
                center: {lon: 80.26247, lat: 13.05572},
                zoom: 10.46,
                pitch: 46.50,
                bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '1975-chennai-sriperumbudur-bu-2e461a',
                opacity: 1,
                duration: 500
               },
               {
               layer: '1975-1990-chennai-sriperumbud-0e6xyh',
               opacity: 1,
               duration: 1500
              },
              {
              layer: '1990-2000-chennai-sriperumbud-15c5qx',
              opacity: 1,
              duration: 2500
             },
              {
              layer: '2000-2014-chennai-sriperumbud-az6kcy',
              opacity: 1,
              duration: 3500
             }
            ],
            onChapterExit: [
              {
              layer: '1975-chennai-sriperumbudur-bu-2e461a',
              opacity: 0,
             },
             {
             layer: '1975-1990-chennai-sriperumbud-0e6xyh',
             opacity: 0,
            },
            {
            layer: '1990-2000-chennai-sriperumbud-15c5qx',
            opacity: 0,
           },
            {
            layer: '2000-2014-chennai-sriperumbud-az6kcy',
            opacity: 0,
           }
            ]
        },
        {
            id: 'marker-missing',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: {lon: 80.26247, lat: 13.05572},
              zoom: 10.46,
              pitch: 46.50,
              bearing: -16.00
            },
            markers: [
                {
                    latLong: [80.23989, 13.04747],
                    text: 'The 6 km, boomerang-shaped Long Tank stretched from Mylapore Tank in the south to Nungambakkam Tank in the north-west. In 1923, it was subsumed for the development of the Mambalam Housing Scheme and the eventual growth of Thiagaraya-Nagar.[8]',
                    imagePath: '',
                },
                {
                    latLong: [80.24995, 13.11627],
                    text: 'Only traces of the Vyasarpadi Tank in North Chennai could be seen in the Survey of India map (1970) [9]. It now lies under Dr Ambedkar Government Arts College and contiguous neighbourhoods.',
                    imagePath: '',
                },
                {
                    latLong: [80.21269, 12.98828],
                    text: 'One of the most vulnerable neighbourhoods to flooding, only a sliver of Velacherry lake is still extant.',
                    imagePath: '',
                },
                {
                    latLong: [80.20070, 12.98347],
                    text: 'Meanwhile, in neighbouring Adambakkam, the twin lakes evident in Survey of India map, 1970, is no longer visible.',
                    imagePath: '',
                },
                {
                    latLong: [80.24307, 13.01313],
                    text: 'Adjacent to a bend in the Adyar River, the Katteri Tank was reclaimed for the construction of the Tamil Nadu Science and Technology Centre and the TNEB Office in Taramani.',
                    imagePath: '',
                },
                {
                    latLong: [80.24799, 13.13404],
                    text: 'Continuing the tradition of enclosing water bodies, begun in the 1920s, in order to gain land for public infrastructure, Kodungaiyur Lake disappeared sometime after 1970-giving way to Muthamizh Nagar public housing.',
                    imagePath: '',
                },
                {
                    latLong: [80.20322, 13.10854],
                    text: 'Similarly, SIDCO housing developed on the erstwhile-Konnur lakebed in Villivakkam continue to be inundated every monsoon.',
                    imagePath: '',
                }
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
            },
            {
            layer: 'settlement-major-label copy',
            opacity: 1,
            duration: 500
            }
            ],
            onChapterExit: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 0,
            },
            {
            layer: 'settlement-major-label copy',
            opacity: 1,
            }
            ]
        },
        {
            id: 'Waterbodies',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Today, although the city is presently drained by three rivers: the Adyar, the Cooum and the Kosasthalaiyar, five wetlands including the once-50-hectare Pallikaranai marsh, and four reservoirs—path dependency produced by colonial water-management schemes and planning approaches from the 1920s—that relied on centralized supply, rather than local sources— continues to ensure that the city moves further and further into the hinterland in search of water, while increasing urban densification ensures encroachment upon waterbodies and wetlands that lie at its core. Furthermore, many of the currently extant wetlands and rivers are steadily being appropriated for municipal landfill sites or have become dumping grounds for raw sewage, causing backflow and flooding during periods of high-tide or storm surge.',
            location: {
                center: {lon: 80.26247, lat: 13.05572},
                zoom: 10.40,
                pitch: 46.50,
                bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'rivers-blue',
                opacity: 1,
                duration: 2500
               },
               {
               layer: 'rs',
               opacity: 1,
               duration: 2500
              },
              {
              layer: 'reservoirs',
              opacity: 1,
              duration: 2500
             }
            ],
            onChapterExit: [
                {
                layer: 'rivers-blue',
                opacity: 0
               },
               {
               layer: 'rs',
               opacity: 0,
              },
              {
              layer: 'reservoirs',
              opacity: 0,
             }
            ]
        },
        {
            id: 'marker-bodies',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: {lon: 80.26247, lat: 13.05572},
              zoom: 10.46,
              pitch: 46.50,
              bearing: -16.00
            },
            markers: [
                {
                    latLong: [80.11165, 12.96716],
                    text: 'The Adyar originates from a tank near Manimangalam, while a tributary at Thirumudivakkam connects Chembarambakkam tank to the river.',
                    imagePath: '',
                },
                {
                    latLong: [80.05758, 13.00722],
                    text: 'One of the first artificial lakes in the region, Chembarambakkam dates back to the Chola period (1013CE) and was once known as Puliyur Kottam',
                    imagePath: '',
                },
                {
                    latLong: [80.17263, 13.15706],
                    text: 'In 1876, when Madras first ran out of water, the Puzhal ery was expanded colonial government, renamed Red Hills Reservoir and connected to the city.[9]',
                    imagePath: '',
                },
                {
                    latLong: [80.17263, 13.15706],
                    text: 'Later, in 1877 as part of a comprehensive water management scheme for the city, Sholavaram Lake was constructed.',
                    imagePath: '',
                },
                {
                    latLong: [79.85922, 13.18311],
                    text: 'Built in 1944, the Poondi Reservoir absorbs surplus water from the Kosathalaiyar river.',
                    imagePath: '',
                },
                {
                    latLong: [80.29897, 13.20659],
                    text: 'Spanning 136km the Kosasthalaiyar, irrigates the fertile agrarian districts of Vellore, Chitoor, North Arcot before reaching Chennai.',
                    imagePath: '',
                }
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 1,
              duration: 500
            },
            {
            layer: 'settlement-major-label copy',
            opacity: 1,
            duration: 500
            }
            ],
            onChapterExit: [
              {
              layer: 'settlement-subdivision-label',
              opacity: 0,
            },
            {
            layer: 'settlement-major-label copy',
            opacity: 0,
            }
            ]
        },
        {
            id: 'governance',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://live.staticflickr.com/65535/51255138053_414e8f4ec4_b.jpg',
            description: '',
            location: {
              center: {lon: 80.26247, lat: 13.05572},
              zoom: 10.46,
              pitch: 46.50,
              bearing: -16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
