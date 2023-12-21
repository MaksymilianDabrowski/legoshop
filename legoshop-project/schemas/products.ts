export default {
    name: 'product',
    type: 'document',
    title: 'Produkty wystawione na stronie', // Nazwać oficjalnie w późniejszym etapie

    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nazwa produktu', 
        },
        {
            name: 'images',
            type: 'array',
            title: 'Zdjęcia', 
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'catalog',
            type: 'string',
            title: 'Numer katalogowy produktu',
            options: {
                source: 'name',
                maxLength: 7,
            }
        },
        {
            name: 'pieces',
            type: 'number',
            title: 'Ilość elementów',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Opis produktu',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 50, // zobaczymy czy wystarczy
            }
        },
        {
            name: 'price',
            title: 'Cena',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Kategoria',
            type: 'reference',
            to: [{
                type: 'category',
            }],
        },
        {
            name: 'sale',
            title: 'Przecena produktu',
            type: 'string',
        },
    ],
}