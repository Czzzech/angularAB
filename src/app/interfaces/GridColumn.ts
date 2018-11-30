export interface GridColumn{
    key: string,
    header: {
        title: string
    };
    content: {
        component: any
    };
    show: boolean;
}
