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
    
    // this.passVideoData = this.passVideoData.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
  
  }
  
  // passVideoData() {
  //   console.log(this.state.searchOptions);
  
  //   this.props.search(this.state.searchOptions, (data) => this.setState({
  //     videoData: data
  //   }));
  // }
  
  getYouTubeVideos(query) {
    var opt = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };
    
    this.props.search(opt, (videos) => 
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
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
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>Video List</em> <VideoList videos={this.state.videoData} changeVid={this.onVideoClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;
ReactDOM.render(<App search={window.searchYouTube}/>, document.getElementById("app"));