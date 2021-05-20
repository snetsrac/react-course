import React from 'react';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';

const NUMBER_OF_COMMENTS = 3;

const App = () => {
  const comments = [];

  for (let i = 0; i < NUMBER_OF_COMMENTS; i++) {
    comments.push(
      <ApprovalCard key={i.toString()}>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          time={(new Date(faker.time.recent())).toLocaleTimeString('en', { timeStyle: 'short' })}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    );
  }

  return (
    <div className="ui container comments">
      {comments}
    </div>
  );
};

export default App;
