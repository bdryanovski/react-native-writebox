import { StyleSheet, Platform } from 'react-native'
/* Setup */
import {
  COLOR_SECONDARY,
  COLOR_BORDER,
  LIGHT_GRAY_FONT_COLOR, 
  LIGHT_FONT_COLOR,
  GRAY_FONT_COLOR,
} from './constants'

const WRITEBOX_MIN_HEIGHT = 60

const INPUT_MIN_HEIGHT = 23

export default StyleSheet.create({
    /* WriteboxLayout */
    contentLayout: {
        flex: 1,
        marginTop: 30
    },

    /* writeBoxContainer */
    writeBoxContainer: {
        height: WRITEBOX_MIN_HEIGHT,
        backgroundColor: COLOR_SECONDARY,
    },
    writeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'nowrap',
    },
    leftBtn: {
        margin: 5
    },
    inputContent: {
        flex: 1
    },
    rightBtn: {
        padding: 4
    },
    submitButton: {
        fontSize: 15,
        marginBottom: 10,
        margin: 5
    },

    activeBtn: {
        color: GRAY_FONT_COLOR
    },

    inactiveBtn: {
        color: LIGHT_FONT_COLOR
    },

    /* WriteboxInput */
    content: {
        borderRadius: 4,
        borderColor: COLOR_BORDER,
        borderWidth: 1,
        marginBottom: 5,
    },
    input: {
        height: INPUT_MIN_HEIGHT,
        color: LIGHT_GRAY_FONT_COLOR,
        fontSize: 13,
        marginLeft: 10,
        marginTop: Platform.select({
            ios: 4,
            android: 0,
        }),
        marginBottom: Platform.select({
            ios: 8,
            android: 3,
        }),
    },
    remainder: {
        flex: .1,
        marginBottom: 8
    },
});