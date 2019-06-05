import { trigger, transition, style, animate, state } from '@angular/animations';
export let slide = [
    trigger('slide' , [
        transition(':enter' , [
            style({transform: 'translateX(-10px)'}),
            animate('2s')
        ]),
        transition(':leave' , [
            animate('2s', style({transform: 'translateX(-100%)'}))
        ])
    ])
];
export let fade = [
    trigger('fade' , [
        transition('void => *' ,[
            style({ opacity : 0 }),
            animate('2s')
        ]),
        transition('* => void' ,[
            style({ opacity : 0 }),
            animate('2s')
        ])
    ])
];

export let fade2 = [
    state('void' , style({opacity : 0})),
    trigger('fade' , [
        transition(':enter , :leave' ,[
            animate('2s')
        ])
    ])
];