const detectbs5breakpoint = function () {
    const breakPoints = new Map([
        [ '1400px', 'xxl' ],
        [ '1200px', 'xl' ],
        [ '992px', 'lg' ],
        [ '768px', 'md' ],
        [ '576px', 'sm' ],
        [ '0px', 'xs' ],
    ])
    for (const breakPoint of breakPoints) {
        const minWidth = breakPoint[0]
        if (window.matchMedia("(min-width: " + minWidth + ")").matches) {
            return breakPoint[1]
        }
    }
}