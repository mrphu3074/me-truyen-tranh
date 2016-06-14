import _, {map, range} from 'lodash';
import uuid from 'uuid';
import React, {Component} from 'react';
import { Image, Dimensions, Navigator, ScrollView, BackAndroid } from 'react-native';
import {
	Container,
	Header,
	Footer,
	Content,
	Title,
	View,
	Text,
	Card,
	CardItem,
	Icon,
	H3,
	Button,
} from 'native-base';
const Window = Dimensions.get('window');
import Carousel from 'react-native-carousel';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


class Home extends Component {
	_onPressItem = () => {
		this.props.navigator.push({key: 'story'})
	}

	render() {
		return (
			<Container>
				<Header>
					<Title>Mê Truyện Tranh</Title>
				</Header>
				<Content>
					{map(range(10), (i, key) => (
						<Card key={key} style={{margin: 20, marginBottom: 0}}>
							<CardItem>
								<Image style={{ resizeMode: 'contain', height: 400, padding: 1, width: Window.width - 40}} source={{uri: 'http://metruyentranh.com/images/covers/fantasista.jpg'}} />
							</CardItem>

					<CardItem>
						<Button transparent onPress={this._onPressItem} style={{padding: 0}}><H3>FANTASISTA</H3></Button>
						<Text>Cầu thủ trong mơ - Vũ điệu trên sân cỏ</Text>
						<Text>Tác giả: Kusaba Michiteru</Text>
						<Text style={styles.desc}>Đây là bộ truyện tranh về bóng đá nổi tiếng! Chắc hẳn các fan của môn thể thao vua đều biết, và nay truyện đã được edit lại hoàn toàn mới với chất lượng tuyệt đẹp! ^^</Text>
					</CardItem>
						</Card>
					))}
				</Content>
			</Container>
		);
	}
}


class Story extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		BackAndroid.addEventListener('hardwareBackPress', function () {
			props.navigator.pop();
			return true;
		});
	}

	_onPressChapter = () => {
		this.props.navigator.push({key: 'details'});
	}

	render() {
		return (
			<ParallaxScrollView
				backgroundColor="blue"
				contentBackgroundColor="pink"
				parallaxHeaderHeight={300}
				renderBackground={() => (
					<Image source={{uri: "http://metruyentranh.com/images/covers/dung-si-hesman.jpg"}} resizeMode="cover" style={{width: Window.width, height: 300}} />
				)}
				renderForeground={() => (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
       		<View
       			style={{
       				backgroundColor: 'rgba(0,0,0,0.5)',
       				height: 40,
       				borderRadius: 20,
       				alignItems: 'center',
       				justifyContent: 'center',
       				margin: 10,
       				paddingLeft: 15,
       				paddingRight: 15
						}}
					>
       			<Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Dũng Sĩ Hesman!</Text>
					</View>
        </View>
      )}>
				<View style={{ height: 1000, backgroundColor: '#fff' }}>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 159 - gã khổng lồ vui tính (hết)</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 158 - vòng vây tội ác</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 157 - hiệp sỹ bạch kim</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 156 - sa lầy ở </Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 155 - cơn giận của thần núi</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 154 - xông vào giông bão</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 153 - phiêu lưu trong lòng đất</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 152 - chiếc áo điện quang</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 151 - người nguyên tử</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 150 - vụ mưu sát không thành</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 149 - quái nhân bất trị</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 148 - biệt đội khủng bố</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 147 - tên sát nhân giấu mặt</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 146 - đám mây bí hiểm</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 145 - dòng máu </Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 144 - sự hy sinh cao cả</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 143 - cơn bão chết người</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 142 - vụ mất tích bí ẩn</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 141 - kho tàng dưới đáy biển</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 140 - máy tính kỳ dị</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 139 - sức lực thần bí</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 138 - người hai </Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 137 - mũi tên thần</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 136 - mặt nạ muôn hình</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 135 - bão lửa kinh hoàng</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 134 - bác học quái dị</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 133 - chiến binh thép</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 132 - đòn sấm sét</Button>
					</View>
					<View style={{backgroundColor: '#eee'}}>
						<Button transparent onPress={this._onPressChapter}>Dũng Sĩ Hesman tập 131 - thám tử không </Button>
					</View>
				</View>
			</ParallaxScrollView>
		);
	}
}



