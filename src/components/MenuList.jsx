import React, { Component } from 'react'
import { getData } from '../modules/menu'

class MenuList extends Component {
  state = {
    menuList: []
  }

  componentDidMount() {
    this.getMenuList()
  }

  async getMenuList() {
    let result = await getData();
    this.setState({menuList: result})
  }

  render() {
    let menu;
    if(this.state.menuList.length > 0) {
      menu = this.state.menuList.map(product => {
        return <div data-cy={'product-' + product.id}>
          <h3>{ product.name }</h3>
          <p>{ product.price }</p>
        </div>
      })
    }
    return (
      <div>
        {menu}
      </div>
    )
  }
}

export default MenuList;
