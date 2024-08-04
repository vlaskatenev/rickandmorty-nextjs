// Замоканый компонент вместо svg, так как svg тестировать не будем
import React from 'react'

function jestEmptyComponent() {
    return <div />
}

export default jestEmptyComponent
