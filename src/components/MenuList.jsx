import React, { Component } from 'react'

class MenuList extends Component {
  state = {
    menuList = null
  }

  componentDidMount() {
    this.getMenuList()
  }

  async getMenuList() {
    let result = await getData();
    this.setState({menuList: result.data.products})
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
export default MenuList
