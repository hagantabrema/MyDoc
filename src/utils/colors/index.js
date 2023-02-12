const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    grey3: '#EDEEF0',
    grey4: '#B1B7C2',
    blue1: '#0066CB',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.7)',
    red1: '#E06379'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    text : {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        inactive: mainColors.dark2,
        active: mainColors.green1,
        disable: mainColors.grey4
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1
        },
        disable: {
            background: mainColors.grey3
        }
    },
    border: mainColors.grey2,
    cardLight: mainColors.green2,
    messageInput: mainColors.grey3,
    tertiary: mainColors.blue1,
    loadingBackground: mainColors.black2,
    error: mainColors.red1
}