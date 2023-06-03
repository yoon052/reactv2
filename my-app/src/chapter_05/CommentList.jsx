import React from 'react';
import Comment from './Comment';

function CommentList(props){
    return(
        <div>
            <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."} />
        </div>
    );
}

export default CommentList;

