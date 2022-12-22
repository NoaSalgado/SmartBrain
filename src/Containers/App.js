import React, { Component } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../config/configParticles';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import Rank from '../Components/Rank/Rank';
import ImageLinkForm from '../Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../Components/FaceRecognition/FaceRecognition';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      JSON.parse(data).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector('#imageInput');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
    console.log(box);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = (event) => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.input });

    const USER_ID = '';
    const PAT = '';
    const APP_ID = '';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: this.state.input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Key ' + PAT,
      },
      body: raw,
    };

    fetch(
      'https://api.clarifai.com/v2/models/' +
        MODEL_ID +
        '/versions/' +
        MODEL_VERSION_ID +
        '/outputs',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch((error) => console.log('error', error));
  };

  render() {
    const particlesInit = async (main) => {
      await loadFull(main);
    };
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
        <header className="flex justify-between items-center pa3">
          <Logo />
          <Navigation />
        </header>
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
