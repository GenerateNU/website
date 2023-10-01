import * as constants from './Constants'

export const dotter = (n_dots, top, spread, start, length, dimensions) => {
    return Array.from({ length: n_dots }).map((_, index) => {
        return ( <
            div style = {
                {
                    top: `${top}%`,
                    left: `${((length - spread) / (n_dots - 1)) * index + start}%`,
                    position: 'absolute',
                    width: `max(${dimensions}vh, ${dimensions}vw)`,
                    height: `max(${dimensions}vh, ${dimensions}vw)`,
                    backgroundColor: constants.YELLOW,
                    borderRadius: '50%'
                }
            }
            />
        )
    })
}