const IMGS = ["http://i.imgur.com/zWDGD.jpg?imgmax=3000", "http://i.imgur.com/3V4Ce.jpg?imgmax=3000", "http://i.imgur.com/OjlkT.jpg?imgmax=3000", "http://i.imgur.com/1hzMU.jpg?imgmax=3000", "http://i.imgur.com/6mmkz.jpg?imgmax=3000", "http://i.imgur.com/dXCvz.jpg?imgmax=3000", "http://i.imgur.com/mSLFQ.jpg?imgmax=3000", "http://i.imgur.com/r5rGK.jpg?imgmax=3000", "http://i.imgur.com/BetUF.jpg?imgmax=3000", "http://i.imgur.com/WovB2.jpg?imgmax=3000", "http://i.imgur.com/CfHQQ.jpg?imgmax=3000", "http://i.imgur.com/CuRTO.jpg?imgmax=3000", "http://i.imgur.com/rDA3F.jpg?imgmax=3000", "http://i.imgur.com/wHhVc.jpg?imgmax=3000", "http://i.imgur.com/XI4uA.jpg?imgmax=3000", "http://i.imgur.com/elNi4.jpg?imgmax=3000", "http://i.imgur.com/8wQxb.jpg?imgmax=3000", "http://i.imgur.com/Vbzro.jpg?imgmax=3000", "http://i.imgur.com/OwwMf.jpg?imgmax=3000", "http://i.imgur.com/on03n.jpg?imgmax=3000", "http://i.imgur.com/prz5M.jpg?imgmax=3000", "http://i.imgur.com/uTavo.jpg?imgmax=3000", "http://i.imgur.com/JAbGg.jpg?imgmax=3000", "http://i.imgur.com/hKq9G.jpg?imgmax=3000", "http://i.imgur.com/WVSrG.jpg?imgmax=3000", "http://i.imgur.com/LA59I.jpg?imgmax=3000", "http://i.imgur.com/dOYmd.jpg?imgmax=3000", "http://i.imgur.com/q9SX1.jpg?imgmax=3000", "http://i.imgur.com/5qKog.jpg?imgmax=3000", "http://i.imgur.com/REp3Q.jpg?imgmax=3000", "http://i.imgur.com/uqUNW.jpg?imgmax=3000", "http://i.imgur.com/LDptR.jpg?imgmax=3000", "http://i.imgur.com/qriD6.jpg?imgmax=3000", "http://i.imgur.com/DW3GH.jpg?imgmax=3000", "http://i.imgur.com/8zpkg.jpg?imgmax=3000", "http://i.imgur.com/pwrSr.jpg?imgmax=3000", "http://i.imgur.com/nD1ke.jpg?imgmax=3000", "http://i.imgur.com/2W8b7.jpg?imgmax=3000"];
class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			initialPage: 0,
			currentPage: 0,
			canShowImages: IMGS.slice(0, 5)
		};

		BackAndroid.addEventListener('hardwareBackPress', function() {
			props.navigator.pop();
			return true;
		});
	}

	_onPageChange = currentPage => {
		let fromPage = currentPage - 2;
		if(fromPage < 0) fromPage = 0;
		let toPage = 5 + fromPage;

		this.setState({
			currentPage,
			canShowImages: IMGS.slice(fromPage, toPage)
		});

	}

	render() {
		return (
			<MainReader
				width={Window.width}
				animate={false}
				hideIndicators={true}
				onPageChange={this._onPageChange}
				initialPage={this.state.initialPage}
				currentPage={this.state.currentPage}
				canShow={this.state.canShowImages}

				images={IMGS}
			/>
		);
	}
}


class MainReader extends Component {
	componentWillReceiveProps(newProps) {

		this.refs.reader.refs.pager.forceUpdate();
	}

	render() {
		const {
			width,
			onPageChange = () => null,
			initialPage = 0,
			currentPage,
			images, canShow
		} = this.props;
		return (
			<Carousel
				ref="reader"
				width={width}
				animate={false}
				hideIndicators={true}
				onPageChange={onPageChange}
				initialPage={initialPage}
			>

				{map(images, (img, key) => {
					var keyId = uuid.v4();
					if(_.indexOf(canShow, img) >= 0) {
						console.log('1')
						return (
							<View key={keyId} style={{width: Window.width, height: Window.height, padding: 4}}>
								<Image source={{uri: img}} style={{width: Window.width - 8, height: Window.height - 8}}/>
							</View>
						)
					} else {
						console.log('2')
						return (<View key={keyId} style={{width: Window.width, height: Window.height, padding: 4}} />)
					}
				})}
			</Carousel>
		);
	}
}


// https://metruyentranh.com/images/covers/fantasista.jpg
class RootApp extends Component {
	_renderScene = (route, navigator) => {
		switch(route.key) {
			case 'story':
				return <Story navigator={navigator} />;

			case 'details':
				return <Details navigator={navigator} />;
			default:
				return <Home navigator={navigator} />;	
		}
		
	}

	render() {
		return (
			<Navigator
				initialRoute={{key: 'home'}}
				renderScene={this._renderScene}
			/>
			
		);
	}
}

const styles = {
	slider: {
		width: Window.width,
		height: 200,
	},
	container: {
		width: Window.width,
		height: 300,
		backgroundColor: '#eee'
	},
	desc: {
		fontSize: 12,
		color: '#777'
	},
	  horizontalScroll: {
    position:'absolute',
  },
  pageInfoBottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  pageInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  pageInfoPill: {
    width: 80,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageInfoText: {
    textAlign: 'center',
  }
}

export default RootApp;