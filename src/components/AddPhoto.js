import React, { Component } from 'react'

class AddPhoto extends Component {
  state = {
    category: '',
    imageUrl: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = () => {

  }


  render() {
    const { image, category } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='image'>image</label>
          <input type='text' id='image' onChange={this.handleOnChange} value={image} name='image'/>
          <label htmlFor='category'>Category</label>
          <select name='category' onChange={this.handleOnChange} value={category} id='category'>
            <option value=''>--Choose a category--</option>
            <option value='hands'>Hands</option>
            <option value='feet'>Feets</option>
            <option value='face'>Face</option>
            <option value='figure'>Figure</option>
            <option value='other'>Other</option>
          </select>

        </form>
      </div>
    )
  }
}

export default AddPhoto;