export type ColorSettings = {
    black: Color;
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    magenta: Color;
    cyan: Color;
    white: Color;
};

export type Effect = {
    bright: Color;
    dim: Color;
    italic: Color;
    underscore: Color;
    blink: Color;
};

export type TextOption = {
    font?: keyof ColorSettings;
    background?: keyof ColorSettings;
    effects?: [keyof Effect];
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
    link?: string;
};

type Color = string;

export const Reset = '\x1b[0m';

export const effects: Effect = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

export const fontColors: ColorSettings = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const backgroundColors: ColorSettings = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

export type ColorArray = {
    black: keyof ColorSettings;
    red: keyof ColorSettings;
    green: keyof ColorSettings;
    yellow: keyof ColorSettings;
    blue: keyof ColorSettings;
    magenta: keyof ColorSettings;
    cyan: keyof ColorSettings;
    white: keyof ColorSettings;
};

export const contrast: ColorArray = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
