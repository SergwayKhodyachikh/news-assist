import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineStar, AiOutlineEye } from 'react-icons/ai';
import _ from 'lodash';
const Home = props => {
  return (
    <Fragment>
      <div className="h-screen flex-1 flex flex-col bg-red-500 p-5">
        <div className="bg-orange-100 p-2 flex-1 ">
          <h1 className="flex  justify-start items-center font-semibold text-lg">
            <AiOutlineClockCircle className="mr-2 text-xl" />{' '}
            <span>Recently Viewed</span>
          </h1>
          <div
            // style={{width:'95%'}}
            className="flex w-64 p-2 overflow-x-scroll"
          >
            {_.times(50, num => (
              <div
                key={num}
                className="w-40 h-20 rounded bg-orange-600 p-2 mr-4"
              >
                <h1 className="font-bold">Project</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-100 p-2 flex-1 ">
          <h1 className="flex  justify-start items-center font-semibold text-lg">
            <AiOutlineStar className="mr-2 text-xl" /> <span>Favorites</span>
          </h1>
          <div
            // style={{width:'95%'}}
            className="flex w-64 p-2 overflow-x-scroll"
          >
            {_.times(50, num => (
              <div
                key={num}
                className="w-40 h-20 rounded bg-orange-600 p-2 mr-4"
              >
                <h1 className="font-bold">Project</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-100 p-2 flex-1 ">
          <h1 className="flex  justify-start items-center font-semibold text-lg">
            <AiOutlineEye className="mr-2 text-xl" /> <span>Projects Feeds</span>
          </h1>
          <div
            // style={{width:'95%'}}
            className="flex flex-col h-64 p-2 overflow-x-scroll"
          >
            {_.times(50, num => (
              <div
                key={num}
                className="w-40 h-20 rounded bg-orange-600 p-2 mr-4"
              >
                <h1 className="font-bold">Project</h1>
              </div>
            ))}
          </div>
        </div>
        <div>Title icon:recent notification</div>
        <div>recent visited Favorite projects</div>
        <div>watch feeds</div>
        <div></div>
      </div>
      <div className="flex-1"></div>
    </Fragment>
  );
};

export default Home;
