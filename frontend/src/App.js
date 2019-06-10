import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default class App extends React.Component {
  state = {
    newPostTitle: '',
    newPostBody: '',
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await api.get('/posts');

    this.setState({posts})
  }

  handlePostSave = async (e) => {
    e.preventDefault();
    const {data : post} = await api.post('/posts', {title: this.state.newPostTitle, body: this.state.newPostBody});
    this.setState({ posts: [...this.state.posts, post], newPostBody: '', newPostTitle: ''})
  }

  handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);

    this.setState({
      posts : this.state.posts.filter(post => post.id !== id)
    })
  }

  render () {
    return (
      <div className="App">
        <form onSubmit={this.handlePostSave}>
          <input type="input"
                 onChange={e => this.setState({newPostTitle: e.target.value})}
                 value={this.state.newPostTitle}
          />

          <textarea onChange={e => this.setState({newPostBody: e.target.value})}
                    value={this.state.newPostBody}
          />

          <button type="submit">Postar</button>

          <ul>
            {this.state.posts.map( post =>
              (
                <li key={post.id} onClick={() => this.handleDelete(post.id)}> {post.title} </li>
              ))}
          </ul>
        </form>
      </div>
    )
  }
}
