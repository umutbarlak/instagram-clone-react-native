import React from 'react';
import Post from './Post';
import posts from '../../utils/post';
import {ScrollView} from 'react-native';

const Posts = () => {
  return (
    <ScrollView style={{}}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default Posts;
