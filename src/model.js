import image from './assets/image.png';
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from './classes/blocks';

export const model = [
    new TitleBlock(
        'Constructor of sites on JS',
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }),
    new ImageBlock(
        image,
        {
            tag: 'h2',
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'description'
        }),
    new ColumnsBlock(
        [
            'Example column 1',
            'Example column 2',
            'Example column 3'
        ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }),
    new TextBlock(
        'here we go with some text',
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        })
];
