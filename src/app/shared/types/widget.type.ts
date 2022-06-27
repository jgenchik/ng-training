export interface NewWidget {
    id?: number;
    name: string;
    description?: string;
    price: number;
    color: 'BLUE' | 'RED' | 'GREEN';
}

export interface Widget extends NewWidget {
    id: number;
}
