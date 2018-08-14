class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[0],
      videoData: exampleVideoData,
      searchOptions: {
        key: window.YOUTUBE_API_KEY,
        query: $('#search').val(),
        max: 5
      }
    };
    
    
    this.passVideoData = this.passVideoData.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
  }
  
  passVideoData() {
    this.setState({
      searchOptions: {
        key: window.YOUTUBE_API_KEY,
        query: $('#search').val(),
        max: 5
      },
    });
    searchYouTube(this.state.searchOptions, (data) => this.setState({//window.searchyoutube?
      videoData: data //morespecific? htis.state.vidoedate?
    })).bind(this);//using bind correctly?
    console.log(videoData);
  }
  
  onVideoClick(props) {
    this.setState({
      currentVideo: props.video
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><em>SEARCH: </em> <searchYouTube search={this.state.searchOptions} callback={this.onVideoClick} /><input type="text" id="search"/><input type="submit" onClick={() => this.passVideoData()}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em><VideoList videos={this.state.videoData} changeVid={this.onVideoClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// {
//   key: window.YOUTUBE_API_KEY,
//   query: 'react',
//   max: 5
// }

window.App = App;

ReactDOM.render(<App />, document.getElementById("app"));