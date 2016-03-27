/**
 * Aside
 *
 * 侧边栏
 * @author Rabbit <yfhj1990@hotmail.com>
 */

import React, { Component } from 'react'
import style                from './style'
import Header               from 'AsideHeader/index'
import Menu                 from 'Menu/index'

export default class Aside extends Component {
    render() {
	return (
	    <aside style={style}>
		<Header />
		<Menu />
	    </aside>
	)
    }
}
