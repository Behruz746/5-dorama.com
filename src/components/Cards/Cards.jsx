import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";

import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => {
  const arr = [1, 2];
  return (
    <>
      {arr.map(() => {
        return (
          <ContentLoader
            key={uuidv4()}
            speed={2}
            width={162}
            height={347}
            viewBox="0 0 162 347"
            backgroundColor="#17212BFF"
            foregroundColor="#768B9EFF"
            {...props}
          >
            <rect x="0" y="0" rx="10" ry="10" width="162" height="300" />
            <rect x="0" y="310" rx="3" ry="3" width="128" height="8" />
            <rect x="0" y="323" rx="3" ry="3" width="93" height="8" />
          </ContentLoader>
        );
      })}
    </>
  );
};

function Cards(data) {
  const { setIsVideoLink, isVideoLink, dataList, isLoad } =
    useContext(AppContext);

  const [isItemBo, setIsItemBo] = useState(false);
  const [dataId, setDataId] = useState(data.id);

  const Svg = () => (
    <svg
      className="card__icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_361_3353)">
        <path
          d="M7.99999 11.5133L10.7667 13.1867C11.2733 13.4933 11.8933 13.04 11.76 12.4667L11.0267 9.31999L13.4733 7.19999C13.92 6.81332 13.68 6.07999 13.0933 6.03332L9.87332 5.75999L8.61332 2.78665C8.38665 2.24665 7.61332 2.24665 7.38665 2.78665L6.12665 5.75332L2.90665 6.02665C2.31999 6.07332 2.07999 6.80665 2.52665 7.19332L4.97332 9.31332L4.23999 12.46C4.10665 13.0333 4.72665 13.4867 5.23332 13.18L7.99999 11.5133Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_361_3353">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  useEffect(() => {
    if (data.material_data && data.material_data.poster_url) {
      setIsItemBo(true);
    } else {
      setIsItemBo(false);
    }
  }, []);

  return (
    <>
      {isLoad ? (
        <>
          {isItemBo ? (
            <div
              className="Card"
              onClick={() => {
                setDataId(data.id);
              }}
            >
              <NavLink
                to={`video/${dataId}`}
                onClick={() => {
                  localStorage.setItem("dataLink", data.link);
                }}
              >
                <div className="card__img">
                  <img
                    className="card__logo"
                    src="https://i.imgur.com/vDh93pz.png"
                    alt="logo"
                  />
                  <div className="card__reting">
                    <Svg />
                    <h4>
                      {data.material_data.mydramalist_rating
                        ? data.material_data.mydramalist_rating
                        : 5.6}
                    </h4>
                  </div>
                  <img
                    className="card__image"
                    src={
                      data.material_data.poster_url
                        ? data.material_data.poster_url
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLxrenfHPaNrSMVtKYmvb19BOBDi2a5Wi3TeTWajnfcf2l_Je8SVUAsUZoU9VEWFVrsg&usqp=CAU"
                    }
                    alt="card image"
                  />
                </div>
                <div className="card__content">
                  <h1 className="card__title">{data.title}</h1>
                  <p>{data.sort}</p>
                </div>
              </NavLink>
            </div>
          ) : (
            <div className="Card" style={{ display: "none" }}>
              null
            </div>
          )}
        </>
      ) : (
        <div className="card--load">
          <MyLoader />
        </div>
      )}
    </>
  );
}

export default Cards;
