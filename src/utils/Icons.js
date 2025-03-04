import {Image} from 'react-native';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Logo = () => {
  return <Image source={require('../assets/logo.png')} />;
};

const Home = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home.png')}
    />
  );
};

const HomeField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home-field.png')}
    />
  );
};

const Search = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search.png')}
    />
  );
};

const SearchField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search-field.png')}
    />
  );
};

const Reel = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel.png')}
    />
  );
};

const ReelField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel-field.png')}
    />
  );
};

const Shop = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop.png')}
    />
  );
};

const ShopField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop-field.png')}
    />
  );
};

const Plus = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/plus.png')}
    />
  );
};

const Heart = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/heart.png')}
    />
  );
};

const Messenger = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/messenger.png')}
    />
  );
};

const Dots = props => {
  return (
    <Svg
      fill="#000000"
      width={'100px'}
      height={'500px'}
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M156,128a28,28,0,1,1-28-28A28.02769,28.02769,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,208,100Z" />
    </Svg>
  );
};

const Bookmark = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/bookmark.png')}
    />
  );
};

const Comment = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/comment.png')}
    />
  );
};

const Share = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/share.png')}
    />
  );
};

const Dropdown = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/dropdown.png')}
    />
  );
};

const BurgerMenu = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/burger.png')}
    />
  );
};

export {
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Plus,
  Heart,
  Messenger,
  Dots,
  Bookmark,
  Comment,
  Share,
  Dropdown,
  BurgerMenu,
};
