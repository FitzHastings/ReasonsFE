/* Copyright 2023 Prokhor Kalinin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

export const mockStatus = {
    id: 1,
    identity: 'Forgemaster',
    law: '3',
    wingsStatus: 'operational'
}

export const mockResources = [
    { id: 0, name: '⚡', amount: 29 },
    { id: 1, name: '⚗️', amount: 11 },
    { id: 2, name: '🦠', amount: 3 },
    { id: 3, name: '🖱️', amount: 14 },
    { id: 4, name: '💊', amount: 34 },
    { id: 5, name: '📜', amount: 5 },
    { id: 6, name: '🧪', amount: 17 },
    { id: 7, name: '🐁', amount: 23 },
    { id: 8, name: '💰', amount: 2 },
    { id: 9, name: '💡', amount: 12 }
]

export const mockResearch = [
    {
        name: '⚡ Physics',
        id: 1,
        categories: [
            {
                name: 'TL8',
                id: 1,
                technologies: [
                    {
                        name: 'Test Tech 1',
                        id: 1,
                        status: 'available',
                    },
                    {
                        name: 'Test Tech 2',
                        id: 2,
                        status: 'available',
                    },
                    {
                        name: 'Test Tech 3',
                        id: 1,
                        status: 'researching',
                    }
                ]
            },
            {
                name: 'TL9',
                id: 2,
                technologies: [
                    {
                        name: 'Test Tech 4',
                        id: 4,
                        status: 'locked',
                    },
                    {
                        name: 'Test Tech 5',
                        id: 5,
                        status: 'available'
                    }
                ]
            },
            {
                name: 'TL10',
                id: 3,
                technologies: [
                    {
                        name: 'Test Tech 6',
                        id: 6,
                        status: 'available'
                    }
                ]
            },
            {
                name: 'TL11',
                id: 8,
                technologies: [
                    {
                        name: 'Test Tech ',
                        id: 11,
                        status: 'available'
                    },
                    {
                        name: 'Test Tech ',
                        id: 12,
                        status: 'available'
                    },
                    {
                        name: 'Test Tech ',
                        id: 13,
                        status: 'available'
                    },                    {
                        name: 'Test Tech ',
                        id: 14,
                        status: 'available'
                    }

                ]
            }
        ]
    },
    {
        name: '# Chemistry',
        id: 2,
        categories: [
            {
                name: 'TL8',
                id: 4,
                technologies: [
                    {
                        name: 'Test Tech 7',
                        id: 7,
                        status: 'available'
                    }
                ]
            }
        ]
    },
    {
        name: '# Great Bibas',
        id: 3,
        categories: [
            {
                name: 'TL8',
                id: 5,
                technologies: [
                    {
                        name: 'Test Tech 8',
                        id: 8,
                        status: 'available'
                    }
                ]
            }
        ]
    },
    {
        name: '# Chemistry',
        id: 4,
        categories: [
            {
                name: 'TL8',
                id: 6,
                technologies: [
                    {
                        name: 'Test Tech 8',
                        id: 9,
                        status: 'available'
                    }
                ]
            }
        ]
    },
    {
        name: '# Chemistry',
        id: 5,
        categories: [
            {
                name: 'TL8',
                id: 7,
                technologies: [
                    {
                        name: 'Test Tech 7',
                        id: 10,
                        status: 'available'
                    }
                ]
            }
        ]
    }
]
