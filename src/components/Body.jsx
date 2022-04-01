import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
      <div className="container px-lg-5 py-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <Banner />
        </div>
        <div className="pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
