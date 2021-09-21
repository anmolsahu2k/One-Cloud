import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [copied, setCopied] = useState(false);

  const Media = () => {
    if (fileType === 'audio') {
      return <video style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken', padding: '0 5px 20px 5px' }} controls> <source src={post.filePath} /> </video>

    }
    else if (fileType === 'video') {
      return <video controls> <source src={post.filePath} /> </video>

    }
    else
      return <CardMedia className={classes.media} image={post.filePath || placeholder} title={post.title} />
  }

  const copy = () => {
    navigator.clipboard.writeText(post.filePath);
    setCopied(true)
  }
  const placeholder = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';
  const fileType = post.fileType;
  return (
    <Card className={classes.card}>
      <Media />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={copy}>
          <ShareIcon fontSize="small" />
          {copied ? <Typography variant="body2" color="primary" component="p">Link copied to clipboard</Typography> : ''}

        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
