import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Bookmark, Comment, Dots, Heart, Share} from '../../utils/Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import moment from 'moment';

const Post = ({post}) => {
  const [showComments, setShowComments] = useState(false);

  const date = moment(post.date).startOf('minute').fromNow();

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{borderRadius: 50}}
            width={40}
            height={40}
            source={{uri: post.user.avatar}}
          />
          <Text style={{fontWeight: 600}}>{post.user.name}</Text>
        </View>
        <TouchableOpacity>
          <Dots width="25px" height="25px" />
        </TouchableOpacity>
      </View>
      <FitImage url={post.image} />
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                gap: 5,
              }}>
              <Heart size={20} />
              <Text style={{fontWeight: 600}}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowComments(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                fontWeight: 500,
                gap: 5,
              }}>
              <Comment size={20} />
              <Text style={{fontWeight: 600}}>{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Share size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Bookmark size={25} />
          </TouchableOpacity>
        </View>
        {post.description && (
          <ReadMore
            style={{marginVertical: 5}}
            numberOfLines={2}
            seeLessText="daha az"
            seeLessStyle={{color: '#999'}}
            seeMoreStyle={{color: '#999'}}
            seeMoreText="daha fazla"
            gap={10}>
            {`${post.description}`}
          </ReadMore>
        )}
        (
        <View>
          <Text style={{color: '#999'}}>{date}</Text>
        </View>
        )
      </View>
    </View>
  );
};

export default Post;
