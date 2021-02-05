export const pageVariants = {
    initial: {
        opacity:0,
        x: "-100%",
        scale: 1
    },
    in : {
        opacity: 1,
        x:0
    },
    out : {
        opacity: 0,
        x: "-100%",
        scale: 1,
    }
}

export const pageTransition = {
    duration: 1,
    type: 'linear',
    // stiffness: 100,
}
